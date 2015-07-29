/*jshint -W024 */
'use strict';
angular.module('jym.user.jinbaoyin', [
    'jym.services.user',
    'jym.user.jinbaoyin-list',
    'jym.user.jinbaoyin-withdrawal'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-jinbaoyin', {
                url: '/user/jinbaoyin',
                views: {
                    '@': {
                        controller: 'UserJinbaoyinCtrl as ctrl',
                        templateUrl: 'app/user/jinbaoyin/jinbaoyin.tpl.html'
                    }
                }
            });
    })
    .controller('UserJinbaoyinCtrl', function($scope, $state, $timeout, $q, RESOURCES, JinbaoyinService, UserService) {
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

            ctrl.refreshProduct()
                .then(function(result) {
                    ctrl.model.product = result;
                    ctrl.refreshProductViewModel();
                    return result;
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        ctrl.refreshProduct = function() {
            return JinbaoyinService.getIndex();
        };

        ctrl.refreshProductViewModel = function() {
            ctrl.viewModel.jBYYield = ctrl.model.product.yield / 100;
        };

        ctrl.refreshUser = function() {
            return UserService.getUserInfo();
        };

        ctrl.refreshUserViewModel = function() {
            ctrl.viewModel.jBYLastInterest = (ctrl.model.user.jBYLastInterest / 100).toFixed(2);
            ctrl.viewModel.jBYTotalAmount = (ctrl.model.user.jBYTotalAmount / 100).toFixed(2);
            ctrl.viewModel.jBYTotalInterest = (ctrl.model.user.jBYTotalInterest / 100).toFixed(2);
            ctrl.viewModel.jBYTotalPricipal = (ctrl.model.user.jBYTotalPricipal / 100).toFixed(2);
            ctrl.viewModel.jBYWithdrawalableAmount = (ctrl.model.user.jBYWithdrawalableAmount / 100).toFixed(2);
            ctrl.viewModel.todayJBYWithdrawalAmount = (ctrl.model.user.todayJBYWithdrawalAmount / 100).toFixed(2);
        };

        $scope.$on('$ionicView.beforeEnter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    });
