'use strict';
angular.module('jym.controllers', [
    'jym.services'
])
    .controller('SlidesCtrl', function($timeout, $ionicSlideBoxDelegate, JYMConfigService, JYMUtilityService) {
        var ctrl = this;

        ctrl.slides = [];
        ctrl.activeSlideIndex = 0;

        JYMConfigService.getSlidesConfig()
            .then(function(result) {
                ctrl.slides = result;
            })
            .then(function() {
                $ionicSlideBoxDelegate.update();
            });

        ctrl.clickSlide = function(url) {
            JYMUtilityService.open(url);
        };

        ctrl.onSlideChanged = function() {
            if (ctrl.activeSlideIndex === ctrl.slides.length - 2) {
                $timeout(function() {
                    ctrl.activeSlideIndex = 0;
                }, 5000);
            }
        };
    })
    .controller('TabsCtrl', function($state, $ionicHistory) {
        var ctrl = this;

        ctrl.NavToJinbaoyin = function() {
            $ionicHistory.nextViewOptions({
                disableAnimate: true,
                disableBack: true
            });

            $state.go('jym.jinbaoyin');
        };

        ctrl.NavToShangpiao = function() {
            $ionicHistory.nextViewOptions({
                disableAnimate: true,
                disableBack: true
            });

            $state.go('jym.shangpiao');
        };

        ctrl.NavToUser = function() {
            $ionicHistory.nextViewOptions({
                disableAnimate: true,
                disableBack: true
            });

            $state.go('jym.user');
        };

        ctrl.NavToYinpiao = function() {
            $ionicHistory.nextViewOptions({
                disableAnimate: true,
                disableBack: true
            });

            $state.go('jym.yinpiao');
        };

        ctrl.NavToZhuanqu = function() {
            $ionicHistory.nextViewOptions({
                disableAnimate: true,
                disableBack: true
            });

            $state.go('jym.zhuanqu');
        };
    });
