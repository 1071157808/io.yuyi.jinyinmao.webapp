angular.module('jym.shangpiao.purchase', [
    'jym.services',
    'jym.services.product',
    'jym.services.purchase',
    'jym.services.user'
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
    .controller('ShangpiaoPurchaseCtrl', function($scope, $timeout, ProductService, PurchaseService, UserService) {
        var purchase = this;

        purchase.model = {};
        purchase.viewModel = {};
        purchase.model.currentUser = {};
        purchase.model.order = {};

        purchase.doRefresh = function() {
            purchase.refreshInfo();
        };

        purchase.refreshInfo = function() {
            UserService.getUserInfo()
                .then(function(result) {
                    purchase.model.currentUser = result;
                    purchase.model.order = PurchaseService.getRegularOrder(100000020);
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
