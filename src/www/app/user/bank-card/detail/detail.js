'use strict';
angular.module('jym.user.bank-card-detail', [
    'jym.services',
    'jym.services.user',
    'jym.user.bank-card-upgrade'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-bank-card-detail', {
                url: '/user/bank-card-detail/{bankCardNo}',
                views: {
                    '@': {
                        controller: 'UserBankCardDetailCtrl as ctrl',
                        templateUrl: 'app/user/bank-card/detail/detail.tpl.html'
                    }
                }
            });
    })
    .controller('UserBankCardDetailCtrl', function($scope, $state, $stateParams, $timeout, $ionicHistory, RESOURCES, UserService, JYMUtilityService, $ionicPopup) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};

        ctrl.doRefresh = function() {
            if (ctrl.viewModel.refreshTime && Date.now() - ctrl.viewModel.refreshTime < 100) {
                return;
            }

            ctrl.viewModel.refreshTime = Date.now();

            ctrl.refreshBankCard()
                .then(function(result) {
                    ctrl.model = result;
                    ctrl.refreshViewModel();
                    return result;
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        ctrl.refreshBankCard = function() {
            return UserService.getBankCard($stateParams.bankCardNo);
        };

        ctrl.refreshViewModel = function() {
            ctrl.viewModel = ctrl.model;
        };

        ctrl.removeCard = function() {
            if (ctrl.model.bankCardNo) {
                UserService.removeCard(ctrl.model.bankCardNo)
                    .then(function() {
                        JYMUtilityService.showAlert(RESOURCES.TIP.BANKCARD.REMOVE_SUCCESS);

                        $timeout(function() {
                            $ionicHistory.goBack();
                        }, 1000);
                    });
            }
        };

        ctrl.showConfirm = function() {
            var confirmPopup = $ionicPopup.confirm({
                title: ' ',
                template: '是否删除该银行卡？',
                okText: '是',
                cancelText: '否'
            });
            confirmPopup.then(function(res) {
                if (res) {
                    ctrl.removeCard();
                }
            });
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    });
