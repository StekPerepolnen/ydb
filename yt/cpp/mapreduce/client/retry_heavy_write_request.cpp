#include "retry_heavy_write_request.h"

#include "transaction.h"
#include "transaction_pinger.h"

#include <yt/cpp/mapreduce/common/retry_lib.h>
#include <yt/cpp/mapreduce/common/wait_proxy.h>

#include <yt/cpp/mapreduce/interface/config.h>
#include <yt/cpp/mapreduce/interface/raw_client.h>
#include <yt/cpp/mapreduce/interface/tvm.h>

#include <yt/cpp/mapreduce/interface/logging/yt_log.h>

#include <yt/cpp/mapreduce/http/helpers.h>
#include <yt/cpp/mapreduce/http/http_client.h>
#include <yt/cpp/mapreduce/http/requests.h>
#include <yt/cpp/mapreduce/http/retry_request.h>

#include <util/stream/null.h>

namespace NYT {

using ::ToString;

////////////////////////////////////////////////////////////////////////////////

THeavyRequestRetrier::THeavyRequestRetrier(TParameters parameters)
    : Parameters_(std::move(parameters))
    , RequestRetryPolicy_(Parameters_.ClientRetryPolicy->CreatePolicyForGenericRequest())
    , StreamFactory_([] {
        return std::make_unique<TNullInput>();
    })
{
    Retry([] { });
}

THeavyRequestRetrier::~THeavyRequestRetrier() = default;

void THeavyRequestRetrier::Update(THeavyRequestRetrier::TStreamFactory streamFactory)
{
    StreamFactory_ = streamFactory;
    Retry([this] {
        auto stream = StreamFactory_();
        stream->Skip(Attempt_->Offset);
        auto transfered = stream->ReadAll(*Attempt_->Request->GetStream());
        Attempt_->Offset += transfered;
    });
}

void THeavyRequestRetrier::Finish()
{
    Retry([this] {
        Attempt_->Request->Finish()->GetResponse();
        Attempt_->Transaction->Commit();
        Attempt_.reset();
    });
}

void THeavyRequestRetrier::Retry(const std::function<void()> &function)
{
    while (true) {
        try {
            if (!Attempt_) {
                TryStartAttempt();
            }
            function();
            return;
        } catch (const std::exception& ex) {
            YT_LOG_ERROR("RSP %v - %v failed",
                Attempt_->RequestId,
                RequestRetryPolicy_->GetAttemptDescription());
            Attempt_.reset();

            TMaybe<TDuration> backoffDuration;
            if (const auto *errorResponse = dynamic_cast<const TErrorResponse *>(&ex)) {
                if (!IsRetriable(*errorResponse)) {
                    throw;
                }
                backoffDuration = RequestRetryPolicy_->OnRetriableError(*errorResponse);
            } else {
                if (!IsRetriable(ex)) {
                    throw;
                }
                backoffDuration = RequestRetryPolicy_->OnGenericError(ex);
            }

            if (!backoffDuration) {
                throw;
            }
            NDetail::TWaitProxy::Get()->Sleep(*backoffDuration);
            RequestRetryPolicy_->NotifyNewAttempt();
        }
    }
}

void THeavyRequestRetrier::TryStartAttempt()
{
    Attempt_ = std::make_unique<TAttempt>();
    Attempt_->Transaction = std::make_unique<TPingableTransaction>(
        Parameters_.RawClientPtr,
        Parameters_.ClientRetryPolicy, Parameters_.Context,
        Parameters_.TransactionId,
        Parameters_.TransactionPinger->GetChildTxPinger(),
        TStartTransactionOptions());

    auto header = Parameters_.Header;
    if (Parameters_.Context.ServiceTicketAuth) {
        header.SetServiceTicket(Parameters_.Context.ServiceTicketAuth->Ptr->IssueServiceTicket());
    } else {
        header.SetToken(Parameters_.Context.Token);
    }

    if (Parameters_.Context.ImpersonationUser) {
        header.SetImpersonationUser(*Parameters_.Context.ImpersonationUser);
    }
    auto hostName = GetProxyForHeavyRequest(Parameters_.Context);
    Attempt_->RequestId = CreateGuidAsString();

    UpdateHeaderForProxyIfNeed(hostName, Parameters_.Context, header);

    header.AddTransactionId(Attempt_->Transaction->GetId(), /* overwrite = */ true);
    header.SetRequestCompression(ToString(Parameters_.Context.Config->ContentEncoding));

    Attempt_->Request = Parameters_.Context.HttpClient->StartRequest(
        GetFullUrlForProxy(hostName, Parameters_.Context, header),
        Attempt_->RequestId, header);

    auto stream = StreamFactory_();
    stream->ReadAll(*Attempt_->Request->GetStream());
}

////////////////////////////////////////////////////////////////////////////////

} // namespace NYT
