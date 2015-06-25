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
    .controller('UserLoginCtrl', function($stateParams, RESOURCES, REGEX, UserService, JYMUtilityService) {
        var user = this;

        user.model = {};
        user.viewModel = {};

        user.login = function() {
            if(REGEX.CELLPHONE.test(user.viewModel.cellphone) &&
            REGEX.PASSWORD.test(user.viewModel.password)) {
                UserService.login(user.viewModel.cellphone, user.viewModel.password)
                    .then(function (result) {
                        if(!result.userExist) {
                            JYMUtilityService.showAlert(RESOURCES.ALERT.USER.USER_NOT_EXIST);
                            return;
                        }

                        if(result.lock) {
                            JYMUtilityService.showAlert(RESOURCES.ALERT.USER.USER_LOGIN_PASSWORD_LOCK);
                            return;
                        }

                        if(result.remainCount < 3) {
                            JYMUtilityService.showAlert(RESOURCES.ALERT.USER.USER_LOGIN_PASSWORD_REMIAN_LESS);
                            return;
                        }

                        if(!result.success) {
                            JYMUtilityService.showAlert(RESOURCES.ALERT.USER.USER_LOGIN_FAIL);
                            return;
                        }

                        JYMUtilityService.goWithDisableBack($stateParams.backState);
                    });

            }
        };
    });