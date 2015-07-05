angular.module('jym.user.signup', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-signup', {
                url: '/user/signup/{token}',
                views: {
                    user: {
                        controller: 'UserSignUpCtrl as ctrl',
                        templateUrl: 'app/user/signup/signup.tpl.html'
                    }
                }
            })
            .state('jym.user-signup-send-veri-code', {
                url: '/user/signup-send-veri-code',
                views: {
                    user: {
                        controller: 'UserSignUpSendVeriCodeCtrl as ctrl',
                        templateUrl: 'app/user/signup/sendVeriCode.tpl.html'
                    }
                }
            });
    })
    .controller('UserSignUpCtrl', function($timeout, $stateParams, RESOURCES, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.viewModel = {};
        ctrl.viewModel.password = undefined;
        ctrl.viewModel.confirmPassword = undefined;

        ctrl.enableButton = function() {
            return ctrl.viewModel.password && ctrl.viewModel.confirmPassword && ctrl.viewModel.password === ctrl.viewModel.confirmPassword;
        };

        ctrl.resetPassword = function() {
            if (ctrl.enableButton()) {
                UserService.signUp(ctrl.viewModel.password, $stateParams.token)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.SIGNUP.SIGNUP_SUCCESS);
                            UserService.loginOut();
                            $timeout(function() {
                                JYMUtilityService.goWithDisableBack('jym.user-login')
                            }, 1000);
                        }
                    });
            }
        };
    })
    .controller('UserSignUpSendVeriCodeCtrl', function($timeout, RESOURCES, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.viewModel = {};
        ctrl.viewModel.cellphone = undefined;
        ctrl.viewModel.veriCode = undefined;

        ctrl.viewModel.remainSeconds = 0;

        ctrl.sendVeriCode = function() {
            if (ctrl.sendVeriCodeButtonEnable()) {
                ctrl.viewModel.remainSeconds = 60;
                UserService.sendVeriCode(ctrl.viewModel.cellphone, 10)
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
                UserService.verifyVeriCode(ctrl.viewModel.cellphone, ctrl.viewModel.veriCode, 10)
                    .then(function(result) {
                        if (result) {
                            ctrl.viewModel.remainSeconds = 0;

                            JYMUtilityService.showAlert(RESOURCES.TIP.MISC.VERIFY_VERI_CODE);

                            $timeout(function() {
                                JYMUtilityService.go('jym.user-signup', { token: result.token });
                            }, 1000);
                        }
                    });
            }
        };

        ctrl.verifyVeriCodeButtonEnable = function() {
            return ctrl.viewModel.cellphone && ctrl.viewModel.veriCode;
        };
    });
