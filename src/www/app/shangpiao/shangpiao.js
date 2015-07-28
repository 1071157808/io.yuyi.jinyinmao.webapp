/*jshint -W024 */
'use strict';
angular.module('jym.shangpiao', [
    'jym.services',
    'jym.shangpiao.detail'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.shangpiao', {
                url: '/shangpiao',
                views: {
                    '@': {
                        controller: 'ShangpiaoIndexCtrl as ctrl',
                        templateUrl: 'app/shangpiao/shangpiao.tpl.html'
                    }
                }
            });
    })
    .controller('ShangpiaoIndexCtrl', function($scope, $timeout, $filter, ProductService) {
        var ctrl = this;

        ctrl.viewModel = {};

        var getSaleProgress = function(product) {
            return ProductService.getSaleProgress(product.paidAmount, product.financingSumAmount, product.soldOut, product.startSellTime, product.endSellTime, product.repaid);
        };

        var getSaleStatus = function(product) {
            return ProductService.getSaleStatus(product.soldOut, product.startSellTime, product.endSellTime, product.repaid);
        };

        var getValueDateModeText = function(valueDateMode, valueDate, specifyValueDate) {
            return ProductService.getValueDateModeText(valueDateMode, valueDate, specifyValueDate);
        };

        var getViewItem = function(modelItem) {
            var item = {};
            item.bankName = modelItem.bankName;
            item.currentValueDate = modelItem.currentValueDate;
            item.drawee = modelItem.drawee;
            item.draweeInfo = modelItem.draweeInfo;
            item.endorseImageLink = modelItem.endorseImageLink;
            item.endSellTime = modelItem.endSellTime;
            item.enterpriseInfo = modelItem.enterpriseInfo;
            item.enterpriseLicense = modelItem.enterpriseLicense;
            item.enterpriseName = modelItem.enterpriseName;
            item.financingSumAmount = modelItem.financingSumAmount / 1000000;
            item.issueNo = modelItem.issueNo;
            item.issueTime = modelItem.issueTime;
            item.paidAmount = modelItem.paidAmount;
            item.period = modelItem.period;
            item.productCategory = modelItem.productCategory;
            item.productIdentifier = modelItem.productIdentifier;
            item.productName = modelItem.productName + ' ' + '第' + modelItem.issueNo + '期';
            item.productNo = modelItem.productNo;
            item.remainCount = ((modelItem.financingSumAmount - modelItem.paidAmount) / modelItem.unitPrice).toFixed(0);
            item.repaid = modelItem.repaid;
            item.repaidTime = modelItem.repaidTime;
            item.repaymentDeadline = modelItem.repaymentDeadline;
            item.riskManagement = modelItem.riskManagement;
            item.riskManagementInfo = modelItem.riskManagementInfo;
            item.riskManagementMode = modelItem.riskManagementMode;
            item.sellProgress = getSaleProgress(modelItem);
            item.sellProgressInCircleProgress = item.sellProgress / 100;
            item.settleDate = modelItem.settleDate;
            item.soldOut = modelItem.soldOut;
            item.soldOutTime = modelItem.soldOutTime;
            item.specifyValueDate = modelItem.specifyValueDate;
            item.startSellTime = modelItem.startSellTime;
            item.status = getSaleStatus(modelItem);
            item.unitPrice = (modelItem.unitPrice / 100).toFixed(0);
            item.usage = modelItem.usage;
            item.valueDate = modelItem.valueDate;
            item.valueDateMode = modelItem.valueDateMode;
            item.valueDateText = getValueDateModeText(modelItem.valueDateMode, modelItem.valueDate, modelItem.specifyValueDate);
            item.yield = modelItem.yield / 100;

            switch (item.status) {
                case 10:
                    item.statusText = '待售';
                    item.timeText = '开售时间 ' + $filter('time')(item.startSellTime);
                    break;
                case 20:
                    item.statusText = '抢购 已售出' + item.sellProgress + '%';
                    item.timeText = '起息时间 ' + item.valueDateText;
                    break;
                case 30:
                    item.statusText = '售罄 请期待下期';
                    item.timeText = '预计还款时间 ' + $filter('time')(item.repaymentDeadline);
                    break;
                case 40:
                    item.statusText = '项目结束';
                    item.timeText = '还款时间 ' + $filter('time')(item.repaidTime);
                    break;
                default :
                    item.statusText = '';
                    item.timeText = '';
            }

            return item;
        };

        ctrl.doRefresh = function() {
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

            ProductService.getShangpiaoPage(ctrl.viewModel.nextPageIndex)
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
