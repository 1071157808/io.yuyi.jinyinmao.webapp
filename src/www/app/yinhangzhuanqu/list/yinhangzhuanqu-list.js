angular.module('jym.yinhangzhuanqu.list', [
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('jym.yinhangzhuanqu.list', {
                url: '/list/{bankName}',
                views: {
                    'zhuanqu':{
                        controller: 'YinhangzhuanquIndexCtrl as yinhangzhuanquIndexCtrl',
                        templateUrl: 'app/yinhangzhuanqu/index.tpl.html'
                    }
                }
            })
    })
    .controller('YinhangzhuanquIndexCtrl', function($stateParams) {
        var yinhangzhuanquIndexCtrl = this;

    });
