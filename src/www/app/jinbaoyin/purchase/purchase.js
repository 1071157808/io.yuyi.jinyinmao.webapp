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
                    jinbaoyin: {
                        controller: 'JinbaoyinPurchaseCtrl as purchase',
                        templateUrl: 'app/jinbaoyin/purchase/purchase.tpl.html'
                    }
                }
            });
    })
    .controller('JinbaoyinPurchaseCtrl', function($scope, $stateParams, $timeout, $ionicScrollDelegate, RESOURCES, JinbaoyinService, ProductService, PurchaseService, UserService, JYMUtilityService) {
        var purchase = this;

        purchase.model = {};
        purchase.viewModel = {};

        purchase.check = function() {
            purchase.viewModel.checked = !purchase.viewModel.checked;
        };

        purchase.doRefresh = function() {
            purchase.viewModel.agreement = '金银猫金包银投资协议';

            purchase.resetInput();

            purchase.refreshUserInfo()
                .then(function(result) {
                    purchase.model.user = result;
                    purchase.model.order = PurchaseService.getNewJBYOrder();
                    purchase.refreshViewModel();
                    return result;
                })
                .then(function() {
                    purchase.refreshAgreement()
                        .then(function(result) {
                            purchase.viewModel.agreement = ProductService.fillDataForAgreement(result.content, {
                                cellphone: purchase.model.user.cellphone,
                                credentialNo: purchase.model.user.credentialNo,
                                realName: purchase.model.user.realName
                            });
                        });
                });
        };

        purchase.refreshAgreement = function() {
            return JinbaoyinService.getAgreement($stateParams.productIdentifier, 1);
        };

        purchase.refreshUserInfo = function() {
            return UserService.getUserInfo();
        };

        purchase.refreshViewModel = function() {
            purchase.viewModel.balance = (purchase.model.user.balance / 100).toFixed(2);
            purchase.viewModel.amount = (purchase.model.order.amount / 100).toFixed(2);
        };

        purchase.purchaseButtonEnable = function() {
            return purchase.viewModel.checked && purchase.viewModel.amount && purchase.viewModel.password && purchase.model.user.balance >= purchase.model.order.amount;
        };

        purchase.purchase = function() {
            if (purchase.purchaseButtonEnable()) {
                var amount = purchase.model.order.amount;
                UserService.investingJBY(amount, purchase.viewModel.password, purchase.model.order.productIdentifier)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.INVESTING.JBY);

                            PurchaseService.clearJBYOrder();

                            $timeout(function() {
                                purchase.resetInput();
                                JYMUtilityService.goWithDisableBack('jym.user-jinbaoyin-detail', { transactionIdentifier: result.transactionIdentifier });
                            }, 1000);
                        }
                    });
            }
        };

        purchase.resetInput = function() {
            purchase.viewModel.checked = true;
            purchase.viewModel.password = '';
        };

        purchase.toggleAgreement = function() {
            $ionicScrollDelegate.scrollTop();
            purchase.viewModel.showAgreement = !purchase.viewModel.showAgreement;
        };

        $scope.$on('$ionicView.enter', function() {
            purchase.doRefresh();
        });

        purchase.doRefresh();
    });
