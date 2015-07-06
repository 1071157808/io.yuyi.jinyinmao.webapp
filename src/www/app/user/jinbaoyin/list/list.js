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
                    user: {
                        controller: 'UserJinbaoyinListCtrl as account',
                        templateUrl: 'app/user/jinbaoyin/list/list.tpl.html'
                    }
                }
            });
    })
    .controller('UserJinbaoyinListCtrl', function($scope, $timeout, UserService) {
        var account = this;

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

        account.viewModel = {};

        account.doRefresh = function() {
            account.viewModel.items = [];
            account.viewModel.currentPageIndex = 0;
            account.viewModel.nextPageIndex = 0;
            account.viewModel.pageSize = 10;
            account.viewModel.totalCount = 0;
            account.viewModel.totalPageCount = 1;
            account.viewModel.loading = false;

            account.loadMoreData();

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);
        };

        account.loadMoreData = function() {
            if (account.viewModel.loading) {
                return;
            }

            account.viewModel.loading = true;

            UserService.getJBYAccountList(account.viewModel.nextPageIndex)
                .then(function(result) {
                    account.viewModel.currentPageIndex = result.pageIndex;
                    account.viewModel.nextPageIndex = result.pageIndex + 1;
                    account.viewModel.pageSize = result.pageSize;
                    account.viewModel.totalCount = result.totalCount;
                    account.viewModel.totalPageCount = result.totalPageCount;

                    _.forEach(result.items, function(i) {
                        account.viewModel.items.push(getViewItem(i));
                    });

                    account.viewModel.loading = false;
                });
            $timeout(function() {
                $scope.$broadcast('scroll.infiniteScrollComplete');
            }, 1000);
        };

        account.moreDataCanBeLoaded = function() {
            return account.viewModel.nextPageIndex < account.viewModel.totalPageCount;
        };

        account.doRefresh();
    });
