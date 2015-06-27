angular.module('jym.services.product', [
    'jym.services'
])
    .service('ProductService', function($http, RESOURCES, URLS, JYMCacheService) {
        var service = this;

        service.checkProductPurchaseStatus = function(getProductInfo, amount) {
            return getProductInfo.then(function(product) {

                var status = service.getSaleStatus(product.soldOut, product.startSellTime, product.endSellTime);
                if (status === 10) {
                    throw RESOURCES.ALERT.PRODUCT.NOT_ON_SALE;
                }

                if (status === 30) {
                    throw RESOURCES.ALERT.PRODUCT.SOLD_OUT;
                }

                if (product.financingSumAmount - product.paidAmount < amount) {
                    throw RESOURCES.ALERT.PRODUCT.SHARE_INSUFFICIENT;
                }

                if (amount % product.unitPrice !== 0) {
                    throw RESOURCES.ALERT.PRODUCT.AMOUNT_INCORRECT;
                }

                return product;
            })
        };

        service.getInterest = function(pricipal, _yield, duration) {
            // 返回的金额以 分 为单位
            // 本金的单位为 分
            // 收益率的单位为 万分之一
            return Math.floor(pricipal * _yield * duration / 3600000);
        };

        service.getSaleProgress = function(paidAmount, financingSumAmount) {
            if (paidAmount >= financingSumAmount) {
                return 100;
            }

            if (paidAmount >= financingSumAmount * 0.991) {
                return 99;
            }

            return (paidAmount / financingSumAmount).toFixed(0);
        };

        service.getSaleStatus = function(soldOut, startSellTime, endSellTime) {
            // 售罄
            if (soldOut === true || moment(endSellTime) < moment()) {
                return 30;
            }

            // 在售
            if (moment(startSellTime) < moment()) {
                return 20;
            }

            // 待售
            return 10;
        };

        service.getShangpiao = function(productIdentifier) {
            var url = URLS.REGULARPRDUCT.INFO + productIdentifier;

            return $http.get(url, {
                cache: JYMCacheService.get('productCache')
            }).then(function(result) {
                return result.data;
            });
        };

        service.getShangpiaoSold = function(productIdentifier) {
            var url = URLS.REGULARPRDUCT.SOLD + productIdentifier;

            return $http.get(url).then(function(result) {
                return result.data;
            });
        };

        service.getShangpiaoPage = function(pageIndex) {
            var url = URLS.REGULARPRDUCT.PAGE + pageIndex + '?categories=100000020';

            return $http.get(url, {
                cache: JYMCacheService.get('productCache')
            }).then(function(result) {
                return result.data;
            });
        };

        service.getValueDateModeText = function(valueDateMode, valueDate, specifyValueDate) {
            if (specifyValueDate) {
                return moment(valueDate).format('LL');
            }

            if (valueDateMode <= 0) {
                return '购买成功立刻起息';
            }

            return '购买成功T+' + valueDateMode + '工作日起息';
        };
    });
