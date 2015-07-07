/*jshint -W024 */
'use strict';
angular.module('jym.user.orders-detail', [
    'jym.services.user'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-orders-detail', {
                url: '/user/orders/detail/{orderIdentifier}',
                views: {
                    user: {
                        controller: 'UserOrderDetailCtrl as order',
                        templateUrl: 'app/user/order/detail/detail.tpl.html'
                    }
                }
            });
    })
    .controller('UserOrderDetailCtrl', function($scope, $stateParams, $timeout, $ionicScrollDelegate, ProductService, UserService) {
        var order = this;

        order.model = {};
        order.viewModel = {};

        order.doRefresh = function() {
            order.viewModel.showAgreement1 = false;
            order.viewModel.showAgreement2 = false;
            order.viewModel.agreement1 = '';
            order.viewModel.agreement2 = '';

            order.refreshOrder()
                .then(function(result) {
                    order.model = result;
                    order.refreshViewModel();
                    return result;
                })
                .then(function() {
                    order.refreshOrderAgreement(1)
                        .then(function(result) {
                            order.viewModel.agreement1 = result.content;
                        });

                    order.refreshOrderAgreement(2)
                        .then(function(result) {
                            order.viewModel.agreement2 = result.content;
                        });
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);
        };

        order.refreshOrder = function() {
            return UserService.getOrderInfo($stateParams.orderIdentifier);
        };

        order.refreshOrderAgreement = function(agreementIndex) {
            return ProductService.getAgreementContent(order.model.productSnapshot.productIdentifier, agreementIndex);
        };

        order.refreshViewModel = function() {
            order.viewModel.accountTransactionIdentifier = order.model.accountTransactionIdentifier;
            order.viewModel.extraInterest = (order.model.extraInterest / 100).toFixed(2);
            order.viewModel.extraInterestRecords = order.model.extraInterestRecords;
            order.viewModel.extraYield = (order.model.extraYield / 100).toFixed(2);
            order.viewModel.interest = (order.model.interest / 100).toFixed(2);
            order.viewModel.isRepaid = order.model.isRepaid;
            order.viewModel.orderIdentifier = order.model.orderIdentifier;
            order.viewModel.orderNo = order.model.orderNo;
            order.viewModel.orderTime = order.model.orderTime;
            order.viewModel.principal = (order.model.principal / 100).toFixed(2);
            order.viewModel.productCategory = order.model.productCategory;
            order.viewModel.productIdentifier = order.model.productIdentifier;
            order.viewModel.repaidTime = order.model.repaidTime;
            order.viewModel.resultCode = order.model.resultCode;
            order.viewModel.resultTime = order.model.resultTime;
            order.viewModel.settleDate = order.model.settleDate;
            order.viewModel.transDesc = order.model.transDesc;
            order.viewModel.valueDate = order.model.valueDate;
            order.viewModel.yield = (order.model.yield / 100).toFixed(2);

            order.viewModel.productSnapshot = {};
            order.viewModel.productSnapshot.bankName = order.model.productSnapshot.bankName;
            order.viewModel.productSnapshot.drawee = order.model.productSnapshot.drawee;
            order.viewModel.productSnapshot.draweeInfo = order.model.productSnapshot.draweeInfo;
            order.viewModel.productSnapshot.endorseImageLink = order.model.productSnapshot.endorseImageLink;
            order.viewModel.productSnapshot.endSellTime = order.model.productSnapshot.endSellTime;
            order.viewModel.productSnapshot.enterpriseInfo = order.model.productSnapshot.enterpriseInfo;
            order.viewModel.productSnapshot.enterpriseLicense = order.model.productSnapshot.enterpriseLicense;
            order.viewModel.productSnapshot.enterpriseName = order.model.productSnapshot.enterpriseName;
            order.viewModel.productSnapshot.financingSumAmount = (order.model.productSnapshot.financingSumAmount / 100).toFixed(2);
            order.viewModel.productSnapshot.issueNo = order.model.productSnapshot.issueNo;
            order.viewModel.productSnapshot.issueTime = order.model.productSnapshot.issueTime;
            order.viewModel.productSnapshot.paidAmount = (order.model.productSnapshot.paidAmount / 100).toFixed(2);
            order.viewModel.productSnapshot.period = order.model.productSnapshot.period;
            order.viewModel.productSnapshot.pledgeNo = order.model.productSnapshot.pledgeNo;
            order.viewModel.productSnapshot.productCategory = order.model.productSnapshot.productCategory;
            order.viewModel.productSnapshot.productIdentifier = order.model.productSnapshot.productIdentifier;
            order.viewModel.productSnapshot.productName = order.model.productSnapshot.productName;
            order.viewModel.productSnapshot.productNo = order.model.productSnapshot.productNo;
            order.viewModel.productSnapshot.productTitle = order.viewModel.productSnapshot.productName + ' 第' + parseInt(order.viewModel.productSnapshot.issueNo, 10) + '期';
            order.viewModel.productSnapshot.repaid = order.model.productSnapshot.repaid;
            order.viewModel.productSnapshot.repaidTime = order.model.productSnapshot.repaidTime;
            order.viewModel.productSnapshot.repaymentDeadline = order.model.productSnapshot.repaymentDeadline;
            order.viewModel.productSnapshot.riskManagement = order.model.productSnapshot.riskManagement;
            order.viewModel.productSnapshot.riskManagementInfo = order.model.productSnapshot.riskManagementInfo;
            order.viewModel.productSnapshot.riskManagementMode = order.model.productSnapshot.riskManagementMode;
            order.viewModel.productSnapshot.settleDate = order.model.productSnapshot.settleDate;
            order.viewModel.productSnapshot.soldOut = order.model.productSnapshot.soldOut;
            order.viewModel.productSnapshot.soldOutTime = order.model.productSnapshot.soldOutTime;
            order.viewModel.productSnapshot.specifyValueDate = order.model.productSnapshot.riskManagement;
            order.viewModel.productSnapshot.startSellTime = order.model.productSnapshot.riskManagementInfo;
            order.viewModel.productSnapshot.unitPrice = (order.model.productSnapshot.riskManagementMode / 100).toFixed(2);
            order.viewModel.productSnapshot.usage = order.model.productSnapshot.settleDate;
            order.viewModel.productSnapshot.valueDate = order.model.productSnapshot.soldOut;
            order.viewModel.productSnapshot.valueDateMode = order.model.productSnapshot.soldOutTime;
            order.viewModel.productSnapshot.yield = (order.model.productSnapshot.yield / 100).toFixed(2);

            var now = moment();
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

        $scope.$on('$ionicView.enter', function() {
            order.doRefresh();
        });

        order.doRefresh();
    });
