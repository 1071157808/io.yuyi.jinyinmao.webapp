angular.module('jym.services.config', [
    'jym.services.cache'
])
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
    });