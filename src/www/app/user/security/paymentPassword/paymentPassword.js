'use strict';
angular.module('jym.user.security-payment-password', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-security-reset-payment-password', {
                url: '/user/security-reset-payment-password/{token}',
                views: {
                    user: {
                        controller: 'UserSecurityPaymentPasswordCtrl as ctrl',
                        templateUrl: 'app/user/security/paymentPassword/paymentPassword.tpl.html'
                    }
                }
            })
            .state('jym.user-security-set-payment-password', {
                url: '/user/security-set-payment-password',
                views: {
                    user: {
                        controller: 'UserSecuritySetPaymentPasswordCtrl as ctrl',
                        templateUrl: 'app/user/security/paymentPassword/setPaymentPassword.tpl.html'
                    }
                }
            })
            .state('jym.user-security-payment-password-send-veri-code', {
                url: '/user/security-payment-password-send-veri-code',
                views: {
                    user: {
                        controller: 'UserSecurityPaymentPasswordSendVeriCodeCtrl as ctrl',
                        templateUrl: 'app/user/security/paymentPassword/sendVeriCode.tpl.html'
                    }
                }
            });
    })
    .controller('UserSecurityPaymentPasswordCtrl', function($scope, $stateParams, $timeout, RESOURCES, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};


        ctrl.doRefresh = function() {
            ctrl.resetInput();

            ctrl.refreshUser()
                .then(function(result) {
                    ctrl.model.user = result;
                    ctrl.refreshViewModel();
                    return result;
                });
        };

        ctrl.enableButton = function() {
            if (ctrl.viewModel.needUserInfo) {
                return ctrl.viewModel.password && ctrl.viewModel.confirmPassword && ctrl.viewModel.password === ctrl.viewModel.confirmPassword && ctrl.viewModel.realName && ctrl.viewModel.credentialNo;
            } else {
                return ctrl.viewModel.password && ctrl.viewModel.confirmPassword && ctrl.viewModel.password === ctrl.viewModel.confirmPassword;
            }
        };

        ctrl.refreshUser = function() {
            return UserService.getUserInfo();
        };

        ctrl.refreshViewModel = function() {
            ctrl.viewModel.needUserInfo = ctrl.model.user.verified;
        };

        ctrl.resetInput = function() {
            ctrl.viewModel.confirmPassword = '';
            ctrl.viewModel.credentialNo = '';
            ctrl.viewModel.password = '';
            ctrl.viewModel.realName = '';
        };

        ctrl.resetPassword = function() {
            if (ctrl.enableButton()) {
                UserService.resetPaymentPassword(ctrl.viewModel.credentialNo, ctrl.viewModel.password, $stateParams.token, ctrl.viewModel.realName)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.SECURITY.RESET_PAYMENT_PASSWORD);
                            ctrl.resetInput();
                            $timeout(function() {
                                JYMUtilityService.goWithDisableBack('jym.user');
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
    .controller('UserSecuritySetPaymentPasswordCtrl', function($scope, $timeout, $stateParams, $ionicHistory, RESOURCES, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.viewModel = {};

        ctrl.doRefresh = function() {
            ctrl.resetInput();
        };

        ctrl.enableButton = function() {
            return ctrl.viewModel.password && ctrl.viewModel.confirmPassword && ctrl.viewModel.password === ctrl.viewModel.confirmPassword;
        };

        ctrl.resetInput = function() {
            ctrl.viewModel.confirmPassword = '';
            ctrl.viewModel.password = '';
        };

        ctrl.setPassword = function() {
            if (ctrl.enableButton()) {
                UserService.setPaymentPassword(ctrl.viewModel.password)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.SECURITY.SET_PAYMENT_PASSWORD);
                            $timeout(function() {
                                ctrl.resetInput();
                                if ($ionicHistory.backView()) {
                                    $ionicHistory.goBack();
                                } else {
                                    JYMUtilityService.goWithDisableBack('jym.user');
                                }

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
    .controller('UserSecurityPaymentPasswordSendVeriCodeCtrl', function($scope, $timeout, RESOURCES, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};
        ctrl.viewModel.remainSeconds = 0;


        ctrl.doRefresh = function() {
            ctrl.resetInput();

            ctrl.refreshUser()
                .then(function(result) {
                    ctrl.model.user = result;
                    ctrl.refreshViewModel();
                    return result;
                });
        };

        ctrl.refreshUser = function() {
            return UserService.getUserInfo();
        };

        ctrl.refreshViewModel = function() {
            ctrl.viewModel.cellphone = ctrl.model.user.cellphone;
            ctrl.viewModel.veriCode = '';
        };

        ctrl.resetInput = function() {
            ctrl.viewModel.cellphone = '';
            ctrl.viewModel.veriCode = '';
        };

        ctrl.sendVeriCode = function() {
            if (ctrl.sendVeriCodeButtonEnable()) {
                ctrl.viewModel.remainSeconds = 60;
                UserService.sendVeriCode(ctrl.viewModel.cellphone, 30)
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
                UserService.verifyVeriCode(ctrl.viewModel.cellphone, ctrl.viewModel.veriCode, 30)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.MISC.VERIFY_VERI_CODE);

                            $timeout(function() {
                                ctrl.resetInput();
                                JYMUtilityService.go('jym.user-security-reset-payment-password', { token: result.token });
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
