'use strict';
angular.module('jym.constants', [])
    .constant('URLS', {
        CONFIG: {
            FETCH: 'https://jymstoredev.blob.core.chinacloudapi.cn:443/publicfiles/Configs/AppConfig/3.1.1'
        },
        JINBAOYIN: {
            FETCH: 'https://jym-dev-api.jinyinmao.com.cn:443/Product/Current/JBY',
            SOLD: 'https://jym-dev-api.jinyinmao.com.cn:443/Product/Current/Sold/',
            AGREEMENT: 'https://jym-dev-api.jinyinmao.com.cn:443/Product/Current/Agreement/'
        },
        INVESTING: {
            JBY: 'https://jym-dev-api.jinyinmao.com.cn:443/Investing/JBY',
            REGULAR: 'https://jym-dev-api.jinyinmao.com.cn:443/Investing/Regular'
        },
        USER: {
            GETINFO: 'https://jym-dev-api.jinyinmao.com.cn:443/User',
            SIGNIN: 'https://jym-dev-api.jinyinmao.com.cn:443/User/Auth/SignIn',
            SENDVERICODE: 'https://jym-dev-api.jinyinmao.com.cn:443/SendVeriCode',
            VERIFYVERICODE: 'https://jym-dev-api.jinyinmao.com.cn:443/VerifyVeriCode',
            RESETLOGINPASSWORD: 'https://jym-dev-api.jinyinmao.com.cn:443/User/Auth/ResetLoginPassword',
            RESETPAYMENTPASSWORD: 'https://jym-dev-api.jinyinmao.com.cn:443/User/Auth/ResetPaymentPassword',
            SINGUP: 'https://jym-dev-api.jinyinmao.com.cn:443/User/Auth/SignUp',
            SETPAYMENTPASSWORD: 'https://jym-dev-api.jinyinmao.com.cn:443/User/Auth/SetPaymentPassword',
            AUTHENTICATE: 'https://jym-dev-api.jinyinmao.com.cn:443/User/Auth/Authenticate'
        },
        USERJINBAOYIN: {
            INFO: 'https://jym-dev-api.jinyinmao.com.cn:443/User/JBY/Transaction/',
            LIST: 'https://jym-dev-api.jinyinmao.com.cn:443/User/JBY/Transactions/',
            WITHDRAWAL: 'https://jym-dev-api.jinyinmao.com.cn:443/User/JBY/Withdrawal'
        },
        ORDER: {
            INFO: 'https://jym-dev-api.jinyinmao.com.cn:443/User/Order/Info/',
            LIST: 'https://jym-dev-api.jinyinmao.com.cn:443/User/Order/Index/'
        },
        SETTLEACCOUNT: {
            LIST: 'https://jym-dev-api.jinyinmao.com.cn:443/User/Settle/Transactions/',
            INFO: 'https://jym-dev-api.jinyinmao.com.cn:443/User/Settle/Transaction/',
            DEPOSIT: 'https://jym-dev-api.jinyinmao.com.cn:443/User/Settle/Deposit/Yilian',
            WITHDRAWAL: 'https://jym-dev-api.jinyinmao.com.cn:443/User/Settle/Withdrawal'
        },
        BANKCARD: {
            LIST: 'https://jym-dev-api.jinyinmao.com.cn:443/User/BankCards/Index',
            INFO: 'https://jym-dev-api.jinyinmao.com.cn:443/User/BankCards/Info/',
            REMOVE: 'https://jym-dev-api.jinyinmao.com.cn:443/User/BankCards/Remove',
            WITHDRAWALABLE: 'https://jym-dev-api.jinyinmao.com.cn:443/User/BankCards/Withdrawalable',
            VERIFYBANKCARDBYYILIAN: 'https://jym-dev-api.jinyinmao.com.cn:443/User/BankCards/VerifyBankCardByYilian',
            ADDBANKCARD: 'https://jym-dev-api.jinyinmao.com.cn:443/User/BankCards/AddBankCard'
        },
        REGULARPRDUCT: {
            INFO: 'https://jym-dev-api.jinyinmao.com.cn:443/Product/Regular/',
            PAGE: 'https://jym-dev-api.jinyinmao.com.cn:443/Product/Regular/Page/',
            SOLD: 'https://jym-dev-api.jinyinmao.com.cn:443/Product/Regular/Sold/',
            AGREEMENT: 'https://jym-dev-api.jinyinmao.com.cn:443/Product/Regular/Agreement/'
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
        VERSION: '13.1.4-DEV'
    });
