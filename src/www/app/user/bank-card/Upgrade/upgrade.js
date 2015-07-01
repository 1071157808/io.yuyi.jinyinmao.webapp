angular.module('jym.user.bank-card-upgrade', [
    'jym.services.user'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-bank-card-upgrade', {
                url: '/user/bank-card-upgrade/{bankCardNo}',
                views: {
                    'user': {
                        controller: 'UserBankCardUpgradeCtrl as card',
                        templateUrl: 'app/user/bank-card/upgrade/upgrade.tpl.html'
                    }
                }
            });
    })
    .controller('UserBankCardUpgradeCtrl', function($scope, $state, $stateParams, $timeout, RESOURCES, UserService, JYMUtilityService) {
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
                    return result;
                }).then(function() {
                    card.refreshBankCard()
                        .then(function(result) {
                            card.model.card = result;
                            card.refreshViewModel();

                        });
                });
        };

        card.refreshBankCard = function() {
            return UserService.getBankCard($stateParams.bankCardNo);
        };

        card.refreshUser = function() {
            return UserService.getUserInfo();
        };

        card.refreshViewModel = function() {
            card.viewModel.verified = card.model.user.verified;
            card.viewModel.cellphone = card.model.user.cellphone;

            if (card.viewModel.verified) {
                card.viewModel.realName = card.model.user.realName;
                card.viewModel.credentialNo = card.model.user.credentialNo;
            } else {
                card.viewModel.realName = '';
                card.viewModel.credentialNo = '';
            }

            card.viewModel.bankCardNo = card.model.card.bankCardNo;
            card.viewModel.bankName = card.model.card.bankName;
        };

        card.verify = function() {
            if (card.buttonEnable()) {

                if (card.viewModel.verified) {
                    UserService.verifyBankCardByYilian(card.viewModel.bankCardNo)
                        .then(function(result) {
                            if (result) {
                                JYMUtilityService.showAlert(RESOURCES.TIP.BANKCARD.SIGN);
                                $timeout(function() {
                                    JYMUtilityService.goWithDisableBack('jym.user-bank-card-yilian-notice')
                                }, 1000);
                            }
                        });
                } else {
                    UserService.authenticate(card.viewModel.bankCardNo, card.viewModel.bankName, card.viewModel.credentialNo, card.viewModel.realName)
                        .then(function(result) {
                            if (result) {
                                JYMUtilityService.showAlert(RESOURCES.TIP.BANKCARD.SIGN);
                                $timeout(function() {
                                    JYMUtilityService.goWithDisableBack('jym.user-bank-card-yilian-notice')
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
    });
