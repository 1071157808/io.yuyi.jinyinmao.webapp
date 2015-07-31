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
                        controller: 'UserSettleAccountDetailCtrl as ctrl',
                        templateUrl: 'app/user/settle-account/detail/detail.tpl.html'
                    }
                }
            });
    })
    .controller('UserSettleAccountDetailCtrl', function($scope, $stateParams, $timeout, $ionicHistory, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};

        ctrl.canBack = function() {
            return $ionicHistory.backView();
        };

        ctrl.doRefresh = function() {
            if (ctrl.viewModel.refreshTime && Date.now() - ctrl.viewModel.refreshTime < 100) {
                return;
            }

            ctrl.viewModel.refreshTime = Date.now();

            ctrl.refresh()
                .then(function(result) {
                    ctrl.model = result;
                    ctrl.refreshViewModel();
                    return result;
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        ctrl.go = function(toState, params) {
            params = params || {};
            JYMUtilityService.goWithDisableBack(toState, params);
        };

        ctrl.refresh = function() {
            return UserService.getSettelAccountTransaction($stateParams.transactionIdentifier);
        };

        ctrl.refreshViewModel = function() {
            ctrl.viewModel.amount = (ctrl.model.amount / 100).toFixed(2);
            ctrl.viewModel.bankCardNo = ctrl.model.bankCardNo;
            ctrl.viewModel.channelCode = ctrl.model.channelCode;
            ctrl.viewModel.resultCode = ctrl.model.resultCode;
            ctrl.viewModel.resultTime = ctrl.model.resultTime;
            ctrl.viewModel.showBankCard = ctrl.viewModel.bankCardNo.length > 0;
            ctrl.viewModel.trade = ctrl.model.trade;
            ctrl.viewModel.tradeCode = ctrl.model.tradeCode;
            ctrl.viewModel.transactionIdentifier = ctrl.model.transactionIdentifier;
            ctrl.viewModel.transactionTime = ctrl.model.transactionTime;
            ctrl.viewModel.transDesc = ctrl.model.transDesc;

            ctrl.viewModel.resultStyle = { color: '#444' };

            if (ctrl.viewModel.resultCode === 1) {
                ctrl.viewModel.resultStyle = { color: '#47B28B' };
            }

            if (ctrl.viewModel.resultCode === -1) {
                ctrl.viewModel.resultStyle = { color: '#E74C3C' };
            }
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    });
