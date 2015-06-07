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
                        templateUrl: 'app/jinbaoyin/index.tpl.html'
                    }
                }
            })
    })
    .controller('JinbaoyinIndexCtrl', function() {
        var jinbaoyinIndexCtrl = this;

    })
    .controller('JinbaoyinIndexSliderCtrl', function(JYMConfigService) {
        var jinbaoyinIndexSliderCtrl = this;

        JYMConfigService.getSlidersConfig()
            .then(function (result) {
                jinbaoyinIndexSliderCtrl.sliders = result;
            });

        jinbaoyinIndexSliderCtrl.refresh = function(){
            JYMConfigService.getSlidersConfig();
        }
    });
