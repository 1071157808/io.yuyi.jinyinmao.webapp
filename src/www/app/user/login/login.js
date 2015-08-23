'use strict';
angular.module('jym.user.login', [
    'jym.services.user',
    'jym.user.signup'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-login', {
                url: '/user/login',
                views: {
                    '@': {
                        controller: 'UserLoginCtrl as ctrl',
                        templateUrl: 'app/user/login/login.tpl.html'
                    }
                }
            });
    })
    .controller('UserLoginCtrl', function($scope, $stateParams, $timeout, $ionicHistory, $ionicNavBarDelegate, RESOURCES, REGEX, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.viewModel = {};

        ctrl.doRefresh = function() {
            if (ctrl.viewModel.refreshTime && Date.now() - ctrl.viewModel.refreshTime < 100) {
                return;
            }

            ctrl.viewModel.refreshTime = Date.now();

            $ionicNavBarDelegate.showBackButton(false);
            ctrl.resetInput();
        };

        ctrl.login = function() {
            if (ctrl.loginButtonEnable()) {
                UserService.login(ctrl.viewModel.cellphone, ctrl.viewModel.password)
                    .then(function(result) {
                        if (!result.userExist) {
                            JYMUtilityService.showAlert(RESOURCES.ALERT.USER.USER_NOT_EXIST);
                            return;
                        }

                        if (result.lock) {
                            JYMUtilityService.showAlert(RESOURCES.ALERT.USER.USER_LOGIN_PASSWORD_LOCK);
                            return;
                        }

                        if (result.remainCount < 3) {
                            JYMUtilityService.showAlert(RESOURCES.ALERT.USER.USER_LOGIN_PASSWORD_REMIAN_LESS);
                            return;
                        }

                        if (!result.success) {
                            JYMUtilityService.showAlert(RESOURCES.ALERT.USER.USER_LOGIN_FAIL);
                            return;
                        }

                        JYMUtilityService.showAlert(RESOURCES.TIP.USER.LOGIN_SUCCESS);

                        $timeout(function() {
                            ctrl.resetInput();
                            if ($ionicHistory.backView()) {
                                $ionicHistory.goBack();
                            } else {
                                JYMUtilityService.goWithDisableBack('jym.user');
                            }
                        }, 1000);
                    });

            }
        };

        ctrl.loginButtonEnable = function() {
            return ctrl.viewModel.cellphone && ctrl.viewModel.password;
        };

        ctrl.resetInput = function() {
            ctrl.viewModel.cellphone = ctrl.viewModel.cellphone || '';
            ctrl.viewModel.password = '';
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });

        $scope.$on('$ionicView.beforeLeave', function() {
            $ionicNavBarDelegate.showBackButton(true);
        });

        $scope.$on('$ionicView.leave', function() {
            $ionicNavBarDelegate.showBackButton(true);
        });

        ctrl.doRefresh();
    });
