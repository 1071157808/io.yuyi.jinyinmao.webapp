angular.module('jym.jinbaoyin.detail', [
    'jym.services',
    'jym.services.jinbaoyin',
    'jym.services.product',
    'jym.services.purchase',
    'jym.services.user'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('jym.jinbaoyin-detail', {
                url: '/jinbaoyin/detail',
                views: {
                    'jinbaoyin': {
                        controller: 'JinbaoyinDetailCtrl as product',
                        templateUrl: 'app/jinbaoyin/detail/jinbaoyin-detail.tpl.html'
                    }
                }
            })
    })
    .controller('JinbaoyinDetailCtrl', function($scope, $timeout, $q, $state, RESOURCES, ProductService, JinbaoyinService, PurchaseService, UserService, JYMUtilityService) {
        var product = this;

        var getSaleProgress = function(product) {
            return ProductService.getSaleProgress(product.paidAmount, product.financingSumAmount);
        };

        var getSaleStatus = function(product) {
            var status = ProductService.getSaleStatus(product.soldOut, product.startSellTime, product.endSellTime);

            switch (status) {
                case 10:
                    return {
                        status: 10,
                        text: '待售',
                        icon: 'jym-icon-waiting',
                        buttonClass: '',
                        buttonText: '待 售'
                    };
                case 20:
                    return {
                        status: 20,
                        text: '抢购',
                        icon: 'jym-icon-selling',
                        buttonClass: '',
                        buttonText: '立 即 抢 购'
                    };
                case 30:
                    return {
                        status: 30,
                        text: '售罄',
                        icon: 'jym-icon-soldout',
                        buttonClass: '',
                        buttonText: '售 罄'
                    };
            }
        };

        var getValueDateModeText = function(valueDateMode) {
            return ProductService.getValueDateModeText(valueDateMode);
        };

        product.model = {};
        product.viewModel = {};
        product.viewModel.investCount = 10;
        product.viewModel.investAmount = 0;
        product.viewModel.expectedInterest = 0;

        product.doRefresh = function() {
            product.refreshProduct();

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 500);
        };

        product.investCountChange = function() {
            if (product.viewModel.investCount < 0) {
                product.viewModel.investCount = 0;
            }

            if (product.viewModel.investCount > product.viewModel.remainCount) {
                product.viewModel.investCount = parseInt(product.viewModel.remainCount);
            }
            
            product.refreshInvestViewModel();
        };

        product.goPurchase = function() {
            var checkUserPurchaseStatus = UserService.checkUserPurchaseStatus();
            var checkProductPurchaseStatus = ProductService.checkProductPurchaseStatus(product.refreshProduct(), product.viewModel.investAmount);
            $q.all([checkUserPurchaseStatus, checkProductPurchaseStatus])
                .then(function(result) {
                    PurchaseService.buildNewJBYOrder(result[0].productIdentifier, product.viewModel.investAmount);

                    $state.go('jym.jinbaoyin-purchase');
                })
                .catch(function(result) {
                    JYMUtilityService.showAlert(result);
                });
        };

        product.refreshInvestViewModel = function() {
            if (isFinite(product.viewModel.investCount)) {
                product.viewModel.investAmount = product.viewModel.investCount * product.viewModel.unitPrice;
            } else {
                product.viewModel.investAmount = 0;
            }

            product.viewModel.expectedInterest = (ProductService.getInterest(product.viewModel.investAmount * 100, product.model.yield, 30) / 100).toFixed(2);
        };

        product.refreshProduct = function() {
            return JinbaoyinService.getIndex()
                .then(function(result) {
                    return result.data;
                })
                .then(function(result) {
                    product.model = result;
                    product.refreshViewModel();
                    product.refreshInvestViewModel();
                    return result;
                });
        };

        product.refreshViewModel = function() {
            this.viewModel.issueNo = parseInt(this.model.issueNo);
            this.viewModel.financingSumAmount = (this.model.financingSumAmount / 1000000).toFixed(0);
            this.viewModel.productName = this.model.productName + ' ' + '第' + this.model.issueNo + '期';
            this.viewModel.productNo = this.model.productNo;
            this.viewModel.remainCount = ((this.model.financingSumAmount - this.model.paidAmount) / this.model.unitPrice).toFixed(0);
            this.viewModel.sellProgress = getSaleProgress(this.model);
            this.viewModel.sellProgressInCircleProgress = this.viewModel.sellProgress / 100;
            this.viewModel.status = getSaleStatus(this.model);
            this.viewModel.unitPrice = (this.model.unitPrice / 100).toFixed(0);
            this.viewModel.valueDateMode = getValueDateModeText(this.model.valueDateMode);
            this.viewModel.yield = (this.model.yield / 100).toFixed(2);
        };

        product.doRefresh();

    });
