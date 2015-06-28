angular.module('jym.user.settle-account-deposit', [
    'jym.services.user'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-settle-account-deposit', {
                url: '/user/settle-account/deposit',
                views: {
                    'user': {
                        controller: 'UserSettleAccountDepositCtrl as account',
                        templateUrl: 'app/user/settle-account/deposit/deposit.tpl.html'
                    }
                }
            })
            .state('jym.user-settle-account-deposit-bank-card-selector', {
                url: '/user/settle-account/deposit/selectBankCard',
                views: {
                    'user': {
                        controller: 'UserSettleAccountDepositBankCardSeletorCtrl as account',
                        templateUrl: 'app/user/settle-account/deposit/bankCardSelector.tpl.html'
                    }
                }
            });
    })
    .controller('UserSettleAccountDepositCtrl', function() {
        var account = this;

    })
    .controller('UserSettleAccountDepositBankCardSeletorCtrl', function() {
        var account = this;

    });
