angular.module('jym.user.login', [
    'jym.services.user'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('jym.user-login', {
                url: '/user/login/{backState}',
                views: {
                    'user':{
                        controller: 'UserLoginCtrl as user',
                        templateUrl: 'app/user/login/login.tpl.html'
                    }
                }
            })
    })
    .controller('UserLoginCtrl', function($state, $stateParams, $ionicHistory, RESOURCES, UserService, JYMUtilityService) {
        var user = this;

        user.model = {};
        user.viewModel = {};

        user.login = function() {
            if(/^(13|14|15|17|18)\d{9}$/.test(user.viewModel.cellphone) &&
            /^[a-zA-Z\d~!@#$%^&*_]{6,18}$/.test(user.viewModel.password)) {
                UserService.login(user.viewModel.cellphone, user.viewModel.password)
                    .then(function (result) {
                        if(!result.userExist) {
                            JYMUtilityService.showAlert(RESOURCES.USER.USER_NOT_EXIST);
                            return;
                        }

                        if(result.lock) {
                            JYMUtilityService.showAlert(RESOURCES.USER.USER_LOGIN_PASSWORD_LOCK);
                            return;
                        }

                        if(result.remainCount < 3) {
                            JYMUtilityService.showAlert(RESOURCES.USER.USER_LOGIN_PASSWORD_REMIAN_LESS);
                            return;
                        }

                        if(!result.success) {
                            JYMUtilityService.showAlert(RESOURCES.USER.USER_LOGIN_FAIL);
                            return;
                        }

                        $ionicHistory.nextViewOptions({
                            disableBack: true
                        });
                        $state.go($stateParams.backState, {}, { reload: true });
                    });

            }
        };
    });