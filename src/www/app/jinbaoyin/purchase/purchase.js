angular.module('jym.jinbaoyin.purchase', [
    'jym.services',
    'jym.services.purchase',
    'jym.services.user'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.jinbaoyin-purchase', {
                url: '/jinbaoyin/purchase',
                views: {
                    'jinbaoyin': {
                        controller: 'JinbaoyinPurchaseCtrl as purchase',
                        templateUrl: 'app/jinbaoyin/purchase/purchase.tpl.html'
                    }
                }
            })
    })
    .controller('JinbaoyinPurchaseCtrl', function($scope, $timeout, RESOURCES, PurchaseService, UserService, JYMUtilityService) {
        var purchase = this;

        purchase.model = {};
        purchase.viewModel = {};
        purchase.model.currentUser = {};
        purchase.model.order = {};
        purchase.viewModel.password = undefined;
        purchase.viewModel.checked = true;

        purchase.doRefresh = function() {
            purchase.refreshUserInfo()
                .then(function(result) {
                    purchase.model.currentUser = result;
                    purchase.model.order = PurchaseService.getNewJBYOrder();
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
                            JYMUtilityService.showAlert(RESOURCES.TIP.INVESTING.JBY);
                            PurchaseService.clearJBYOrder();
                            $timeout(function() {
                                JYMUtilityService.goWithDisableBack('jym.user-jinbaoyin-detail', {transactionIdentifier: result.transactionIdentifier});
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
