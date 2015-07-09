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
                    zhuanqu: {
                        controller: 'ZhuanquPurchaseCtrl as purchase',
                        templateUrl: 'app/zhuanqu/purchase/purchase.tpl.html'
                    }
                }
            });
    })
    .controller('ZhuanquPurchaseCtrl', function($scope, $stateParams, $timeout, $ionicScrollDelegate, RESOURCES, ProductService, PurchaseService, UserService, JYMUtilityService) {
        var purchase = this;

        purchase.model = {};
        purchase.viewModel = {};
        purchase.model.currentUser = {};
        purchase.model.order = {};

        purchase.check = function() {
            purchase.viewModel.checked = !purchase.viewModel.checked;
        };

        purchase.doRefresh = function() {
            purchase.viewModel.agreement1 = '委托协议';
            purchase.viewModel.agreement2 = '借款协议';
            purchase.viewModel.bankName = $stateParams.bankName || purchase.viewModel.bankName || 'fudian';
            purchase.viewModel.checked = true;
            purchase.viewModel.password = '';
            purchase.viewModel.showAgreement1 = false;
            purchase.viewModel.showAgreement2 = false;

            var productCategory;
            switch (purchase.viewModel.bankName) {
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

            purchase.refreshUserInfo()
                .then(function(result) {
                    purchase.model.user = result;
                    purchase.model.order = PurchaseService.getRegularOrder(productCategory);
                    purchase.refreshViewModel();
                    return result;
                })
                .then(function() {
                    var agreementData = {
                        cellphone: purchase.model.user.cellphone,
                        credentialNo: purchase.model.user.credentialNo,
                        realName: purchase.model.user.realName
                    };

                    purchase.refreshAgreement(1)
                        .then(function(result) {
                            purchase.viewModel.agreement1 = ProductService.fillDataForAgreement(result.content, agreementData);
                        });

                    purchase.refreshAgreement(2)
                        .then(function(result) {
                            purchase.viewModel.agreement2 = ProductService.fillDataForAgreement(result.content, agreementData);
                        });
                });
        };

        purchase.refreshAgreement = function(agreementIndex) {
            return ProductService.getAgreementContent(purchase.model.order.productIdentifier, agreementIndex);
        };

        purchase.refreshUserInfo = function() {
            return UserService.getUserInfo();
        };

        purchase.refreshViewModel = function() {
            purchase.viewModel.amount = (purchase.model.order.amount / 100).toFixed(2);
            purchase.viewModel.balance = (purchase.model.user.balance / 100).toFixed(2);
        };

        purchase.purchaseButtonEnable = function() {
            return purchase.viewModel.checked && purchase.viewModel.amount && purchase.viewModel.password && purchase.model.user.balance >= purchase.model.order.amount;
        };

        purchase.purchase = function() {
            if (purchase.purchaseButtonEnable()) {
                var amount = purchase.model.order.amount;
                UserService.investingRegular(amount, purchase.viewModel.password, purchase.model.order.productIdentifier)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.INVESTING.REGULAR);
                            PurchaseService.clearRegularOrder();
                            $timeout(function() {
                                JYMUtilityService.goWithDisableBack('jym.user-orders-detail', { orderIdentifier: result.orderIdentifier });
                            }, 1000);
                        }
                    });
            }
        };

        purchase.toggleAgreement1 = function() {
            purchase.viewModel.showAgreement2 = false;
            $ionicScrollDelegate.scrollTop();
            purchase.viewModel.showAgreement1 = !purchase.viewModel.showAgreement1;
        };

        purchase.toggleAgreement2 = function() {
            purchase.viewModel.showAgreement1 = false;
            $ionicScrollDelegate.scrollTop();
            purchase.viewModel.showAgreement2 = !purchase.viewModel.showAgreement2;
        };

        $scope.$on('$ionicView.enter', function() {
            purchase.doRefresh();
        });

        purchase.doRefresh();
    });
