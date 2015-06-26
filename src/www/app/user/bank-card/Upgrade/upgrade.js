angular.module('jym.user.bank-card-upgrade', [
    'jym.services.user'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-bank-card-upgrade', {
                url: '/user/bank-card-upgrade',
                views: {
                    'user': {
                        controller: 'UserBankCardUpgradeCtrl as card',
                        templateUrl: 'app/user/bank-card/detail/detail.tpl.html'
                    }
                }
            });
    })
    .controller('UserBankCardUpgradeCtrl', function($scope, $state, $timeout, RESOURCES, UserService) {
        var card = this;

        card.model = {};
        card.viewModel = {};
        card.viewModel.items = [];

        card.doRefresh = function() {
            card.refreshBankCards()
                .then(function(result) {
                    card.model = result;
                    card.refreshViewModel();
                    return result;
                });
        };

        card.refreshBankCards = function() {
            return UserService.getBankCards();
        };

        card.refreshViewModel = function() {
            card.viewModel.items = card.model;
        };

        card.doRefresh();
    });
