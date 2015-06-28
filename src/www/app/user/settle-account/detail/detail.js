angular.module('jym.user.settle-account-detail', [
    'jym.services.user'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-settle-account-detail', {
                url: '/user/settle-account/detail/{transcationIdentifier}',
                views: {
                    'user': {
                        controller: 'UserSettleAccountDetailCtrl as transcation',
                        templateUrl: 'app/user/settle-account/detail/detail.tpl.html'
                    }
                }
            });
    })
    .controller('UserSettleAccountDetailCtrl', function() {
        var transcation = this;

    });
