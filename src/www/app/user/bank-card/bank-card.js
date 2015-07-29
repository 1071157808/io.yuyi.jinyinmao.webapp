'use strict';
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
                    '@': {
                        controller: 'UserBankCardCtrl as ctrl',
                        templateUrl: 'app/user/bank-card/bank-card.tpl.html'
                    }
                }
            })
            .state('jym.user-bank-card-yilian-notice', {
                url: '/user/bank-card/yilian-notice',
                views: {
                    '@': {
                        controller: 'UserBankCardYilianNoticeCtrl as ctrl',
                        templateUrl: 'app/user/bank-card/yilian-notice.tpl.html'
                    }
                }
            });
    })
    .controller('UserBankCardCtrl', function($scope, $state, $timeout, RESOURCES, UserService) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};
        ctrl.viewModel.items = [];

        ctrl.doRefresh = function() {
            ctrl.refreshBankCards()
                .then(function(result) {
                    ctrl.model = result;
                    ctrl.refreshViewModel();
                    return result;
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        ctrl.refreshBankCards = function() {
            return UserService.getBankCards();
        };

        ctrl.refreshViewModel = function() {
            ctrl.viewModel.items = ctrl.model;
        };

        ctrl.showAddButton = function() {
            return ctrl.viewModel.items.length < 10;
        };

        $scope.$on('$ionicView.beforeEnter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    })
    .controller('UserBankCardYilianNoticeCtrl', function(JYMUtilityService) {
        var ctrl = this;

        ctrl.go = function(toState, params) {
            params = params || {};
            JYMUtilityService.goWithDisableBack(toState, params);
        };
    });
