angular.module('jym.user', [
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('jym.user', {
                url: '/user',
                views: {
                    'content@':{
                        controller: 'UserCtrl as userCtrl',
                        templateUrl: 'app/yinpiao/index.tpl.html'
                    }
                }
            })
    })
    .controller('UserCtrl', function() {
        var userCtrl = this;

    });
