angular.module('jym.services.user', [
    'ionic',
    'jym.services'
])
    .service('UserService', function($http, URLS, RESOURCES, JYMAuthService, JYMCacheService, JYMUtilityService) {
        var service = this;

        service.sharedData = {};

        var getCityName = function(bankName) {
            switch (bankName) {
                case '浦发银行':
                    return '上海|上海';
                case '深发银行':
                    return '广东|深圳';
                case '平安银行':
                    return '上海|上海';
                case '民生银行':
                    return '上海|上海';
                case '工商银行':
                    return '上海|上海';
                case '农业银行':
                    return '上海|上海';
                case '建设银行':
                    return '上海|上海';
                case '招商银行':
                    return '上海|上海';
                case '广发银行':
                    return '广东|广州';
                case '广州银行':
                    return '广东|广州';
                case '邮储银行':
                    return '上海|上海';
                case '兴业银行':
                    return '上海|上海';
                case '光大银行':
                    return '上海|上海';
                case '华夏银行':
                    return '上海|上海';
                case '中信银行':
                    return '上海|上海';
                case '广州农商行':
                    return '广东|广州';
                case '中国银行':
                    return '上海|上海';
                case '富滇银行':
                    return '上海|上海';
                default:
                    return '上海|上海';
            }
        };

        var currentUser = {};

        service.authenticate = function(bankCardNo, bankName, credentialNo, realName) {
            var url = URLS.USER.AUTHENTICATE;
            var cityName = getCityName(bankName);

            return $http.post(url, {
                bankCardNo: bankCardNo,
                bankName: bankName,
                cityName: cityName,
                credential: 10,
                credentialNo: credentialNo,
                realName: realName
            })
                .then(function(result) {
                    return result.status === 200;
                });
        };

        service.addBankCard = function(bankCardNo, bankName) {
            var url = URLS.BANKCARD.ADDBANKCARD;
            var cityName = getCityName(bankName);

            return $http.post(url, {
                bankCardNo: bankCardNo,
                bankName: bankName,
                cityName: cityName
            })
                .then(function(result) {
                    return result.status === 200;
                });
        };

        service.checkUserPurchaseStatus = function() {
            return service.getUserInfo()
                .then(function(user) {
                    if (user.closed === true) {
                        throw RESOURCES.USER.CLOSED;
                    }

                    if (user.hasSetPaymentPassword === false) {
                        throw RESOURCES.USER.PAYMENT_PASSWORD_NEED_RESET;
                    }

                    if (user.hasSetPaymentPassword >= 5) {
                        throw RESOURCES.USER.PAYMENT_PASSWORD_NEED_RESET
                    }

                    return user;
                });
        };

        service.depositByYilian = function(amount, bankCardNo, paymentPassword) {
            var url = URLS.SETTLEACCOUNT.DEPOSIT;

            return $http.post(url, {
                amount: amount,
                bankCardNo: bankCardNo,
                paymentPassword: paymentPassword
            }).then(function(result) {
                return result.status === 200;
            });
        };

        service.getBankCard = function(bankCardNo) {
            var url = URLS.BANKCARD.INFO + bankCardNo;

            return $http.get(url, {
                cache: JYMCacheService.get('userCache')
            }).then(function(result) {
                return result.data;
            });
        };
        
        service.getBankCards = function() {
            var url = URLS.BANKCARD.LIST;

            return $http.get(url, {
                cache: JYMCacheService.get('userCache')
            }).then(function(result) {
                return result.data;
            });
        };

        service.getCurrentUser = function() {
            service.getUserInfo();
            return currentUser;
        };

        service.getSettelAccountList = function(pageIndex) {
            var url = URLS.SETTLEACCOUNT.LIST + pageIndex;

            return $http.get(url, {
                cache: JYMCacheService.get('userCache')
            }).then(function(result) {
                return result.data;
            });
        };

        service.getSettelAccountTranscation = function(transactionIdentifier) {
            var url = URLS.SETTLEACCOUNT.INFO + transactionIdentifier;

            return $http.get(url, {
                cache: JYMCacheService.get('userCache')
            }).then(function(result) {
                return result.data;
            });
        };

        service.getUserInfo = function() {
            return $http.get(URLS.USER.GETINFO, {
                cache: JYMCacheService.get('userCache')
            }).then(function(result) {
                currentUser = result.data;
                return currentUser;
            });
        };

        service.getWithdrawalableBankCards = function() {
            var url = URLS.BANKCARD.WITHDRAWALABLE;

            return $http.get(url, {
                cache: JYMCacheService.get('userCache')
            }).then(function(result) {
                return result.data;
            });
        };

        service.login = function(loginName, password) {
            return $http.post(URLS.USER.SIGNIN, {
                loginName: loginName,
                password: password
            })
                .then(function(result) {
                    return result.data;
                });
        };

        service.loginOut = function() {
            JYMAuthService.clearToken();
        };

        service.removeCard = function(bankCardNo) {
            var url = URLS.BANKCARD.REMOVE;

            return $http.post(url, {
                bankCardNo: bankCardNo
            })
                .then(function(result) {
                    return result.status === 200;
                });
        };

        service.resetLoginPassword = function(password, token) {
            var url = URLS.USER.RESETLOGINPASSWORD;

            return $http.post(url, {
                password: password,
                token: token
            })
                .then(function(result) {
                    return result.status === 200;
                });
        };

        service.resetPaymentPassword = function(credentialNo, password, token, userRealName) {
            var url = URLS.USER.RESETLOGINPASSWORD;

            return $http.post(url, {
                credentialNo: credentialNo,
                password: password,
                token: token,
                userRealName: userRealName
            })
                .then(function(result) {
                    return result.status === 200;
                });
        };

        service.sendVeriCode = function(cellphone, type) {
            var url = URLS.USER.SENDVERICODE;

            return $http.post(url, {
                cellphone: cellphone,
                type: parseInt(type)
            })
                .then(function(result) {
                    return result.data;
                })
                .then(function(result) {
                    if (!result.success || result.remainCount < 0) {
                        JYMUtilityService.showAlert(RESOURCES.ALERT.USER.TOO_MANY_VERI_CODE);
                        return false;
                    }

                    return true;
                });
        };

        service.setPaymentPassword = function(password) {
            var url = URLS.USER.SETPAYMENTPASSWORD;

            return $http.post(url, {
                password: password
            })
                .then(function(result) {
                    return result.status === 200;
                });
        };

        service.signUp = function(password, token) {
            var url = URLS.USER.SINGUP;

            var clientType;

            if (ionic.Platform.isIOS()) {
                clientType = 901;
            } else if (ionic.Platform.isAndroid()) {
                clientType = 902;
            } else {
                clientType = 903;
            }

            return $http.post(url, {
                clientType: clientType,
                contractId: 0,
                inviteBy: "jinyinmao",
                outletCode: "jinyinmao",
                password: password,
                token: token
            })
                .then(function(result) {
                    return result.data;
                });
        };

        service.verifyBankCardByYilian = function(bankCardNo) {
            var url = URLS.BANKCARD.VERIFYBANKCARDBYYILIAN;

            return $http.post(url, {
                bankCardNo: bankCardNo
            })
                .then(function(result) {
                    return result.status === 200;
                });
        };

        service.verifyVeriCode = function(cellphone, code, type) {
            var url = URLS.USER.VERIFYVERICODE;

            return $http.post(url, {
                cellphone: cellphone,
                type: parseInt(type),
                code: code
            })
                .then(function(result) {
                    return result.data;
                })
                .then(function(result) {
                    if (!result.success || result.remainCount < 0) {
                        JYMUtilityService.showAlert(RESOURCES.ALERT.USER.VERI_CODE_FAIL);
                        return false;
                    }

                    return result;
                });
        };
    });
