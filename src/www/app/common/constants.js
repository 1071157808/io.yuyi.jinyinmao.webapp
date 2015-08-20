'use strict';
angular.module('jym.constants', [])
    .constant('URLS', {
        BANKCARD: {
            LIST: 'https://jym-dev-api.jinyinmao.com.cn:443/User/BankCards/Index',
            INFO: 'https://jym-dev-api.jinyinmao.com.cn:443/User/BankCards/Info/',
            REMOVE: 'https://jym-dev-api.jinyinmao.com.cn:443/User/BankCards/Remove',
            WITHDRAWALABLE: 'https://jym-dev-api.jinyinmao.com.cn:443/User/BankCards/Withdrawalable',
            VERIFY_BANK_CARD_BY_YILIAN: 'https://jym-dev-api.jinyinmao.com.cn:443/User/BankCards/VerifyBankCardByYilian',
            ADD_BANK_CARD: 'https://jym-dev-api.jinyinmao.com.cn:443/User/BankCards/AddBankCard',
            ADD_BANK_CARD_BY_YILIAN: 'https://jym-dev-api.jinyinmao.com.cn:443/User/BankCards/AddBankCardByYilian'
        },
        CONFIG: {
            FETCH: 'https://jymstoredev.blob.core.chinacloudapi.cn:443/publicfiles/Configs/AppConfig/13.1'
        },
        COUPON: {
            INDEX: 'https://jym-dev-api.jinyinmao.com.cn:443/Coupon/Index',
            AVAILABLE: 'https://jym-dev-api.jinyinmao.com.cn:443/Coupon',
            REMOVE: 'https://jym-dev-api.jinyinmao.com.cn:443/Coupon/Remove/'
        },
        INVESTING: {
            JBY: 'https://jym-dev-api.jinyinmao.com.cn:443/Investing/JBY',
            REGULAR: 'https://jym-dev-api.jinyinmao.com.cn:443/Investing/Regular'
        },
        JINBAOYIN: {
            AGREEMENT: 'https://jym-dev-api.jinyinmao.com.cn:443/Product/Current/Agreement/',
            FETCH: 'https://jym-dev-api.jinyinmao.com.cn:443/Product/Current/JBY',
            SOLD: 'https://jym-dev-api.jinyinmao.com.cn:443/Product/Current/Sold/'
        },
        ORDER: {
            INFO: 'https://jym-dev-api.jinyinmao.com.cn:443/User/Order/Info/',
            LIST: 'https://jym-dev-api.jinyinmao.com.cn:443/User/Order/Index/'
        },
        REGULARPRDUCT: {
            INFO: 'https://jym-dev-api.jinyinmao.com.cn:443/Product/Regular/',
            PAGE: 'https://jym-dev-api.jinyinmao.com.cn:443/Product/Regular/Page/',
            SOLD: 'https://jym-dev-api.jinyinmao.com.cn:443/Product/Regular/Sold/',
            AGREEMENT: 'https://jym-dev-api.jinyinmao.com.cn:443/Product/Regular/Agreement/'
        },
        SETTLE_ACCOUNT: {
            LIST: 'https://jym-dev-api.jinyinmao.com.cn:443/User/Settle/Transactions/',
            INFO: 'https://jym-dev-api.jinyinmao.com.cn:443/User/Settle/Transaction/',
            DEPOSIT: 'https://jym-dev-api.jinyinmao.com.cn:443/User/Settle/Deposit/Yilian',
            WITHDRAWAL: 'https://jym-dev-api.jinyinmao.com.cn:443/User/Settle/Withdrawal'
        },
        USER: {
            AUTHENTICATE: 'https://jym-dev-api.jinyinmao.com.cn:443/User/Auth/Authenticate',
            GETINFO: 'https://jym-dev-api.jinyinmao.com.cn:443/User',
            RESET_LOGIN_PASSWORD: 'https://jym-dev-api.jinyinmao.com.cn:443/User/Auth/ResetLoginPassword',
            RESET_PAYMENT_PASSWORD: 'https://jym-dev-api.jinyinmao.com.cn:443/User/Auth/ResetPaymentPassword',
            SEND_VERICODE: 'https://jym-dev-api.jinyinmao.com.cn:443/SendVeriCode',
            SET_PAYMENT_PASSWORD: 'https://jym-dev-api.jinyinmao.com.cn:443/User/Auth/SetPaymentPassword',
            SINGUP: 'https://jym-dev-api.jinyinmao.com.cn:443/User/Auth/SignUp',
            SIGNIN: 'https://jym-dev-api.jinyinmao.com.cn:443/User/Auth/SignIn',
            VERIFY_VERICODE: 'https://jym-dev-api.jinyinmao.com.cn:443/VerifyVeriCode',
            USER_SIGN:'https://jym-dev-api.jinyinmao.com.cn:443/User/Sign'
        },
        USERJINBAOYIN: {
            INFO: 'https://jym-dev-api.jinyinmao.com.cn:443/User/JBY/Transaction/',
            LIST: 'https://jym-dev-api.jinyinmao.com.cn:443/User/JBY/Transactions/',
            WITHDRAWAL: 'https://jym-dev-api.jinyinmao.com.cn:443/User/JBY/Withdrawal'
        }
    })
    .constant('RESOURCES', {
        ALERT: {
            PRODUCT: {
                AMOUNT_INCORRECT: '购买金额错误',
                NOT_ON_SALE: '该产品未开售<br>请耐心等待',
                SHARE_INSUFFICIENT: '产品剩余份额不足',
                SOLD_OUT: '该产品已经售罄<br>请期待下一期'
            },
            USER: {
                CLOSED: '账户被禁用<br>如需帮助，请联系金银猫客服<br>4008-556-333',
                HAS_NOT_SET_PAYMENT_PASSWORD: '请先设置支付密码',
                PAYMENT_PASSWORD_NEED_RESET: '支付密码被锁定<br>请重置后使用',
                TOO_MANY_VERI_CODE: '验证码发送次数过多<br>请明天再试',
                USER_LOGIN_FAIL: '用户名或者密码错误<br>请确认后再试',
                USER_LOGIN_PASSWORD_LOCK: '登录密码被锁定<br>请重置后使用',
                USER_LOGIN_PASSWORD_REMIAN_LESS: '用户名或者密码错误次数过多<br>请核实后再试',
                USER_NOT_EXIST: '用户名或者密码错误<br>请确认后再试',
                VERI_CODE_EXPIRE: '验证码过期<br>请重新获取验证码',
                VERI_CODE_FAIL: '验证码错误<br>请确认后重试'
            }
        },
        TIP: {
            BANKCARD: {
                REMOVE_SUCCESS: '删除银行卡成功',
                SIGN: '认证申请已经提交<br>请耐心等待',
                CREDENTIALNO: '请输入正确身份证号',
                BANKCARDNO: '请输入正确卡号'
            },
            COUPON: {
                REMOVE_SUCCESS: '删除成功'
            },
            INVESTING: {
                JBY: '认购成功',
                REGULAR: '购买成功',
                INVESTING_PASSWORD: '请输入正确密码',
                INVESTING_CHECKED: '请确认服务协议'
            },
            JINBAOYIN: {
                WITHDRAWAL_SUCCESS: '赎回申请已经提交<br>我们将尽快处理'
            },
            MISC: {
                SEND_VERI_CODE: '发送成功',
                VERIFY_VERI_CODE: '验证通过',
                VERIFY_VERI_CODE_RANGE: '请输入正确验证码'
            },
            SECURITY: {
                RESET_PASSWORD: '登录密码修改成功<br>请用新密码登录',
                SET_PAYMENT_PASSWORD: '设置成功',
                RESET_PAYMENT_PASSWORD: '支付密码修改成功',
                SECURITY_PASSWORD: '请输入正确密码',
                SECURITY_CONFIRMPASSWORD: '请输入正确的确认密码',
                SECURITY_COMPAREPASSWORD: '请确认输入的密码是否相同'
            },
            SETTLE_ACCOUNT: {
                DEPOSIT_SUCCESS: '充值申请已经提交<br>请耐心等待支付结果',
                WITHDRAWAL_SUCCESS: '提现申请已经提交<br>我们将尽快处理',
                WITHDRAWAL_MAX: '您的提现超出可取金额',
                WITHDRAWAL_PASSWORD: '请输入正确密码'
            },
            SIGNUP: {
                SIGNUP_PASSWORD: '请输入正确密码',
                SIGNUP_CONFIRMPASSWORD: '请输入正确的确认密码',
                SIGNUP_COMPAREPASSWORD: '请确认输入的密码是否相同',
                SIGNUP_CHECKED: '请确认服务协议',
                SIGNUP_SUCCESS: '注册成功<br>请登录使用'
            },
            USER: {
                INVALID_CELLPHONE: '请填写正确的手机号',
                INVALID_PASSWORD: '请输入正确的密码',
                LOGIN_OUT: '退出成功',
                LOGIN_SUCCESS: '登录成功'
            }
        },
        BANNERS:[{
                title: '金银猫最优投资收益比',
                imageSource: 'assets/img/topic/banner@640x270-6af6f5.jpg',
                targetUrl: 'https://m.jinyinmao.com.cn'
            }, {
                title: '银行级资金保障',
                imageSource: 'assets/img/topic/banner1@640x270-28df7d.jpg',
                targetUrl: 'https://m.jinyinmao.com.cn'
            }, {
                title: '更好的金银猫',
                imageSource: 'assets/img/topic/banner2@640x270-3e38e2.png',
                targetUrl: 'https://m.jinyinmao.com.cn'
            }],

        JBYINFO: {
            YIELD: '7',
            TITLE: '金包银第300期'
        }
    })
    .constant('REGEX', {
        CELLPHONE: /^(13|14|15|17|18)\d{9}$/,
        PASSWORD: /^[a-zA-Z\d~!@#$%^&*_]{6,18}$/,
        PAYMENT_PASSWORD: /^(?![^a-zA-Z~!@#$%^&*_]+$)(?!\D+$).{8,18}$/,
        URL: /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[:?\d]*)\S*$/
    })
    .constant('APP', {
        VERSION: '13.1.62-DEV',
        ENV: 'dev',
        PLATFORMS:'web',
        CONTRACTID:'0',
        CLIENTTYPE:'903'
    });
