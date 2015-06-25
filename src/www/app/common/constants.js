angular.module('jym.constants', [])
    .constant('URLS', {
        CONFIG: {
            FETCH: 'https://jymstoredev.blob.core.chinacloudapi.cn/publicfiles/Configs/AppConfig/3.0.0'
        },
        JINBOAYIN: {
            FETCH: 'https://jym-dev-api.jinyinmao.com.cn/Product/Current/JBY'
        },
        INVESTING: {
            JBY: 'https://jym-dev-api.jinyinmao.com.cn/Investing/JBY'
        },
        USER: {
            GETINFO: 'https://jym-dev-api.jinyinmao.com.cn/User',
            SIGNIN: 'https://jym-dev-api.jinyinmao.com.cn/User/Auth/SignIn'
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
                USER_LOGIN_PASSWORD_REMIAN_LESS: '用户名或者密码错误次数过多，请核实后再试'
            }
        }
    })
    .constant('REGEX', {
        CELLPHONE: /^(13|14|15|17|18)\d{9}$/,
        PASSWORD: /^[a-zA-Z\d~!@#$%^&*_]{6,18}$/
    });

