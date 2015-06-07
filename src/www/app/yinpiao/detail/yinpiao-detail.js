angular.module('jym.yinpiao.detail', [
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('jym.yinpiao.detail', {
                url: '/yinpiao/{:productNo}',
                views: {
                    'content@':{
                        controller: 'YinpiaoDetailCtrl as yinpiaoDetailCtrl',
                        templateUrl: 'app/shangpiao/detail/yinpiao-detail.tpl.html'
                    }
                }
            })
    })
    .controller('YinpiaoDetailCtrl', function() {
        var yinpiaoDetailCtrl = this;

    });
