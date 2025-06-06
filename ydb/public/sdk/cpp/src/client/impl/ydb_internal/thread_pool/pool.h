#pragma once

#include <ydb/public/sdk/cpp/src/client/impl/ydb_internal/internal_header.h>

#include <util/thread/pool.h>

#include <memory>

namespace NYdb::inline Dev {

inline std::unique_ptr<IThreadPool> CreateThreadPool(size_t threads) {
    std::unique_ptr<IThreadPool> queue;
    if (threads) {
        queue.reset(new TThreadPool(TThreadPool::TParams().SetBlocking(true).SetCatching(false)));
    } else {
        queue.reset(new TAdaptiveThreadPool());
    }
    return queue;
}

} // namespace NYdb
