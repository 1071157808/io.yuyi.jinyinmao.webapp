'use strict';
angular.module('jym.user.settle-account-detail', [
    'jym.services.user'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-settle-account-detail', {
                url: '/user/settle-account/detail/{transactionIdentifier}',
                views: {
                    '@': {
                        controller: 'UserSettleAccountDetailCtrl as transaction',
                        templateUrl: 'app/user/settle-account/detail/detail.tpl.html'
                    }
                }
            });
    })
    .controller('UserSettleAccountDetailCtrl', function($scope, $stateParams, $timeout, $ionicHistory, UserService, JYMUtilityService) {
        var transaction = this;

        transaction.model = {};
        transaction.viewModel = {};

        transaction.canBack = function() {
            return $ionicHistory.backView();
        };

        transaction.doRefresh = function() {
            transaction.refresh()
                .then(function(result) {
                    transaction.model = result;
                    transaction.refreshViewModel();
                    return result;
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        transaction.go = function(toState, params) {
            params = params || {};
            JYMUtilityService.goWithDisableBack(toState, params);
        };

        transaction.refresh = function() {
            return UserService.getSettelAccountTransaction($stateParams.transactionIdentifier);
        };

        transaction.refreshViewModel = function() {
            transaction.viewModel.amount = (transaction.model.amount / 100).toFixed(2);
            transaction.viewModel.bankCardNo = transaction.model.bankCardNo;
            transaction.viewModel.channelCode = transaction.model.channelCode;
            transaction.viewModel.resultCode = transaction.model.resultCode;
            transaction.viewModel.resultTime = transaction.model.resultTime;
            transaction.viewModel.showBankCard = transaction.viewModel.bankCardNo.length > 0;
            transaction.viewModel.trade = transaction.model.trade;
            transaction.viewModel.tradeCode = transaction.model.tradeCode;
            transaction.viewModel.transactionIdentifier = transaction.model.transactionIdentifier;
            transaction.viewModel.transactionTime = transaction.model.transactionTime;
            transaction.viewModel.transDesc = transaction.model.transDesc;

            transaction.viewModel.resultStyle = { color: '#444' };

            if (transaction.viewModel.resultCode === 1) {
                transaction.viewModel.resultStyle = { color: '#47B28B' };
            }

            if (transaction.viewModel.resultCode === -1) {
                transaction.viewModel.resultStyle = { color: '#E74C3C' };
            }
        };

        $scope.$on('$ionicView.beforeEnter', function() {
            transaction.doRefresh();
        });

        transaction.doRefresh();
    });
