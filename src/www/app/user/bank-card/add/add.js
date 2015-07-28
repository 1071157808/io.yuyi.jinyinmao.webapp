'use strict';
angular.module('jym.user.bank-card-add', [
    'jym.services.user'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-bank-card-add', {
                url: '/user/bank-card/add',
                views: {
                    '@': {
                        controller: 'UserBankCardAddCtrl as ctrl',
                        templateUrl: 'app/user/bank-card/add/add.tpl.html'
                    }
                }
            })
            .state('jym.user-bank-card-add-bank-selector', {
                url: '/user/bank-card/add/select-bank',
                views: {
                    '@': {
                        controller: 'UserBankCardAddBankSelectorCtrl as ctrl',
                        templateUrl: 'app/user/bank-card/add/bankSelector.tpl.html'
                    }
                }
            })
            .state('jym.user-bank-card-add-method-selector', {
                url: '/user/bank-card/add/select-method',
                views: {
                    '@': {
                        templateUrl: 'app/user/bank-card/add/methodSelector.tpl.html'
                    }
                }
            });
    })
    .controller('UserBankCardAddCtrl', function($scope, $state, $timeout, RESOURCES, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};

        ctrl.buttonEnable = function() {
            return ctrl.viewModel.cellphone && ctrl.viewModel.realName && ctrl.viewModel.credentialNo && ctrl.viewModel.bankCardNo && ctrl.viewModel.bankName;
        };

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
            ctrl.viewModel.bankCardsCount = ctrl.model.user.bankCardsCount;
            ctrl.viewModel.hasSetPaymentPassword = ctrl.model.user.hasSetPaymentPassword;
            ctrl.viewModel.shouldAddBankCard = ctrl.viewModel.bankCardsCount <= 0;
            ctrl.viewModel.verified = ctrl.model.user.verified;

            if (ctrl.viewModel.verified) {
                ctrl.viewModel.credentialNo = ctrl.model.user.credentialNo;
                ctrl.viewModel.realName = ctrl.model.user.realName;
            } else {
                ctrl.viewModel.credentialNo = ctrl.viewModel.credentialNo || '';
                ctrl.viewModel.realName = ctrl.viewModel.realName || '';
            }

            ctrl.viewModel.bankCardNo = ctrl.viewModel.bankCardNo || '';
            ctrl.viewModel.bankName = UserService.sharedData.addBankName || '工商银行';
        };

        ctrl.resetInput = function() {
            ctrl.viewModel.bankCardNo = '';
            ctrl.viewModel.cellphone = '';
            ctrl.viewModel.credentialNo = '';
            ctrl.viewModel.realName = '';
        };

        ctrl.verify = function() {
            if (ctrl.buttonEnable()) {
                if (ctrl.viewModel.verified) {
                    UserService.addBankCardByYilian(ctrl.viewModel.bankCardNo, ctrl.viewModel.bankName)
                        .then(function(result) {
                            if (result) {
                                JYMUtilityService.showAlert(RESOURCES.TIP.BANKCARD.SIGN);

                                $timeout(function() {
                                    ctrl.resetInput();
                                    JYMUtilityService.goWithDisableBack('jym.user-bank-card-yilian-notice');
                                }, 1000);
                            }
                        });
                } else {
                    UserService.authenticate(ctrl.viewModel.bankCardNo, ctrl.viewModel.bankName, ctrl.viewModel.credentialNo, ctrl.viewModel.realName)
                        .then(function(result) {
                            if (result) {
                                JYMUtilityService.showAlert(RESOURCES.TIP.BANKCARD.SIGN);

                                $timeout(function() {
                                    ctrl.resetInput();
                                    JYMUtilityService.goWithDisableBack('jym.user-bank-card-yilian-notice');
                                }, 1000);
                            }
                        });
                }
            }
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    })
    .controller('UserBankCardAddBankSelectorCtrl', function($ionicHistory, UserService) {
        var ctrl = this;

        ctrl.items = [
            '工商银行',
            '农业银行',
            '中国银行',
            '建设银行',
            '邮储银行',
            '招商银行',
            '兴业银行',
            '光大银行',
            '浦发银行',
            '广发银行',
            '民生银行',
            '平安银行',
            '深发银行',
            '华夏银行',
            '中信银行',
            '广州银行',
            '广州农商行',
            '富滇银行'
        ];

        ctrl.select = function(bankName) {
            UserService.sharedData.addBankName = bankName;
            $ionicHistory.goBack();
        };
    });
