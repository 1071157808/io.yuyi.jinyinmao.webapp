angular.module('jym.services.purchase', [
    'jym.services'
])
    .service('PurchaseService', function($http) {
        var service = this;

        var jbyOrder = {};
        var regularOrder = {};

        function buildNewJBYOrder(amount, productIdentifier) {
            jbyOrder.amount = amount;
            jbyOrder.productIdentifier = productIdentifier;
        }

        function buildRegularJBYOrder(amount, productIdentifier) {
            regularOrder.amount = amount;
            regularOrder.productIdentifier = productIdentifier;
        }

        service.buildNewJBYOrder = buildNewJBYOrder;
        service.buildRegularJBYOrder = buildRegularJBYOrder;
    });
