'use strict';
angular.module('jym.user.settle-account', [
    'jym.services.user',
    'jym.user.settle-account-deposit',
    'jym.user.settle-account-list',
    'jym.user.settle-account-withdrawal'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-settle-account', {
                url: '/user/settle-account',
                views: {
                    '@': {
                        controller: 'UserSettleAccountCtrl as ctrl',
                        templateUrl: 'app/user/settle-account/settle-account.tpl.html'
                    }
                }
            });
    })
    .controller('UserSettleAccountCtrl', function($scope, $state, $timeout, RESOURCES, UserService) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};

        ctrl.doRefresh = function() {
            if (ctrl.viewModel.refreshTime && Date.now() - ctrl.viewModel.refreshTime < 100) {
                return;
            }

            ctrl.viewModel.refreshTime = Date.now();

            ctrl.refreshUser()
                .then(function(result) {
                    ctrl.model = result;
                    ctrl.refreshViewModel();
                    return result;
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        ctrl.refreshUser = function() {
            return UserService.getUserInfo();
        };

        ctrl.refreshViewModel = function() {
            ctrl.viewModel.balance = (ctrl.model.balance / 100).toFixed(2);
            ctrl.viewModel.investingPrincipal = (ctrl.model.investingPrincipal / 100).toFixed(2);
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    });
