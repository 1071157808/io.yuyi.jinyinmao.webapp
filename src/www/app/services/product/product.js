'use strict';
angular.module('jym.services.product', [
    'jym.services'
])
    .service('ProductService', function($http, $filter, RESOURCES, URLS, JYMCacheService, JYMTimeService) {
        var service = this;

        service.checkProductPurchaseStatus = function(product, amount) {
            var repaid = product.repaid || false;

            var status = service.getSaleStatus(product.soldOut, product.startSellTime, product.endSellTime, repaid);
            if (status === 10) {
                throw new Error(RESOURCES.ALERT.PRODUCT.NOT_ON_SALE);
            }

            if (status === 30) {
                throw new Error(RESOURCES.ALERT.PRODUCT.SOLD_OUT);
            }

            if (product.financingSumAmount - product.paidAmount < amount) {
                throw new Error(RESOURCES.ALERT.PRODUCT.SHARE_INSUFFICIENT);
            }

            if (amount % product.unitPrice !== 0) {
                throw new Error(RESOURCES.ALERT.PRODUCT.AMOUNT_INCORRECT);
            }

            return product;
        };

        service.fillDataForAgreement = function(content, data) {
            var agreement = content;
            if (data.orderNo) {
                agreement = agreement.replace(/<--协议编号-->/g, data.orderNo);
            }

            if (data.orderTime) {
                agreement = agreement.replace(/<--订单生成日期-->/g, $filter('time')(data.orderTime));
            }

            if (data.realName) {
                agreement = agreement.replace(/<--用户姓名-->/g, data.realName);
            }

            if (data.credentialNo) {
                agreement = agreement.replace(/<--证件号码-->/g, data.credentialNo);
            }

            if (data.principal) {
                agreement = agreement.replace(/<--投资金额-->/g, data.principal);
            }

            if (data.interest) {
                agreement = agreement.replace(/<--投资利息-->/g, data.principal);
            }

            if (data.cellphone) {
                agreement = agreement.replace(/<--用户ID-->/g, data.cellphone);
            }

            return agreement;
        };

        service.getAgreementContent = function(productIdentifier, agreementIndex) {
            if (agreementIndex <= 1) {
                agreementIndex = 1;
            }

            var url = URLS.REGULARPRDUCT.AGREEMENT + productIdentifier + '-' + agreementIndex;

            return $http.get(url, {
                cache: JYMCacheService.get('productCache')
            }).then(function(result) {
                return result.data;
            });
        };

        service.getInterest = function(pricipal, _yield, duration) {
            // 返回的金额以 分 为单位
            // 本金的单位为 分
            // 收益率的单位为 万分之一
            return Math.floor(pricipal * _yield * duration / 3600000);
        };

        service.getRegularPage = function(pageIndex, productCategoryName) {
            var productCategory = 100000010;

            switch (productCategoryName) {
                case 'yinpiao':
                    productCategory = 100000010;
                    break;
                case 'shangpiao':
                    productCategory = 100000020;
                    break;
                case 'fudian':
                    productCategory = 210001010;
                    break;
                case 'fuxin':
                    productCategory = 210003010;
                    break;
                case 'shibing':
                    productCategory = 210002020;
                    break;
                default :
                    productCategory = 100000010;
            }

            var url = URLS.REGULARPRDUCT.PAGE + pageIndex + '?categories=' + productCategory;

            return $http.get(url, {
                cache: JYMCacheService.get('productCache')
            }).then(function(result) {
                return result.data;
            });
        };

        service.getRegularProductInfo = function(productIdentifier) {
            var url = URLS.REGULARPRDUCT.INFO + productIdentifier;

            return $http.get(url, {
                cache: JYMCacheService.get('productCache')
            }).then(function(result) {
                return result.data;
            });
        };

        service.getSaleProgress = function(paidAmount, financingSumAmount, soldOut, startSellTime, endSellTime, repaid) {
            var status = service.getSaleStatus(soldOut, startSellTime, endSellTime, repaid);

            if (status === 30 || status === 40) {
                return 100;
            }

            if (status === 10) {
                return 0;
            }

            if (paidAmount >= financingSumAmount) {
                return 100;
            }

            if (paidAmount >= financingSumAmount * 0.991) {
                return 99;
            }

            return (paidAmount / financingSumAmount * 100).toFixed(0);
        };

        service.getSaleStatus = function(soldOut, startSellTime, endSellTime, repaid) {
            repaid = repaid || false;

            var now = JYMTimeService.getTime();
            // 项目结束
            if (repaid === true) {
                return 40;
            }
            // 售罄
            if (soldOut === true || moment(endSellTime) < now) {
                return 30;
            }

            // 在售
            if (moment(startSellTime) < now) {
                return 20;
            }

            // 待售
            return 10;
        };

        service.getShangpiaoPage = function(pageIndex) {
            return service.getRegularPage(pageIndex, 'shangpiao');
        };

        service.getSold = function(productIdentifier) {
            var url = URLS.REGULARPRDUCT.SOLD + productIdentifier;

            return $http.get(url).then(function(result) {
                return result.data;
            });
        };

        service.getYinpiaoPage = function(pageIndex) {
            return service.getRegularPage(pageIndex, 'yinpiao');
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
