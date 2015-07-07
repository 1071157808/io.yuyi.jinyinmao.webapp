'use strict';
angular.module('jym.user.jinbaoyin-withdrawal', [
    'jym.services.user'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-jinbaoyin-withdrawal', {
                url: '/user/jinbaoyin/withdrawal',
                views: {
                    user: {
                        controller: 'UserJinbaoyinWithdrawalCtrl as account',
                        templateUrl: 'app/user/jinbaoyin/withdrawal/withdrawal.tpl.html'
                    }
                }
            });
    })
    .controller('UserJinbaoyinWithdrawalCtrl', function($scope, $timeout, $ionicScrollDelegate, RESOURCES, JinbaoyinService, ProductService, UserService, JYMUtilityService) {
        var account = this;

        account.model = {};
        account.viewModel = {};

        account.check = function() {
            account.viewModel.checked = !account.viewModel.checked;
        };

        account.doRefresh = function() {
            account.viewModel.agreement = '金包银自动交易授权委托书';
            account.viewModel.amount = 10;
            account.viewModel.checked = true;
            account.viewModel.password = '';
            account.viewModel.showAgreement = false;

            account.refreshUser()
                .then(function(result) {
                    account.model.user = result;
                    account.refreshViewModel();
                    return result;
                })
                .then(function() {
                    account.refreshAgreement()
                        .then(function(result) {
                            result.then(function(result) {
                                var agreementData = {
                                    cellphone: account.model.user.cellphone,
                                    credentialNo: account.model.user.credentialNo,
                                    realName: account.model.user.realName
                                };

                                account.viewModel.agreement = ProductService.fillDataForAgreement(result.content, agreementData);
                            });
                        });
                });
        };

        account.refreshAgreement = function() {
            return JinbaoyinService.getTransferAgreement();
        };

        account.refreshUser = function() {
            return UserService.getUserInfo();
        };

        account.refreshViewModel = function() {
            account.viewModel.userBalance = (account.model.user.balance / 100).toFixed(2);
            account.viewModel.jBYLastInterest = (account.model.user.jBYLastInterest / 100).toFixed(2);
            account.viewModel.jBYTotalAmount = (account.model.user.jBYTotalAmount / 100).toFixed(2);
            account.viewModel.jBYTotalInterest = (account.model.user.jBYTotalInterest / 100).toFixed(2);
            account.viewModel.jBYTotalPricipal = (account.model.user.jBYTotalPricipal / 100).toFixed(2);
            account.viewModel.jBYWithdrawalableAmount = (account.model.user.jBYWithdrawalableAmount / 100).toFixed(2);
            account.viewModel.todayJBYWithdrawalAmount = (account.model.user.todayJBYWithdrawalAmount / 100).toFixed(2);
            account.viewModel.todayJBYWithdrawalableAmount = 100000 - account.viewModel.todayJBYWithdrawalAmount;

            if (account.viewModel.todayJBYWithdrawalableAmount > account.viewModel.jBYWithdrawalableAmount) {
                account.viewModel.todayJBYWithdrawalableAmount = account.viewModel.jBYWithdrawalableAmount;
            }
        };

        account.toggleAgreement = function() {
            $ionicScrollDelegate.scrollTop();
            account.viewModel.showAgreement = !account.viewModel.showAgreement;
        };

        account.withdraw = function() {
            var amount = parseInt(account.viewModel.amount * 100, 10);
            if (account.buttonEnable()) {
                UserService.jBYWithdrawal(amount, account.viewModel.password)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.JINBAOYIN.WITHDRAWAL_SUCCESS);
                            $timeout(function() {
                                JYMUtilityService.goWithDisableBack('jym.user-jinbaoyin-detail', {
                                    transactionIdentifier: result.transactionIdentifier
                                });
                            }, 1000);
                        }
                    });
            }
        };

        account.withdrawButtonEnable = function() {
            return account.viewModel.checked && account.viewModel.amount && account.viewModel.password && account.viewModel.amount <= account.viewModel.todayJBYWithdrawalableAmount;
        };

        $scope.$on('$ionicView.enter', function() {
            account.doRefresh();
        });

        account.doRefresh();
    });
