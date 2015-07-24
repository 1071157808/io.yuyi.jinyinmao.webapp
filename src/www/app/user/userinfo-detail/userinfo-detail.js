'use strict';
angular.module('jym.user.info-detail', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('jym.user.info-detail', {
        url: '/user/userinfo-detail',
        views: {
          user: {
            controller: 'InfoDetailCtrl as ctrl',
            templateUrl: 'app/user/userinfo-detail/userinfo-detail.tpl.html'
          }
        }
      });
  })
  .controller('InfoDetailCtrl', function($scope, $stateParams, $timeout, RESOURCES, UserService) {
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
      user.viewModel.realName = user.model.realName || '未实名认证';
      user.viewModel.credentialNo = user.model.credentialNo || '未实名认证';
    };
    user.loginOut = function() {
      UserService.loginOut();

      JYMUtilityService.showAlert(RESOURCES.TIP.USER.LOGIN_OUT);

      $timeout(function() {
        JYMUtilityService.goWithDisableBack('jym.user-login');
      }, 1000);
    };

    user.doRefresh();
  });
