/*jshint -W024 */
'use strict';
angular.module('jym.user.orders', [
    'jym.services',
    'jym.services.user',
    'jym.user.settle-account-detail'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-orders', {
                url: '/user/orders',
                views: {
                    '@': {
                        controller: 'UserOrdersCtrl as ctrl',
                        templateUrl: 'app/user/order/order.tpl.html'
                    }
                }
            });
    })
    .controller('UserOrdersCtrl', function($scope, $timeout, UserService, JYMTimeService) {
        var ctrl = this;

        var getViewItem = function(modelItem) {
            var item = {};
            item.accountTransactionIdentifier = modelItem.accountTransactionIdentifier;
            item.extraInterest = (modelItem.extraInterest / 100).toFixed(2);
            item.extraInterestRecords = modelItem.extraInterestRecords;
            item.extraYield = (modelItem.extraYield / 100).toFixed(2);
            item.interest = (modelItem.interest / 100).toFixed(2);
            item.isRepaid = modelItem.isRepaid;
            item.orderIdentifier = modelItem.orderIdentifier;
            item.orderNo = modelItem.orderNo;
            item.orderTime = modelItem.orderTime;
            item.principal = (modelItem.principal / 100).toFixed(2);
            item.productCategory = modelItem.productCategory;
            item.productIdentifier = modelItem.productIdentifier;
            item.repaidTime = modelItem.repaidTime;
            item.resultCode = modelItem.resultCode;
            item.resultTime = modelItem.resultTime;
            item.settleDate = modelItem.settleDate;
            item.transDesc = modelItem.transDesc;
            item.valueDate = modelItem.valueDate;
            item.yield = (modelItem.yield / 100).toFixed(2);

            item.productSnapshot = {};
            item.productSnapshot.bankName = modelItem.productSnapshot.bankName;
            item.productSnapshot.drawee = modelItem.productSnapshot.drawee;
            item.productSnapshot.draweeInfo = modelItem.productSnapshot.draweeInfo;
            item.productSnapshot.endorseImageLink = modelItem.productSnapshot.endorseImageLink;
            item.productSnapshot.endSellTime = modelItem.productSnapshot.endSellTime;
            item.productSnapshot.enterpriseInfo = modelItem.productSnapshot.enterpriseInfo;
            item.productSnapshot.enterpriseLicense = modelItem.productSnapshot.enterpriseLicense;
            item.productSnapshot.enterpriseName = modelItem.productSnapshot.enterpriseName;
            item.productSnapshot.financingSumAmount = (modelItem.productSnapshot.financingSumAmount / 100).toFixed(2);
            item.productSnapshot.issueNo = modelItem.productSnapshot.issueNo;
            item.productSnapshot.issueTime = modelItem.productSnapshot.issueTime;
            item.productSnapshot.paidAmount = (modelItem.productSnapshot.paidAmount / 100).toFixed(2);
            item.productSnapshot.period = modelItem.productSnapshot.period;
            item.productSnapshot.pledgeNo = modelItem.productSnapshot.pledgeNo;
            item.productSnapshot.productCategory = modelItem.productSnapshot.productCategory;
            item.productSnapshot.productIdentifier = modelItem.productSnapshot.productIdentifier;
            item.productSnapshot.productName = modelItem.productSnapshot.productName;
            item.productSnapshot.productNo = modelItem.productSnapshot.productNo;
            item.productSnapshot.productTitle = item.productSnapshot.productName + ' 第' + parseInt(item.productSnapshot.issueNo, 10) + '期';
            item.productSnapshot.repaid = modelItem.productSnapshot.repaid;
            item.productSnapshot.repaidTime = modelItem.productSnapshot.repaidTime;
            item.productSnapshot.repaymentDeadline = modelItem.productSnapshot.repaymentDeadline;
            item.productSnapshot.riskManagement = modelItem.productSnapshot.riskManagement;
            item.productSnapshot.riskManagementInfo = modelItem.productSnapshot.riskManagementInfo;
            item.productSnapshot.riskManagementMode = modelItem.productSnapshot.riskManagementMode;
            item.productSnapshot.settleDate = modelItem.productSnapshot.settleDate;
            item.productSnapshot.soldOut = modelItem.productSnapshot.soldOut;
            item.productSnapshot.soldOutTime = modelItem.productSnapshot.soldOutTime;
            item.productSnapshot.specifyValueDate = modelItem.productSnapshot.riskManagement;
            item.productSnapshot.startSellTime = modelItem.productSnapshot.riskManagementInfo;
            item.productSnapshot.unitPrice = (modelItem.productSnapshot.riskManagementMode / 100).toFixed(2);
            item.productSnapshot.usage = modelItem.productSnapshot.settleDate;
            item.productSnapshot.valueDate = modelItem.productSnapshot.soldOut;
            item.productSnapshot.valueDateMode = modelItem.productSnapshot.soldOutTime;
            item.productSnapshot.yield = (modelItem.productSnapshot.yield / 100).toFixed(2);

            var now = JYMTimeService.getTime();
            if (item.isRepaid) {
                item.statusText = '已还款';
            } else if (now > moment(item.settleDate)) {
                item.statusText = '已结息';
            } else if (now > moment(item.valueDate)) {
                item.statusText = '已起息';
            } else {
                item.statusText = '下单成功';
            }
            return item;
        };

        ctrl.viewModel = {};

        ctrl.doRefresh = function() {
            if (ctrl.viewModel.refreshTime && Date.now() - ctrl.viewModel.refreshTime < 100) {
                return;
            }

            ctrl.viewModel.refreshTime = Date.now();

            ctrl.viewModel.items = [];
            ctrl.viewModel.currentPageIndex = 0;
            ctrl.viewModel.nextPageIndex = 0;
            ctrl.viewModel.pageSize = 10;
            ctrl.viewModel.totalCount = 0;
            ctrl.viewModel.totalPageCount = 1;
            ctrl.viewModel.loading = false;

            ctrl.loadMoreData();

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        ctrl.loadMoreData = function() {
            if (ctrl.viewModel.loading) {
                return;
            }

            ctrl.viewModel.loading = true;

            UserService.getOrderList(ctrl.viewModel.nextPageIndex)
                .then(function(result) {
                    ctrl.viewModel.currentPageIndex = result.pageIndex;
                    ctrl.viewModel.nextPageIndex = result.pageIndex + 1;
                    ctrl.viewModel.pageSize = result.pageSize;
                    ctrl.viewModel.totalCount = result.totalCount;
                    ctrl.viewModel.totalPageCount = result.totalPageCount;

                    _.forEach(result.items, function(i) {
                        ctrl.viewModel.items.push(getViewItem(i));
                    });

                    ctrl.viewModel.loading = false;
                });
            $timeout(function() {
                $scope.$broadcast('scroll.infiniteScrollComplete');
            }, 1000);
        };

        ctrl.moreDataCanBeLoaded = function() {
            return ctrl.viewModel.nextPageIndex < ctrl.viewModel.totalPageCount;
        };

        ctrl.doRefresh();
    });
