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
                        templateUrl: 'app/jinbaoyin/purchase/purchase.tpl.html'
                    }
                }
            })
    })
    .controller('JinbaoyinPurchaseCtrl', function($scope, $timeout, ProductService, JinbaoyinService, PurchaseService, UserService) {
        var purchase = this;

        purchase.model = {};
        purchase.viewModel = {};
        purchase.model.currentUser = {};
        purchase.model.order = {};

        purchase.doRefresh = function() {
            purchase.refreshInfo()
                .then(function(result) {
                    purchase.model.currentUser = result;
                    purchase.model.order = PurchaseService.getNewJBYOrder();
                    purchase.refreshViewModel();
                    return result;
                });
        };

        purchase.refreshInfo = function() {
            return UserService.getUserInfo();
        };

        purchase.refreshViewModel = function() {
            purchase.viewModel.userBalance = (purchase.model.currentUser.balance / 100).toFixed(2);
            purchase.viewModel.investAmount = (purchase.model.order.amount / 100).toFixed(2);
        };

        $scope.$on('$ionicView.enter', function() {
            purchase.doRefresh();
        });

        purchase.doRefresh();
    });
