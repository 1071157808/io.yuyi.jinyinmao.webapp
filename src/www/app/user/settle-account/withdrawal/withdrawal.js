'use strict';
angular.module('jym.user.settle-account-withdrawal', [
    'jym.services.user'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-settle-account-withdrawal', {
                url: '/user/settle-account/withdrawal',
                views: {
                    user: {
                        controller: 'UserSettleAccountWithdrawalCtrl as account',
                        templateUrl: 'app/user/settle-account/withdrawal/withdrawal.tpl.html'
                    }
                }
            })
            .state('jym.user-settle-account-withdrawal-bank-card-selector', {
                url: '/user/settle-account/withdrawal/select-bank-card',
                views: {
                    user: {
                        controller: 'UserSettleAccountWithdrawalBankCardSeletorCtrl as account',
                        templateUrl: 'app/user/settle-account/withdrawal/bank-card-selector.tpl.html'
                    }
                }
            });
    })
    .controller('UserSettleAccountWithdrawalCtrl', function($scope, $timeout, RESOURCES, UserService, JYMUtilityService) {
        var account = this;

        account.model = {};
        account.viewModel = {};

        account.buttonEnable = function() {
            return account.viewModel.bankCardNo && account.viewModel.amount && account.viewModel.password;
        };

        account.doRefresh = function() {
            account.viewModel.amount = undefined;
            account.viewModel.password = undefined;
            account.refresh()
                .then(function(result) {
                    account.model = result;
                    account.refreshViewModel();
                    return result;
                });
        };

        account.refresh = function() {
            if (UserService.sharedData.withdrawalBankCardNo) {
                return UserService.getBankCard(UserService.sharedData.withdrawalBankCardNo);
            } else {
                return UserService.getWithdrawalableBankCards()
                    .then(function(result) {
                        if (result.length > 0) {
                            UserService.sharedData.withdrawalBankCardNo = result[0].bankCardNo;
                            return result[0];
                        } else {
                            return null;
                        }
                    });
            }
        };

        account.refreshViewModel = function() {
            if (account.model === null) {
                account.viewModel.noCard = true;
            } else {
                account.viewModel.bankCardNo = account.model.bankCardNo;
                account.viewModel.bankName = account.model.bankName;
                account.viewModel.cellphone = account.model.cellphone;
                account.viewModel.cityName = account.model.cityName;
                account.viewModel.verified = account.model.verified;
                account.viewModel.verifiedByYilian = account.model.verifiedByYilian;
                account.viewModel.verifiedTime = account.model.verifiedTime;
                account.viewModel.withdrawAmount = (account.model.withdrawAmount / 100).toFixed(2);
                account.viewModel.noCard = false;
            }
        };

        account.selectAll = function() {
            account.viewModel.amount = account.viewModel.withdrawAmount;
        };

        account.withdraw = function() {
            var amount = parseInt(account.viewModel.amount * 100, 10);
            if (account.buttonEnable()) {
                UserService.withdrawal(amount, account.viewModel.bankCardNo, account.viewModel.password)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.SETTLEACCOUNT.WITHDRAWAL_SUCCESS);
                            UserService.sharedData.withdrawalBankCardNo = undefined;
                            $timeout(function() {
                                JYMUtilityService.go('jym.user-settle-account-detail', {
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
    })
    .controller('UserSettleAccountWithdrawalBankCardSeletorCtrl', function($scope, $timeout, $ionicHistory, UserService) {
        var account = this;

        var getViewItem = function(modelItem) {
            var card = {};
            card.bankCardNo = modelItem.bankCardNo;
            card.bankName = modelItem.bankName;
            card.cellphone = modelItem.cellphone;
            card.cityName = modelItem.cityName;
            card.verified = modelItem.verified;
            card.verifiedByYilian = modelItem.verifiedByYilian;
            card.verifiedTime = modelItem.verifiedTime;
            card.withdrawAmount = (modelItem.withdrawAmount / 100).toFixed(2);
            return card;
        };

        account.model = {};
        account.viewModel = {};
        account.viewModel.items = [];

        account.doRefresh = function() {
            account.refreshBankCards()
                .then(function(result) {
                    account.model = result;
                    account.refreshViewModel();
                    return result;
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);
        };

        account.refreshBankCards = function() {
            return UserService.getWithdrawalableBankCards();
        };

        account.refreshViewModel = function() {
            account.viewModel.items = [];

            _.forEach(account.model, function(c) {
                account.viewModel.items.push(getViewItem(c));
            });
        };

        account.select = function(bankCardNo) {
            UserService.sharedData.withdrawalBankCardNo = bankCardNo;
            $ionicHistory.goBack();
        };

        account.selected = function(bankCardNo) {
            return UserService.sharedData.withdrawalBankCardNo === bankCardNo;
        };

        $scope.$on('$ionicView.enter', function() {
            account.doRefresh();
        });

        account.doRefresh();
    });
