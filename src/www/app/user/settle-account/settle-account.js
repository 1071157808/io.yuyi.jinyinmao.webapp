angular.module('jym.user.settle-account', [
    'jym.services.user'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-settle-account', {
                url: '/user/settle-account',
                views: {
                    'user': {
                        controller: 'UserSettleAccountCtrl as user',
                        templateUrl: 'app/user/settle-account/settle-account.tpl.html'
                    }
                }
            });
    })
    .controller('UserSettleAccountCtrl', function($scope, $state, $timeout, RESOURCES, UserService, JYMAuthService, JYMUtilityService) {
        var user = this;

        user.model = {};
        user.viewModel = {};

        user.doRefresh = function() {
            user.refreshUser()
                .then(function(result) {
                    user.model = result;
                    user.refreshViewModel();
                    return result;
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);
        };

        user.refreshUser = function() {
            return UserService.getUserInfo();
        };

        user.refreshViewModel = function() {
            this.viewModel.balance = this.model.balance / 100;
            this.viewModel.investingPrincipal = this.model.investingPrincipal / 100;
        };

        user.doRefresh();
    });
