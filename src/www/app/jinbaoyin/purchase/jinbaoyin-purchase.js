angular.module('jym.jinbaoyin.purchase', [
    'jym.services',
    'jym.services.jinbaoyin',
    'jym.services.product',
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
                        templateUrl: 'app/jinbaoyin/purchase/jinbaoyin-purchase.tpl.html'
                    }
                }
            })
    })
    .controller('JinbaoyinPurchaseCtrl', function($scope, $timeout, ProductService, JinbaoyinService, PurchaseService, UserService, JYMUtilityService) {
        var purchase = this;

        purchase.model = {};
        purchase.viewModel = {};
        purchase.model.currentUser = {};
        purchase.model.order = {};

        purchase.doRefresh = function() {
            purchase.refreshUserInfo();
        };

        purchase.refreshUserInfo = function() {
            UserService.getUserInfo()
                .then(function(result) {
                    purchase.model.currentUser = result;
                    purchase.model.order = PurchaseService.getNewJBYOrder();
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
