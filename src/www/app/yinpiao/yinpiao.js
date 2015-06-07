angular.module('jym.yinpiao', [
    'jym.yinpiao.detail'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('jym.yinpiao', {
                url: '/yinpiao',
                views: {
                    'content@':{
                        controller: 'YinpiaoIndexCtrl as yinpiaoIndexCtrl',
                        templateUrl: 'app/yinpiao/index.tpl.html'
                    }
                }
            })
    })
    .controller('YinpiaoIndexCtrl', function() {
        var yinpiaoIndexCtrl = this;

    });
