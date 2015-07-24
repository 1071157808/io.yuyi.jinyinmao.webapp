'use strict';
angular.module('jym.user.settle-account-deposit', [
    'jym.services.user'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-settle-account-deposit', {
                url: '/user/settle-account/deposit',
                views: {
                    '@': {
                        controller: 'UserSettleAccountDepositCtrl as account',
                        templateUrl: 'app/user/settle-account/deposit/deposit.tpl.html'
                    }
                }
            })
            .state('jym.user-settle-account-deposit-bank-card-selector', {
                url: '/user/settle-account/deposit/select-bank-card',
                views: {
                    '@': {
                        controller: 'UserSettleAccountDepositBankCardSeletorCtrl as account',
                        templateUrl: 'app/user/settle-account/deposit/bank-card-selector.tpl.html'
                    }
                }
            })
            .state('jym.user-settle-account-deposit-success', {
                url: '/user/settle-account/deposit/success/{transactionIdentifier}',
                views: {
                    '@': {
                        controller: 'UserSettleAccountDepositSuccessCtrl as ctrl',
                        templateUrl: 'app/user/settle-account/deposit/deposit-success.tpl.html'
                    }
                }
            });
    })
    .controller('UserSettleAccountDepositCtrl', function($scope, $timeout, RESOURCES, UserService, JYMUtilityService) {
        var account = this;

        account.model = {};
        account.viewModel = {};

        account.buttonEnable = function() {
            return account.viewModel.bankCardNo && account.viewModel.amount && account.viewModel.password;
        };

        account.doRefresh = function() {
            account.resetInput();

            account.refresh()
                .then(function(result) {
                    account.model = result;
                    account.refreshViewModel();
                    return result;
                });
        };

        account.deposit = function() {
            if (account.buttonEnable()) {
                var amount = parseInt(account.viewModel.amount * 100, 10);
                UserService.depositByYilian(amount, account.viewModel.bankCardNo, account.viewModel.password)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.SETTLEACCOUNT.DEPOSIT_SUCCESS);

                            UserService.sharedData.depositBankCardNo = undefined;

                            $timeout(function() {
                                account.resetInput();
                                JYMUtilityService.goWithDisableBack('jym.user-settle-account-deposit-success');
                            }, 1000);
                        }
                    });
            }
        };

        account.refresh = function() {
            if (UserService.sharedData.depositBankCardNo) {
                return UserService.getBankCard(UserService.sharedData.depositBankCardNo);
            } else {
                return UserService.getBankCards()
                    .then(function(result) {
                        result = _.filter(result, function(r) {
                            return r.verifiedByYilian && r.verified;
                        });

                        if (result.length > 0) {
                            UserService.sharedData.depositBankCardNo = result[0].bankCardNo;
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

        account.resetInput = function() {
            account.viewModel.amount = null;
            account.viewModel.password = '';
        };

        $scope.$on('$ionicView.enter', function() {
            account.doRefresh();
        });

        account.doRefresh();

    })
    .controller('UserSettleAccountDepositBankCardSeletorCtrl', function($scope, $timeout, $ionicHistory, UserService) {
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
            }, 1500);
        };

        account.refreshBankCards = function() {
            return UserService.getBankCards();
        };

        account.refreshViewModel = function() {
            account.viewModel.items = [];

            _.forEach(account.model, function(c) {
                var card = {};

                card.bankCardNo = c.bankCardNo;
                card.bankName = c.bankName;
                card.cellphone = c.cellphone;
                card.cityName = c.cityName;
                card.verified = c.verified;
                card.verifiedByYilian = c.verifiedByYilian;
                card.verifiedTime = c.verifiedTime;
                card.withdrawAmount = (c.withdrawAmount / 100).toFixed(2);
                account.viewModel.items.push(c);
            });
        };

        account.select = function(bankCardNo) {
            UserService.sharedData.depositBankCardNo = bankCardNo;
            $ionicHistory.goBack();
        };

        account.selected = function(bankCardNo) {
            return UserService.sharedData.depositBankCardNo === bankCardNo;
        };

        $scope.$on('$ionicView.enter', function() {
            account.doRefresh();
        });

        account.doRefresh();
    })
    .controller('UserSettleAccountDepositSuccessCtrl', function($stateParams, JYMUtilityService) {
        var ctrl = this;

        ctrl.transactionIdentifier = $stateParams.transactionIdentifier;

        ctrl.go = function(toState, params) {
            params = params || {};
            JYMUtilityService.goWithDisableBack(toState, params);
        };

    });
