'use strict';
angular.module('jym.yinpiao.purchase', [
    'jym.services',
    'jym.services.product',
    'jym.services.purchase',
    'jym.services.user',
    'jym.user.orders-detail'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.yinpiao-purchase', {
                url: '/yinpiao/purchase',
                views: {
                    '@': {
                        controller: 'YinpiaoPurchaseCtrl as ctrl',
                        templateUrl: 'app/yinpiao/purchase/purchase.tpl.html'
                    }
                }
            });
    })
    .controller('YinpiaoPurchaseCtrl', function($scope, $timeout, $ionicNavBarDelegate, $ionicScrollDelegate, RESOURCES, ProductService, PurchaseService, UserService, JYMUtilityService) {
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
            ctrl.viewModel.extraInterest = 0;
            ctrl.viewModel.showAgreement1 = false;
            ctrl.viewModel.showAgreement2 = false;
            ctrl.viewModel.showCoupon = false;
            ctrl.viewModel.useCoupon = false;

            ctrl.resetInput();

            ctrl.refreshUserInfo()
                .then(function(result) {
                    ctrl.model.user = result;
                    ctrl.model.order = PurchaseService.getRegularOrder(100000010);

                    if (ctrl.model.order.amount >= 5000) {
                        UserService.getCoupon()
                            .then(function(result) {
                                ctrl.model.coupon = result;
                                ctrl.refreshViewModel();
                            });
                    } else {
                        ctrl.model.coupon = null;
                        ctrl.refreshViewModel();
                    }

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

            if (ctrl.model.order.amount >= 5000 && ctrl.model.coupon) {
                ctrl.viewModel.couponAmount = parseInt((ctrl.model.coupon.amount / 100), 10);
                ctrl.viewModel.couponId = ctrl.model.coupon.id;
                ctrl.viewModel.showCoupon = true;
                ctrl.viewModel.useCoupon = true;
            } else {
                ctrl.viewModel.couponAmount = 0;
                ctrl.viewModel.couponId = 0;
                ctrl.viewModel.showCoupon = false;
                ctrl.viewModel.useCoupon = false;
            }

            ctrl.toggleUseCoupon();
        };

        ctrl.purchase = function() {
            if (ctrl.purchaseButtonEnable()) {
                var amount = ctrl.model.order.amount;
                var couponId = ctrl.viewModel.useCoupon ? ctrl.viewModel.couponId : 0;
                UserService.investingRegular(amount, ctrl.viewModel.password, ctrl.model.order.productIdentifier, couponId)
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

        ctrl.toggleUseCoupon = function() {
            if (ctrl.viewModel.showCoupon && ctrl.viewModel.useCoupon) {
                ctrl.viewModel.extraInterest = (ctrl.viewModel.expectedInterest * ctrl.model.coupon.amount / ctrl.model.order.amount).toFixed(2);
            } else {
                ctrl.viewModel.extraInterest = 0;
            }
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    });
