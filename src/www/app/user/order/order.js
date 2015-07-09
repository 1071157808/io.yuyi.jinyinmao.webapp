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
                    user: {
                        controller: 'UserOrdersCtrl as orders',
                        templateUrl: 'app/user/order/order.tpl.html'
                    }
                }
            });
    })
    .controller('UserOrdersCtrl', function($scope, $timeout, UserService, JYMUtilityService) {
        var orders = this;

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

            var now = JYMUtilityService.getTime();
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

        orders.viewModel = {};

        orders.doRefresh = function() {
            orders.viewModel.items = [];
            orders.viewModel.currentPageIndex = 0;
            orders.viewModel.nextPageIndex = 0;
            orders.viewModel.pageSize = 10;
            orders.viewModel.totalCount = 0;
            orders.viewModel.totalPageCount = 1;
            orders.viewModel.loading = false;

            orders.loadMoreData();

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);
        };

        orders.loadMoreData = function() {
            if (orders.viewModel.loading) {
                return;
            }

            orders.viewModel.loading = true;

            UserService.getOrderList(orders.viewModel.nextPageIndex)
                .then(function(result) {
                    orders.viewModel.currentPageIndex = result.pageIndex;
                    orders.viewModel.nextPageIndex = result.pageIndex + 1;
                    orders.viewModel.pageSize = result.pageSize;
                    orders.viewModel.totalCount = result.totalCount;
                    orders.viewModel.totalPageCount = result.totalPageCount;

                    _.forEach(result.items, function(i) {
                        orders.viewModel.items.push(getViewItem(i));
                    });

                    orders.viewModel.loading = false;
                });
            $timeout(function() {
                $scope.$broadcast('scroll.infiniteScrollComplete');
            }, 1000);
        };

        orders.moreDataCanBeLoaded = function() {
            return orders.viewModel.nextPageIndex < orders.viewModel.totalPageCount;
        };

        orders.doRefresh();
    });
