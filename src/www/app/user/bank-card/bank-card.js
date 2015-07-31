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

        var getViewItem = function(modelItem) {
            var item = {};
            item.bankCardNo = modelItem.bankCardNo;
            item.bankName = modelItem.bankName;
            item.cellphone = modelItem.cellphone;
            item.cityName = modelItem.cityName;
            item.verified = modelItem.verified;
            item.verifiedByYilian = modelItem.verifiedByYilian;
            item.verifiedTime = modelItem.verifiedTime;
            item.withdrawAmount = modelItem.withdrawAmount;
            return item;
        };

        ctrl.doRefresh = function() {
            if (ctrl.viewModel.refreshTime && Date.now() - ctrl.viewModel.refreshTime < 100) {
                return;
            }

            ctrl.viewModel.refreshTime = Date.now();

            ctrl.refreshBankCards()
                .then(function(result) {
                    ctrl.model.items = result;
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
            ctrl.viewModel.items = [];

            _.forEach(ctrl.model.items, function(i) {
                ctrl.viewModel.items.push(getViewItem(i));
            });
        };

        ctrl.showAddButton = function() {
            return ctrl.viewModel.items.length < 10;
        };

        $scope.$on('$ionicView.enter', function() {
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
