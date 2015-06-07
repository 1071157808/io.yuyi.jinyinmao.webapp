angular.module('jym.services.cache', [
    'angular-cache'
])
    .service('JYMCacheService', function(CacheFactory) {
        var service = this;

        CacheFactory('configCache', {
            //maxAge: 60 * 60 * 1000,
            maxAge: 1000,
            cacheFlushInterval: 60 * 60 * 1000,
            deleteOnExpire: 'aggressive',
            storageMode: 'localStorage'
        });

        CacheFactory('authTokenCache', {
            maxAge: 365 * 24 * 60 * 60 * 1000,
            cacheFlushInterval: 365 * 24 * 60 * 60 * 1000,
            deleteOnExpire: 'aggressive',
            storageMode: 'localStorage'
        });

        service.get = function(cacheName, maxAge) {
            maxAge = maxAge || 60 * 1000;

            if (!CacheFactory.get(cacheName)) {
                CacheFactory(cacheName, {
                    maxAge: maxAge,
                    cacheFlushInterval: 60 * 60 * 1000,
                    deleteOnExpire: 'aggressive',
                    storageMode: 'localStorage'
                });
            }

            return CacheFactory.get(cacheName);
        };
    });