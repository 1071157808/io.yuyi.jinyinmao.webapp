angular.module('jym.constants', [])
    .constant('URLS', {
        CONFIG: {
            FETCH: 'https://jymstoredev.blob.core.chinacloudapi.cn:443/publicfiles/Configs/AppConfig/3.0.0'
        },
        JINBOAYIN: {
            FETCH: 'https://jym-dev-api.jinyinmao.com.cn:443/Product/Current/JBY'
        },
        INVESTING: {
            JBY: 'https://jym-dev-api.jinyinmao.com.cn:443/Investing/JBY'
        },
        USER: {
            GETINFO: 'https://jym-dev-api.jinyinmao.com.cn:443/User',
            SIGNIN: 'https://jym-dev-api.jinyinmao.com.cn:443/User/Auth/SignIn',
            SENDVERICODE: 'https://jym-dev-api.jinyinmao.com.cn:443/SendVeriCode',
            VERIFYVERICODE: 'https://jym-dev-api.jinyinmao.com.cn:443/VerifyVeriCode',
            RESETLOGINPASSWORD: 'https://jym-dev-api.jinyinmao.com.cn:443/User/Auth/ResetLoginPassword'
        },
        SETTLEACCOUNT: {
            LIST: 'https://jym-dev-api.jinyinmao.com.cn:443/User/Settle/Transcations/'
        },
        BANKCARD: {
            LIST: 'https://jym-dev-api.jinyinmao.com.cn:443/User/BankCards/Index',
            INFO: 'https://jym-dev-api.jinyinmao.com.cn:443/User/BankCards/Info/',
            REMOVE: 'https://jym-dev-api.jinyinmao.com.cn:443/User/BankCards/Remove'
        }
    })
    .constant('RESOURCES', {
        ALERT: {
            PRODUCT: {
                NOT_ON_SALE: '该产品未开售，请耐心等待',
                SOLD_OUT: '该产品已经售罄，请期待下一期',
                SHARE_INSUFFICIENT: '产品剩余份额不足',
                AMOUNT_INCORRECT: '购买金额错误'

            },
            USER: {
                CLOSED: '账户被禁用，如需帮助，请联系金银猫客服',
                HAS_NOT_SET_PAYMENT_PASSWORD: '请先设置支付密码',
                PAYMENT_PASSWORD_NEED_RESET: '支付密码被锁定，请重置后使用',
                USER_LOGIN_PASSWORD_LOCK: '登录密码被锁定，请重置后使用',
                USER_NOT_EXIST: '用户名或者密码错误，请确认后再试',
                USER_LOGIN_FAIL: '用户名或者密码错误，请确认后再试',
                USER_LOGIN_PASSWORD_REMIAN_LESS: '用户名或者密码错误次数过多，请核实后再试',
                TOO_MANY_VERI_CODE: '验证码发送次数过多，请稍后再试',
                VERI_CODE_FAIL: '验证码错误，请确认后重试',
                VERI_CODE_EXPIRE: '验证码过期，请重新获取验证码'
            }
        },
        TIP: {
            USER: {
                INVALID_CELLPHONE: '请填写正确的手机号',
                INVALID_PASSWORD: '请输入正确的密码',
                LOGIN_OUT: '退出成功'
            },
            BANKCARD: {
                REMOVE_SUCCESS: '删除银行卡成功'
            },
            MISC: {
                SEND_VERI_CODE: '发送成功',
                VERIFY_VERI_CODE: '验证通过'
            },
            SECURITY: {
                RESET_PASSWORD: '登录密码修改成功,请用新密码登录'
            }
        }
    })
    .constant('REGEX', {
        CELLPHONE: /^(13|14|15|17|18)\d{9}$/,
        PASSWORD: /^[a-zA-Z\d~!@#$%^&*_]{6,18}$/,
        URL: /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[:?\d]*)\S*$/
    });

