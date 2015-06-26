angular.module('jym.user.bank-card-detail', [
    'jym.services.user',
    'jym.user.bank-card-upgrade'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-bank-card-detail', {
                url: '/user/bank-card-detail/{bankCardNo}',
                views: {
                    'user': {
                        controller: 'UserBankCardDetailCtrl as card',
                        templateUrl: 'app/user/bank-card/detail/detail.tpl.html'
                    }
                }
            });
    })
    .controller('UserBankCardDetailCtrl', function($scope, $state, $stateParams, $timeout, RESOURCES, UserService) {
        var card = this;

        card.model = {};
        card.viewModel = {};

        card.doRefresh = function() {
            card.refreshBankCard()
                .then(function(result) {
                    card.model = result;
                    card.refreshViewModel();
                    return result;
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);
        };

        card.refreshBankCard = function() {
            return UserService.getBankCard($stateParams.bankCardNo);
        };

        card.refreshViewModel = function() {
            card.viewModel = card.model;
        };

        card.doRefresh();
    });