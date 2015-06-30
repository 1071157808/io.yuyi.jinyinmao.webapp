angular.module('jym.user.jinbaoyin-detail', [
    'jym.services.user'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.user-jinbaoyin-detail', {
                url: '/user/jinbaoyin/detail/{transactionIdentifier}',
                views: {
                    'user': {
                        controller: 'UserJinbaoyinDetailCtrl as transaction',
                        templateUrl: 'app/user/jinbaoyin/detail/detail.tpl.html'
                    }
                }
            });
    })
    .controller('UserJinbaoyinDetailCtrl', function($scope, $stateParams, $timeout, UserService) {
        var transaction = this;

        transaction.model = {};
        transaction.viewModel = {};

        transaction.doRefresh = function() {
            transaction.refresh()
                .then(function(result) {
                    transaction.model = result;
                    transaction.refreshViewModel();
                    return result;
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);
        };

        transaction.refresh = function() {
            return UserService.getJBYAccountTransaction($stateParams.transactionIdentifier);
        };

        transaction.refreshViewModel = function() {
            transaction.viewModel.amount = (transaction.model.amount / 100).toFixed(2);
            transaction.viewModel.predeterminedResultDate = transaction.model.predeterminedResultDate;
            transaction.viewModel.resultCode = transaction.model.resultCode;
            transaction.viewModel.resultTime = transaction.model.resultTime;
            transaction.viewModel.settleAccountTranscationId  = transaction.model.settleAccountTranscationId ;
            transaction.viewModel.trade = transaction.model.trade;
            transaction.viewModel.tradeCode = transaction.model.tradeCode;
            transaction.viewModel.transactionIdentifier = transaction.model.transactionIdentifier;
            transaction.viewModel.transactionTime = transaction.model.transactionTime;
            transaction.viewModel.transDesc = transaction.model.transDesc;
            transaction.viewModel.resultStyle = { color: '#444' };

            if(transaction.viewModel.resultCode === 1){
                transaction.viewModel.resultStyle = { color: '#47B28B' };
            }

            if(transaction.viewModel.resultCode === -1){
                transaction.viewModel.resultStyle = { color: '#E74C3C' };
            }
        };

        $scope.$on('$ionicView.enter', function() {
            transaction.doRefresh();
        });

        transaction.doRefresh();
    });
