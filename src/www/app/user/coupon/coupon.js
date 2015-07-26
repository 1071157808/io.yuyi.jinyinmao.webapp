'use strict';
angular.module('jym.user.coupon', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('jym.user-coupon', {
        url: '/user/coupon',
        views: {
          '@': {
            controller: 'CouponCtrl as coupon',
            templateUrl: 'app/user/coupon/coupon.tpl.html'
          }
        }
      });
  })
  .controller('CouponCtrl', function($timeout, UserService) {
    var coupon  = this;

    coupon.model = {};
    coupon.viewModel = {};

    //coupon.doRefresh = function() {
    //  coupon.refreshCoupon()
    //    .then(function(result) {
    //      coupon.model = result;
    //      coupon.refreshViewModel();
    //      return result;
    //    });
    //
    //  $timeout(function() {
    //    $scope.$broadcast('scroll.refreshComplete');
    //  }, 1500);
    //};
    //
    //$scope.$on('$ionicView.enter', function() {
    //  coupon.doRefresh();
    //});
    //
    //coupon.doRefresh();



  });
