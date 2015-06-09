angular.module('jym.userInfo', [
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('jym.userInfo', {
                url: '/userInfo',
                views: {
                    '@':{
                        controller: 'UserInfoCtrl as userInfoCtrl',
                        templateUrl: 'app/user/info/user-info.tpl.html'
                    }
                }
            })
            .state('jym.userInfo.bankCards', {
                url: '/bankCards',
                views: {
                    'user-info':{
                        controller: 'UserInfoBankCardsCtrl as userInfoBankCardsCtrl',
                        templateUrl: 'app/user/info/user-bankCards.tpl.html'
                    }
                }
            })
            .state('jym.userInfo.jbyAccount', {
                url: '/jbyAccount',
                views: {
                    'user-info':{
                        controller: 'UserInfoJbyAccountCtrl as userInfoJbyAccountCtrl',
                        templateUrl: 'app/user/info/user-jby-account.tpl.html'
                    }
                }
            });
    })
    .controller('UserInfoCtrl', function() {
        var userInfoCtrl = this;

    })
    .controller('UserInfoBankCardsCtrl', function() {
        var userInfoBankCardsCtrl = this;

    })
    .controller('UserInfoJbyAccountCtrl', function() {
        var userInfoJbyAccountCtrl = this;

    });
