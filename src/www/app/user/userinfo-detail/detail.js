'use strict';
angular.module('jym.user.userinfo-detail', [
  'jym.services.user'
])
  .config(function($stateProvider) {
    $stateProvider
      .state('jym.user.userinfo-detail', {
        url: '/user/userinfo-detail',
        views: {
          '@': {
            controller: 'UserInfoDetailCtrl as user',
            templateUrl: 'app/user/userinfo-detail/userinfo-detail.tpl.html'
          }
        }
      });
  })
  .controller('UserInfoDetailCtrl', function($scope, $timeout, UserService) {
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

    $scope.$on('$ionicView.enter', function() {
      user.doRefresh();
    });

    user.doRefresh();
  });
