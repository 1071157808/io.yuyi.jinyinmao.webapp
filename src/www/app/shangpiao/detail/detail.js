/*jshint -W024 */
'use strict';
angular.module('jym.shangpiao.detail', [
    'jym.services',
    'jym.services.product',
    'jym.services.purchase',
    'jym.services.user',
    'jym.shangpiao.purchase'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.shangpiao-detail', {
                url: '/shangpiao/detail/{productIdentifier}',
                views: {
                    '@': {
                        controller: 'ShangpiaoDetailCtrl as ctrl',
                        templateUrl: 'app/shangpiao/detail/detail.tpl.html'
                    }
                }
            });
    })
    .controller('ShangpiaoDetailCtrl', function($scope, $state, $stateParams, $timeout, ProductService, PurchaseService, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};

        var getSaleProgress = function(product) {
            return ProductService.getSaleProgress(product.paidAmount, product.financingSumAmount, product.soldOut, product.startSellTime, product.endSellTime, product.repaid);
        };

        var getSaleStatus = function(product) {
            return ProductService.getSaleStatus(product.soldOut, product.startSellTime, product.endSellTime, product.repaid);
        };

        var getValueDateModeText = function(valueDateMode) {
            return ProductService.getValueDateModeText(valueDateMode);
        };

        ctrl.doRefresh = function() {
            if (ctrl.viewModel.refreshTime && Date.now() - ctrl.viewModel.refreshTime < 100) {
                return;
            }

            ctrl.viewModel.refreshTime = Date.now();

            ctrl.viewModel.investCount = ctrl.viewModel.investCount || 10;
            ctrl.viewModel.investAmount = 0;
            ctrl.viewModel.expectedInterest = 0;

            ctrl.refreshProduct()
                .then(function(result) {
                    ctrl.model.product = result;
                    ctrl.refreshViewModel();
                    ctrl.refreshInvestViewModel();
                    return result;
                });

            ctrl.refreshUser()
                .then(function(result) {
                    ctrl.model.user = result;
                });

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

        ctrl.getAccrualDuration = function() {
            var diff = (moment(ctrl.model.product.settleDate) - moment(ctrl.model.product.currentValueDate)) / (1000 * 60 * 60 * 24);
            return parseInt(diff, 10);
        };

        ctrl.goPurchase = function() {
            if (ctrl.goPurchaseButtonEnable()) {
                var amount = ctrl.viewModel.investCount * ctrl.model.product.unitPrice;
                try {
                    if (ctrl.model.user.hasSetPaymentPassword === false) {
                        $timeout(function() {
                            JYMUtilityService.go('jym.user-bank-card-add');
                        }, 1000);
                    }

                    ProductService.checkProductPurchaseStatus(ctrl.model.product, amount);
                    UserService.checkUserPurchaseStatus(ctrl.model.user);

                    PurchaseService.buildRegularOrder(amount, ctrl.viewModel.expectedInterest, ctrl.model.product.productIdentifier, 100000020);
                    $state.go('jym.shangpiao-purchase');
                } catch (e) {
                    JYMUtilityService.showAlert(e.message);
                }
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

            ctrl.viewModel.expectedInterest = (ProductService.getInterest(ctrl.viewModel.investAmount * 100, ctrl.model.product.yield, ctrl.getAccrualDuration()) / 100).toFixed(2);
        };

        ctrl.refreshProduct = function() {
            return ProductService.getRegularProductInfo($stateParams.productIdentifier);
        };

        ctrl.refreshUser = function() {
            return UserService.getUserInfo();
        };

        ctrl.refreshViewModel = function() {
            ctrl.viewModel.bankName = ctrl.model.product.bankName;
            ctrl.viewModel.currentValueDate = ctrl.model.product.currentValueDate;
            ctrl.viewModel.drawee = ctrl.model.product.drawee;
            ctrl.viewModel.draweeInfo = ctrl.model.product.draweeInfo;
            ctrl.viewModel.endorseImageLink = ctrl.model.product.endorseImageLink;
            ctrl.viewModel.endSellTime = ctrl.model.product.endSellTime;
            ctrl.viewModel.enterpriseInfo = ctrl.model.product.enterpriseInfo;
            ctrl.viewModel.enterpriseLicense = ctrl.model.product.enterpriseLicense;
            ctrl.viewModel.enterpriseName = ctrl.model.product.enterpriseName;
            ctrl.viewModel.financingSumAmount = ctrl.model.product.financingSumAmount / 1000000;
            ctrl.viewModel.issueNo = ctrl.model.product.issueNo;
            ctrl.viewModel.issueTime = ctrl.model.product.issueTime;
            ctrl.viewModel.paidAmount = ctrl.model.product.paidAmount;
            ctrl.viewModel.period = ctrl.model.product.period;
            ctrl.viewModel.productCategory = ctrl.model.product.productCategory;
            ctrl.viewModel.productIdentifier = ctrl.model.product.productIdentifier;
            ctrl.viewModel.productName = ctrl.model.product.productName;
            ctrl.viewModel.productNo = ctrl.model.product.productNo;
            ctrl.viewModel.remainCount = ((ctrl.model.product.financingSumAmount - ctrl.model.product.paidAmount) / ctrl.model.product.unitPrice).toFixed(0);
            ctrl.viewModel.repaid = ctrl.model.product.repaid;
            ctrl.viewModel.repaidTime = ctrl.model.product.repaidTime;
            ctrl.viewModel.repaymentDeadline = ctrl.model.product.repaymentDeadline;
            ctrl.viewModel.riskManagement = ctrl.model.product.riskManagement;
            ctrl.viewModel.riskManagementInfo = ctrl.model.product.riskManagementInfo;
            ctrl.viewModel.riskManagementMode = ctrl.model.product.riskManagementMode;
            ctrl.viewModel.sellProgress = getSaleProgress(ctrl.model.product);
            ctrl.viewModel.sellProgressInCircleProgress = ctrl.viewModel.sellProgress / 100;
            ctrl.viewModel.settleDate = ctrl.model.product.settleDate;
            ctrl.viewModel.soldOut = ctrl.model.product.soldOut;
            ctrl.viewModel.soldOutTime = ctrl.model.product.soldOutTime;
            ctrl.viewModel.specifyValueDate = ctrl.model.product.specifyValueDate;
            ctrl.viewModel.startSellTime = ctrl.model.product.startSellTime;
            ctrl.viewModel.status = getSaleStatus(ctrl.model.product);
            ctrl.viewModel.unitPrice = (ctrl.model.product.unitPrice / 100).toFixed(0);
            ctrl.viewModel.usage = ctrl.model.product.usage;
            ctrl.viewModel.valueDate = ctrl.model.product.valueDate;
            ctrl.viewModel.valueDateMode = ctrl.model.product.valueDateMode;
            ctrl.viewModel.valueDateText = getValueDateModeText(ctrl.model.product.valueDateMode, ctrl.model.product.valueDate, ctrl.model.product.specifyValueDate);
            ctrl.viewModel.yield = ctrl.model.product.yield / 100;

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

        $scope.$on('$ionicView.beforeEnter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    });
