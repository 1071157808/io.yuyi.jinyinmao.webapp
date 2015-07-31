'use strict';
angular.module('jym.zhuanqu.purchase', [
    'jym.services',
    'jym.services.product',
    'jym.services.purchase',
    'jym.services.user',
    'jym.user.orders-detail'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.zhuanqu-purchase', {
                url: '/zhuanqu/purchase/{bankName}',
                views: {
                    '@': {
                        controller: 'ZhuanquPurchaseCtrl as ctrl',
                        templateUrl: 'app/zhuanqu/purchase/purchase.tpl.html'
                    }
                }
            });
    })
    .controller('ZhuanquPurchaseCtrl', function($scope, $stateParams, $timeout, $ionicNavBarDelegate, $ionicScrollDelegate, RESOURCES, ProductService, PurchaseService, UserService, JYMUtilityService) {
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

            ctrl.viewModel.agreement1 = '委托协议';
            ctrl.viewModel.agreement2 = '借款协议';
            ctrl.viewModel.bankName = $stateParams.bankName || ctrl.viewModel.bankName || 'fudian';
            ctrl.viewModel.showAgreement1 = false;
            ctrl.viewModel.showAgreement2 = false;

            ctrl.resetInput();

            var productCategory;
            switch (ctrl.viewModel.bankName) {
                case 'fudian':
                    productCategory = 210001010;
                    break;
                case 'fuxin':
                    productCategory = 210003010;
                    break;
                case 'shibing':
                    productCategory = 210002020;
                    break;
                default :
                    productCategory = 210001010;
            }

            ctrl.refreshUserInfo()
                .then(function(result) {
                    ctrl.model.user = result;
                    ctrl.model.order = PurchaseService.getRegularOrder(productCategory);
                    ctrl.refreshViewModel();
                    return result;
                })
                .then(function() {
                    var agreementData = {
                        cellphone: ctrl.model.user.cellphone,
                        credentialNo: ctrl.model.user.credentialNo,
                        realName: ctrl.model.user.realName
                    };

                    ctrl.refreshAgreement(1)
                        .then(function(result) {
                            ctrl.viewModel.agreement1 = ProductService.fillDataForAgreement(result.content, agreementData);
                        });

                    ctrl.refreshAgreement(2)
                        .then(function(result) {
                            ctrl.viewModel.agreement2 = ProductService.fillDataForAgreement(result.content, agreementData);
                        });
                });
        };

        ctrl.refreshAgreement = function(agreementIndex) {
            return ProductService.getAgreementContent(ctrl.model.order.productIdentifier, agreementIndex);
        };

        ctrl.refreshUserInfo = function() {
            return UserService.getUserInfo();
        };

        ctrl.refreshViewModel = function() {
            ctrl.viewModel.amount = (ctrl.model.order.amount / 100).toFixed(2);
            ctrl.viewModel.balance = (ctrl.model.user.balance / 100).toFixed(2);
            ctrl.viewModel.expectedInterest = ctrl.model.order.expectedInterest;
        };

        ctrl.purchase = function() {
            if (ctrl.purchaseButtonEnable()) {
                var amount = ctrl.model.order.amount;
                UserService.investingRegular(amount, ctrl.viewModel.password, ctrl.model.order.productIdentifier)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.INVESTING.REGULAR);

                            PurchaseService.clearRegularOrder();

                            $timeout(function() {
                                ctrl.resetInput();
                                JYMUtilityService.goWithDisableBack('jym.user-orders-detail', { orderIdentifier: result.orderIdentifier });
                            }, 1000);
                        }
                    });
            }
        };

        ctrl.purchaseButtonEnable = function() {
            return ctrl.viewModel.checked && ctrl.viewModel.amount && ctrl.viewModel.password && ctrl.model.user.balance >= ctrl.model.order.amount;
        };

        ctrl.resetInput = function() {
            ctrl.viewModel.checked = true;
            ctrl.viewModel.password = '';
        };

        ctrl.toggleAgreement1 = function() {
            ctrl.viewModel.showAgreement2 = false;
            $ionicScrollDelegate.scrollTop();
            ctrl.viewModel.showAgreement1 = !ctrl.viewModel.showAgreement1;
            $ionicNavBarDelegate.showBackButton(!ctrl.viewModel.showAgreement1);
        };

        ctrl.toggleAgreement2 = function() {
            ctrl.viewModel.showAgreement1 = false;
            $ionicScrollDelegate.scrollTop();
            ctrl.viewModel.showAgreement2 = !ctrl.viewModel.showAgreement2;
            $ionicNavBarDelegate.showBackButton(!ctrl.viewModel.showAgreement2);
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    });
