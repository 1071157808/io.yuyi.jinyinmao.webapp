'use strict';
angular.module('jym.user.jinbaoyin-detail', [
    'jym.services',
    'jym.services.user'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-jinbaoyin-detail', {
                url: '/user/jinbaoyin/detail/{transactionIdentifier}',
                views: {
                    '@': {
                        controller: 'UserJinbaoyinDetailCtrl as ctrl',
                        templateUrl: 'app/user/jinbaoyin/detail/detail.tpl.html'
                    }
                }
            });
    })
    .controller('UserJinbaoyinDetailCtrl', function($scope, $stateParams, $timeout, $q, $ionicHistory, $ionicScrollDelegate, JinbaoyinService, ProductService, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};

        ctrl.canBack = function() {
            return $ionicHistory.backView();
        };

        ctrl.doRefresh = function() {
            ctrl.viewModel.agreement = '';
            ctrl.viewModel.showAgreement = false;

            var refreshTransaction = ctrl.refreshTransaction()
                .then(function(result) {
                    ctrl.model.transaction = result;
                    ctrl.refreshViewModel();
                    return result;
                });

            var refreshUser = ctrl.refreshUser()
                .then(function(result) {
                    ctrl.model.user = result;
                    return result;
                });

            $q.all([refreshTransaction, refreshUser])
                .then(function() {
                    var orderTime = ctrl.viewModel.trade === 0 ? ctrl.viewModel.resultTime : ctrl.viewModel.transactionTime;
                    var agreementData = {
                        cellphone: ctrl.model.user.cellphone,
                        credentialNo: ctrl.model.user.credentialNo,
                        orderTime: orderTime,
                        principal: ctrl.viewModel.amount,
                        realName: ctrl.model.user.realName
                    };

                    ctrl.refreshAgreement()
                        .then(function(result) {
                            ctrl.viewModel.agreement = ProductService.fillDataForAgreement(result.content, agreementData);
                        });
                });


            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        ctrl.go = function(toState, params) {
            params = params || {};
            JYMUtilityService.goWithDisableBack(toState, params);
        };

        ctrl.refreshTransaction = function() {
            return UserService.getJBYAccountTransaction($stateParams.transactionIdentifier);
        };

        ctrl.refreshAgreement = function() {
            if (ctrl.viewModel.trade === 0) {
                return JinbaoyinService.getInvestingAgreement();
            } else {
                return JinbaoyinService.getTransferAgreement();
            }
        };

        ctrl.refreshViewModel = function() {
            ctrl.viewModel.amount = (ctrl.model.transaction.amount / 100).toFixed(2);
            ctrl.viewModel.predeterminedResultDate = ctrl.model.transaction.predeterminedResultDate;
            ctrl.viewModel.resultCode = ctrl.model.transaction.resultCode;
            ctrl.viewModel.resultTime = ctrl.model.transaction.resultTime;
            ctrl.viewModel.settleAccountTranscationId = ctrl.model.transaction.settleAccountTranscationId;
            ctrl.viewModel.trade = ctrl.model.transaction.trade;
            ctrl.viewModel.tradeCode = ctrl.model.transaction.tradeCode;
            ctrl.viewModel.transactionIdentifier = ctrl.model.transaction.transactionIdentifier;
            ctrl.viewModel.transactionTime = ctrl.model.transaction.transactionTime;
            ctrl.viewModel.transDesc = ctrl.model.transaction.transDesc;
            ctrl.viewModel.resultStyle = { color: '#444' };

            if (ctrl.viewModel.resultCode === 1) {
                ctrl.viewModel.resultStyle = { color: '#47B28B' };
            }

            if (ctrl.viewModel.resultCode === -1) {
                ctrl.viewModel.resultStyle = { color: '#E74C3C' };
            }
        };

        ctrl.refreshUser = function() {
            return UserService.getUserInfo();
        };

        ctrl.toggleAgreement = function() {
            $ionicScrollDelegate.scrollTop();
            ctrl.viewModel.showAgreement = !ctrl.viewModel.showAgreement;
        };

        $scope.$on('$ionicView.beforeEnter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    });
