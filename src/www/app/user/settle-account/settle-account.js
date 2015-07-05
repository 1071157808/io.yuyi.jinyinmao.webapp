angular.module('jym.user.settle-account', [
    'jym.services.user',
    'jym.user.settle-account-deposit',
    'jym.user.settle-account-list',
    'jym.user.settle-account-withdrawal'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-settle-account', {
                url: '/user/settle-account',
                views: {
                    user: {
                        controller: 'UserSettleAccountCtrl as user',
                        templateUrl: 'app/user/settle-account/settle-account.tpl.html'
                    }
                }
            });
    })
    .controller('UserSettleAccountCtrl', function($scope, $state, $timeout, RESOURCES, UserService) {
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
            user.viewModel.balance = (user.model.balance / 100).toFixed(2);
            user.viewModel.investingPrincipal = (user.model.investingPrincipal / 100).toFixed(2);
        };

        $scope.$on('$ionicView.enter', function() {
            user.doRefresh();
        });

        user.doRefresh();
    });
