angular.module('jym.shangpiao.purchase', [
    'jym.services',
    'jym.services.product',
    'jym.services.purchase',
    'jym.services.user',
    'jym.user.orders-detail'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.shangpiao-purchase', {
                url: '/shangpiao/purchase',
                views: {
                    'shangpiao': {
                        controller: 'ShangpiaoPurchaseCtrl as purchase',
                        templateUrl: 'app/shangpiao/purchase/purchase.tpl.html'
                    }
                }
            })
    })
    .controller('ShangpiaoPurchaseCtrl', function($scope, $timeout, RESOURCES, ProductService, PurchaseService, UserService, JYMUtilityService) {
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
            purchase.refreshUserInfo()
                .then(function(result) {
                    purchase.model.currentUser = result;
                    purchase.model.order = PurchaseService.getRegularOrder(100000020);
                    purchase.refreshViewModel();
                    return result;
                });
        };

        purchase.refreshUserInfo = function() {
            return UserService.getUserInfo();
        };

        purchase.refreshViewModel = function() {
            purchase.viewModel.balance = (purchase.model.currentUser.balance / 100).toFixed(2);
            purchase.viewModel.amount = (purchase.model.order.amount / 100).toFixed(2);

            purchase.viewModel.agreement2 = '借款协议';
            purchase.viewModel.agreement1 = '委托协议';
        };

        purchase.purchaseButtonEnable = function() {
            return purchase.viewModel.checked && purchase.viewModel.amount && purchase.viewModel.password && purchase.model.currentUser.balance >= purchase.model.order.amount;
        };

        purchase.purchase = function() {
            if (purchase.purchaseButtonEnable()) {
                var amount = parseInt(purchase.model.order.amount * 100);
                UserService.investingRegular(amount, purchase.viewModel.password, purchase.model.order.productIdentifier)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.INVESTING.REGULAR);
                            PurchaseService.clearRegularOrder();
                            $timeout(function() {
                                JYMUtilityService.go('jym.user-orders-detail', { orderIdentifier: result.orderIdentifier });
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
