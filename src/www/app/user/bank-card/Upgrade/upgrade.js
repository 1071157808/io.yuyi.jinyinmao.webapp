'use strict';
angular.module('jym.user.bank-card-upgrade', [
    'jym.services.user'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-bank-card-upgrade', {
                url: '/user/bank-card-upgrade/{bankCardNo}',
                views: {
                    '@': {
                        controller: 'UserBankCardUpgradeCtrl as ctrl',
                        templateUrl: 'app/user/bank-card/upgrade/upgrade.tpl.html'
                    }
                }
            });
    })
    .controller('UserBankCardUpgradeCtrl', function($scope, $state, $stateParams, $timeout, RESOURCES, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};

        ctrl.buttonEnable = function() {
            return ctrl.viewModel.cellphone && ctrl.viewModel.realName && ctrl.viewModel.credentialNo && ctrl.viewModel.bankCardNo && ctrl.viewModel.bankName;
        };

        ctrl.doRefresh = function() {
            if (ctrl.viewModel.refreshTime && Date.now() - ctrl.viewModel.refreshTime < 100) {
                return;
            }

            ctrl.viewModel.refreshTime = Date.now();

            ctrl.refreshUser()
                .then(function(result) {
                    ctrl.model.user = result;
                    return result;
                }).then(function() {
                    ctrl.refreshBankCard()
                        .then(function(result) {
                            ctrl.model.card = result;
                            ctrl.refreshViewModel();

                        });
                });
        };

        ctrl.refreshBankCard = function() {
            return UserService.getBankCard($stateParams.bankCardNo);
        };

        ctrl.refreshUser = function() {
            return UserService.getUserInfo();
        };

        ctrl.refreshViewModel = function() {
            ctrl.viewModel.verified = ctrl.model.user.verified;
            ctrl.viewModel.cellphone = ctrl.model.user.cellphone;

            if (ctrl.viewModel.verified) {
                ctrl.viewModel.credentialNo = ctrl.model.user.credentialNo;
                ctrl.viewModel.realName = ctrl.model.user.realName;
            } else {
                ctrl.viewModel.credentialNo = ctrl.viewModel.credentialNo || '';
                ctrl.viewModel.realName = ctrl.viewModel.realName || '';
            }

            ctrl.viewModel.bankCardNo = ctrl.model.ctrl.bankCardNo;
            ctrl.viewModel.bankName = ctrl.model.ctrl.bankName;
        };

        ctrl.verify = function() {
            if (ctrl.buttonEnable()) {
                if (ctrl.viewModel.verified) {
                    UserService.verifyBankCardByYilian(ctrl.viewModel.bankCardNo)
                        .then(function(result) {
                            if (result) {
                                JYMUtilityService.showAlert(RESOURCES.TIP.BANKCARD.SIGN);

                                $timeout(function() {
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
    });
