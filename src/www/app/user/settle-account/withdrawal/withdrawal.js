angular.module('jym.user.settle-account-withdrawal', [
    'jym.services.user'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-settle-account-withdrawal', {
                url: '/user/settle-account/withdrawal/{bankCardNo}',
                views: {
                    'user': {
                        controller: 'UserSettleAccountWithdrawalCtrl as account',
                        templateUrl: 'app/user/settle-account/withdrawal/detail.tpl.html'
                    }
                }
            });
    })
    .controller('UserSettleAccountWithdrawalCtrl', function() {
        var account = this;

    });
