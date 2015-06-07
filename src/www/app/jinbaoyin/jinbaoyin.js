angular.module('jym.jinbaoyin', [
    'jym.services.config'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('jym.jinbaoyin', {
                url: '/',
                views: {
                    'content@':{
                        controller: 'JinbaoyinIndexCtrl as jinbaoyinIndexCtrl',
                        templateUrl: 'app/jinbaoyin/jinbaoyin.tpl.html'
                    }
                }
            })
    })
    .controller('JinbaoyinIndexCtrl', function() {
        var jinbaoyinIndexCtrl = this;

    })
    .controller('JinbaoyinIndexSliderCtrl', function(ConfigService) {
        var jinbaoyinIndexSliderCtrl = this;

        ConfigService.getSlidersConfig()
            .then(function (result) {
                jinbaoyinIndexSliderCtrl.sliders = result;
            });

        jinbaoyinIndexSliderCtrl.refresh = function(){
            ConfigService.getSlidersConfig();
        }
    });
