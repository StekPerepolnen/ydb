#include "object_processing.h"

#include <yql/essentials/core/sql_types/yql_callable_names.h>

namespace NSQLTranslationV1 {
using namespace NYql;

INode::TPtr TObjectProcessorImpl::BuildKeys() const {
    auto keys = Y("Key");
    keys = L(keys, Q(Y(Q("objectId"), Y("String", BuildQuotedAtom(Pos_, ObjectId_)))));
    keys = L(keys, Q(Y(Q("typeId"), Y("String", BuildQuotedAtom(Pos_, TypeId_)))));
    return keys;
}

TObjectProcessorImpl::TObjectProcessorImpl(TPosition pos, const TString& objectId, const TString& typeId, const TObjectOperatorContext& context)
    : TBase(pos)
    , TObjectOperatorContext(context)
    , ObjectId_(objectId)
    , TypeId_(typeId)
{

}

bool TObjectProcessorImpl::DoInit(TContext& ctx, ISource* src) {
    Y_UNUSED(src);
    Scoped_->UseCluster(ServiceId, Cluster);
    auto options = FillFeatures(BuildOptions());
    auto keys = BuildKeys();

    Add("block", Q(Y(
        Y("let", "sink", Y("DataSink", BuildQuotedAtom(Pos_, ServiceId), Scoped_->WrapCluster(Cluster, ctx))),
        Y("let", "world", Y(TString(WriteName), "world", "sink", keys, Y("Void"), Q(options))),
        Y("return", ctx.PragmaAutoCommit ? Y(TString(CommitName), "world", "sink") : AstNode("world"))
    )));
    return TAstListNode::DoInit(ctx, src);
}

INode::TPtr TCreateObject::FillFeatures(INode::TPtr options) const {
    if (!Features_.empty()) {
        auto features = Y();
        for (auto&& i : Features_) {
            if (i.second.HasNode()) {
                features->Add(Q(Y(BuildQuotedAtom(Pos_, i.first), i.second.Build())));
            } else {
                features->Add(Q(Y(BuildQuotedAtom(Pos_, i.first))));
            }
        }
        options->Add(Q(Y(Q("features"), Q(features))));
    }
    if (!FeaturesToReset_.empty()) {
        auto reset = Y();
        for (const auto& featureName : FeaturesToReset_) {
            reset->Add(BuildQuotedAtom(Pos_, featureName));
        }
        options->Add(Q(Y(Q("resetFeatures"), Q(reset))));
    }
    return options;
}

namespace {

bool InitFeatures(TContext& ctx, ISource* src, const std::map<TString, TDeferredAtom>& features) {
    for (auto& [key, value] : features) {
        if (value.HasNode() && !value.Build()->Init(ctx, src)) {
            return false;
        }
    }
    return true;
}

}

bool TCreateObject::DoInit(TContext& ctx, ISource* src) {
    if (!InitFeatures(ctx, src, Features_)) {
        return false;
    }
    return TObjectProcessorImpl::DoInit(ctx, src);
}

TObjectOperatorContext::TObjectOperatorContext(TScopedStatePtr scoped)
    : Scoped_(scoped)
    , ServiceId(Scoped_->CurrService)
    , Cluster(Scoped_->CurrCluster)
{

}

}
