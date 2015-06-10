angular.module('jym.user', [
    'jym.userInfo'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('jym.user', {
                url: '/user',
                views: {
                    '@':{
                        controller: 'UserCtrl as userCtrl',
                        templateUrl: 'app/user/index.tpl.html'
                    }
                }
            });
    })
    .controller('UserCtrl', function() {
        var userCtrl = this;

    });
