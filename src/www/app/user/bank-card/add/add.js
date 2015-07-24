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
                        controller: 'UserBankCardAddCtrl as card',
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
        var card = this;

        card.model = {};
        card.viewModel = {};

        card.buttonEnable = function() {
            return card.viewModel.cellphone && card.viewModel.realName && card.viewModel.credentialNo && card.viewModel.bankCardNo && card.viewModel.bankName;
        };

        card.doRefresh = function() {
            card.refreshUser()
                .then(function(result) {
                    card.model.user = result;
                    card.refreshViewModel();
                    return result;
                });
        };

        card.refreshUser = function() {
            return UserService.getUserInfo();
        };

        card.refreshViewModel = function() {
            card.viewModel.cellphone = card.model.user.cellphone;
            card.viewModel.bankCardsCount = card.model.user.bankCardsCount;
            card.viewModel.hasSetPaymentPassword = card.model.user.hasSetPaymentPassword;
            card.viewModel.shouldAddBankCard = card.viewModel.bankCardsCount <= 0;
            card.viewModel.verified = card.model.user.verified;

            if (card.viewModel.verified) {
                card.viewModel.credentialNo = card.model.user.credentialNo;
                card.viewModel.realName = card.model.user.realName;
            } else {
                card.viewModel.credentialNo = card.viewModel.credentialNo || '';
                card.viewModel.realName = card.viewModel.realName || '';
            }

            card.viewModel.bankCardNo = card.viewModel.bankCardNo || '';
            card.viewModel.bankName = UserService.sharedData.addBankName || '工商银行';
        };

        card.resetInput = function() {
            card.viewModel.bankCardNo = '';
            card.viewModel.cellphone = '';
            card.viewModel.credentialNo = '';
            card.viewModel.realName = '';
        };

        card.verify = function() {
            if (card.buttonEnable()) {
                if (card.viewModel.verified) {
                    UserService.addBankCardByYilian(card.viewModel.bankCardNo, card.viewModel.bankName)
                        .then(function(result) {
                            if (result) {
                                JYMUtilityService.showAlert(RESOURCES.TIP.BANKCARD.SIGN);

                                $timeout(function() {
                                    card.resetInput();
                                    JYMUtilityService.goWithDisableBack('jym.user-bank-card-yilian-notice');
                                }, 1000);
                            }
                        });
                } else {
                    UserService.authenticate(card.viewModel.bankCardNo, card.viewModel.bankName, card.viewModel.credentialNo, card.viewModel.realName)
                        .then(function(result) {
                            if (result) {
                                JYMUtilityService.showAlert(RESOURCES.TIP.BANKCARD.SIGN);

                                $timeout(function() {
                                    card.resetInput();
                                    JYMUtilityService.goWithDisableBack('jym.user-bank-card-yilian-notice');
                                }, 1000);
                            }
                        });
                }
            }
        };

        $scope.$on('$ionicView.enter', function() {
            card.doRefresh();
        });

        card.doRefresh();
    })
    .controller('UserBankCardAddBankSelectorCtrl', function($ionicHistory, UserService) {
        var ctrl = this;

        ctrl.items = [
            '浦发银行',
            '深发银行',
            '平安银行',
            '民生银行',
            '工商银行',
            '农业银行',
            '建设银行',
            '招商银行',
            '广发银行',
            '广州银行',
            '邮储银行',
            '兴业银行',
            '光大银行',
            '华夏银行',
            '中信银行',
            '广州农商行',
            '中国银行',
            '富滇银行'
        ];

        ctrl.select = function(bankName) {
            UserService.sharedData.addBankName = bankName;
            $ionicHistory.goBack();
        };
    });
