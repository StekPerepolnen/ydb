#pragma once

#include "public.h"

#include <yt/yt/core/misc/cache_config.h>

namespace NYT::NTabletClient {

////////////////////////////////////////////////////////////////////////////////

struct TTableMountCacheConfig
    : public TAsyncExpiringCacheConfig
{
    //! If entry is requested for the first time then allow only client who requested the entry to wait for it.
    bool RejectIfEntryIsRequestedButNotReady;

    TTableMountCacheConfigPtr ApplyDynamic(const TTableMountCacheDynamicConfigPtr& dynamicConfig) const;

    REGISTER_YSON_STRUCT(TTableMountCacheConfig);

    static void Register(TRegistrar registrar);
};

DEFINE_REFCOUNTED_TYPE(TTableMountCacheConfig)

////////////////////////////////////////////////////////////////////////////////

struct TTableMountCacheDynamicConfig
    : public TAsyncExpiringCacheDynamicConfig
{
    std::optional<bool> RejectIfEntryIsRequestedButNotReady;

    REGISTER_YSON_STRUCT(TTableMountCacheDynamicConfig);

    static void Register(TRegistrar registrar);
};

DEFINE_REFCOUNTED_TYPE(TTableMountCacheDynamicConfig)

////////////////////////////////////////////////////////////////////////////////

struct TRemoteDynamicStoreReaderConfig
    : public virtual NYTree::TYsonStruct
{
    TDuration ClientReadTimeout;
    TDuration ServerReadTimeout;
    TDuration ClientWriteTimeout;
    TDuration ServerWriteTimeout;
    i64 MaxRowsPerServerRead;

    ssize_t WindowSize;

    // Testing option.
    double StreamingSubrequestFailureProbability;

    REGISTER_YSON_STRUCT(TRemoteDynamicStoreReaderConfig);

    static void Register(TRegistrar registrar);
};

DEFINE_REFCOUNTED_TYPE(TRemoteDynamicStoreReaderConfig)

////////////////////////////////////////////////////////////////////////////////

struct TRetryingRemoteDynamicStoreReaderConfig
    : public TRemoteDynamicStoreReaderConfig
{
    //! Maximum number of locate requests.
    int RetryCount;

    //! Time to wait between making another locate request.
    TDuration LocateRequestBackoffTime;

    REGISTER_YSON_STRUCT(TRetryingRemoteDynamicStoreReaderConfig);

    static void Register(TRegistrar registrar);
};

DEFINE_REFCOUNTED_TYPE(TRetryingRemoteDynamicStoreReaderConfig)

////////////////////////////////////////////////////////////////////////////////

struct TReplicationCollocationOptions
    : public NYTree::TYsonStruct
{
    std::optional<std::vector<std::string>> PreferredSyncReplicaClusters;

    REGISTER_YSON_STRUCT(TReplicationCollocationOptions);

    static void Register(TRegistrar registrar);
};

DEFINE_REFCOUNTED_TYPE(TReplicationCollocationOptions)

////////////////////////////////////////////////////////////////////////////////

struct TReplicatedTableOptions
    : public TReplicationCollocationOptions
{
    bool EnableReplicatedTableTracker;

    std::optional<int> MaxSyncReplicaCount;
    std::optional<int> MinSyncReplicaCount;

    std::optional<int> MaxSyncQueueReplicaCount;
    std::optional<int> MinSyncQueueReplicaCount;

    TDuration SyncReplicaLagThreshold;

    // TODO(akozhikhov): We probably do not need these in this per-table config.
    TDuration TabletCellBundleNameTtl;
    TDuration RetryOnFailureInterval;

    bool EnablePreloadStateCheck;
    TDuration IncompletePreloadGracePeriod;

    std::tuple<int, int> GetEffectiveMinMaxReplicaCount(ETableReplicaContentType contentType, int replicaCount) const;

    REGISTER_YSON_STRUCT(TReplicatedTableOptions);

    static void Register(TRegistrar registrar);
};

DEFINE_REFCOUNTED_TYPE(TReplicatedTableOptions)

////////////////////////////////////////////////////////////////////////////////

} // namespace NYT::NTabletClient
