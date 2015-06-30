angular.module('jym.services.purchase', [
    'jym.services',
    'jym.services.jinbaoyin'
])
    .service('PurchaseService', function($http, JinbaoyinService, JYMUtilityService) {
        var service = this;

        var jbyOrder = {};
        var regularOrder = {};

        service.buildNewJBYOrder = function(amount, productIdentifier) {
            jbyOrder.amount = amount;
            jbyOrder.productIdentifier = productIdentifier;
        };

        service.buildRegularOrder = function(amount, productIdentifier, productCategory) {
            regularOrder.amount = amount;
            regularOrder.productIdentifier = productIdentifier;
            regularOrder.productCategory = productCategory;
        };

        service.clearJBYOrder = function() {
            jbyOrder = {};
        };

        service.clearRegularOrder = function() {
            regularOrder = {};
        };

        service.getNewJBYOrder = function() {
            if(!jbyOrder.amount || !jbyOrder.productIdentifier) {
                JYMUtilityService.goWithDisableBack('jym.jinbaoyin');
            }

            return jbyOrder;
        };

        service.getRegularOrder = function(productCategory) {
            if(!regularOrder.amount || !regularOrder.productIdentifier || regularOrder.productCategory !== productCategory) {
                JYMUtilityService.goWithDisableBack('jym.jinbaoyin');
            }
            return regularOrder;
        };
    });
