'use strict';
angular.module('jym.constants', [])
    .constant('URLS', {
        CONFIG: {
            FETCH: '/proxy/publicfiles/Configs/AppConfig/3.1.1'
        },
        JINBAOYIN: {
            FETCH: '/proxy/Product/Current/JBY',
            SOLD: '/proxy/Product/Current/Sold/'
        },
        INVESTING: {
            JBY: '/proxy/Investing/JBY',
            REGULAR: '/proxy/Investing/Regular'
        },
        USER: {
            GETINFO: '/proxy/User',
            SIGNIN: '/proxy/User/Auth/SignIn',
            SENDVERICODE: '/proxy/SendVeriCode',
            VERIFYVERICODE: '/proxy/VerifyVeriCode',
            RESETLOGINPASSWORD: '/proxy/User/Auth/ResetLoginPassword',
            RESETPAYMENTPASSWORD: '/proxy/User/Auth/ResetPaymentPassword',
            SINGUP: '/proxy/User/Auth/SignUp',
            SETPAYMENTPASSWORD: '/proxy/User/Auth/SetPaymentPassword',
            AUTHENTICATE: '/proxy/User/Auth/Authenticate'
        },
        USERJINBAOYIN: {
            INFO: '/proxy/User/JBY/Transaction/',
            LIST: '/proxy/User/JBY/Transactions/',
            WITHDRAWAL: '/proxy/User/JBY/Withdrawal'
        },
        ORDER: {
            INFO: '/proxy/User/Order/Info/',
            LIST: '/proxy/User/Order/Index/'
        },
        SETTLEACCOUNT: {
            LIST: '/proxy/User/Settle/Transactions/',
            INFO: '/proxy/User/Settle/Transaction/',
            DEPOSIT: '/proxy/User/Settle/Deposit/Yilian',
            WITHDRAWAL: '/proxy/User/Settle/Withdrawal'
        },
        BANKCARD: {
            LIST: '/proxy/User/BankCards/Index',
            INFO: '/proxy/User/BankCards/Info/',
            REMOVE: '/proxy/User/BankCards/Remove',
            WITHDRAWALABLE: '/proxy/User/BankCards/Withdrawalable',
            VERIFYBANKCARDBYYILIAN: '/proxy/User/BankCards/VerifyBankCardByYilian',
            ADDBANKCARD: '/proxy/User/BankCards/AddBankCard'
        },
        REGULARPRDUCT: {
            INFO: '/proxy/Product/Regular/',
            PAGE: '/proxy/Product/Regular/Page/',
            SOLD: '/proxy/Product/Regular/Sold/'
        }
    })
    .constant('RESOURCES', {
        ALERT: {
            PRODUCT: {
                NOT_ON_SALE: '该产品未开售<br>请耐心等待',
                SOLD_OUT: '该产品已经售罄<br>请期待下一期',
                SHARE_INSUFFICIENT: '产品剩余份额不足',
                AMOUNT_INCORRECT: '购买金额错误'

            },
            USER: {
                CLOSED: '账户被禁用<br>如需帮助，请联系金银猫客服<br>4008-556-333',
                HAS_NOT_SET_PAYMENT_PASSWORD: '请先设置支付密码',
                PAYMENT_PASSWORD_NEED_RESET: '支付密码被锁定<br>请重置后使用',
                USER_LOGIN_PASSWORD_LOCK: '登录密码被锁定<br>请重置后使用',
                USER_NOT_EXIST: '用户名或者密码错误<br>请确认后再试',
                USER_LOGIN_FAIL: '用户名或者密码错误<br>请确认后再试',
                USER_LOGIN_PASSWORD_REMIAN_LESS: '用户名或者密码错误次数过多<br>请核实后再试',
                TOO_MANY_VERI_CODE: '验证码发送次数过多<br>请稍后再试',
                VERI_CODE_FAIL: '验证码错误<br>请确认后重试',
                VERI_CODE_EXPIRE: '验证码过期<br>请重新获取验证码'
            }
        },
        TIP: {
            USER: {
                INVALID_CELLPHONE: '请填写正确的手机号',
                INVALID_PASSWORD: '请输入正确的密码',
                LOGIN_OUT: '退出成功',
                LOGIN_SUCCESS: '登录成功'
            },
            BANKCARD: {
                REMOVE_SUCCESS: '删除银行卡成功',
                SIGN: '认证申请已经提交<br>请耐心等待'
            },
            MISC: {
                SEND_VERI_CODE: '发送成功',
                VERIFY_VERI_CODE: '验证通过'
            },
            SECURITY: {
                RESET_PASSWORD: '登录密码修改成功<br>请用新密码登录',
                SETPAYMENTPASSWORD: '设置成功'
            },
            SIGNUP: {
                SIGNUP_SUCCESS: '注册成功<br>请登录使用'
            },
            SETTLEACCOUNT: {
                DEPOSIT_SUCCESS: '充值申请已经提交<br>请耐心等待支付结果',
                WITHDRAWAL_SUCCESS: '提现申请已经提交<br>我们将尽快处理'
            },
            JINBAOYIN: {
                WITHDRAWAL_SUCCESS: '赎回申请已经提交<br>我们将尽快处理'
            },
            INVESTING: {
                JBY: '认购成功',
                REGULAR: '购买成功'
            }
        }
    })
    .constant('REGEX', {
        CELLPHONE: /^(13|14|15|17|18)\d{9}$/,
        PASSWORD: /^[a-zA-Z\d~!@#$%^&*_]{6,18}$/,
        PAYMENT_PASSWORD: /^(?![^a-zA-Z~!@#$%^&*_]+$)(?!\D+$).{8,18}$/,
        URL: /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[:?\d]*)\S*$/
    })
    .constant('APP', {
        VERSION: '13.1.1-DEV',
        APIURL: 'https://jym-dev-api.jinyinmao.com.cn:443',
        CONFIGURL: 'https://jymstoredev.blob.core.chinacloudapi.cn:443'
    });
