angular.module('JYM', [
    'ionic',
    'angular-cache',
    'ngCordova',
    'jym.jinbaoyin'
])
    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('jym', {
            url: "",
            abstract: true
        });

        $urlRouterProvider.otherwise('/');
    })
    .config(function(CacheFactoryProvider) {
        angular.extend(CacheFactoryProvider.defaults, {maxAge: 2 * 1000});
    });
//.config(function ($httpProvider) {
//    $httpProvider.interceptors.push(function ($q, $state, $ionicPopup) {
//        return {
//            'request': function(config) {
//
//                return config;
//            },
//
//            'requestError': function(rejection) {
//
//                return $q.reject(rejection);
//            },
//
//            'response': function(response) {
//
//                return response;
//            },
//
//            'responseError': function(rejection) {
//                if(rejection.status == 401 || rejection.status == 403){
//                    $state.go('jym.user.login');
//                }
//
//                if(rejection.status == 400){
//                    $ionicPopup.alert({
//                        title: '提示信息',
//                        template: 'rejection.data.message'
//                    })
//                }
//
//                return $q.reject(rejection);
//            }
//        }
//    })
//})
//);
