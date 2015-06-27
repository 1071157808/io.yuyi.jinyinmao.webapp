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
    .controller('ZhuanquPurchaseCtrl', function($scope, $stateParams, $timeout, ProductService, PurchaseService, UserService) {
        var purchase = this;

        purchase.model = {};
        purchase.viewModel = {};
        purchase.model.currentUser = {};
        purchase.model.order = {};

        purchase.doRefresh = function() {
            purchase.refreshInfo();
        };

        purchase.refreshInfo = function() {
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

            UserService.getUserInfo()
                .then(function(result) {
                    purchase.model.currentUser = result;
                    purchase.model.order = PurchaseService.getRegularOrder(productCategory);
                    purchase.refreshViewModel();
                    return result;
                });
        };

        purchase.refreshViewModel = function() {
            purchase.viewModel.userBalance = (purchase.model.currentUser.balance / 100).toFixed(2);
            purchase.viewModel.investAmount = (purchase.model.order.amount / 100).toFixed(2);
        };

        purchase.doRefresh();

        $scope.$on('$ionicView.enter', function() {
            purchase.doRefresh();
        });
    });
