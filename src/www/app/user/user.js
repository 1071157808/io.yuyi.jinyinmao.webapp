'use strict';
angular.module('jym.user', [
    'jym.services.user',
    'jym.user.about',
    'jym.user.bank-card',
    'jym.user.coupon',
    'jym.user.detail',
    'jym.user.login',
    'jym.user.jinbaoyin',
    'jym.user.orders',
    'jym.user.security',
    'jym.user.settle-account'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user', {
                url: '/user',
                views: {
                    '@': {
                        controller: 'UserCtrl as ctrl',
                        templateUrl: 'app/user/user.tpl.html'
                    }
                }
            });
    })
    .controller('UserCtrl', function($scope, $timeout, $ionicScrollDelegate, RESOURCES, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};

        ctrl.doRefresh = function () {
            ctrl.refreshUser()
                .then(function (result) {
                    ctrl.model = result;
                    ctrl.refreshViewModel();
                    return result;
                });
            $timeout(function () {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        ctrl.refreshUser = function() {
            return UserService.getUserInfo();
        };

        ctrl.refreshViewModel = function() {
            ctrl.viewModel.balance = (ctrl.model.balance / 100).toFixed(2);
            ctrl.viewModel.cellphone = ctrl.model.cellphone;
            ctrl.viewModel.credentialNo = ctrl.model.credentialNo || '未实名认证';
            ctrl.viewModel.investingPrincipal = (ctrl.model.investingPrincipal / 100).toFixed(2);
            ctrl.viewModel.realName = ctrl.model.realName || '未实名认证';
            ctrl.viewModel.verified = ctrl.model.verified;
        };

        ctrl.loginOut = function() {
            UserService.loginOut();

            JYMUtilityService.showAlert(RESOURCES.TIP.USER.LOGIN_OUT);

            $timeout(function() {
                JYMUtilityService.goWithDisableBack('jym.user-login');
            }, 1000);
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });

        $scope.$on('$ionicView.leave', function() {
            $ionicScrollDelegate.scrollTop();
        });

        ctrl.doRefresh();
    });
