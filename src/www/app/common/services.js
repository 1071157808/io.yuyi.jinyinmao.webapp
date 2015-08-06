'use strict';
angular.module('jym.services', [
    'ngAnimate',
    'angular-cache'
])
    .service('JYMAuthService', function(JYMCacheService) {
        var service = this;
        var tokenStorage = JYMCacheService.get('authTokenCache');

        service.clearToken = function() {
            tokenStorage.removeAll();
        };

        service.getToken = function() {
            return tokenStorage.get('auth') || '';
        };

        service.setToken = function(newToken) {
            if (newToken) {
                tokenStorage.put('auth', newToken);
            }
        };
    })
    .service('JYMCacheService', function(CacheFactory) {
        var service = this;

        CacheFactory('authTokenCache', {
            maxAge: 365 * 24 * 60 * 60 * 1000,
            deleteOnExpire: 'aggressive',
            storageMode: 'localStorage'
        });

        CacheFactory('configCache', {
            maxAge: 15 * 60 * 1000,
            deleteOnExpire: 'aggressive',
            storageMode: 'localStorage'
        });

        CacheFactory('productCache', {
            maxAge: 60 * 1000,
            deleteOnExpire: 'aggressive',
            storageMode: 'memory'
        });

        CacheFactory('userCache', {
            maxAge: 3 * 1000,
            deleteOnExpire: 'aggressive',
            storageMode: 'memory'
        });

        CacheFactory('userInfoCache', {
            maxAge: 5 * 1000,
            deleteOnExpire: 'aggressive',
            storageMode: 'memory'
        });

        service.get = function(cacheName, maxAge, storageMode) {
            maxAge = maxAge || 60 * 1000;
            storageMode = storageMode || 'memory';

            if (!CacheFactory.get(cacheName)) {
                CacheFactory(cacheName, {
                    maxAge: maxAge,
                    deleteOnExpire: 'aggressive',
                    storageMode: storageMode
                });
            }

            return CacheFactory.get(cacheName);
        };

        service.clearAll = function () {
            CacheFactory.clearAll();
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
        };
    })
    .service('JYMTimeService', function() {
        var service = this;

        var now = moment();

        service.getTime = function() {
            return now;
        };

        service.setTime = function(time) {
            now = time;
        };
    })
    .service('JYMUtilityService', function($state, $timeout, $ionicLoading, $ionicHistory, $cordovaInAppBrowser, $cordovaToast, REGEX, JYMCacheService) {
        var service = this;

        service.clearCache = function () {
            JYMCacheService.clearAll();
        };

        service.go = function(to, params, options) {
            $state.go(to, params, options);
        };

        service.goWithDisableBack = function(to, params, options) {
            $ionicHistory.clearHistory();
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $state.go(to, params, options);
        };

        service.isUrl = function(string) {
            return REGEX.URL.test(string);
        };

        service.open = function(url) {
            if (service.isUrl(url)) {
                $cordovaInAppBrowser.open(url, '_system');
            } else {
                $state.go(url);
            }
        };

        service.showAlert = function(text) {
            $ionicLoading.show({
                template: text,
                duration: 3000,
                hideOnStateChange: true
            });
        };
    });
