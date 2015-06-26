angular.module('jym.user.settle-account-list', [
    'jym.services.user'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-settle-account-list', {
                url: '/user/settle-account/list',
                views: {
                    'user': {
                        controller: 'UserSettleAccountListCtrl as account',
                        templateUrl: 'app/user/settle-account/list/list.tpl.html'
                    }
                }
            });
    })
    .controller('UserSettleAccountListCtrl', function($scope, $timeout, UserService) {
        var account = this;

        var getViewItem = function(modelItem) {
            var item = {};
            item.amount = (modelItem.amount / 100).toFixed(2);
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
        account.viewModel.items = [];
        account.viewModel.currentPageIndex = 0;
        account.viewModel.nextPageIndex = 0;
        account.viewModel.pageSize = 10;
        account.viewModel.totalCount = 0;
        account.viewModel.totalPageCount = 1;

        account.loadMoreData = function() {
            UserService.getSettelAccountList(account.viewModel.nextPageIndex)
                .then(function(result) {
                    account.viewModel.currentPageIndex = result.pageIndex;
                    account.viewModel.nextPageIndex = result.pageIndex + 1;
                    account.viewModel.pageSize = result.pageSize;
                    account.viewModel.totalCount = result.totalCount;
                    account.viewModel.totalPageCount = result.totalPageCount;

                    _.forEach(result.items, function(i) {
                        account.viewModel.items.push(getViewItem(i));
                    });
                });
            $timeout(function() {
                $scope.$broadcast('scroll.infiniteScrollComplete');
            }, 1000);
        };

        account.moreDataCanBeLoaded = function() {
            return true;
        };

        account.doRefresh = function() {
            account.viewModel.items = [];
            account.viewModel.currentPageIndex = 0;
            account.viewModel.nextPageIndex = 0;
            account.viewModel.pageSize = 10;
            account.viewModel.totalCount = 0;
            account.viewModel.totalPageCount = 1;

            account.loadMoreData();

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);
        };
    });
