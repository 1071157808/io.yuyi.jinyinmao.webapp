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
    .controller('UserBankCardUpgradeCtrl', function($scope, $state, $stateParams, UserService) {
        var card = this;

        card.model = {};
        card.viewModel = {};

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
            user.viewModel.cellphone = user.model.cellphone;
            user.viewModel.realName = user.model.realName || '未实名认证';
            user.viewModel.credentialNo = user.model.credentialNo || '未实名认证';
        };

        $scope.$on('$ionicView.enter', function() {
            user.doRefresh();
        });

        card.doRefresh();
    });
