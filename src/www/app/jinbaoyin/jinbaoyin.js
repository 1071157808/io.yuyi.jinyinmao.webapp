angular.module('jym.jinbaoyin', [
    'jym.services'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('jym.jinbaoyin', {
                url: '/jinbaoyin',
                views: {
                    '@':{
                        controller: 'JinbaoyinCtrl as jinbaoyinCtrl',
                        templateUrl: 'app/jinbaoyin/index.tpl.html'
                    }
                }
            })
    })
    .controller('JinbaoyinCtrl', function(JinbaoyinService) {
        var jinbaoyinCtrl = this;
        jinbaoyinCtrl.product = {
            endSellTime: "06/30/2015 18:30:00",
            financingSumAmount: 10000000,
            issueNo: 0,
            issueTime: "06/11/2015 18:07:58",
            paidAmount: 0,
            productCategory: 100000030,
            productIdentifier: "530696882a1d4050814428c577dc4064",
            productName: "金包银",
            productNo: "JBY0001",
            soldOut: false,
            soldOutTime: "01/01/0001 00:00:00",
            startSellTime: "06/11/2015 08:30:00",
            unitPrice: 100000,
            updateTime: "06/11/2015 18:07:59",
            valueDateMode: 1,
            'yield': 700
        };

        jinbaoyinCtrl.refreshProduct = function(){
            JinbaoyinService.getIndex()
                .then(function(result) {
                    jinbaoyinCtrl.product = result.data;
                });
        };

        jinbaoyinCtrl.refreshProduct();
    })
    .service('JinbaoyinService', function($http, URLS, JYMCacheService) {
        var service = this;

        service.getIndex = function() {
            return $http.get(URLS.JINBOAYIN.FETCH, {
                cache: JYMCacheService.get('productCache')
            });
        };
    });
