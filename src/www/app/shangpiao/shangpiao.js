angular.module('jym.shangpiao', [
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('jym.shangpiao', {
                url: '/shangpiao',
                views: {
                    'content@':{
                        controller: 'ShangpiaoIndexCtrl as shangpiaoIndexCtrl',
                        templateUrl: 'app/shangpiao/index.tpl.html'
                    }
                }
            })
    })
    .controller('ShangpiaoIndexCtrl', function() {
        var shangpiaoIndexCtrl = this;

    });
