angular.module('jym.user.security', [
    'jym.user.security-password'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-security', {
                url: '/user/security',
                views: {
                    'user': {
                        templateUrl: 'app/user/security/security.tpl.html'
                    }
                }
            });
    });
