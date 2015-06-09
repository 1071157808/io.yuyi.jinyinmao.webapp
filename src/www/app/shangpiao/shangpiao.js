angular.module('jym.shangpiao', [
    'jym.shangpiao.detail'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('jym.shangpiaoIndex', {
                url: '/shangpiaoIndex',
                views: {
                    '@':{
                        controller: 'ShangpiaoIndexCtrl as shangpiaoIndexCtrl',
                        templateUrl: 'app/shangpiao/index.tpl.html'
                    }
                }
            })
    })
    .controller('ShangpiaoIndexCtrl', function() {
        var shangpiaoIndexCtrl = this;

    });
