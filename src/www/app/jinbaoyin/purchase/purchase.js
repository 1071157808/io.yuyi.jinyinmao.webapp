'use strict';
angular.module('jym.jinbaoyin.purchase', [
    'jym.services',
    'jym.services.purchase',
    'jym.services.user'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.jinbaoyin-purchase', {
                url: '/jinbaoyin/purchase/{productIdentifier}',
                views: {
                    '@': {
                        controller: 'JinbaoyinPurchaseCtrl as ctrl',
                        templateUrl: 'app/jinbaoyin/purchase/purchase.tpl.html'
                    }
                }
            });
    })
    .controller('JinbaoyinPurchaseCtrl', function($scope, $stateParams, $timeout, $ionicNavBarDelegate, $ionicScrollDelegate, RESOURCES, JinbaoyinService, ProductService, PurchaseService, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};

        ctrl.check = function() {
            ctrl.viewModel.checked = !ctrl.viewModel.checked;
        };

        ctrl.doRefresh = function() {
            if (ctrl.viewModel.refreshTime && Date.now() - ctrl.viewModel.refreshTime < 1000) {
                return;
            }

            ctrl.viewModel.refreshTime = Date.now();

            ctrl.viewModel.agreement = '金银猫金包银投资协议';

            ctrl.resetInput();

            ctrl.refreshUserInfo()
                .then(function(result) {
                    ctrl.model.user = result;
                    ctrl.model.order = PurchaseService.getNewJBYOrder();
                    ctrl.refreshViewModel();
                    return result;
                })
                .then(function() {
                    ctrl.refreshAgreement()
                        .then(function(result) {
                            ctrl.viewModel.agreement = ProductService.fillDataForAgreement(result.content, {
                                cellphone: ctrl.model.user.cellphone,
                                credentialNo: ctrl.model.user.credentialNo,
                                realName: ctrl.model.user.realName
                            });
                        });
                });
        };

        ctrl.refreshAgreement = function() {
            return JinbaoyinService.getAgreement($stateParams.productIdentifier, 2);
        };

        ctrl.refreshUserInfo = function() {
            return UserService.getUserInfo();
        };

        ctrl.refreshViewModel = function() {
            ctrl.viewModel.amount = (ctrl.model.order.amount / 100).toFixed(2);
            ctrl.viewModel.balance = (ctrl.model.user.balance / 100).toFixed(2);
            ctrl.viewModel.expectedInterest = ctrl.model.order.expectedInterest;
        };

        ctrl.purchaseButtonEnable = function() {
            return ctrl.viewModel.checked && ctrl.viewModel.amount && ctrl.viewModel.password && ctrl.model.user.balance >= ctrl.model.order.amount;
        };

        ctrl.purchase = function() {
            if (ctrl.purchaseButtonEnable()) {
                var amount = ctrl.model.order.amount;
                UserService.investingJBY(amount, ctrl.viewModel.password, ctrl.model.order.productIdentifier)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.INVESTING.JBY);

                            PurchaseService.clearJBYOrder();

                            $timeout(function() {
                                ctrl.resetInput();
                                JYMUtilityService.goWithDisableBack('jym.user-jinbaoyin-detail', { transactionIdentifier: result.transactionIdentifier });
                            }, 1000);
                        }
                    });
            }
        };

        ctrl.resetInput = function() {
            ctrl.viewModel.checked = true;
            ctrl.viewModel.password = '';
        };

        ctrl.toggleAgreement = function() {
            $ionicScrollDelegate.scrollTop();
            ctrl.viewModel.showAgreement = !ctrl.viewModel.showAgreement;
            $ionicNavBarDelegate.showBackButton(!ctrl.viewModel.showAgreement);
        };

        $scope.$on('$ionicView.beforeEnter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    });
