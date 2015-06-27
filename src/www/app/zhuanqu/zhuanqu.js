angular.module('jym.zhuanqu', [
    'jym.services',
    'jym.zhuanqu.detail'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('jym.zhuanqu', {
                url: '/zhuanqu',
                views: {
                    'zhuanqu':{
                        templateUrl: 'app/zhuanqu/index.tpl.html'
                    }
                }
            })
            .state('jym.zhuanqu-list', {
                url: '/zhuanqu/list/{bankName}',
                views: {
                    'zhuanqu':{
                        controller: 'ZhuanquIndexCtrl as ctrl',
                        templateUrl: 'app/shangpiao/index.tpl.html'
                    }
                }
            })
    })
    .controller('ZhuanquIndexCtrl', function() {
        var yinhangzhuanquIndexCtrl = this;

    });
