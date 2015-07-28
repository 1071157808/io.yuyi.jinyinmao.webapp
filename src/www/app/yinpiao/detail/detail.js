/*jshint -W024 */
'use strict';
angular.module('jym.yinpiao.detail', [
    'jym.services',
    'jym.services.product',
    'jym.services.purchase',
    'jym.services.user',
    'jym.yinpiao.purchase'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.yinpiao-detail', {
                url: '/yinpiao/detail/{productIdentifier}',
                views: {
                    '@': {
                        controller: 'YinpiaoDetailCtrl as ctrl',
                        templateUrl: 'app/yinpiao/detail/detail.tpl.html'
                    }
                }
            });
    })
    .controller('YinpiaoDetailCtrl', function($scope, $state, $stateParams, $q, $timeout, ProductService, PurchaseService, UserService, JYMUtilityService) {
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
            ctrl.viewModel.investCount = ctrl.viewModel.investCount || 10;
            ctrl.viewModel.investAmount = 0;
            ctrl.viewModel.expectedInterest = 0;

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

        ctrl.getAccrualDuration = function() {
            var diff = (moment(ctrl.model.settleDate) - moment(ctrl.model.currentValueDate)) / (1000 * 60 * 60 * 24);
            return parseInt(diff, 10);
        };

        ctrl.goPurchase = function() {
            if (ctrl.goPurchaseButtonEnable()) {
                var amount = ctrl.viewModel.investCount * ctrl.model.unitPrice;
                var checkUserPurchaseStatus = UserService.checkUserPurchaseStatus();
                var checkProductPurchaseStatus = ProductService.checkProductPurchaseStatus(ctrl.refreshProduct(), amount);
                $q.all([checkUserPurchaseStatus, checkProductPurchaseStatus])
                    .then(function(result) {
                        PurchaseService.buildRegularOrder(amount, result[1].productIdentifier, 100000010);

                        $state.go('jym.yinpiao-purchase');
                    })
                    .catch(function(result) {
                        if (Error.prototype.isPrototypeOf(result)) {
                            JYMUtilityService.showAlert(result);
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

            ctrl.viewModel.expectedInterest = (ProductService.getInterest(ctrl.viewModel.investAmount * 100, ctrl.model.yield, ctrl.getAccrualDuration()) / 100).toFixed(2);
        };

        ctrl.refreshProduct = function() {
            return ProductService.getRegularProductInfo($stateParams.productIdentifier)
                .then(function(result) {
                    ctrl.model = result;
                    ctrl.refreshViewModel();
                    ctrl.refreshInvestViewModel();
                    return result;
                });
        };

        ctrl.refreshViewModel = function() {
            ctrl.viewModel.bankName = ctrl.model.bankName;
            ctrl.viewModel.currentValueDate = ctrl.model.currentValueDate;
            ctrl.viewModel.drawee = ctrl.model.drawee;
            ctrl.viewModel.draweeInfo = ctrl.model.draweeInfo;
            ctrl.viewModel.endorseImageLink = ctrl.model.endorseImageLink;
            ctrl.viewModel.endSellTime = ctrl.model.endSellTime;
            ctrl.viewModel.enterpriseInfo = ctrl.model.enterpriseInfo;
            ctrl.viewModel.enterpriseLicense = ctrl.model.enterpriseLicense;
            ctrl.viewModel.enterpriseName = ctrl.model.enterpriseName;
            ctrl.viewModel.financingSumAmount = ctrl.model.financingSumAmount / 1000000;
            ctrl.viewModel.issueNo = ctrl.model.issueNo;
            ctrl.viewModel.issueTime = ctrl.model.issueTime;
            ctrl.viewModel.paidAmount = ctrl.model.paidAmount;
            ctrl.viewModel.period = ctrl.model.period;
            ctrl.viewModel.productCategory = ctrl.model.productCategory;
            ctrl.viewModel.productIdentifier = ctrl.model.productIdentifier;
            ctrl.viewModel.productName = ctrl.model.productName;
            ctrl.viewModel.productNo = ctrl.model.productNo;
            ctrl.viewModel.remainCount = ((ctrl.model.financingSumAmount - ctrl.model.paidAmount) / ctrl.model.unitPrice).toFixed(0);
            ctrl.viewModel.repaid = ctrl.model.repaid;
            ctrl.viewModel.repaidTime = ctrl.model.repaidTime;
            ctrl.viewModel.repaymentDeadline = ctrl.model.repaymentDeadline;
            ctrl.viewModel.riskManagement = ctrl.model.riskManagement;
            ctrl.viewModel.riskManagementInfo = ctrl.model.riskManagementInfo;
            ctrl.viewModel.riskManagementMode = ctrl.model.riskManagementMode;
            ctrl.viewModel.sellProgress = getSaleProgress(ctrl.model);
            ctrl.viewModel.sellProgressInCircleProgress = ctrl.viewModel.sellProgress / 100;
            ctrl.viewModel.settleDate = ctrl.model.settleDate;
            ctrl.viewModel.soldOut = ctrl.model.soldOut;
            ctrl.viewModel.soldOutTime = ctrl.model.soldOutTime;
            ctrl.viewModel.specifyValueDate = ctrl.model.specifyValueDate;
            ctrl.viewModel.startSellTime = ctrl.model.startSellTime;
            ctrl.viewModel.status = getSaleStatus(ctrl.model);
            ctrl.viewModel.unitPrice = (ctrl.model.unitPrice / 100).toFixed(0);
            ctrl.viewModel.usage = ctrl.model.usage;
            ctrl.viewModel.valueDate = ctrl.model.valueDate;
            ctrl.viewModel.valueDateMode = ctrl.model.valueDateMode;
            ctrl.viewModel.valueDateText = getValueDateModeText(ctrl.model.valueDateMode, ctrl.model.valueDate, ctrl.model.specifyValueDate);
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

        ctrl.doRefresh();
    });
