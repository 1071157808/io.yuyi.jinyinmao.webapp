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
            })
            .state('jym.userInfo.orders', {
                url: '/orders',
                views: {
                    'user-info':{
                        controller: 'UserInfoOrdersCtrl as userInfoOrdersCtrl',
                        templateUrl: 'app/user/info/user-orders.tpl.html'
                    }
                }
            })
            .state('jym.userInfo.security', {
                url: '/security',
                views: {
                    'user-info':{
                        controller: 'UserInfoSecurityCtrl as userInfoSecurityCtrl',
                        templateUrl: 'app/user/info/user-security.tpl.html'
                    }
                }
            })
            .state('jym.userInfo.settleAccount', {
                url: '/settleAccount',
                views: {
                    'user-info':{
                        controller: 'UserInfoSettleAccountCtrl as userInfoSettleAccountCtrl',
                        templateUrl: 'app/user/info/user-settle-account.tpl.html'
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

    })
    .controller('UserInfoOrdersCtrl', function() {
        var userInfoOrdersCtrl = this;

    })
    .controller('UserInfoSecurityCtrl', function() {
        var userInfoSecurityCtrl = this;

    })
    .controller('UserInfoSettleAccountCtrl', function() {
        var userInfoSettleAccountCtrl = this;

    });
