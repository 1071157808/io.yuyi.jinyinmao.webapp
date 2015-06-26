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
    .controller('JinbaoyinPurchaseCtrl', function($scope, $timeout, $q, $state, RESOURCES, ProductService, JinbaoyinService, PurchaseService, UserService, JYMUtilityService) {
        var purchase = this;

        purchase.viewModel = {};
        purchase.currentUser = {};

        purchase.doRefresh = function() {
            purchase.refreshUserInfo();
        };

        purchase.refreshUserInfo = function() {
            purchase.viewModel.userBalance = (result.balance / 100).toFixed(2);
        };

        UserService.getUserInfo()
            .then(function(result) {
                purchase.currentUser = result;
                return currentUser;
            })
            .then(function(result) {
                purchase.viewModel.userBalance = result.balance;
            });
    });
