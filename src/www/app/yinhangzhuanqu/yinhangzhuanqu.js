angular.module('jym.yinhangzhuanqu', [
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('jym.yinhangzhuanqu', {
                url: '/yinhangzhuanqu',
                views: {
                    '@':{
                        controller: 'YinhangzhuanquIndexCtrl as yinhangzhuanquIndexCtrl',
                        templateUrl: 'app/yinhangzhuanqu/index.tpl.html'
                    }
                }
            })
    })
    .controller('YinhangzhuanquIndexCtrl', function() {
        var yinhangzhuanquIndexCtrl = this;

    });
