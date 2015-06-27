angular.module('jym.services.jinbaoyin', [
    'jym.services'
])
    .service('JinbaoyinService', function($http, URLS, JYMCacheService) {
        var service = this;

        service.buildOrder = function(data) {
            return $http.post(URLS.INVESTING.JBY, data)
        };

        service.getIndex = function() {
            return $http.get(URLS.JINBOAYIN.FETCH, {
                cache: JYMCacheService.get('productCache')
            }).then(function(result) {
                return result.data;
            });
        };

        service.getSold = function(productIdentifier) {
            var url = URLS.JINBOAYIN.SOLD + productIdentifier;

            return $http.get(url, {
            }).then(function(result) {
                return result.data;
            });
        };
    });
