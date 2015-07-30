'use strict';
angular.module('jym.user.jinbaoyin-withdrawal', [
    'jym.services.user'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-jinbaoyin-withdrawal', {
                url: '/user/jinbaoyin/withdrawal',
                views: {
                    '@': {
                        controller: 'UserJinbaoyinWithdrawalCtrl as ctrl',
                        templateUrl: 'app/user/jinbaoyin/withdrawal/withdrawal.tpl.html'
                    }
                }
            });
    })
    .controller('UserJinbaoyinWithdrawalCtrl', function($scope, $timeout, $ionicNavBarDelegate, $ionicScrollDelegate, RESOURCES, JinbaoyinService, ProductService, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};

        ctrl.check = function() {
            ctrl.viewModel.checked = !ctrl.viewModel.checked;
        };

        ctrl.doRefresh = function() {
            if (ctrl.viewModel.refreshTime && Date.now() - ctrl.viewModel.refreshTime < 100) {
                return;
            }

            ctrl.viewModel.refreshTime = Date.now();

            ctrl.viewModel.agreement = '金包银自动交易授权委托书';
            ctrl.viewModel.amount = null;
            ctrl.viewModel.showAgreement = false;

            ctrl.resetInput();

            ctrl.refreshUser()
                .then(function(result) {
                    ctrl.model.user = result;
                    ctrl.refreshViewModel();
                    return result;
                })
                .then(function() {
                    ctrl.refreshAgreement()
                        .then(function(result) {
                            var agreementData = {
                                cellphone: ctrl.model.user.cellphone,
                                credentialNo: ctrl.model.user.credentialNo,
                                realName: ctrl.model.user.realName
                            };

                            ctrl.viewModel.agreement = ProductService.fillDataForAgreement(result.content, agreementData);
                        });

                });
        };

        ctrl.refreshAgreement = function() {
            return JinbaoyinService.getTransferAgreement();
        };

        ctrl.refreshUser = function() {
            return UserService.getUserInfo();
        };

        ctrl.refreshViewModel = function() {
            ctrl.viewModel.userBalance = (ctrl.model.user.balance / 100).toFixed(2);
            ctrl.viewModel.jBYLastInterest = (ctrl.model.user.jBYLastInterest / 100).toFixed(2);
            ctrl.viewModel.jBYTotalAmount = (ctrl.model.user.jBYTotalAmount / 100).toFixed(2);
            ctrl.viewModel.jBYTotalInterest = (ctrl.model.user.jBYTotalInterest / 100).toFixed(2);
            ctrl.viewModel.jBYTotalPricipal = (ctrl.model.user.jBYTotalPricipal / 100).toFixed(2);
            ctrl.viewModel.jBYWithdrawalableAmount = (ctrl.model.user.jBYWithdrawalableAmount / 100).toFixed(2);
            ctrl.viewModel.todayJBYWithdrawalAmount = (ctrl.model.user.todayJBYWithdrawalAmount / 100).toFixed(2);
            ctrl.viewModel.todayJBYWithdrawalableAmount = 100000 - ctrl.viewModel.todayJBYWithdrawalAmount;

            if (ctrl.viewModel.todayJBYWithdrawalableAmount > ctrl.viewModel.jBYWithdrawalableAmount) {
                ctrl.viewModel.todayJBYWithdrawalableAmount = ctrl.viewModel.jBYWithdrawalableAmount;
            }
        };

        ctrl.resetInput = function() {
            ctrl.viewModel.amount = null;
            ctrl.viewModel.checked = true;
            ctrl.viewModel.password = '';
        };

        ctrl.toggleAgreement = function() {
            $ionicScrollDelegate.scrollTop();
            ctrl.viewModel.showAgreement = !ctrl.viewModel.showAgreement;
            $ionicNavBarDelegate.showBackButton(!ctrl.viewModel.showAgreement);
        };

        ctrl.withdraw = function() {
            var amount = parseInt(ctrl.viewModel.amount * 100, 10);
            if (ctrl.withdrawButtonEnable()) {
                UserService.jBYWithdrawal(amount, ctrl.viewModel.password)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.JINBAOYIN.WITHDRAWAL_SUCCESS);

                            $timeout(function() {
                                ctrl.resetInput();
                                JYMUtilityService.goWithDisableBack('jym.user-jinbaoyin-detail', {
                                    transactionIdentifier: result.transactionIdentifier
                                });
                            }, 1000);
                        }
                    });
            }
        };

        ctrl.withdrawButtonEnable = function() {
            return ctrl.viewModel.checked && ctrl.viewModel.amount && ctrl.viewModel.password && ctrl.viewModel.amount <= ctrl.viewModel.todayJBYWithdrawalableAmount;
        };

        $scope.$on('$ionicView.beforeEnter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    });
