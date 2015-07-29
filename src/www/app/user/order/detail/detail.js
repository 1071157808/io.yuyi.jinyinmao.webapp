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
                        controller: 'UserOrderDetailCtrl as order',
                        templateUrl: 'app/user/order/detail/detail.tpl.html'
                    }
                }
            });
    })
    .controller('UserOrderDetailCtrl', function($scope, $stateParams, $timeout, $q, $ionicHistory, $ionicScrollDelegate, ProductService, UserService, JYMTimeService, JYMUtilityService) {
        var order = this;

        order.model = {};
        order.viewModel = {};

        order.canBack = function() {
            return $ionicHistory.backView();
        };

        order.doRefresh = function() {
            order.viewModel.agreement1 = '委托协议';
            order.viewModel.agreement2 = '借款协议';
            order.viewModel.showAgreement1 = false;
            order.viewModel.showAgreement2 = false;

            var refreshOrder = order.refreshOrder()
                .then(function(result) {
                    order.model.order = result;
                    order.refreshViewModel();
                    return result;
                });

            var refreshUser = order.refreshUser()
                .then(function(result) {
                    order.model.user = result;
                    return result;
                });

            $q.all([refreshOrder, refreshUser])
                .then(function() {
                    var agreementData = {
                        cellphone: order.model.user.cellphone,
                        credentialNo: order.model.user.credentialNo,
                        interest: order.viewModel.interest,
                        orderNo: order.viewModel.orderNo,
                        orderTime: order.viewModel.orderTime,
                        principal: order.viewModel.principal,
                        realName: order.model.user.realName
                    };

                    order.refreshOrderAgreement(1)
                        .then(function(result) {
                            order.viewModel.agreement1 = ProductService.fillDataForAgreement(result.content, agreementData);
                        });

                    order.refreshOrderAgreement(2)
                        .then(function(result) {
                            order.viewModel.agreement2 = ProductService.fillDataForAgreement(result.content, agreementData);
                        });
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        order.go = function(toState, params) {
            params = params || {};
            JYMUtilityService.goWithDisableBack(toState, params);
        };

        order.refreshOrder = function() {
            return UserService.getOrderInfo($stateParams.orderIdentifier);
        };

        order.refreshOrderAgreement = function(agreementIndex) {
            return ProductService.getAgreementContent(order.model.order.productSnapshot.productIdentifier, agreementIndex);
        };

        order.refreshUser = function() {
            return UserService.getUserInfo();
        };

        order.refreshViewModel = function() {
            order.viewModel.accountTransactionIdentifier = order.model.order.accountTransactionIdentifier;
            order.viewModel.extraInterest = (order.model.order.extraInterest / 100).toFixed(2);
            order.viewModel.extraInterestRecords = order.model.order.extraInterestRecords;
            order.viewModel.extraYield = (order.model.order.extraYield / 100).toFixed(2);
            order.viewModel.interest = (order.model.order.interest / 100).toFixed(2);
            order.viewModel.isRepaid = order.model.order.isRepaid;
            order.viewModel.orderIdentifier = order.model.order.orderIdentifier;
            order.viewModel.orderNo = order.model.order.orderNo;
            order.viewModel.orderTime = order.model.order.orderTime;
            order.viewModel.principal = (order.model.order.principal / 100).toFixed(2);
            order.viewModel.productCategory = order.model.order.productCategory;
            order.viewModel.productIdentifier = order.model.order.productIdentifier;
            order.viewModel.repaidTime = order.model.order.repaidTime;
            order.viewModel.resultCode = order.model.order.resultCode;
            order.viewModel.resultTime = order.model.order.resultTime;
            order.viewModel.settleDate = order.model.order.settleDate;
            order.viewModel.transDesc = order.model.order.transDesc;
            order.viewModel.valueDate = order.model.order.valueDate;
            order.viewModel.yield = (order.model.order.yield / 100).toFixed(2);

            order.viewModel.productSnapshot = {};
            order.viewModel.productSnapshot.bankName = order.model.order.productSnapshot.bankName;
            order.viewModel.productSnapshot.drawee = order.model.order.productSnapshot.drawee;
            order.viewModel.productSnapshot.draweeInfo = order.model.order.productSnapshot.draweeInfo;
            order.viewModel.productSnapshot.endorseImageLink = order.model.order.productSnapshot.endorseImageLink;
            order.viewModel.productSnapshot.endSellTime = order.model.order.productSnapshot.endSellTime;
            order.viewModel.productSnapshot.enterpriseInfo = order.model.order.productSnapshot.enterpriseInfo;
            order.viewModel.productSnapshot.enterpriseLicense = order.model.order.productSnapshot.enterpriseLicense;
            order.viewModel.productSnapshot.enterpriseName = order.model.order.productSnapshot.enterpriseName;
            order.viewModel.productSnapshot.financingSumAmount = (order.model.order.productSnapshot.financingSumAmount / 100).toFixed(2);
            order.viewModel.productSnapshot.issueNo = order.model.order.productSnapshot.issueNo;
            order.viewModel.productSnapshot.issueTime = order.model.order.productSnapshot.issueTime;
            order.viewModel.productSnapshot.paidAmount = (order.model.order.productSnapshot.paidAmount / 100).toFixed(2);
            order.viewModel.productSnapshot.period = order.model.order.productSnapshot.period;
            order.viewModel.productSnapshot.pledgeNo = order.model.order.productSnapshot.pledgeNo;
            order.viewModel.productSnapshot.productCategory = order.model.order.productSnapshot.productCategory;
            order.viewModel.productSnapshot.productIdentifier = order.model.order.productSnapshot.productIdentifier;
            order.viewModel.productSnapshot.productName = order.model.order.productSnapshot.productName;
            order.viewModel.productSnapshot.productNo = order.model.order.productSnapshot.productNo;
            order.viewModel.productSnapshot.productTitle = order.viewModel.productSnapshot.productName + ' 第' + parseInt(order.viewModel.productSnapshot.issueNo, 10) + '期';
            order.viewModel.productSnapshot.repaid = order.model.order.productSnapshot.repaid;
            order.viewModel.productSnapshot.repaidTime = order.model.order.productSnapshot.repaidTime;
            order.viewModel.productSnapshot.repaymentDeadline = order.model.order.productSnapshot.repaymentDeadline;
            order.viewModel.productSnapshot.riskManagement = order.model.order.productSnapshot.riskManagement;
            order.viewModel.productSnapshot.riskManagementInfo = order.model.order.productSnapshot.riskManagementInfo;
            order.viewModel.productSnapshot.riskManagementMode = order.model.order.productSnapshot.riskManagementMode;
            order.viewModel.productSnapshot.settleDate = order.model.order.productSnapshot.settleDate;
            order.viewModel.productSnapshot.soldOut = order.model.order.productSnapshot.soldOut;
            order.viewModel.productSnapshot.soldOutTime = order.model.order.productSnapshot.soldOutTime;
            order.viewModel.productSnapshot.specifyValueDate = order.model.order.productSnapshot.riskManagement;
            order.viewModel.productSnapshot.startSellTime = order.model.order.productSnapshot.riskManagementInfo;
            order.viewModel.productSnapshot.unitPrice = (order.model.order.productSnapshot.riskManagementMode / 100).toFixed(2);
            order.viewModel.productSnapshot.usage = order.model.order.productSnapshot.settleDate;
            order.viewModel.productSnapshot.valueDate = order.model.order.productSnapshot.soldOut;
            order.viewModel.productSnapshot.valueDateMode = order.model.order.productSnapshot.soldOutTime;
            order.viewModel.productSnapshot.yield = (order.model.order.productSnapshot.yield / 100).toFixed(2);

            var now = JYMTimeService.getTime();
            if (order.viewModel.isRepaid) {
                order.viewModel.statusText = '已还款';
            } else if (now > moment(order.viewModel.settleDate)) {
                order.viewModel.statusText = '已结息';
            } else if (now > now > moment(order.viewModel.valueDate)) {
                order.viewModel.statusText = '已起息';
            } else {
                order.viewModel.statusText = '下单成功';
            }
        };

        order.toggleAgreement1 = function() {
            order.viewModel.showAgreement2 = false;
            $ionicScrollDelegate.scrollTop();
            order.viewModel.showAgreement1 = !order.viewModel.showAgreement1;
        };

        order.toggleAgreement2 = function() {
            order.viewModel.showAgreement1 = false;
            $ionicScrollDelegate.scrollTop();
            order.viewModel.showAgreement2 = !order.viewModel.showAgreement2;
        };

        $scope.$on('$ionicView.beforeEnter', function() {
            order.doRefresh();
        });

        order.doRefresh();
    });
