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
        'jym.user.settle-account',
        'jym.user.investment'
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
    .controller('UserCtrl', function($scope, $timeout, $ionicScrollDelegate, RESOURCES, UserService, JYMUtilityService, $ionicNavBarDelegate) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};

        ctrl.viewModel.showQian1 = false;
        ctrl.viewModel.showQian2 = false;
        //ctrl.viewModel.qian = false;
        ctrl.viewModel.amount = "0.00";

        ctrl.doRefresh = function() {
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
            ctrl.viewModel.cellphone = ctrl.model.cellphone;
            ctrl.viewModel.credentialNo = ctrl.model.credentialNo || '未实名认证';
            ctrl.viewModel.investingPrincipal = (ctrl.model.investingPrincipal / 100).toFixed(2);
            ctrl.viewModel.realName = ctrl.model.realName || '未实名认证';
            ctrl.viewModel.verified = ctrl.model.verified;
            ctrl.viewModel.signed = ctrl.model.signed;
        };

        ctrl.loginOut = function() {
            UserService.loginOut();

            JYMUtilityService.showAlert(RESOURCES.TIP.USER.LOGIN_OUT);

            $timeout(function() {
                JYMUtilityService.goWithDisableBack('jym.user-login');
            }, 1000);
        };

        ctrl.toggleQian1 = function() {
            ctrl.viewModel.showQian2 = false;
            $ionicScrollDelegate.scrollTop();
            ctrl.viewModel.showQian1 = !ctrl.viewModel.showQian1;
            $ionicNavBarDelegate.showBackButton(!ctrl.viewModel.showQian1);
        };

        ctrl.toggleQian2 = function() {
            UserService.userSign()
                .then(function(result) {
                    ctrl.viewModel.amount = result.amount.toFixed(2);
                    ctrl.viewModel.showQian1 = false;
                    $ionicScrollDelegate.scrollTop();
                    ctrl.viewModel.showQian2 = !ctrl.viewModel.showQian2;
                    $ionicNavBarDelegate.showBackButton(!ctrl.viewModel.showQian2);
                });
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });

        $scope.$on('$ionicView.leave', function() {
            $ionicScrollDelegate.scrollTop();
        });

        ctrl.doRefresh();
    });