'use strict';
angular.module('jym.user.jinbaoyin-list', [
    'jym.services.user',
    'jym.user.jinbaoyin-detail'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-jinbaoyin-list', {
                url: '/user/jinbaoyin/list',
                views: {
                    '@': {
                        controller: 'UserJinbaoyinListCtrl as ctrl',
                        templateUrl: 'app/user/jinbaoyin/list/list.tpl.html'
                    }
                }
            });
    })
    .controller('UserJinbaoyinListCtrl', function($scope, $timeout, UserService) {
        var ctrl = this;

        var getViewItem = function(modelItem) {
            var item = {};
            item.amount = (modelItem.amount / 100).toFixed(2);
            item.predeterminedResultDate = modelItem.predeterminedResultDate;
            item.resultCode = modelItem.resultCode;
            item.resultTime = modelItem.resultTime;
            item.trade = modelItem.trade;
            item.tradeCode = modelItem.tradeCode;
            item.transactionIdentifier = modelItem.transactionIdentifier;
            item.transactionTime = modelItem.transactionTime;
            item.transDesc = modelItem.transDesc;
            return item;
        };

        ctrl.viewModel = {};

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

            UserService.getJBYAccountList(ctrl.viewModel.nextPageIndex)
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
