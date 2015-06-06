angular.module('jym.jinbaoyin', [

])
    .config(function ($stateProvider) {
        $stateProvider
            .state('jym.jinbaoyin', {
                url: '/',
                views: {
                    'content@':{
                        controller: 'JinbaoyinIndexCtrl as jinbaoyinIndexCtrl',
                        templateUrl: 'app/jinbaoyin/jinbaoyin.tpl.html'
                    },
                    'content2@':{
                        controller: 'JinbaoyinIndexCtrl as jinbaoyinIndexCtrl',
                        templateUrl: 'app/jinbaoyin/jinbaoyin.tpl.html'
                    }
                }
            })
    })
    .controller('JinbaoyinIndexCtrl', function JinbaoyinIndexCtrl() {
        var jinbaoyinIndexCtrl = this;

    });
