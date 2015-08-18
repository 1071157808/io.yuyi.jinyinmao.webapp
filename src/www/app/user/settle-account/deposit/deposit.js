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
                        controller: 'UserSettleAccountDepositCtrl as ctrl',
                        templateUrl: 'app/user/settle-account/deposit/deposit.tpl.html'
                    }
                }
            })
            .state('jym.user-settle-account-deposit-bank-card-selector', {
                url: '/user/settle-account/deposit/select-bank-card',
                views: {
                    '@': {
                        controller: 'UserSettleAccountDepositBankCardSeletorCtrl as ctrl',
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
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};

        ctrl.buttonEnable = function() {
            return ctrl.viewModel.bankCardNo && ctrl.viewModel.amount && ctrl.viewModel.password;
        };

        ctrl.doRefresh = function() {
            if (ctrl.viewModel.refreshTime && Date.now() - ctrl.viewModel.refreshTime < 100) {
                return;
            }

            ctrl.viewModel.refreshTime = Date.now();

            ctrl.resetInput();

            ctrl.refresh()
                .then(function(result) {
                    ctrl.model = result;
                    ctrl.refreshViewModel();
                    return result;
                });
        };

        ctrl.deposit = function() {
            if (ctrl.buttonEnable()) {
                var rgexp = /^(?![^a-zA-Z~!@#$%^&*_]+$)(?!\\D+$).{8,18}$/;
                if (!rgexp.test(ctrl.viewModel.password)) {
                    JYMUtilityService.showAlert(RESOURCES.TIP.SETTLE_ACCOUNT.WITHDRAWAL_PASSWORD);
                    return false;
                }

                var amount = parseInt(ctrl.viewModel.amount * 100, 10);
                UserService.depositByYilian(amount, ctrl.viewModel.bankCardNo, ctrl.viewModel.password)
                    .then(function (result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.SETTLE_ACCOUNT.DEPOSIT_SUCCESS);

                            UserService.sharedData.depositBankCardNo = undefined;

                            $timeout(function () {
                                ctrl.resetInput();
                                JYMUtilityService.goWithDisableBack('jym.user-settle-account-deposit-success');
                            }, 1000);
                        }
                    });
            }
        };

        ctrl.refresh = function() {
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

        ctrl.refreshViewModel = function() {
            if (ctrl.model === null) {
                ctrl.viewModel.noCard = true;
            } else {
                ctrl.viewModel.bankCardNo = ctrl.model.bankCardNo;
                ctrl.viewModel.bankName = ctrl.model.bankName;
                ctrl.viewModel.cellphone = ctrl.model.cellphone;
                ctrl.viewModel.cityName = ctrl.model.cityName;
                ctrl.viewModel.verified = ctrl.model.verified;
                ctrl.viewModel.verifiedByYilian = ctrl.model.verifiedByYilian;
                ctrl.viewModel.verifiedTime = ctrl.model.verifiedTime;
                ctrl.viewModel.withdrawAmount = (ctrl.model.withdrawAmount / 100).toFixed(2);
                ctrl.viewModel.noCard = false;
            }
        };

        ctrl.resetInput = function() {
            ctrl.viewModel.amount = null;
            ctrl.viewModel.password = '';
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();

    })
    .controller('UserSettleAccountDepositBankCardSeletorCtrl', function($scope, $timeout, $ionicHistory, UserService) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};
        ctrl.viewModel.items = [];

        var getViewItem = function(modelItem) {
            var item = {};
            item.bankCardNo = modelItem.bankCardNo;
            item.bankName = modelItem.bankName;
            item.cellphone = modelItem.cellphone;
            item.cityName = modelItem.cityName;
            item.verified = modelItem.verified;
            item.verifiedByYilian = modelItem.verifiedByYilian;
            item.verifiedTime = modelItem.verifiedTime;
            item.withdrawAmount = (modelItem.withdrawAmount / 100).toFixed(2);
            return item;
        };

        ctrl.doRefresh = function() {
            if (ctrl.viewModel.refreshTime && Date.now() - ctrl.viewModel.refreshTime < 100) {
                return;
            }

            ctrl.viewModel.refreshTime = Date.now();

            ctrl.refreshBankCards()
                .then(function(result) {
                    ctrl.model.items = result;
                    ctrl.refreshViewModel();
                    return result;
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        ctrl.refreshBankCards = function() {
            return UserService.getBankCards();
        };

        ctrl.refreshViewModel = function() {
            ctrl.viewModel.items = [];

            _.forEach(ctrl.model.items, function(i) {
                ctrl.viewModel.items.push(getViewItem(i));
            });
        };

        ctrl.select = function(bankCardNo) {
            UserService.sharedData.depositBankCardNo = bankCardNo;
            $ionicHistory.goBack();
        };

        ctrl.selected = function(bankCardNo) {
            return UserService.sharedData.depositBankCardNo === bankCardNo;
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    })
    .controller('UserSettleAccountDepositSuccessCtrl', function($stateParams, JYMUtilityService) {
        var ctrl = this;

        ctrl.transactionIdentifier = $stateParams.transactionIdentifier;

        ctrl.go = function(toState, params) {
            params = params || {};
            JYMUtilityService.goWithDisableBack(toState, params);
        };

    });
