'use strict';
angular.module('JYM', [
    'ionic',
    'ionic.service.core',
    'ionic.service.deploy',
    'ngCordova',
    'angular-progress-arc',
    'jym.constants',
    'jym.controllers',
    'jym.filters',
    'jym.interceptors',
    'jym.jinbaoyin',
    'jym.shangpiao',
    'jym.templates',
    'jym.user',
    'jym.yinpiao',
    'jym.zhuanqu'
])
    .config(function($ionicConfigProvider) {
        $ionicConfigProvider.views.transition('ios');
        $ionicConfigProvider.tabs.position('bottom');
        $ionicConfigProvider.backButton.text('').icon('ion-ios-arrow-back');
    })
    .config(function($ionicAppProvider) {
        $ionicAppProvider.identify({
            app_id: '6e37fda2',
            api_key: 'c1006ace57b45a0a7b5543cd6e65bb5e689b95d7b00cfad0'
        });
    })
    .config(function($httpProvider) {
        // $httpProvider.defaults.withCredentials = true;
        $httpProvider.interceptors.push('globalInterceptor');
        $httpProvider.interceptors.push('loadingInterceptor');
    })
    .config(function($compileProvider) {
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|file|blob|cdvfile):|data:image\//);
    })
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('jym', {
            url: '',
            'abstract': true,
            templateUrl: 'app/index.tpl.html'
        });

        $urlRouterProvider.otherwise('/jinbaoyin');
    })
    .run(function($state, $timeout, $ionicDeploy, $ionicPlatform, $http, $ionicPopup, APP, JYMConfigService, JYMUtilityService) {
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            var checkUpdate = function() {
                $ionicDeploy.setChannel(APP.ENV);
                $ionicDeploy.watch().then(function() {
                    }, function() {
                    },
                    function(hasUpdate) {
                        if (hasUpdate) {
                            $ionicDeploy.update().then(function() {
                                $ionicDeploy.load();
                            });
                        }
                    });
            };

            if (APP.PLATFORMS.toUpperCase() === 'WEB') {
                var reg = new RegExp('(^| )JYM_contract_id=([^;]*)(;|$)');
                var arrCookies = document.cookie.match(reg);
                if (arrCookies != null) {
                    APP.CONTRACTID = arrCookies[2];
                }
            } else {
                JYMConfigService.getConfig()
                    .then(function(result) {
                        if (result.lastVersion.substring(0, result.lastVersion.lastIndexOf('.')) !== APP.VERSION.substring(0, APP.VERSION.lastIndexOf('.'))) {
                            $ionicPopup.confirm({
                                title: '',
                                template: result.updateTip,
                                cancelText: '取消',
                                okText: '更新'
                            }).then(function(res) {
                                if (res) {
                                    JYMUtilityService.open(result.updateLink);
                                }
                            });
                        } else if (result.enableUpdatePush) {
                            checkUpdate();
                        }
                    });
            }
        });
    })
    .run(function($rootScope, $ionicLoading) {
        $rootScope.$on('loading:show', function() {
            $ionicLoading.show({
                template: '<ion-spinner icon="spiral" class="spinner-energized"></ion-spinner>'
            });
        });

        $rootScope.$on('loading:hide', function() {
            $ionicLoading.hide();
        });

        $rootScope.$on('http:requestError', function() {
            $ionicLoading.hide();
            $ionicLoading.show({
                template: '请求失败',
                duration: 3000
            });
        });

        $rootScope.$on('http:responseError-500', function() {
            $ionicLoading.hide();
            $ionicLoading.show({
                template: '请稍后再试',
                duration: 3000
            });
        });
    });

