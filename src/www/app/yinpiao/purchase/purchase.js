angular.module('jym.yinpiao.purchase', [
    'jym.services',
    'jym.services.product',
    'jym.services.purchase',
    'jym.services.user'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.yinpiao-purchase', {
                url: '/yinpiao/purchase',
                views: {
                    'yinpiao': {
                        controller: 'YinpiaoPurchaseCtrl as purchase',
                        templateUrl: 'app/yinpiao/purchase/purchase.tpl.html'
                    }
                }
            })
    })
    .controller('YinpiaoPurchaseCtrl', function($scope, $timeout, ProductService, PurchaseService, UserService) {
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
                    purchase.model.order = PurchaseService.getRegularOrder(100000010);
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
