angular.module('jym.user', [
    'jym.userInfo'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('jym.user', {
                url: '/user',
                views: {
                    'user':{
                        controller: 'UserCtrl as user',
                        templateUrl: 'app/user/index.tpl.html'
                    }
                }
            });
    })
    .controller('UserCtrl', function() {
        var userCtrl = this;

    });
