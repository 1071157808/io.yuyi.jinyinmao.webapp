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
                        controller: 'UserSettleAccountWithdrawalCtrl as ctrl',
                        templateUrl: 'app/user/settle-account/withdrawal/withdrawal.tpl.html'
                    }
                }
            })
            .state('jym.user-settle-account-withdrawal-bank-card-selector', {
                url: '/user/settle-account/withdrawal/select-bank-card',
                views: {
                    '@': {
                        controller: 'UserSettleAccountWithdrawalBankCardSeletorCtrl as ctrl',
                        templateUrl: 'app/user/settle-account/withdrawal/bank-card-selector.tpl.html'
                    }
                }
            });
    })
    .controller('UserSettleAccountWithdrawalCtrl', function($scope, $timeout, $q, RESOURCES, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};

        ctrl.buttonEnable = function () {         
           return ctrl.viewModel.bankCardNo && ctrl.viewModel.amount && ctrl.viewModel.password;           
        };

        ctrl.doRefresh = function() {
            if (ctrl.viewModel.refreshTime && Date.now() - ctrl.viewModel.refreshTime < 100) {
                return;
            }

            ctrl.viewModel.refreshTime = Date.now();

            ctrl.resetInput();

            var refreshBankCard = ctrl.refreshBankCard()
                .then(function(result) {
                    ctrl.model.bankCard = result;
                    return result;
                });

            var refreshUser = ctrl.refreshUser()
                .then(function(result) {
                    ctrl.model.user = result;
                });

            $q.all([refreshBankCard, refreshUser])
                .then(function() {
                    ctrl.refreshViewModel();
                });
        };

        ctrl.refreshBankCard = function() {
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

        ctrl.refreshUser = function() {
            return UserService.getUserInfo();
        };

        ctrl.refreshViewModel = function() {
            if (ctrl.model.bankCard === null) {
                ctrl.viewModel.noCard = true;
            } else {
                ctrl.viewModel.bankCardNo = ctrl.model.bankCard.bankCardNo;
                ctrl.viewModel.bankName = ctrl.model.bankCard.bankName;
                ctrl.viewModel.cellphone = ctrl.model.bankCard.cellphone;
                ctrl.viewModel.cityName = ctrl.model.bankCard.cityName;
                ctrl.viewModel.verified = ctrl.model.bankCard.verified;
                ctrl.viewModel.verifiedByYilian = ctrl.model.bankCard.verifiedByYilian;
                ctrl.viewModel.verifiedTime = ctrl.model.bankCard.verifiedTime;
                ctrl.viewModel.withdrawAmount = (ctrl.model.bankCard.withdrawAmount / 100).toFixed(2);
                ctrl.viewModel.noCard = false;

                ctrl.viewModel.withdrawalableAmount = (ctrl.model.user.withdrawalableAmount / 100).toFixed(2);
            }            
        };

        ctrl.resetInput = function() {
            ctrl.viewModel.amount = null;
            ctrl.viewModel.password = '';
        };

        ctrl.selectAll = function() {
            ctrl.viewModel.amount = ctrl.viewModel.withdrawAmount;
        };

        ctrl.withdraw = function () {
            if (ctrl.buttonEnable()) {             

                if (ctrl.viewModel.amount > ctrl.viewModel.withdrawAmount) {
                    JYMUtilityService.showAlert(RESOURCES.TIP.SETTLE_ACCOUNT.WITHDRAWAL_MAX);
                    return false;
                }
                var rgexp = /^(?![^a-zA-Z~!@#$%^&*_]+$)(?!\\D+$).{8,18}$/;
                if (!rgexp.test(ctrl.viewModel.password)) {
                    JYMUtilityService.showAlert(RESOURCES.TIP.SETTLE_ACCOUNT.WITHDRAWAL_PASSWORD);
                    return false;
                }
                var amount = parseInt(ctrl.viewModel.amount * 100, 10);

                UserService.withdrawal(amount, ctrl.viewModel.bankCardNo, ctrl.viewModel.password)
                    .then(function (result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.SETTLE_ACCOUNT.WITHDRAWAL_SUCCESS);

                            UserService.sharedData.withdrawalBankCardNo = undefined;

                            $timeout(function () {
                                ctrl.resetInput();
                                JYMUtilityService.goWithDisableBack('jym.user-settle-account-detail', {
                                    transactionIdentifier: result.transactionIdentifier
                                });
                            }, 1000);
                        }
                    });
            }
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    })
    .controller('UserSettleAccountWithdrawalBankCardSeletorCtrl', function($scope, $timeout, $ionicHistory, UserService) {
        var ctrl = this;

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

        ctrl.model = {};
        ctrl.viewModel = {};

        ctrl.doRefresh = function() {
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
            return UserService.getWithdrawalableBankCards();
        };

        ctrl.refreshViewModel = function() {
            ctrl.viewModel.items = [];

            _.forEach(ctrl.model.items, function(i) {
                ctrl.viewModel.items.push(getViewItem(i));
            });
        };

        ctrl.select = function(bankCardNo) {
            UserService.sharedData.withdrawalBankCardNo = bankCardNo;
            $ionicHistory.goBack();
        };

        ctrl.selected = function(bankCardNo) {
            return UserService.sharedData.withdrawalBankCardNo === bankCardNo;
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    });