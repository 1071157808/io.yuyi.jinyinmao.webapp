angular.module('jym.services', [
    'ngAnimate',
    'angular-cache',
    'toastr'
])
    .service('JYMAuthService', function(JYMCacheService) {
        var service = this;
        var tokenStorage = JYMCacheService.get('authTokenCache');

        service.clearToken = function() {
            tokenStorage.removeAll()
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

        CacheFactory('configCache', {
            maxAge: 60 * 60 * 1000,
            deleteOnExpire: 'aggressive',
            storageMode: 'localStorage'
        });

        CacheFactory('authTokenCache', {
            maxAge: 365 * 24 * 60 * 60 * 1000,
            deleteOnExpire: 'aggressive',
            storageMode: 'localStorage'
        });

        CacheFactory('productCache', {
            maxAge: 60 * 1000,
            deleteOnExpire: 'aggressive',
            storageMode: 'memory'
        });

        CacheFactory('userCache', {
            maxAge: 30 * 1000,
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
    .service('JYMUtilityService', function($state, $timeout, $ionicHistory, $cordovaInAppBrowser, $cordovaToast, REGEX, toastr) {
        var service = this;

        function goWithDisableBack(to, params, options) {
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $state.go(to, params, options);
        }

        function isUrl(string) {
            return REGEX.URL.test(string);
        }

        function open(url) {
            if (service.isUrl(url)) {
                $cordovaInAppBrowser.open(url, '_system');
            } else {
                $state.go(url);
            }
        }

        function showAlert(text) {
            if (window.plugins && window.plugins.toast) {
                $cordovaToast.showShortBottom(text);
            } else {
                toastr.info(text);
            }
        }

        service.goWithDisableBack = goWithDisableBack;
        service.isUrl = isUrl;
        service.open = open;
        service.showAlert = showAlert;
    });