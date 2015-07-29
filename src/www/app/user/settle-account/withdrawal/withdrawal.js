'use strict';
angular.module('jym.user.settle-account-withdrawal', [
    'jym.services.user'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-settle-account-withdrawal', {
                url: '/user/settle-account/withdrawal',
                views: {
                    '@': {
                        controller: 'UserSettleAccountWithdrawalCtrl as account',
                        templateUrl: 'app/user/settle-account/withdrawal/withdrawal.tpl.html'
                    }
                }
            })
            .state('jym.user-settle-account-withdrawal-bank-card-selector', {
                url: '/user/settle-account/withdrawal/select-bank-card',
                views: {
                    '@': {
                        controller: 'UserSettleAccountWithdrawalBankCardSeletorCtrl as account',
                        templateUrl: 'app/user/settle-account/withdrawal/bank-card-selector.tpl.html'
                    }
                }
            });
    })
    .controller('UserSettleAccountWithdrawalCtrl', function($scope, $timeout, $q, RESOURCES, UserService, JYMUtilityService) {
        var account = this;

        account.model = {};
        account.viewModel = {};

        account.buttonEnable = function() {
            return account.viewModel.bankCardNo && account.viewModel.amount && account.viewModel.password;
        };

        account.doRefresh = function() {
            account.resetInput();

            var refreshBankCard = account.refreshBankCard()
                .then(function(result) {
                    account.model.bankCard = result;
                    return result;
                });

            var refreshUser = account.refreshUser()
                .then(function(result) {
                    account.model.user = result;
                });

            $q.all([refreshBankCard, refreshUser])
                .then(function() {
                    account.refreshViewModel();
                });
        };

        account.refreshBankCard = function() {
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

        account.refreshUser = function() {
            return UserService.getUserInfo();
        };

        account.refreshViewModel = function() {
            if (account.model.bankCard === null) {
                account.viewModel.noCard = true;
            } else {
                account.viewModel.bankCardNo = account.model.bankCard.bankCardNo;
                account.viewModel.bankName = account.model.bankCard.bankName;
                account.viewModel.cellphone = account.model.bankCard.cellphone;
                account.viewModel.cityName = account.model.bankCard.cityName;
                account.viewModel.verified = account.model.bankCard.verified;
                account.viewModel.verifiedByYilian = account.model.bankCard.verifiedByYilian;
                account.viewModel.verifiedTime = account.model.bankCard.verifiedTime;
                account.viewModel.withdrawAmount = (account.model.bankCard.withdrawAmount / 100).toFixed(2);
                account.viewModel.noCard = false;

                account.viewModel.withdrawalableAmount = (account.model.user.withdrawalableAmount / 100).toFixed(2);
            }
        };

        account.resetInput = function() {
            account.viewModel.amount = null;
            account.viewModel.password = '';
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
                                account.resetInput();
                                JYMUtilityService.go('jym.user-settle-account-detail', {
                                    transactionIdentifier: result.transactionIdentifier
                                });
                            }, 1000);
                        }
                    });
            }
        };

        $scope.$on('$ionicView.beforeEnter', function() {
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

        account.doRefresh = function() {
            account.refreshBankCards()
                .then(function(result) {
                    account.model = result;
                    account.refreshViewModel();
                    return result;
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
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

        $scope.$on('$ionicView.beforeEnter', function() {
            account.doRefresh();
        });

        account.doRefresh();
    });
