angular.module('jym.interceptors', [
    'jym.services'
])
    .factory('globalInterceptor', function($q, $log, $timeout, $injector) {
        var authService = $injector.get('JYMAuthService');

        return {
            'request': function(config) {
                config.headers.JYM = authService.getToken();

                return config;
            },

            'requestError': function(rejection) {
                return $q.reject(rejection);
            },

            'response': function(response) {
                if(response.headers.JYM) {
                    authService.setToken(response.headers.JYM)
                }
                return response;
            },

            'responseError': function(rejection) {
                var $state = $injector.get('$state');
                if (rejection.status == 401 || rejection.status == 403) {
                    authService.clearToken();
                    $state.go('jym.user.login');
                }

                if (rejection.status == 400) {

                }

                return $q.reject(rejection);
            }
        };
    })
    .factory('loadingInterceptor', function($rootScope) {
        return {
            request: function(config) {
                $rootScope.$broadcast('loading:show');
                return config;
            },
            response: function(response) {
                $rootScope.$broadcast('loading:hide');
                return response;
            }
        };
    });