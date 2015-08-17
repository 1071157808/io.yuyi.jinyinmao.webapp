'use strict';
angular.module('jym.controllers', [
    'jym.services',
    'jym.constants'
])
    .controller('SlidesCtrl', function($timeout, $ionicSlideBoxDelegate, RESOURCES, JYMConfigService, JYMUtilityService) {
        var ctrl = this;
        ctrl.activeSlideIndex = 0;
        ctrl.slides = RESOURCES.BANNERS;

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
    .controller('TabsCtrl', function ($state) {
        var ctrl = this;
        ctrl.NavToJinbaoyin = function() {
            $state.go('jym.jinbaoyin');
        };

        ctrl.NavToShangpiao = function() {
            $state.go('jym.shangpiao');
        };

        ctrl.NavToUser = function() {
            $state.go('jym.user');
        };

        ctrl.NavToYinpiao = function() {
            $state.go('jym.yinpiao');
        };

        ctrl.NavToZhuanqu = function() {
            $state.go('jym.zhuanqu');
        };
    });
