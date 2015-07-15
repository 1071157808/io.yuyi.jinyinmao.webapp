'use strict';
angular.module('jym.services.jinbaoyin', [
    'jym.services'
])
    .service('JinbaoyinService', function($http, URLS, JYMCacheService) {
        var service = this;

        service.buildOrder = function(data) {
            var url = URLS.INVESTING.JBY;

            return $http.post(url, data);
        };

        service.getAgreement = function(productIdentifier, agreementIndex) {
            var url = URLS.JINBAOYIN.AGREEMENT + productIdentifier + '-' + agreementIndex;

            return $http.get(url, {
                cache: JYMCacheService.get('productCache')
            }).then(function(result) {
                return result.data;
            });
        };

        service.getIndex = function() {
            var url = URLS.JINBAOYIN.FETCH;

            return $http.get(url, {
                cache: JYMCacheService.get('productCache')
            }).then(function(result) {
                return result.data;
            });
        };

        service.getInvestingAgreement = function() {
            return service.getIndex()
                .then(function(result) {
                    return service.getAgreement(result.productIdentifier, 2);
                });

        };

        service.getSold = function(productIdentifier) {
            var url = URLS.JINBAOYIN.SOLD + productIdentifier;

            return $http.get(url, {}).then(function(result) {
                return result.data;
            });
        };

        service.getTransferAgreement = function() {
            return service.getIndex()
                .then(function(result) {
                    return service.getAgreement(result.productIdentifier, 1);
                });
        };
    });
