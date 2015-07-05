'use strict';
angular.module('jym.user.jinbaoyin', [
    'jym.services.user',
    'jym.user.jinbaoyin-list'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-jinbaoyin', {
                url: '/user/jinbaoyin',
                views: {
                    user: {
                        controller: 'UserJinbaoyinCtrl as ctrl',
                        templateUrl: 'app/user/jinbaoyin/jinbaoyin.tpl.html'
                    }
                }
            });
    })
    .controller('UserJinbaoyinCtrl', function($scope, $state, $timeout, RESOURCES, JinbaoyinService, UserService) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};

        ctrl.doRefresh = function() {
            ctrl.refreshUser()
                .then(function(result) {
                    ctrl.model.user = result;
                    ctrl.refreshUserViewModel();
                    return result;
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);
        };

        ctrl.refreshUser = function() {
            return UserService.getUserInfo();
        };

        ctrl.refreshProduct = function() {
            return JinbaoyinService.getIndex();
        };

        ctrl.refreshProductViewModel = function() {
            ctrl.viewModel.jBYYield = ctrl.model.product['yield'] / 100;
        };

        ctrl.refreshUserViewModel = function() {
            ctrl.viewModel.jBYLastInterest = (ctrl.model.user.jBYLastInterest / 100).toFixed(2);
            ctrl.viewModel.jBYTotalAmount = (ctrl.model.user.jBYTotalAmount / 100).toFixed(2);
            ctrl.viewModel.jBYTotalInterest = (ctrl.model.user.jBYTotalInterest / 100).toFixed(2);
            ctrl.viewModel.jBYTotalPricipal = (ctrl.model.user.jBYTotalPricipal / 100).toFixed(2);
            ctrl.viewModel.jBYWithdrawalableAmount = (ctrl.model.user.jBYWithdrawalableAmount / 100).toFixed(2);
            ctrl.viewModel.todayJBYWithdrawalAmount = (ctrl.model.user.todayJBYWithdrawalAmount / 100).toFixed(2);
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    });
