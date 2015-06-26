angular.module('jym.misc', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.misc-safe', {
                url: '/safe',
                views: {
                    '@': {
                        templateUrl: 'app/misc/safe.tpl.html'
                    }
                }
            })
    });
