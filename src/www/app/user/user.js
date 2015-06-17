angular.module('jym.user', [
    'jym.services.user',
    'jym.user.login'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('jym.user', {
                url: '/user',
                views: {
                    'user':{
                        controller: 'UserCtrl as user',
                        templateUrl: 'app/user/index.tpl.html'
                    }
                }
            });
    })
    .controller('UserCtrl', function($scope, $timeout, UserService) {
        var user = this;

        user.model = {};
        user.viewModel = {};

        user.doRefresh = function() {
            user.refreshUser();

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 500);
        };

        user.refreshUser = function() {
            return UserService.getUserInfo()
                .then(function(result) {
                    user.model = result;
                    user.refreshViewModel();
                    return result;
                });
        };

        user.refreshViewModel = function() {
            this.viewModel.cellphone = this.model.cellphone;
            this.viewModel.realName = this.model.realName || '未实名认证';
            this.viewModel.credentialNo = this.model.credentialNo || '未实名认证';

        };

        user.doRefresh();
    });
