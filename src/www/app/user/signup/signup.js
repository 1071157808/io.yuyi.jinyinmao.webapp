'use strict';
angular.module('jym.user.signup', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-signup', {
                url: '/user/signup/{token}',
                views: {
                    '@': {
                        controller: 'UserSignUpCtrl as ctrl',
                        templateUrl: 'app/user/signup/signup.tpl.html'
                    }
                }
            })
            .state('jym.user-signup-send-veri-code', {
                url: '/user/signup-send-veri-code',
                views: {
                    '@': {
                        controller: 'UserSignUpSendVeriCodeCtrl as ctrl',
                        templateUrl: 'app/user/signup/sendVeriCode.tpl.html'
                    }
                }
            });
    })
    .controller('UserSignUpCtrl', function($scope, $stateParams, $timeout, $ionicNavBarDelegate, $ionicScrollDelegate, RESOURCES, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.viewModel = {};

        ctrl.check = function() {
            ctrl.viewModel.checked = !ctrl.viewModel.checked;
        };

        ctrl.doRefresh = function() {
            if (ctrl.viewModel.refreshTime && Date.now() - ctrl.viewModel.refreshTime < 100) {
                return;
            }

            ctrl.viewModel.refreshTime = Date.now();

            ctrl.viewModel.checked = true;
            ctrl.viewModel.showAgreement1 = false;
            ctrl.viewModel.showAgreement2 = false;

            ctrl.resetInput();
        };

        ctrl.enableButton = function() {
            /*return ctrl.viewModel.checked && ctrl.viewModel.password && ctrl.viewModel.confirmPassword && ctrl.viewModel.password === ctrl.viewModel.confirmPassword;*/
            return ctrl.viewModel.password && ctrl.viewModel.confirmPassword;
        };

        ctrl.resetInput = function() {
            ctrl.viewModel.confirmPassword = '';
            ctrl.viewModel.password = '';
        };

        ctrl.resetPassword = function() {
            if (ctrl.enableButton()) {
                var rgexp = /^[a-zA-Z\d~!@#$%^&*_]{6,18}$/;
                if (!rgexp.test(ctrl.viewModel.password)) {
                    JYMUtilityService.showAlert(RESOURCES.TIP.SIGNUP.SIGNUP_PASSWORD);
                    return false;
                }
                if (!rgexp.test(ctrl.viewModel.confirmPassword)) {
                    JYMUtilityService.showAlert(RESOURCES.TIP.SIGNUP.SIGNUP_CONFIRMPASSWORD);
                    return false;
                }
                if (ctrl.viewModel.password !== ctrl.viewModel.confirmPassword) {
                    JYMUtilityService.showAlert(RESOURCES.TIP.SIGNUP.SIGNUP_COMPAREPASSWORD);
                    return false;
                }
                if (!ctrl.viewModel.checked) {
                    JYMUtilityService.showAlert(RESOURCES.TIP.SIGNUP.SIGNUP_CHECKED);
                    return false;
                }
                UserService.signUp(ctrl.viewModel.password, $stateParams.token)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.SIGNUP.SIGNUP_SUCCESS);
                            $timeout(function() {
                                ctrl.resetInput();
                                JYMUtilityService.goWithDisableBack('jym.user-bank-card-add');
                            }, 1000);
                        }
                    });
            }
        };

        ctrl.toggleAgreement1 = function() {
            ctrl.viewModel.showAgreement2 = false;
            $ionicScrollDelegate.scrollTop();
            ctrl.viewModel.showAgreement1 = !ctrl.viewModel.showAgreement1;
            $ionicNavBarDelegate.showBackButton(!ctrl.viewModel.showAgreement1);
        };

        ctrl.toggleAgreement2 = function() {
            ctrl.viewModel.showAgreement1 = false;
            $ionicScrollDelegate.scrollTop();
            ctrl.viewModel.showAgreement2 = !ctrl.viewModel.showAgreement2;
            $ionicNavBarDelegate.showBackButton(!ctrl.viewModel.showAgreement2);
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });

        $scope.$on('$ionicView.leave', function() {
            $ionicNavBarDelegate.showBackButton(true);
        });


        ctrl.doRefresh();
    })
    .controller('UserSignUpSendVeriCodeCtrl', function($scope, $timeout, RESOURCES, UserService, JYMUtilityService) {
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
                UserService.sendVeriCode(ctrl.viewModel.cellphone, 10)
                    .then(function (result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.MISC.SEND_VERI_CODE);
                        }
                    }, function () {
                        ctrl.viewModel.remainSeconds = 0;
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
                UserService.verifyVeriCode(ctrl.viewModel.cellphone, ctrl.viewModel.veriCode, 10)
                    .then(function (result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.MISC.VERIFY_VERI_CODE);
                            $timeout(function () {
                                ctrl.resetInput();
                                JYMUtilityService.go('jym.user-signup', { token: result.token });
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
