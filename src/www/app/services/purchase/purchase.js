'use strict';
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
            if (!jbyOrder.amount || jbyOrder.amount <= 0) {
                jbyOrder.amount = 1000;
            }

            if (!jbyOrder.productIdentifier) {
                JYMUtilityService.goWithDisableBack('jym.jinbaoyin');
            }

            return jbyOrder;
        };

        service.getRegularOrder = function(productCategory) {
            if (!regularOrder.amount || regularOrder.amount <= 0) {
                regularOrder.amount = 1000;
            }

            if (regularOrder.productCategory !== productCategory) {
                regularOrder.productCategory = productCategory;
            }

            if (!regularOrder.productIdentifier) {
                if (productCategory === 100000010) {
                    JYMUtilityService.goWithDisableBack('jym.yinpiao');
                } else if (productCategory === 100000020) {
                    JYMUtilityService.goWithDisableBack('jym.shangpiao');
                } else if (productCategory === 100000030) {
                    JYMUtilityService.goWithDisableBack('jym.jinbaoyin');
                } else {
                    JYMUtilityService.goWithDisableBack('jym.zhuanqu');
                }
            }
            return regularOrder;
        };
    });
