/*jshint -W024 */
'use strict';
angular.module('jym.zhuanqu.detail', [
    'jym.services',
    'jym.services.product',
    'jym.services.purchase',
    'jym.services.user',
    'jym.zhuanqu.purchase'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.zhuanqu-detail', {
                url: '/zhuanqu/detail/{bankName}/{productIdentifier}',
                views: {
                    zhuanqu: {
                        controller: 'ZhuanquDetailCtrl as product',
                        templateUrl: 'app/zhuanqu/detail/detail.tpl.html'
                    }
                }
            });
    })
    .controller('ZhuanquDetailCtrl', function($scope, $state, $stateParams, $q, $timeout, ProductService, PurchaseService, UserService, JYMUtilityService) {
        var product = this;

        product.model = {};
        product.viewModel = {};

        var getSaleProgress = function(product) {
            return ProductService.getSaleProgress(product.paidAmount, product.financingSumAmount, product.soldOut, product.startSellTime, product.endSellTime);
        };

        var getSaleStatus = function(product) {
            return ProductService.getSaleStatus(product.repaid, product.soldOut, product.startSellTime, product.endSellTime);
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

        product.getAccrualDuration = function() {
            var diff = (moment(product.model.settleDate) - moment(product.model.currentValueDate)) / (1000 * 60 * 60 * 24);
            return parseInt(diff, 10);
        };

        product.goPurchase = function() {
            var productCategory;
            if ($stateParams.bankName === 'fudian') {
                productCategory = 210001010;
            } else if ($stateParams.bankName === 'fuxin') {
                productCategory = 210003010;
            } else if ($stateParams.bankName === 'shibing') {
                productCategory = 210002020;
            } else {
                productCategory = 100000010;
            }

            if (product.goPurchaseButtonEnable()) {
                var amount = product.viewModel.investCount * product.model.unitPrice;
                var checkUserPurchaseStatus = UserService.checkUserPurchaseStatus();
                var checkProductPurchaseStatus = ProductService.checkProductPurchaseStatus(product.refreshProduct(), amount);
                $q.all([checkUserPurchaseStatus, checkProductPurchaseStatus])
                    .then(function(result) {
                        PurchaseService.buildRegularOrder(amount, result[1].productIdentifier, productCategory);

                        $state.go('jym.zhuanqu-purchase', { bankName: $stateParams.bankName });
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

            product.viewModel.expectedInterest = (ProductService.getInterest(product.viewModel.investAmount * 100, product.model.yield, product.getAccrualDuration()) / 100).toFixed(2);
        };

        product.refreshProduct = function() {
            return ProductService.getRegularProductInfo($stateParams.productIdentifier)
                .then(function(result) {
                    product.model = result;
                    product.refreshViewModel();
                    product.refreshInvestViewModel();
                    return result;
                });
        };

        product.refreshViewModel = function() {
            product.viewModel.bankName = product.model.bankName;
            product.viewModel.currentValueDate = product.model.currentValueDate;
            product.viewModel.drawee = product.model.drawee;
            product.viewModel.draweeInfo = product.model.draweeInfo;
            product.viewModel.endorseImageLink = product.model.endorseImageLink;
            product.viewModel.endSellTime = product.model.endSellTime;
            product.viewModel.enterpriseInfo = product.model.enterpriseInfo;
            product.viewModel.enterpriseLicense = product.model.enterpriseLicense;
            product.viewModel.enterpriseName = product.model.enterpriseName;
            product.viewModel.financingSumAmount = product.model.financingSumAmount / 1000000;
            product.viewModel.issueNo = product.model.issueNo;
            product.viewModel.issueTime = product.model.issueTime;
            product.viewModel.paidAmount = product.model.paidAmount;
            product.viewModel.period = product.model.period;
            product.viewModel.productCategory = product.model.productCategory;
            product.viewModel.productIdentifier = product.model.productIdentifier;
            product.viewModel.productName = product.model.productName + ' ' + '第' + product.model.issueNo + '期';
            product.viewModel.productNo = product.model.productNo;
            product.viewModel.remainCount = ((product.model.financingSumAmount - product.model.paidAmount) / product.model.unitPrice).toFixed(0);
            product.viewModel.repaid = product.model.repaid;
            product.viewModel.repaidTime = product.model.repaidTime;
            product.viewModel.repaymentDeadline = product.model.repaymentDeadline;
            product.viewModel.riskManagement = product.model.riskManagement;
            product.viewModel.riskManagementInfo = product.model.riskManagementInfo;
            product.viewModel.riskManagementMode = product.model.riskManagementMode;
            product.viewModel.sellProgress = getSaleProgress(product.model);
            product.viewModel.sellProgressInCircleProgress = product.viewModel.sellProgress / 100;
            product.viewModel.settleDate = product.model.settleDate;
            product.viewModel.soldOut = product.model.soldOut;
            product.viewModel.soldOutTime = product.model.soldOutTime;
            product.viewModel.specifyValueDate = product.model.specifyValueDate;
            product.viewModel.startSellTime = product.model.startSellTime;
            product.viewModel.status = getSaleStatus(product.model);
            product.viewModel.unitPrice = (product.model.unitPrice / 100).toFixed(0);
            product.viewModel.usage = product.model.usage;
            product.viewModel.valueDate = product.model.valueDate;
            product.viewModel.valueDateMode = product.model.valueDateMode;
            product.viewModel.valueDateText = getValueDateModeText(product.model.valueDateMode, product.model.valueDate, product.model.specifyValueDate);
            product.viewModel.yield = product.model.yield / 100;


            if ($stateParams.bankName === 'fudian') {
                product.viewModel.isYinpiao = true;
                product.viewModel.isShangpiao = false;
                product.viewModel.riskManagementText = product.viewModel.bankName;
            } else if ($stateParams.bankName === 'fuxin') {
                product.viewModel.isYinpiao = true;
                product.viewModel.isShangpiao = false;
                product.viewModel.riskManagementText = product.viewModel.bankName;
            } else if ($stateParams.bankName === 'shibing') {
                product.viewModel.isYinpiao = false;
                product.viewModel.isShangpiao = true;
                product.viewModel.riskManagementText = product.viewModel.riskManagement;
            } else {
                product.viewModel.isYinpiao = false;
                product.viewModel.isShangpiao = false;
                product.viewModel.riskManagementText = product.viewModel.riskManagement;
            }
        };

        product.doRefresh();
    });
