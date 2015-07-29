/*jshint -W024 */
'use strict';
angular.module('jym.user.orders-detail', [
    'jym.services',
    'jym.services.user'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-orders-detail', {
                url: '/user/orders/detail/{orderIdentifier}',
                views: {
                    '@': {
                        controller: 'UserOrderDetailCtrl as ctrl',
                        templateUrl: 'app/user/order/detail/detail.tpl.html'
                    }
                }
            });
    })
    .controller('UserOrderDetailCtrl', function($scope, $stateParams, $timeout, $q, $ionicHistory, $ionicNavBarDelegate, $ionicScrollDelegate, ProductService, UserService, JYMTimeService, JYMUtilityService) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};

        ctrl.canBack = function() {
            return $ionicHistory.backView();
        };

        ctrl.doRefresh = function() {
            ctrl.viewModel.agreement1 = '委托协议';
            ctrl.viewModel.agreement2 = '借款协议';
            ctrl.viewModel.showAgreement1 = false;
            ctrl.viewModel.showAgreement2 = false;

            var refreshOrder = ctrl.refreshOrder()
                .then(function(result) {
                    ctrl.model.order = result;
                    ctrl.refreshViewModel();
                    return result;
                });

            var refreshUser = ctrl.refreshUser()
                .then(function(result) {
                    ctrl.model.user = result;
                    return result;
                });

            $q.all([refreshOrder, refreshUser])
                .then(function() {
                    var agreementData = {
                        cellphone: ctrl.model.user.cellphone,
                        credentialNo: ctrl.model.user.credentialNo,
                        interest: ctrl.viewModel.interest,
                        orderNo: ctrl.viewModel.orderNo,
                        orderTime: ctrl.viewModel.orderTime,
                        principal: ctrl.viewModel.principal,
                        realName: ctrl.model.user.realName
                    };

                    ctrl.refreshOrderAgreement(1)
                        .then(function(result) {
                            ctrl.viewModel.agreement1 = ProductService.fillDataForAgreement(result.content, agreementData);
                        });

                    ctrl.refreshOrderAgreement(2)
                        .then(function(result) {
                            ctrl.viewModel.agreement2 = ProductService.fillDataForAgreement(result.content, agreementData);
                        });
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        ctrl.go = function(toState, params) {
            params = params || {};
            JYMUtilityService.goWithDisableBack(toState, params);
        };

        ctrl.refreshOrder = function() {
            return UserService.getOrderInfo($stateParams.orderIdentifier);
        };

        ctrl.refreshOrderAgreement = function(agreementIndex) {
            return ProductService.getAgreementContent(ctrl.model.order.productSnapshot.productIdentifier, agreementIndex);
        };

        ctrl.refreshUser = function() {
            return UserService.getUserInfo();
        };

        ctrl.refreshViewModel = function() {
            ctrl.viewModel.accountTransactionIdentifier = ctrl.model.order.accountTransactionIdentifier;
            ctrl.viewModel.extraInterest = (ctrl.model.order.extraInterest / 100).toFixed(2);
            ctrl.viewModel.extraInterestRecords = ctrl.model.order.extraInterestRecords;
            ctrl.viewModel.extraYield = (ctrl.model.order.extraYield / 100).toFixed(2);
            ctrl.viewModel.interest = (ctrl.model.order.interest / 100).toFixed(2);
            ctrl.viewModel.isRepaid = ctrl.model.order.isRepaid;
            ctrl.viewModel.orderIdentifier = ctrl.model.order.orderIdentifier;
            ctrl.viewModel.orderNo = ctrl.model.order.orderNo;
            ctrl.viewModel.orderTime = ctrl.model.order.orderTime;
            ctrl.viewModel.principal = (ctrl.model.order.principal / 100).toFixed(2);
            ctrl.viewModel.productCategory = ctrl.model.order.productCategory;
            ctrl.viewModel.productIdentifier = ctrl.model.order.productIdentifier;
            ctrl.viewModel.repaidTime = ctrl.model.order.repaidTime;
            ctrl.viewModel.resultCode = ctrl.model.order.resultCode;
            ctrl.viewModel.resultTime = ctrl.model.order.resultTime;
            ctrl.viewModel.settleDate = ctrl.model.order.settleDate;
            ctrl.viewModel.transDesc = ctrl.model.order.transDesc;
            ctrl.viewModel.valueDate = ctrl.model.order.valueDate;
            ctrl.viewModel.yield = (ctrl.model.order.yield / 100).toFixed(2);

            ctrl.viewModel.productSnapshot = {};
            ctrl.viewModel.productSnapshot.bankName = ctrl.model.order.productSnapshot.bankName;
            ctrl.viewModel.productSnapshot.drawee = ctrl.model.order.productSnapshot.drawee;
            ctrl.viewModel.productSnapshot.draweeInfo = ctrl.model.order.productSnapshot.draweeInfo;
            ctrl.viewModel.productSnapshot.endorseImageLink = ctrl.model.order.productSnapshot.endorseImageLink;
            ctrl.viewModel.productSnapshot.endSellTime = ctrl.model.order.productSnapshot.endSellTime;
            ctrl.viewModel.productSnapshot.enterpriseInfo = ctrl.model.order.productSnapshot.enterpriseInfo;
            ctrl.viewModel.productSnapshot.enterpriseLicense = ctrl.model.order.productSnapshot.enterpriseLicense;
            ctrl.viewModel.productSnapshot.enterpriseName = ctrl.model.order.productSnapshot.enterpriseName;
            ctrl.viewModel.productSnapshot.financingSumAmount = (ctrl.model.order.productSnapshot.financingSumAmount / 100).toFixed(2);
            ctrl.viewModel.productSnapshot.issueNo = ctrl.model.order.productSnapshot.issueNo;
            ctrl.viewModel.productSnapshot.issueTime = ctrl.model.order.productSnapshot.issueTime;
            ctrl.viewModel.productSnapshot.paidAmount = (ctrl.model.order.productSnapshot.paidAmount / 100).toFixed(2);
            ctrl.viewModel.productSnapshot.period = ctrl.model.order.productSnapshot.period;
            ctrl.viewModel.productSnapshot.pledgeNo = ctrl.model.order.productSnapshot.pledgeNo;
            ctrl.viewModel.productSnapshot.productCategory = ctrl.model.order.productSnapshot.productCategory;
            ctrl.viewModel.productSnapshot.productIdentifier = ctrl.model.order.productSnapshot.productIdentifier;
            ctrl.viewModel.productSnapshot.productName = ctrl.model.order.productSnapshot.productName;
            ctrl.viewModel.productSnapshot.productNo = ctrl.model.order.productSnapshot.productNo;
            ctrl.viewModel.productSnapshot.productTitle = ctrl.viewModel.productSnapshot.productName + ' 第' + parseInt(ctrl.viewModel.productSnapshot.issueNo, 10) + '期';
            ctrl.viewModel.productSnapshot.repaid = ctrl.model.order.productSnapshot.repaid;
            ctrl.viewModel.productSnapshot.repaidTime = ctrl.model.order.productSnapshot.repaidTime;
            ctrl.viewModel.productSnapshot.repaymentDeadline = ctrl.model.order.productSnapshot.repaymentDeadline;
            ctrl.viewModel.productSnapshot.riskManagement = ctrl.model.order.productSnapshot.riskManagement;
            ctrl.viewModel.productSnapshot.riskManagementInfo = ctrl.model.order.productSnapshot.riskManagementInfo;
            ctrl.viewModel.productSnapshot.riskManagementMode = ctrl.model.order.productSnapshot.riskManagementMode;
            ctrl.viewModel.productSnapshot.settleDate = ctrl.model.order.productSnapshot.settleDate;
            ctrl.viewModel.productSnapshot.soldOut = ctrl.model.order.productSnapshot.soldOut;
            ctrl.viewModel.productSnapshot.soldOutTime = ctrl.model.order.productSnapshot.soldOutTime;
            ctrl.viewModel.productSnapshot.specifyValueDate = ctrl.model.order.productSnapshot.riskManagement;
            ctrl.viewModel.productSnapshot.startSellTime = ctrl.model.order.productSnapshot.riskManagementInfo;
            ctrl.viewModel.productSnapshot.unitPrice = (ctrl.model.order.productSnapshot.riskManagementMode / 100).toFixed(2);
            ctrl.viewModel.productSnapshot.usage = ctrl.model.order.productSnapshot.settleDate;
            ctrl.viewModel.productSnapshot.valueDate = ctrl.model.order.productSnapshot.soldOut;
            ctrl.viewModel.productSnapshot.valueDateMode = ctrl.model.order.productSnapshot.soldOutTime;
            ctrl.viewModel.productSnapshot.yield = (ctrl.model.order.productSnapshot.yield / 100).toFixed(2);

            var now = JYMTimeService.getTime();
            if (ctrl.viewModel.isRepaid) {
                ctrl.viewModel.statusText = '已还款';
            } else if (now > moment(ctrl.viewModel.settleDate)) {
                ctrl.viewModel.statusText = '已结息';
            } else if (now > now > moment(ctrl.viewModel.valueDate)) {
                ctrl.viewModel.statusText = '已起息';
            } else {
                ctrl.viewModel.statusText = '下单成功';
            }
        };

        ctrl.toggleAgreement1 = function() {
            ctrl.viewModel.showAgreement2 = false;
            $ionicScrollDelegate.scrollTop();
            ctrl.viewModel.showAgreement1 = !ctrl.viewModel.showAgreement1;
            $ionicNavBarDelegate.showBackButton(!ctrl.viewModel.showAgreement1);
        };

        ctrl.toggleAgreement2 = function() {
            ctrl.viewModel.showAgreement1 = false;
            $ionicScrollDelegate.scrollTop();
            ctrl.viewModel.showAgreement2 = !ctrl.viewModel.showAgreement2;
            $ionicNavBarDelegate.showBackButton(!ctrl.viewModel.showAgreement2);
        };

        $scope.$on('$ionicView.beforeEnter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    });
