angular.module('jym.zhuanqu.detail', [
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('jym.yinhangzhuanqu.detail', {
                url: '/yinhangzhuanqu/{:yinhang}',
                views: {
                    '@':{
                        controller: 'YinhangzhuanquDetailCtrl as yinhangzhuanquDetailCtrl',
                        templateUrl: 'app/yinhangzhuanqu/detail/yinhangzhuanqu-detail.tpl.html'
                    }
                }
            })
    })
    .controller('YinhangzhuanquDetailCtrl', function() {
        var yinhangzhuanquDetailCtrl = this;

    });
