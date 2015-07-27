'use strict';
angular.module('jym.user.coupon', ['ionic'])
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
  .controller('CouponCtrl', function($scope, $timeout, $ionicPopup) {
    var coupon  = this;

    coupon.model = {};
    coupon.viewModel = {};

    //coupon.doRefresh = function() {
    //  coupon.refreshCouponCard()
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


    coupon.showConfirm = function() {
      var confirmPopup = $ionicPopup.confirm({
        title: ' ',
        template: '是否删除该优惠券？',
        okText: '是',
        cancelText: '否'
        //templateUrl: 'app/common/templates/confirm.tpl.html'
      });
      confirmPopup.then(function(res) {
        if(res) {
          console.log('You are sure');
          //coupon.removeCard();
        } else {
          console.log('You are not sure');
        }
      });
    };

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
    //


  });
