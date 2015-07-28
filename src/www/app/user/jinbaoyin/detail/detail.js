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
                        controller: 'UserJinbaoyinDetailCtrl as transaction',
                        templateUrl: 'app/user/jinbaoyin/detail/detail.tpl.html'
                    }
                }
            });
    })
    .controller('UserJinbaoyinDetailCtrl', function($scope, $stateParams, $timeout, $q, $ionicHistory, $ionicScrollDelegate, JinbaoyinService, ProductService, UserService, JYMUtilityService) {
        var transaction = this;

        transaction.model = {};
        transaction.viewModel = {};

        transaction.canBack = function() {
            return $ionicHistory.backView();
        };

        transaction.doRefresh = function() {
            transaction.viewModel.agreement = '';
            transaction.viewModel.showAgreement = false;

            var refreshTransaction = transaction.refreshTransaction()
                .then(function(result) {
                    transaction.model.transaction = result;
                    transaction.refreshViewModel();
                    return result;
                });

            var refreshUser = transaction.refreshUser()
                .then(function(result) {
                    transaction.model.user = result;
                    return result;
                });

            $q.all([refreshTransaction, refreshUser])
                .then(function() {
                    var orderTime = transaction.viewModel.trade === 0 ? transaction.viewModel.resultTime : transaction.viewModel.transactionTime;
                    var agreementData = {
                        cellphone: transaction.model.user.cellphone,
                        credentialNo: transaction.model.user.credentialNo,
                        orderTime: orderTime,
                        principal: transaction.viewModel.amount,
                        realName: transaction.model.user.realName
                    };

                    transaction.refreshAgreement()
                        .then(function(result) {
                            transaction.viewModel.agreement = ProductService.fillDataForAgreement(result.content, agreementData);
                        });
                });


            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        transaction.go = function(toState, params) {
            params = params || {};
            JYMUtilityService.goWithDisableBack(toState, params);
        };

        transaction.refreshTransaction = function() {
            return UserService.getJBYAccountTransaction($stateParams.transactionIdentifier);
        };

        transaction.refreshAgreement = function() {
            if (transaction.viewModel.trade === 0) {
                return JinbaoyinService.getInvestingAgreement();
            } else {
                return JinbaoyinService.getTransferAgreement();
            }
        };

        transaction.refreshViewModel = function() {
            transaction.viewModel.amount = (transaction.model.transaction.amount / 100).toFixed(2);
            transaction.viewModel.predeterminedResultDate = transaction.model.transaction.predeterminedResultDate;
            transaction.viewModel.resultCode = transaction.model.transaction.resultCode;
            transaction.viewModel.resultTime = transaction.model.transaction.resultTime;
            transaction.viewModel.settleAccountTranscationId = transaction.model.transaction.settleAccountTranscationId;
            transaction.viewModel.trade = transaction.model.transaction.trade;
            transaction.viewModel.tradeCode = transaction.model.transaction.tradeCode;
            transaction.viewModel.transactionIdentifier = transaction.model.transaction.transactionIdentifier;
            transaction.viewModel.transactionTime = transaction.model.transaction.transactionTime;
            transaction.viewModel.transDesc = transaction.model.transaction.transDesc;
            transaction.viewModel.resultStyle = { color: '#444' };

            if (transaction.viewModel.resultCode === 1) {
                transaction.viewModel.resultStyle = { color: '#47B28B' };
            }

            if (transaction.viewModel.resultCode === -1) {
                transaction.viewModel.resultStyle = { color: '#E74C3C' };
            }
        };

        transaction.refreshUser = function() {
            return UserService.getUserInfo();
        };

        transaction.toggleAgreement = function() {
            $ionicScrollDelegate.scrollTop();
            transaction.viewModel.showAgreement = !transaction.viewModel.showAgreement;
        };

        $scope.$on('$ionicView.enter', function() {
            transaction.doRefresh();
        });

        transaction.doRefresh();
    });
