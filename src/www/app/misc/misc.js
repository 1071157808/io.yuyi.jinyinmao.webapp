angular.module('jym.misc', [
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('jym.misc', {
                url: "/misc",
                abstract: true,
                views: {
                    '@':{
                        templateUrl: 'app/index.tpl.html'
                    }
                }
            })
            .state('jym.misc.safe', {
                url: '/safe',
                views: {
                    '':{
                        templateUrl: 'app/misc/safe.tpl.html'
                    }
                }
            })
    });
