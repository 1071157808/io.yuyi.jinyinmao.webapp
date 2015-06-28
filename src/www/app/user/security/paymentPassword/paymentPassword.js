angular.module('jym.user.security-payment-password', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-security-reset-payment-password', {
                url: '/user/security-reset-payment-password/{token}',
                views: {
                    'user': {
                        controller: 'UserSecurityPaymentPasswordCtrl as ctrl',
                        templateUrl: 'app/user/security/paymentPassword/paymentPassword.tpl.html'
                    }
                }
            })
            .state('jym.user-security-set-payment-password', {
                url: '/user/security-set-payment-password',
                views: {
                    'user': {
                        controller: 'UserSecuritySetPaymentPasswordCtrl as ctrl',
                        templateUrl: 'app/user/security/paymentPassword/setPaymentPassword.tpl.html'
                    }
                }
            })
            .state('jym.user-security-payment-password-send-veri-code', {
                url: '/user/security-payment-password-send-veri-code',
                views: {
                    'user': {
                        controller: 'UserSecurityPaymentPasswordSendVeriCodeCtrl as ctrl',
                        templateUrl: 'app/user/security/paymentPassword/sendVeriCode.tpl.html'
                    }
                }
            });
    })
    .controller('UserSecurityPaymentPasswordCtrl', function($scope, $stateParams, $timeout,  RESOURCES, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};
        ctrl.viewModel.realName = '';
        ctrl.viewModel.credentialNo = '';
        ctrl.viewModel.password = undefined;
        ctrl.viewModel.confirmPassword = undefined;

        ctrl.doRefresh = function() {
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
            ctrl.viewModel.needUserInfo = ctrl.model.user.verified;
        };

        ctrl.enableButton = function() {
            if (ctrl.viewModel.needUserInfo) {
                return ctrl.viewModel.password && ctrl.viewModel.confirmPassword && ctrl.viewModel.password === ctrl.viewModel.confirmPassword && ctrl.viewModel.realName && ctrl.viewModel.credentialNo;
            } else {
                return ctrl.viewModel.password && ctrl.viewModel.confirmPassword && ctrl.viewModel.password === ctrl.viewModel.confirmPassword;
            }
        };

        ctrl.resetPassword = function() {
            if (ctrl.enableButton()) {
                UserService.resetPaymentPassword(ctrl.viewModel.credentialNo, ctrl.viewModel.password, $stateParams.token, ctrl.viewModel.realName)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.SECURITY.RESET_PASSWORD);
                            UserService.loginOut();
                            $timeout(function() {
                                JYMUtilityService.goWithDisableBack('jym.user-login')
                            }, 1000);
                        }
                    });
            }
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });
    })
    .controller('UserSecuritySetPaymentPasswordCtrl', function($timeout, $stateParams, RESOURCES, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.viewModel = {};
        ctrl.viewModel.password = undefined;
        ctrl.viewModel.confirmPassword = undefined;

        ctrl.enableButton = function() {
            return ctrl.viewModel.password && ctrl.viewModel.confirmPassword && ctrl.viewModel.password === ctrl.viewModel.confirmPassword;
        };

        ctrl.setPassword = function() {
            if (ctrl.enableButton()) {
                UserService.setPaymentPassword(ctrl.viewModel.password)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.SECURITY.RESET_PASSWORD);
                            $timeout(function() {
                                JYMUtilityService.goWithDisableBack('jym.user')
                            }, 1000);
                        }
                    });
            }
        };
    })
    .controller('UserSecurityPaymentPasswordSendVeriCodeCtrl', function($scope, $timeout, RESOURCES, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};
        ctrl.viewModel.cellphone = undefined;
        ctrl.viewModel.veriCode = undefined;

        ctrl.viewModel.remainSeconds = 0;

        ctrl.doRefresh = function() {
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
                            ctrl.viewModel.remainSeconds = 0;

                            JYMUtilityService.showAlert(RESOURCES.TIP.MISC.VERIFY_VERI_CODE);

                            $timeout(function() {
                                JYMUtilityService.go('jym.user-security-reset-payment-password', {token: result.token})
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
    });
