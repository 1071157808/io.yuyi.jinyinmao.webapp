angular.module('jym.user.login', [
    'jym.services.user'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('jym.user-login', {
                url: '/user/login',
                views: {
                    'user':{
                        controller: 'UserLoginCtrl as user',
                        templateUrl: 'app/user/login/login.tpl.html'
                    }
                }
            })
    })
    .controller('UserLoginCtrl', function($state, $ionicHistory, UserService) {
        var user = this;

        user.model = {};
        user.viewModel = {};


        user.login = function() {
            if(/^(13|14|15|17|18)\d{9}$/.test(user.viewModel.cellphone) &&
            /^[a-zA-Z\d~!@#$%^&*_]{6,18}$/.test(user.viewModel.password) {
                UserService.login()
                    .then(function (result) {
                        $ionicHistory.nextViewOptions({
                            disableBack: true
                        });
                        $state.go('')
                    });

            }
        };


    });