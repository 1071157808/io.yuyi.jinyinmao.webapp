angular.module('jym.services.config', [])
    .service('ConfigService', function($http, $q, CacheFactory) {
        var service = this;
        var URLS = {
            FETCH: 'data/config.json'
        };

        if(!CacheFactory.get('configCache')){
            CacheFactory('configCache', {
                maxAge: 3 * 1000,
                cacheFlushInterval: 60 * 60 * 1000,
                deleteOnExpire: 'aggressive',
                storageMode: 'localStorage'
            });
        }


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
            return $http.get(URLS.FETCH, {
                cache: CacheFactory.get('configCache')
            }).then(parseConfig);
        };

        service.getSlidersConfig = function() {
            var extractSlidersConfig = function(result) {
                return result.sliders;
            };

            return service.getConfig().then(extractSlidersConfig);
        }
    });