angular.module('jym.shangpiao.detail', [
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('jym.shangpiao', {
                url: '/shangpiao',
                abstract: true,
                views: {
                    '@':{
                        templateUrl: 'app/shangpiao/detail/shangpiao.tpl.html'
                    }
                }
            })
            .state('jym.shangpiao.detail', {
                url: '/detail/{:productNo}',
                views: {
                    '':{
                        controller: 'ShangpiaoDetailCtrl as shangpiaoDetailCtrl',
                        templateUrl: 'app/shangpiao/detail/shangpiao-detail.tpl.html'
                    }
                }
            });
    })
    .controller('ShangpiaoDetailCtrl', function() {
        var shangpiaoDetailCtrl = this;

    });
