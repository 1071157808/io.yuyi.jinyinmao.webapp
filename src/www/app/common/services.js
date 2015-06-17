angular.module('jym.services', [
    'angular-cache'
])
    .service('JYMAuthService', function(JYMCacheService) {
        var service = this;
        var tokenStorage = JYMCacheService.get('authTokenCache');

        service.clearToken = function() {
            tokenStorage.set('auth', '');
        };

        service.getToken = function() {
            return tokenStorage.get('auth') || '';
        };

        service.setToken = function(newToken) {
            if (newToken) {
                tokenStorage.set('auth', newToken);
            }
        };
    })
    .service('JYMCacheService', function(CacheFactory) {
        var service = this;

        CacheFactory('configCache', {
            maxAge: 60 * 60 * 1000,
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

        CacheFactory('productCache', {
            maxAge: 60 * 1000,
            cacheFlushInterval: 60 * 1000,
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
    })
    .service('JYMConfigService', function($http, $q, URLS, JYMCacheService) {
        var service = this;

        function parseConfig(result) {
            if (ionic.Platform.isIOS()) {
                return result.data.ios;
            }

            if (ionic.Platform.isAndroid()) {
                return result.data.android;
            }

            //noinspection JSUnresolvedVariable
            return result.data.web;
        }

        service.getConfig = function() {
            return $http.get(URLS.CONFIG.FETCH, {
                cache: JYMCacheService.get('configCache')
            })
                .then(parseConfig);
        };

        service.getSlidesConfig = function() {
            var extractSlidersConfig = function(result) {
                return result.slides;
            };

            return service.getConfig().then(extractSlidersConfig);
        }
    })
    .service('JYMProductService', function() {
        var service = this;

        function getSaleProgress(paidAmount, financingSumAmount) {
            if (paidAmount >= financingSumAmount) {
                return 100;
            }

            if (paidAmount >= financingSumAmount * 0.991) {
                return 99;
            }

            return (paidAmount / financingSumAmount).toFixed(0);
        }

        function getSaleStatus(soldOut, startSellTime, endSellTime) {
            // 售罄
            if (soldOut === true || moment(endSellTime) < moment()) {
                return 30;
            }

            // 在售
            if (moment(startSellTime) < moment()) {
                return 20;
            }

            // 待售
            return 10;
        }

        function getInterest(pricipal, _yield, duration) {
            // 返回的金额以 分 为单位
            // 本金的单位为 分
            // 收益率的单位为 万分之一
            return Math.floor(pricipal * _yield * duration / 3600000);
        }

        service.getInterest = getInterest;
        service.getSaleProgress = getSaleProgress;
        service.getSaleStatus = getSaleStatus;

    })
    .service('JYMUtilityService', function($state, $cordovaInAppBrowser) {
        var service = this;

        /**
         * Matcher.
         */

        var matcher = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[:?\d]*)\S*$/;

        /**
         * Loosely validate a URL `string`.
         *
         * @param {String} string
         * @return {Boolean}
         */

        function isUrl(string) {
            return matcher.test(string);
        }

        function open(url) {
            if (service.isUrl(url)) {
                $cordovaInAppBrowser.open(url, '_system');
            } else {
                $state.go(url);
            }
        }

        service.isUrl = isUrl;
        service.open = open;
    });