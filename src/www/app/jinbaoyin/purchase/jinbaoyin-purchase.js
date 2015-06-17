angular.module('jym.jinbaoyin.detail', [
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
                        templateUrl: 'app/jinbaoyin/detail/jinbaoyin-detail.tpl.html'
                    }
                }
            })
    })
    .controller('JinbaoyinPurchaseCtrl', function($scope, $timeout, $q, $state, RESOURCES, ProductService, JinbaoyinService, PurchaseService, UserService, JYMUtilityService) {
        var purchase = this;

        purchase.viewModel = {};
        purchase.currentUser = {};

        UserService.getUserInfo()
            .then(function(result) {
                purchase.currentUser = result.data;
                return currentUser;
            })
            .then(function(result) {
                purchase.viewModel.userBalance = result.balance;
            });
    });
