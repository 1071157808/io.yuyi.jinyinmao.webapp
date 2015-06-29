angular.module('jym.user.settle-account-deposit', [
    'jym.services.user'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-settle-account-deposit', {
                url: '/user/settle-account/deposit/{bankCardNo}',
                views: {
                    'user': {
                        controller: 'UserSettleAccountDepositCtrl as account',
                        templateUrl: 'app/user/settle-account/deposit/deposit.tpl.html'
                    }
                }
            })
            .state('jym.user-settle-account-deposit-bank-card-selector', {
                url: '/user/settle-account/deposit/selectBankCard',
                views: {
                    'user': {
                        controller: 'UserSettleAccountDepositBankCardSeletorCtrl as account',
                        templateUrl: 'app/user/settle-account/deposit/bank-card-selector.tpl.html'
                    }
                }
            })
            .state('jym.user-settle-account-deposit-success', {
                url: '/user/settle-account/deposit/success',
                views: {
                    'user': {
                        templateUrl: 'app/user/settle-account/deposit/deposit-success.tpl.html'
                    }
                }
            });
    })
    .controller('UserSettleAccountDepositCtrl', function($scope, $stateParams, $timeout, RESOURCES, UserService, JYMUtilityService) {
        var account = this;

        account.model = {};
        account.viewModel = {};
        account.viewModel.amount = undefined;
        account.viewModel.password = undefined;

        account.buttonEnable = function() {
            return account.viewModel.bankCardNo && account.viewModel.amount && account.viewModel.password;
        };

        account.doRefresh = function() {
            account.refresh()
                .then(function(result) {
                    account.model = result;
                    account.refreshViewModel();
                    return result;
                });
        };

        account.deposit = function() {
            var amount = parseInt(account.viewModel.amount * 100);
            if(account.buttonEnable()) {
                UserService.deposit(amount, account.viewModel.bankCardNo, account.viewModel.password)
                    .then(function(result) {
                        if(result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.SETTLEACCOUNT.DEPOSIT_SUCCESS);

                            $timeout(function() {
                                JYMUtilityService.go('jym.user-settle-account-deposit-success');
                            }, 1000);
                        }
                    });
            }
        };

        account.refresh = function() {
            if ($stateParams.bankCardNo) {
                return UserService.getBankCard($stateParams.bankCardNo);
            } else {
                return UserService.getWithdrawalableBankCards()
                    .then(function(result) {
                        if (result.length > 0) {
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

        $scope.$on('$ionicView.enter', function() {
            account.doRefresh();
        });

        account.doRefresh();

    })
    .controller('UserSettleAccountDepositBankCardSeletorCtrl', function($scope, $timeout, UserService) {
        var account = this;

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
            return UserService.getBankCards();
        };

        account.refreshViewModel = function() {
            account.viewModel.items = account.model;
        };

        $scope.$on('$ionicView.enter', function() {
            account.doRefresh();
        });

        account.doRefresh();
    });
