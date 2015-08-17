'use strict';
angular.module('jym.services.user', [
    'ionic',
    'jym.services'
])
    .service('UserService', function($http, $timeout, URLS, RESOURCES, JYMAuthService, JYMCacheService, JYMUtilityService) {
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

        service.addBankCard = function(bankCardNo, bankName) {
            var url = URLS.BANKCARD.ADD_BANK_CARD;
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

        service.addBankCardByYilian = function(bankCardNo, bankName) {
            var url = URLS.BANKCARD.ADD_BANK_CARD_BY_YILIAN;
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

        service.checkUserPurchaseStatus = function(user) {
            if (user.closed === true) {
                throw new Error(RESOURCES.ALERT.USER.CLOSED);
            }

            if (user.hasSetPaymentPassword === false) {
                throw new Error(RESOURCES.ALERT.USER.HAS_NOT_SET_PAYMENT_PASSWORD);
            }

            if (user.hasSetPaymentPassword >= 5) {
                throw new Error(RESOURCES.ALERT.USER.PAYMENT_PASSWORD_NEED_RESET);
            }

            return user;
        };

        service.depositByYilian = function(amount, bankCardNo, paymentPassword) {
            var url = URLS.SETTLE_ACCOUNT.DEPOSIT;

            return $http.post(url, {
                amount: amount,
                bankCardNo: bankCardNo,
                paymentPassword: paymentPassword
            }).then(function(result) {
                return result.status === 200;
            });
        };

        service.investingJBY = function(amount, paymentPassword, productIdentifier) {
            var url = URLS.INVESTING.JBY;

            return $http.post(url, {
                amount: amount,
                paymentPassword: paymentPassword,
                productIdentifier: productIdentifier
            }).then(function(result) {
                return result.data;
            });
        };

        service.investingRegular = function(amount, paymentPassword, productIdentifier, couponId) {
            var url = URLS.INVESTING.REGULAR;
            couponId = (couponId === undefined || couponId === 0) ? null : couponId;

            return $http.post(url, {
                amount: amount,
                paymentPassword: paymentPassword,
                productIdentifier: productIdentifier,
                couponId: couponId
            }).then(function(result) {
                return result.data;
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

        service.getCoupon = function() {
            var url = URLS.COUPON.AVAILABLE;

            return $http.get(url)
                .then(function(result) {
                    if (result.data.id) {
                        return result.data;
                    }

                    return null;
                });
        };

        service.getCoupons = function() {
            var url = URLS.COUPON.INDEX;

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

        service.getJBYAccountList = function(pageIndex) {
            var url = URLS.USERJINBAOYIN.LIST + pageIndex;

            return $http.get(url, {
                cache: JYMCacheService.get('userCache')
            }).then(function(result) {
                return result.data;
            });
        };

        service.getJBYAccountTransaction = function(transactionIdentifier) {
            var url = URLS.USERJINBAOYIN.INFO + transactionIdentifier;

            return $http.get(url, {
                cache: JYMCacheService.get('userCache')
            }).then(function(result) {
                return result.data;
            });
        };

        service.getOrderInfo = function(orderIdentifier) {
            var url = URLS.ORDER.INFO + orderIdentifier;

            return $http.get(url, {
                cache: JYMCacheService.get('userCache')
            }).then(function(result) {
                return result.data;
            });
        };

        service.getOrderList = function(pageIndex) {
            var url = URLS.ORDER.LIST + pageIndex + '/1';

            return $http.get(url, {
                cache: JYMCacheService.get('userCache')
            }).then(function(result) {
                return result.data;
            });
        };

        service.getSettelAccountList = function(pageIndex) {
            var url = URLS.SETTLE_ACCOUNT.LIST + pageIndex;

            return $http.get(url, {
                cache: JYMCacheService.get('userCache')
            }).then(function(result) {
                return result.data;
            });
        };

        service.getSettelAccountTransaction = function(transactionIdentifier) {
            var url = URLS.SETTLE_ACCOUNT.INFO + transactionIdentifier;

            return $http.get(url, {
                cache: JYMCacheService.get('userCache')
            }).then(function(result) {
                return result.data;
            });
        };

        service.getUserInfo = function() {
            return $http.get(URLS.USER.GETINFO, {
                cache: JYMCacheService.get('userInfoCache')
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
            service.sharedData = {};
            JYMAuthService.clearToken();
            JYMUtilityService.clearCache();
        };

        service.jBYWithdrawal = function(amount, paymentPassword) {
            var url = URLS.USERJINBAOYIN.WITHDRAWAL;

            return $http.post(url, {
                amount: amount,
                paymentPassword: paymentPassword
            }).then(function(result) {
                return result.data;
            });
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

        service.removeCoupon = function(couponId) {
            var url = URLS.COUPON.REMOVE + couponId;

            return $http.get(url)
                .then(function(result) {
                    return result.data;
                });
        };

        service.resetLoginPassword = function(password, token) {
            var url = URLS.USER.RESET_LOGIN_PASSWORD;

            return $http.post(url, {
                password: password,
                token: token
            })
                .then(function(result) {
                    return result.status === 200;
                });
        };

        service.resetPaymentPassword = function(credentialNo, password, token, userRealName) {
            var url = URLS.USER.RESET_PAYMENT_PASSWORD;

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
            var url = URLS.USER.SEND_VERICODE;

            return $http.post(url, {
                cellphone: cellphone,
                type: parseInt(type, 10)
            })
                .then(function(result) {
                    return result.data;
                })
                .then(function(result) {
                    if (!result.success || result.remainCount <= 0) {
                        JYMUtilityService.showAlert(RESOURCES.ALERT.USER.TOO_MANY_VERI_CODE);
                        return false;
                    }

                    return true;
                });
        };

        service.setPaymentPassword = function(password) {
            var url = URLS.USER.SET_PAYMENT_PASSWORD;

            return $http.post(url, {
                password: password
            })
                .then(function(result) {
                    return result.status === 200;
                });
        };

        service.signUp = function (password, token) {
            var url = URLS.USER.SINGUP;

            var clientType;
            var contractId = 0;
            var arrCookies;
            var reg = new RegExp('(^| )JYM_contract_id=([^;]*)(;|$)');

            if (ionic.Platform.isIOS()) {
                clientType = 901;
            } else if (ionic.Platform.isAndroid()) {
                clientType = 902;
            } else {
                clientType = 903;
            }

            if (arrCookies = document.cookie.match(reg)) {
                contractId = arrCookies[2].toUpperCase();
            }

            return $http.post(url, {
                clientType: clientType,
                contractId: contractId,
                inviteBy: 'jinyinmao',
                outletCode: 'jinyinmao',
                password: password,
                token: token
            })
                .then(function (result) {
                    return result.data;
                });
        };

        service.userSign = function() {
            var url = URLS.USER.USER_SIGN;
            return $http.get(url)
                .then(function(result) {
                    return result.data;
                });
        };

        service.verifyBankCardByYilian = function(bankCardNo) {
            var url = URLS.BANKCARD.VERIFY_BANK_CARD_BY_YILIAN;

            return $http.post(url, {
                bankCardNo: bankCardNo
            })
                .then(function(result) {
                    return result.status === 200;
                });
        };

        service.verifyVeriCode = function(cellphone, code, type) {
            var url = URLS.USER.VERIFY_VERICODE;

            return $http.post(url, {
                cellphone: cellphone,
                type: parseInt(type, 10),
                code: code
            })
                .then(function(result) {
                    return result.data;
                })
                .then(function(result) {
                    if (!result.success || result.remainCount > 0) {
                        if (result.remainCount > 0) {
                            JYMUtilityService.showAlert(RESOURCES.ALERT.USER.VERI_CODE_FAIL);
                        } else {
                            JYMUtilityService.showAlert(RESOURCES.ALERT.USER.VERI_CODE_EXPIRE);
                        }

                        return false;
                    }

                    return result;
                });
        };

        service.withdrawal = function(amount, bankCardNo, paymentPassword) {
            var url = URLS.SETTLE_ACCOUNT.WITHDRAWAL;

            return $http.post(url, {
                amount: amount,
                bankCardNo: bankCardNo,
                paymentPassword: paymentPassword
            }).then(function(result) {
                return result.data;
            });
        };
    });
