'use strict';
angular.module('jym.user.detail', [
    'jym.services.user'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-detail', {
                url: '/user/detail',
                views: {
                    '@': {
                        controller: 'DetailCtrl as user',
                        templateUrl: 'app/user/detail/detail.tpl.html'
                    }
                }
            });
    })
    .controller('DetailCtrl', function($scope, $timeout, UserService) {
        var user = this;

        user.model = {};
        user.viewModel = {};

        user.doRefresh = function() {
            user.refreshUser()
                .then(function(result) {
                    user.model = result;
                    user.refreshViewModel();
                    return result;
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        user.refreshUser = function() {
            return UserService.getUserInfo();
        };

        user.refreshViewModel = function() {
            user.viewModel.cellphone = user.model.cellphone;
            user.viewModel.realName = user.model.realName;
            user.viewModel.credentialNo = user.model.credentialNo;
        };

        $scope.$on('$ionicView.beforeEnter', function() {
            user.doRefresh();
        });

        $scope.$on('$ionicView.beforeEnter', function() {
            user.doRefresh();
        });

        user.doRefresh();
    });
