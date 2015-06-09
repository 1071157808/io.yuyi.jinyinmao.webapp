angular.module('jym.jinbaoyin', [
    'jym.services.config',
    'jym.services.utility'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('jym.jinbaoyin', {
                url: '/',
                views: {
                    'content@':{
                        controller: 'JinbaoyinIndexCtrl as jinbaoyinIndexCtrl',
                        templateUrl: 'app/jinbaoyin/index.tpl.html'
                    }
                }
            })
    })
    .controller('JinbaoyinIndexCtrl', function() {
        var jinbaoyinIndexCtrl = this;

    })
    .controller('JinbaoyinIndexSlideBoxCtrl', function($ionicSlideBoxDelegate, JYMConfigService, JYMUtilityService) {
        var jinbaoyinIndexSlideBoxCtrl = this;
        jinbaoyinIndexSlideBoxCtrl.slides = [];

        JYMConfigService.getSlidesConfig()
            .then(function (result) {
                jinbaoyinIndexSlideBoxCtrl.slides = result;
            })
            .then(function () {
                $ionicSlideBoxDelegate.update();
            });

        jinbaoyinIndexSlideBoxCtrl.clickSlide = function(url){
            JYMUtilityService.open(url);
        };
    });
