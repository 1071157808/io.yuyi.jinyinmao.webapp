angular.module('jym.jinbaoyin', [
    'jym.services'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('jym.jinbaoyin', {
                url: '/jinbaoyin',
                views: {
                    'jinbaoyin':{
                        controller: 'JinbaoyinCtrl as jinbaoyinCtrl',
                        templateUrl: 'app/jinbaoyin/index.tpl.html'
                    }
                }
            })
    })
    .controller('JinbaoyinCtrl', function($scope, $timeout, JinbaoyinService) {
        var jinbaoyinCtrl = this;
        jinbaoyinCtrl.product = {};

        jinbaoyinCtrl.refreshProduct = function(){
            JinbaoyinService.getIndex()
                .then(function(result) {
                    return result.data;
                })
                .then(function(result) {
                    jinbaoyinCtrl.product.title = result.productName + ' ' + '第' + result.issueNo + '期';
                    jinbaoyinCtrl.product.yield = result.yield / 100;
                    jinbaoyinCtrl.product.unitPrice = result.unitPrice / 100;
                });
        };

        jinbaoyinCtrl.doRefresh = function(){
            jinbaoyinCtrl.refreshProduct();

            $timeout(function() {
                    $scope.$broadcast('scroll.refreshComplete');
                }, 500);
        };

        jinbaoyinCtrl.doRefresh();
    })
    .service('JinbaoyinService', function($http, URLS, JYMCacheService) {
        var service = this;

        service.getIndex = function() {
            return $http.get(URLS.JINBOAYIN.FETCH, {
                cache: JYMCacheService.get('productCache')
            });
        };
    });
