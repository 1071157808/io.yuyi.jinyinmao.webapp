angular.module('jym.services', [
    'angular-cache'
])
    .service('JYMAuthService', function(JYMCacheService) {
        var service = this;
        var tokenStorage = JYMCacheService.get('authTokenCache');

        service.clearToken = function() {
            tokenStorage.put('auth', '');
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
            storageMode: 'memory'
        });

        CacheFactory('productCache', {
            maxAge: 60 * 1000,
            deleteOnExpire: 'aggressive',
            storageMode: 'memory'
        });

        CacheFactory('userCache', {
            maxAge: 10 * 1000,
            deleteOnExpire: 'aggressive',
            storageMode: 'memory'
        });

        service.get = function(cacheName, maxAge) {
            maxAge = maxAge || 60 * 1000;

            if (!CacheFactory.get(cacheName)) {
                CacheFactory(cacheName, {
                    maxAge: maxAge,
                    deleteOnExpire: 'aggressive',
                    storageMode: 'memory'
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
    .service('JYMUtilityService', function($state, $ionicPopup, $timeout, $cordovaInAppBrowser) {
        var service = this;

        function goWithDisableBack(to, params, options) {
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $state.go(to, params, options);
        }

        function isUrl(string) {
            var matcher = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[:?\d]*)\S*$/;
            return matcher.test(string);
        }

        function open(url) {
            if (service.isUrl(url)) {
                $cordovaInAppBrowser.open(url, '_system');
            } else {
                $state.go(url);
            }
        }

        function showAlert(text) {
            var alertPopup = $ionicPopup.alert({
                title: '提示信息',
                template: text
            });

            $timeout(function() {
                alertPopup.close();
            }, 1000);
        }

        service.goWithDisableBack = goWithDisableBack;
        service.isUrl = isUrl;
        service.open = open;
        service.showAlert = showAlert;
    });