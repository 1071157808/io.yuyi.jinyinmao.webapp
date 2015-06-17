angular.module('jym.services.jinbaoyin', [
    'jym.services'
])
    .service('JinbaoyinService', function($http, URLS, JYMCacheService) {
        var service = this;

        service.getIndex = function() {
            return $http.get(URLS.JINBOAYIN.FETCH, {
                cache: JYMCacheService.get('productCache')
            });
        };
    });
