'use strict';
angular.module('jym.interceptors', [
    'jym.services'
])
    .factory('globalInterceptor', function($rootScope, $injector, $q) {
        var authService = $injector.get('JYMAuthService');
        var timeService = $injector.get('JYMTimeService');
        return {
            request: function(config) {
                config.headers['x-jym-auth'] = authService.getToken();
                return config;
            },

            requestError: function(rejection) {
                $rootScope.$broadcast('http:requestError');
                return $q.reject(rejection);
            },

            response: function(response) {
                if (response.headers()['x-jym-auth']) {
                    authService.setToken(response.headers()['x-jym-auth']);
                }
                if (response.headers().date) {
                    timeService.setTime(moment(response.headers().date));
                }

                return response;
            },

            responseError: function(rejection) {
                var $state = $injector.get('$state');
                var $ionicHistory = $injector.get('$ionicHistory');
                var $ionicLoading = $injector.get('$ionicLoading');

                if (rejection.status === 0) {
                    $ionicLoading.show({
                        template: '网络连接失败，请稍后再试',
                        duration: 3000,
                        hideOnStateChange: true
                    });
                }

                if (rejection.status >= 400 && rejection.status < 500) {
                    if (rejection.data.message) {
                        var message = rejection.data.message.split(':');
                        var errorMessage = message[message.length - 1];
                        $ionicLoading.show({
                            template: errorMessage,
                            duration: 3000,
                            hideOnStateChange: true
                        });
                    }
                }

                if (rejection.status === 401 || rejection.status === 403) {
                    authService.clearToken();

                    $ionicHistory.nextViewOptions({
                        disableBack: true
                    });
                    $state.go('jym.user-login', { backState: $state.current.name });
                }

                if (rejection.status >= 500) {
                    $rootScope.$broadcast('http:responseError-500');
                }

                return $q.reject(rejection);
            }
        };
    })
    .factory('loadingInterceptor', function($rootScope, $timeout) {
        return {
            request: function(config) {
                if (config.method.toUpperCase() !== 'GET') {
                    $rootScope.$broadcast('loading:show');
                    $timeout(function() {
                        $rootScope.$broadcast('loading:hide');
                    }, 10000);
                }

                return config;
            },
            response: function(response) {
                $rootScope.$broadcast('loading:hide');
                return response;
            }
        };
    });
