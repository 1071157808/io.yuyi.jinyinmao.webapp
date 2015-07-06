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
    .controller('UserJinbaoyinWithdrawalCtrl', function($scope, $timeout, RESOURCES, UserService, JYMUtilityService) {
        var account = this;

        account.model = {};
        account.viewModel = {};
        account.viewModel.amount = undefined;
        account.viewModel.password = undefined;

        account.buttonEnable = function() {
            return account.viewModel.amount && account.viewModel.password && account.viewModel.amount <= account.viewModel.todayJBYWithdrawalableAmount;
        };

        account.doRefresh = function() {
            account.refreshUser()
                .then(function(result) {
                    account.model.user = result;
                    account.refreshViewModel();
                    return result;
                });
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

        $scope.$on('$ionicView.enter', function() {
            account.doRefresh();
        });

        account.doRefresh();
    });
