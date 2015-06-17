angular.module('jym.jinbaoyin', [
    'jym.services.jinbaoyin',
    'jym.jinbaoyin.detail'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('jym.jinbaoyin', {
                url: '/jinbaoyin',
                views: {
                    'jinbaoyin':{
                        controller: 'JinbaoyinCtrl as product',
                        templateUrl: 'app/jinbaoyin/index.tpl.html'
                    }
                }
            })
    })
    .controller('JinbaoyinCtrl', function($scope, $timeout, JinbaoyinService) {
        var product = this;
        product.model = {};
        product.viewModel = {};

        product.refreshProduct = function(){
            JinbaoyinService.getIndex()
                .then(function(result) {
                    return result.data;
                })
                .then(function(result) {
                    product.model = result;
                    return product.model;
                })
                .then(function(result) {
                    product.viewModel.title = result.productName + ' ' + '第' + result.issueNo + '期';
                    product.viewModel.yield = result.yield / 100;
                    product.viewModel.unitPrice = result.unitPrice / 100;
                });
        };

        product.doRefresh = function(){
            product.refreshProduct();

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 500);
        };

        product.doRefresh();
    });
