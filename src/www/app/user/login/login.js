angular.module('jym.user.login', [

])
    .config(function ($stateProvider) {
        $stateProvider
            .state('jym.user.login', {
                url: '/user/login',
                views: {
                    '@':{
                        controller: 'UserLoginCtrl as userLoginCtrl',
                        templateUrl: '../../jinbaoyin/index.tpl.html'
                    }
                }
            })
    })
    .controller('UserLoginCtrl', function() {
        var userLoginCtrl = this;

    });