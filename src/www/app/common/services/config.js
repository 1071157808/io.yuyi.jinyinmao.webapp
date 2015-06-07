angular.module('jym.services.config', [
    'jym.services.cache'
])
    .service('JYMConfigService', function($http, JYMCacheService) {
        var service = this;
        var URLS = {
            FETCH: 'data/config.json'
        };

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
                cache: JYMCacheService.get('configCache')
            }).then(parseConfig);
        };

        service.getSlidersConfig = function() {
            var extractSlidersConfig = function(result) {
                return result.sliders;
            };

            return service.getConfig().then(extractSlidersConfig);
        }
    });