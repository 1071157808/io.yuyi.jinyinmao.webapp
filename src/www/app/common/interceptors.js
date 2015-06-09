angular.module('jym.interceptors', [
    'jym.services.auth'
])
    .factory('globalInterceptor', function($q, $log, $timeout, $injector) {
        var authService = $injector.get('JYMAuthService');

        return {
            'request': function(config) {
                $log.debug(config);
                //var $ionicPopup = $injector.get('$ionicPopup');

                config.headers.JYM = authService.getToken();

                return config;
            },

            'requestError': function(rejection) {
                $log.debug(rejection);
                return $q.reject(rejection);
            },

            'response': function(response) {
                $log.debug(response);
                if(response.headers.JYM) {
                    authService.setToken(response.headers.JYM)
                }
                return response;
            },

            'responseError': function(rejection) {
                var $state = $injector.get('$state');
                $log.debug(rejection);
                if (rejection.status == 401 || rejection.status == 403) {
                    authService.clearToken();
                    $state.go('jym.user.login');
                }

                if (rejection.status == 400) {

                }

                return $q.reject(rejection);
            }
        };
    });