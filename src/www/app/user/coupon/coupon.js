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


  });
