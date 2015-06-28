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

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);
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
            account.viewModel = account.model;
            account.viewModel.noCardSelected = account.model === null;
        };

        $scope.$on('$ionicView.enter', function() {
            account.doRefresh();
        });

        account.doRefresh();

    })
    .controller('UserSettleAccountDepositBankCardSeletorCtrl', function() {
        var account = this;

    });
