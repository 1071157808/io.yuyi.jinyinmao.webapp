angular.module('jym.shangpiao.detail', [
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('jym.shangpiao.detail', {
                url: '/shangpiao/{:productNo}',
                views: {
                    'content@':{
                        controller: 'ShangpiaoDetailCtrl as shangpiaoDetailCtrl',
                        templateUrl: 'app/shangpiao/detail/shangpiao-detail.tpl.html'
                    }
                }
            })
    })
    .controller('ShangpiaoDetailCtrl', function() {
        var shangpiaoDetailCtrl = this;

    });
