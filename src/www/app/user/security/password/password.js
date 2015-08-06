'use strict';
angular.module('jym.user.security-password', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-security-password', {
                url: '/user/security-password/{token}',
                views: {
                    '@': {
                        controller: 'UserSecurityPasswordCtrl as ctrl',
                        templateUrl: 'app/user/security/password/password.tpl.html'
                    }
                }
            })
            .state('jym.user-security-password-send-veri-code', {
                url: '/user/security-password-send-veri-code',
                views: {
                    '@': {
                        controller: 'UserSecurityPasswordSendVeriCodeCtrl as ctrl',
                        templateUrl: 'app/user/security/password/sendVeriCode.tpl.html'
                    }
                }
            });
    })
    .controller('UserSecurityPasswordCtrl', function($scope, $timeout, $stateParams, RESOURCES, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.viewModel = {};

        ctrl.doRefresh = function() {
            if (ctrl.viewModel.refreshTime && Date.now() - ctrl.viewModel.refreshTime < 100) {
                return;
            }

            ctrl.viewModel.refreshTime = Date.now();

            ctrl.resetInput();
        };

        ctrl.enableButton = function() {
            /*return ctrl.viewModel.password && ctrl.viewModel.confirmPassword && ctrl.viewModel.password === ctrl.viewModel.confirmPassword;*/
            return ctrl.viewModel.password && ctrl.viewModel.confirmPassword;
        };

        ctrl.resetInput = function() {
            ctrl.viewModel.password = '';
            ctrl.viewModel.confirmPassword = '';
        };

        ctrl.resetPassword = function () {

            if (ctrl.enableButton()) {
                var rgexp = /^[a-zA-Z\d~!@#$%^&*_]{6,18}$/;
                if (!rgexp.test(ctrl.viewModel.password)) {
                    JYMUtilityService.showAlert(RESOURCES.TIP.SECURITY.SECURITY_PASSWORD);
                    return false;
                }
                if (!rgexp.test(ctrl.viewModel.confirmPassword)) {
                    JYMUtilityService.showAlert(RESOURCES.TIP.SECURITY.SECURITY_CONFIRMPASSWORD);
                    return false;
                }
                if (ctrl.viewModel.password !== ctrl.viewModel.confirmPassword) {
                    JYMUtilityService.showAlert(RESOURCES.TIP.SECURITY.SECURITY_COMPAREPASSWORD);
                    return false;
                }
                UserService.resetLoginPassword(ctrl.viewModel.password, $stateParams.token)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.SECURITY.RESET_PASSWORD);
                            UserService.loginOut();
                            $timeout(function() {
                                ctrl.resetInput();
                                JYMUtilityService.goWithDisableBack('jym.user-login');
                            }, 1000);
                        }
                    });
            }
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    })
    .controller('UserSecurityPasswordSendVeriCodeCtrl', function($scope, $timeout, RESOURCES, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.viewModel = {};
        ctrl.viewModel.remainSeconds = 0;

        ctrl.doRefresh = function() {
            if (ctrl.viewModel.refreshTime && Date.now() - ctrl.viewModel.refreshTime < 100) {
                return;
            }

            ctrl.viewModel.refreshTime = Date.now();

            ctrl.resetInput();
        };

        ctrl.resetInput = function() {
            ctrl.viewModel.cellphone = '';
            ctrl.viewModel.veriCode = '';
        };

        ctrl.sendVeriCode = function() {
            if (ctrl.sendVeriCodeButtonEnable()) {
                ctrl.viewModel.remainSeconds = 60;
                UserService.sendVeriCode(ctrl.viewModel.cellphone, 20)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.MISC.SEND_VERI_CODE);
                        }
                    });
                ctrl.startTimer();
            }
        };

        ctrl.sendVeriCodeButtonEnable = function() {
            return ctrl.viewModel.cellphone && ctrl.viewModel.remainSeconds <= 0;
        };

        ctrl.showVeriCodeButton = function() {
            return ctrl.viewModel.remainSeconds <= 0;
        };

        ctrl.startTimer = function() {
            if (ctrl.viewModel.remainSeconds > 0) {
                ctrl.viewModel.remainSeconds = ctrl.viewModel.remainSeconds - 1;
                $timeout(ctrl.startTimer, 1000);
            }
        };

        ctrl.verifyVeriCode = function() {
            if (ctrl.verifyVeriCodeButtonEnable()) {
                if (ctrl.viewModel.veriCode.length !== 6) {
                    JYMUtilityService.showAlert(RESOURCES.TIP.MISC.VERIFY_VERI_CODE_RANGE);
                    return false;
                }
                UserService.verifyVeriCode(ctrl.viewModel.cellphone, ctrl.viewModel.veriCode, 20)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.MISC.VERIFY_VERI_CODE);
                            $timeout(function() {
                                ctrl.resetInput();
                                JYMUtilityService.go('jym.user-security-password', { token: result.token });
                            }, 1000);
                        }
                    });
            }
        };

        ctrl.verifyVeriCodeButtonEnable = function() {
            return ctrl.viewModel.cellphone && ctrl.viewModel.veriCode;
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    });
