angular.module('jym.yinpiao', [
    'jym.services',
    'jym.yinpiao.detail'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('jym.yinpiao', {
                url: '/yinpiao',
                views: {
                    'yinpiao':{
                        controller: 'YinpiaoIndexCtrl as products',
                        templateUrl: 'app/yinpiao/index.tpl.html'
                    }
                }
            })
    })
    .controller('YinpiaoIndexCtrl', function($scope, $timeout, $filter, ProductService) {
        var products = this;

        var getSaleProgress = function(product) {
            return ProductService.getSaleProgress(product.paidAmount, product.financingSumAmount);
        };

        var getSaleStatus = function(product) {
            var status = ProductService.getSaleStatus(product.soldOut, product.startSellTime, product.endSellTime);

            switch (status) {
                case 10:
                    return {
                        status: 10,
                        text: '待售',
                        icon: 'jym-icon-waiting',
                        buttonClass: '',
                        buttonText: '待 售'
                    };
                case 20:
                    return {
                        status: 20,
                        text: '抢购',
                        icon: 'jym-icon-selling',
                        buttonClass: '',
                        buttonText: '立 即 抢 购'
                    };
                case 30:
                    return {
                        status: 30,
                        text: '售罄',
                        icon: 'jym-icon-soldout',
                        buttonClass: '',
                        buttonText: '售 罄'
                    };
            }
        };

        var getValueDateModeText = function(valueDateMode, valueDate, specifyValueDate) {
            return ProductService.getValueDateModeText(valueDateMode, valueDate, specifyValueDate);
        };

        var getViewItem = function(modelItem) {
            var item = {};
            item.bankName = modelItem.bankName;
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
            item.valueDateText = getValueDateModeText(modelItem.valueDateMode, modelItem.valueData, modelItem.specifyValueDate);
            item.yield = modelItem.yield / 100;

            if(item.status.status === 10) {
                item.statusText = '待售';
                item.statusTextClass = '';
                item.timeText = '开售时间 ' + $filter('time')(item.startSellTime);
            }else if(item.status.status === 20) {
                item.statusText = '抢购 已售出' + item.sellProgress + '%';
                item.statusTextClass = '';
                item.timeText = '起息时间 ' + item.valueDateText;
            }else {
                item.statusText = '售罄 请期待下期';
                item.statusTextClass = '';
                item.timeText = '还款时间 ' + $filter('time')(item.repaymentDeadline);
            }

            return item;
        };

        products.viewModel = {};
        products.viewModel.items = [];
        products.viewModel.currentPageIndex = 0;
        products.viewModel.nextPageIndex = 0;
        products.viewModel.pageSize = 10;
        products.viewModel.totalCount = 0;
        products.viewModel.totalPageCount = 1;

        products.loadMoreData = function() {
            ProductService.getYinpiaoPage(products.viewModel.nextPageIndex)
                .then(function(result) {
                    products.viewModel.currentPageIndex = result.pageIndex;
                    products.viewModel.nextPageIndex = result.pageIndex + 1;
                    products.viewModel.pageSize = result.pageSize;
                    products.viewModel.totalCount = result.totalCount;
                    products.viewModel.totalPageCount = result.totalPageCount;

                    _.forEach(result.items, function(i) {
                        products.viewModel.items.push(getViewItem(i));
                    });
                });
            $timeout(function() {
                $scope.$broadcast('scroll.infiniteScrollComplete');
            }, 1000);
        };

        products.moreDataCanBeLoaded = function() {
            return products.viewModel.nextPageIndex < products.viewModel.totalPageCount;
        };

        products.doRefresh = function() {
            products.viewModel.items = [];
            products.viewModel.currentPageIndex = 0;
            products.viewModel.nextPageIndex = 0;
            products.viewModel.pageSize = 10;
            products.viewModel.totalCount = 0;
            products.viewModel.totalPageCount = 1;

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);
        };
    });
