angular.module('jym.user.bank-card', [
    'jym.services.user',
    'jym.user.bank-card-add',
    'jym.user.bank-card-detail'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-bank-card', {
                url: '/user/bank-card',
                views: {
                    user: {
                        controller: 'UserBankCardCtrl as cards',
                        templateUrl: 'app/user/bank-card/bank-card.tpl.html'
                    }
                }
            })
            .state('jym.user-bank-card-yilian-notice', {
                url: '/user/bank-card/yilian-notice',
                views: {
                    user: {
                        controller: 'UserBankCardYilianNoticeCtrl as ctrl',
                        templateUrl: 'app/user/bank-card/yilian-notice.tpl.html'
                    }
                }
            });
    })
    .controller('UserBankCardCtrl', function($scope, $state, $timeout, RESOURCES, UserService) {
        var cards = this;

        cards.model = {};
        cards.viewModel = {};
        cards.viewModel.items = [];

        cards.doRefresh = function() {
            cards.refreshBankCards()
                .then(function(result) {
                    cards.model = result;
                    cards.refreshViewModel();
                    return result;
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);
        };

        cards.refreshBankCards = function() {
            return UserService.getBankCards();
        };

        cards.refreshViewModel = function() {
            cards.viewModel.items = cards.model;
        };

        cards.showAddButton = function() {
            return cards.viewModel.items.length < 10;
        };

        $scope.$on('$ionicView.enter', function() {
            cards.doRefresh();
        });

        cards.doRefresh();
    })
    .controller('UserBankCardYilianNoticeCtrl', function(JYMUtilityService) {
        var ctrl = this;

        ctrl.go = function(toState, params) {
            params = params || {};
            JYMUtilityService.goWithDisableBack(toState, params);
        };
    });
