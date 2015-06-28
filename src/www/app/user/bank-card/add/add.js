angular.module('jym.user.bank-card-add', [
    'jym.services.user'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-bank-card-add', {
                url: '/user/bank-card/add',
                views: {
                    'user': {
                        controller: 'UserBankCardAddCtrl as ctrl',
                        templateUrl: 'app/user/bank-card/add/add.tpl.html'
                    }
                }
            })
            .state('jym.user-bank-card-add-method-selector', {
                url: '/user/bank-card/add/select-method',
                views: {
                    'user': {
                        templateUrl: 'app/user/bank-card/add/methodSeletor.tpl.html'
                    }
                }
            });
    })
    .controller('UserBankCardAddCtrl', function($scope, $state, $timeout, RESOURCES, UserService) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};

        ctrl.doRefresh = function() {
            ctrl.refreshUser()
                .then(function(result) {
                    ctrl.model.user = result;
                    ctrl.refreshViewModel();
                    return result;
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);
        };

        ctrl.refreshUser = function() {
            return UserService.getUserInfo();
        };

        ctrl.refreshViewModel = function() {
            ctrl.viewModel.verified = ctrl.model.user.verified;
        };

        ctrl.refreshBankCards = function() {
            return UserService.getBankCards();
        };

        ctrl.refreshViewModel = function() {
            ctrl.viewModel.items = ctrl.model;
        };

        ctrl.doRefresh();
    });
