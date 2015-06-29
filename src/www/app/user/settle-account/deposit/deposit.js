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
                        templateUrl: 'app/user/settle-account/deposit/bankCardSelector.tpl.html'
                    }
                }
            });
    })
    .controller('UserSettleAccountDepositCtrl', function($scope, $stateParams, $timeout, UserService) {
        var account = this;

        account.model = {};
        account.viewModel = {};


        account.doRefresh = function() {
            account.refresh()
                .then(function(result) {
                    account.model = result;
                    account.refreshViewModel();
                    return result;
                });
        };

        account.refresh = function() {
            if ($stateParams.bankCardNo) {
                return UserService.getBankCard($stateParams.bankCardNo);
            } else {
                return UserService.getWithdrawalableBankCards($stateParams.bankCardNo)
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
                account.viewModel = {};
                account.viewModel.noCard = true;
            } else {
                account.viewModel.bankCardNo = account.model.bankCardNo;
                account.viewModel.bankName = account.model.bankName;
                account.viewModel.cellphone = account.model.cellphone;
                account.viewModel.cityName = account.model.cityName;
                account.viewModel.verified = account.model.verified;
                account.viewModel.verifiedByYilian = account.model.verifiedByYilian;
                account.viewModel.verifiedTime = account.model.verifiedTime;
                account.viewModel.withdrawAmount = account.model.withdrawAmount;
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
