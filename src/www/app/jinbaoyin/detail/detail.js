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
                    '@': {
                        controller: 'JinbaoyinDetailCtrl as ctrl',
                        templateUrl: 'app/jinbaoyin/detail/detail.tpl.html'
                    }
                }
            });
    })
    .controller('JinbaoyinDetailCtrl', function($scope, $state, $timeout, $q, JinbaoyinService, ProductService, PurchaseService, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};

        var getSaleProgress = function(product) {
            return ProductService.getSaleProgress(product.paidAmount, product.financingSumAmount, product.soldOut, product.startSellTime, product.endSellTime);
        };

        var getSaleStatus = function(product) {
            return ProductService.getSaleStatus(product.soldOut, product.startSellTime, product.endSellTime);
        };

        var getValueDateModeText = function(valueDateMode) {
            return ProductService.getValueDateModeText(valueDateMode);
        };

        ctrl.doRefresh = function() {
            ctrl.viewModel.expectedInterest = 0;
            ctrl.viewModel.investCount = ctrl.viewModel.investCount || 10;
            ctrl.viewModel.investAmount = 0;

            ctrl.refreshProduct();

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        ctrl.investCountChange = function() {
            if (ctrl.viewModel.investCount < 0) {
                ctrl.viewModel.investCount = 0;
            }

            if (ctrl.viewModel.investCount > ctrl.viewModel.remainCount) {
                ctrl.viewModel.investCount = parseInt(ctrl.viewModel.remainCount, 10);
            }

            ctrl.refreshInvestViewModel();
        };

        ctrl.goPurchase = function() {
            if (ctrl.goPurchaseButtonEnable()) {
                var amount = ctrl.viewModel.investCount * ctrl.model.unitPrice;
                var checkProductPurchaseStatus = ProductService.checkProductPurchaseStatus(ctrl.refreshProduct(), amount);
                var checkUserPurchaseStatus = UserService.checkUserPurchaseStatus();

                $q.all([checkProductPurchaseStatus, checkUserPurchaseStatus])
                    .then(function(result) {
                        PurchaseService.buildNewJBYOrder(amount, ctrl.viewModel.expectedInterest, result[0].productIdentifier);

                        $state.go('jym.jinbaoyin-purchase', { productIdentifier: ctrl.model.productIdentifier });
                    })
                    .catch(function(error) {
                        if (Error.prototype.isPrototypeOf(error)) {
                            JYMUtilityService.showAlert(error.message);
                        }
                    });
            }
        };

        ctrl.goPurchaseButtonEnable = function() {
            return ctrl.viewModel.status === 20 && ctrl.viewModel.investAmount && ctrl.viewModel.investAmount >= ctrl.viewModel.unitPrice;
        };

        ctrl.refreshInvestViewModel = function() {
            if (isFinite(ctrl.viewModel.investCount)) {
                ctrl.viewModel.investAmount = ctrl.viewModel.investCount * ctrl.viewModel.unitPrice;
            } else {
                ctrl.viewModel.investAmount = 0;
            }

            ctrl.viewModel.expectedInterest = (ProductService.getInterest(ctrl.viewModel.investAmount * 100, ctrl.model.yield, 30) / 100).toFixed(2);
        };

        ctrl.refreshProduct = function() {
            return JinbaoyinService.getIndex()
                .then(function(result) {
                    ctrl.model = result;
                    ctrl.refreshViewModel();
                    ctrl.refreshInvestViewModel();
                    return result;
                });
        };

        ctrl.refreshViewModel = function() {
            ctrl.viewModel.endSellTime = ctrl.model.endSellTime;
            ctrl.viewModel.financingSumAmount = (ctrl.model.financingSumAmount / 1000000).toFixed(0);
            ctrl.viewModel.issueNo = parseInt(ctrl.model.issueNo, 10);
            ctrl.viewModel.issueTime = ctrl.model.issueTime;
            ctrl.viewModel.paidAmount = ctrl.model.paidAmount;
            ctrl.viewModel.productCategory = ctrl.model.productCategory;
            ctrl.viewModel.productIdentifier = ctrl.model.productIdentifier;
            ctrl.viewModel.productName = ctrl.model.productName;
            ctrl.viewModel.productNo = ctrl.model.productNo;
            ctrl.viewModel.productTitle = ctrl.model.productName + ' 第' + ctrl.model.issueNo + '期';
            ctrl.viewModel.remainCount = ((ctrl.model.financingSumAmount - ctrl.model.paidAmount) / ctrl.model.unitPrice).toFixed(0);
            ctrl.viewModel.sellProgress = getSaleProgress(ctrl.model);
            ctrl.viewModel.sellProgressInCircleProgress = ctrl.viewModel.sellProgress / 100;
            ctrl.viewModel.status = getSaleStatus(ctrl.model);
            ctrl.viewModel.unitPrice = (ctrl.model.unitPrice / 100).toFixed(0);
            ctrl.viewModel.valueDateMode = getValueDateModeText(ctrl.model.valueDateMode);
            ctrl.viewModel.yield = ctrl.model.yield / 100;

            if (ctrl.viewModel.status !== 20) {
                ctrl.viewModel.remainCount = 0;
            }

            switch (ctrl.viewModel.status) {
                case 10:
                    ctrl.viewModel.statusText = '待售';
                    break;
                case 20:
                    ctrl.viewModel.statusText = '抢购';
                    break;
                case 30:
                    ctrl.viewModel.statusText = '售罄';
                    break;
                case 40:
                    ctrl.viewModel.statusText = '结束';
                    break;
                default :
                    ctrl.viewModel.statusText = '';
            }
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    });
