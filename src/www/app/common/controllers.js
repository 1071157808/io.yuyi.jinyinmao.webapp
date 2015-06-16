angular.module('jym.controllers', [
    'jym.services'
])
    .controller('SlidesCtrl', function($state, $timeout, $ionicSlideBoxDelegate, JYMConfigService,JYMUtilityService) {
        var slidesCtrl = this;

        slidesCtrl.slides = [];
        slidesCtrl.activeSlideIndex = 0;

        JYMConfigService.getSlidesConfig()
            .then(function (result) {
                slidesCtrl.slides = result;
            })
            .then(function () {
                $ionicSlideBoxDelegate.update();
            });

        slidesCtrl.clickSlide = function(url){
            JYMUtilityService.open(url);
        };

        slidesCtrl.onSlideChanged = function() {
            if(slidesCtrl.activeSlideIndex === slidesCtrl.slides.length - 2){
                $timeout(function() {
                    slidesCtrl.activeSlideIndex = 0;
                }, 5000);
            }
        }
    });