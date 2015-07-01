angular.module('jym.zhuanqu.purchase', [
    'jym.services',
    'jym.services.product',
    'jym.services.purchase',
    'jym.services.user'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.zhuanqu-purchase', {
                url: '/zhuanqu/purchase/{bankName}',
                views: {
                    'zhuanqu': {
                        controller: 'ZhuanquPurchaseCtrl as purchase',
                        templateUrl: 'app/zhuanqu/purchase/purchase.tpl.html'
                    }
                }
            })
    })
    .controller('ZhuanquPurchaseCtrl', function($scope, $stateParams, $timeout, RESOURCES, ProductService, PurchaseService, UserService, JYMUtilityService) {
        var purchase = this;

        purchase.model = {};
        purchase.viewModel = {};
        purchase.model.currentUser = {};
        purchase.model.order = {};
        purchase.viewModel.password = undefined;
        purchase.viewModel.checked = true;

        purchase.check = function() {
            purchase.viewModel.checked = !purchase.viewModel.checked;
        };

        purchase.doRefresh = function() {
            var productCategory;
            if ($stateParams.bankName === 'fudian') {
                productCategory = 210001010;
            } else if ($stateParams.bankName === 'fuxin') {
                productCategory = 210003010;
            } else if ($stateParams.bankName === 'shibing') {
                productCategory = 210002020;
            } else {
                productCategory = 100000010;
            }
            purchase.refreshUserInfo()
                .then(function(result){
                    purchase.model.currentUser = result;
                    purchase.model.order = PurchaseService.getRegularOrder(productCategory);
                    purchase.refreshViewModel();
                    return result;
                });
        };

        purchase.refreshUserInfo = function() {
            UserService.getUserInfo();
        };

        purchase.refreshViewModel = function() {
            purchase.viewModel.balance = (purchase.model.currentUser.balance / 100).toFixed(2);
            purchase.viewModel.amount = (purchase.model.order.amount / 100).toFixed(2);

            purchase.viewModel.agreement1 = '借款协议';
            purchase.viewModel.agreement2 = '委托协议';
        };

        purchase.purchaseButtonEnable = function() {
            return purchase.viewModel.checked && purchase.viewModel.amount && purchase.viewModel.password && purchase.model.currentUser.balance >= purchase.model.order.amount;
        };

        purchase.purchase = function() {
            if (purchase.purchaseButtonEnable()) {
                var amount = parseInt(purchase.model.order.amount * 100);
                UserService.investingJBY(amount, purchase.viewModel.password, purchase.model.order.productIdentifier)
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

        $scope.$on('$ionicView.enter', function() {
            purchase.doRefresh();
        });

        purchase.doRefresh();
    });
