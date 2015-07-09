/*jshint -W024 */
'use strict';
angular.module('jym.jinbaoyin.detail', [
    'jym.services',
    'jym.services.jinbaoyin',
    'jym.services.product',
    'jym.services.purchase',
    'jym.services.user',
    'jym.jinbaoyin.purchase'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.jinbaoyin-detail', {
                url: '/jinbaoyin/detail',
                views: {
                    jinbaoyin: {
                        controller: 'JinbaoyinDetailCtrl as product',
                        templateUrl: 'app/jinbaoyin/detail/detail.tpl.html'
                    }
                }
            });
    })
    .controller('JinbaoyinDetailCtrl', function($scope, $timeout, $q, $state, ProductService, JinbaoyinService, PurchaseService, UserService, JYMUtilityService) {
        var product = this;

        product.model = {};
        product.viewModel = {};

        var getSaleProgress = function(product) {
            return ProductService.getSaleProgress(product.paidAmount, product.financingSumAmount, product.soldOut, product.startSellTime, product.endSellTime);
        };

        var getSaleStatus = function(product) {
            var status = ProductService.getSaleStatus(product.soldOut, product.startSellTime, product.endSellTime);

            switch (status) {
                case 10:
                    return {
                        status: 10,
                        text: '待售',
                        icon: 'jym-icon-waiting',
                        buttonText: '待 售'
                    };
                case 20:
                    return {
                        status: 20,
                        text: '抢购',
                        icon: 'jym-icon-selling',
                        buttonText: '立 即 抢 购'
                    };
                case 30:
                    return {
                        status: 30,
                        text: '售罄',
                        icon: 'jym-icon-soldout',
                        buttonText: '售 罄'
                    };
            }
        };

        var getValueDateModeText = function(valueDateMode) {
            return ProductService.getValueDateModeText(valueDateMode);
        };

        product.doRefresh = function() {
            product.viewModel.investCount = product.viewModel.investCount || 10;
            product.viewModel.investAmount = 0;
            product.viewModel.expectedInterest = 0;

            product.refreshProduct();

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 500);
        };

        product.investCountChange = function() {
            if (product.viewModel.investCount < 0) {
                product.viewModel.investCount = 0;
            }

            if (product.viewModel.investCount > product.viewModel.remainCount) {
                product.viewModel.investCount = parseInt(product.viewModel.remainCount, 10);
            }

            product.refreshInvestViewModel();
        };

        product.goPurchase = function() {
            if (product.goPurchaseButtonEnable()) {
                var amount = product.viewModel.investCount * product.model.unitPrice;
                var checkUserPurchaseStatus = UserService.checkUserPurchaseStatus();
                var checkProductPurchaseStatus = ProductService.checkProductPurchaseStatus(product.refreshProduct(), amount);
                $q.all([checkUserPurchaseStatus, checkProductPurchaseStatus])
                    .then(function(result) {
                        PurchaseService.buildNewJBYOrder(amount, result[1].productIdentifier);

                        $state.go('jym.jinbaoyin-purchase', { productIdentifier: product.model.productIdentifier });
                    })
                    .catch(function(result) {
                        JYMUtilityService.showAlert(result);
                    });
            }
        };

        product.goPurchaseButtonEnable = function() {
            return product.viewModel.status && product.viewModel.status.status === 20 && product.viewModel.investAmount && product.viewModel.investAmount >= product.viewModel.unitPrice;
        };

        product.refreshInvestViewModel = function() {
            if (isFinite(product.viewModel.investCount)) {
                product.viewModel.investAmount = product.viewModel.investCount * product.viewModel.unitPrice;
            } else {
                product.viewModel.investAmount = 0;
            }

            product.viewModel.expectedInterest = (ProductService.getInterest(product.viewModel.investAmount * 100, product.model.yield, 30) / 100).toFixed(2);
        };

        product.refreshProduct = function() {
            return JinbaoyinService.getIndex()
                .then(function(result) {
                    product.model = result;
                    product.refreshViewModel();
                    product.refreshInvestViewModel();
                    return result;
                });
        };

        product.refreshViewModel = function() {
            product.viewModel.endSellTime = product.model.endSellTime;
            product.viewModel.financingSumAmount = (product.model.financingSumAmount / 1000000).toFixed(0);
            product.viewModel.issueNo = parseInt(product.model.issueNo, 10);
            product.viewModel.issueTime = product.model.issueTime;
            product.viewModel.paidAmount = product.model.paidAmount;
            product.viewModel.productCategory = product.model.productCategory;
            product.viewModel.productIdentifier = product.model.productIdentifier;
            product.viewModel.productName = product.model.productName;
            product.viewModel.productNo = product.model.productNo;
            product.viewModel.productTitle = product.model.productName + ' 第' + product.model.issueNo + '期';
            product.viewModel.remainCount = ((product.model.financingSumAmount - product.model.paidAmount) / product.model.unitPrice).toFixed(0);
            product.viewModel.sellProgress = getSaleProgress(product.model);
            product.viewModel.sellProgressInCircleProgress = product.viewModel.sellProgress / 100;
            product.viewModel.status = getSaleStatus(product.model);
            product.viewModel.unitPrice = (product.model.unitPrice / 100).toFixed(0);
            product.viewModel.valueDateMode = getValueDateModeText(product.model.valueDateMode);
            product.viewModel.yield = product.model.yield / 100;


            if (product.viewModel.status.status !== 20) {
                product.viewModel.remainCount = 0;
            }
        };

        product.doRefresh();

    });
