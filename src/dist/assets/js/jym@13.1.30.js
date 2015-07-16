'use strict';
angular.module('jym.constants', [])
    .constant('URLS', {
        BANKCARD: {
            LIST: 'https://jym-product-api.jinyinmao.com.cn:443/User/BankCards/Index',
            INFO: 'https://jym-product-api.jinyinmao.com.cn:443/User/BankCards/Info/',
            REMOVE: 'https://jym-product-api.jinyinmao.com.cn:443/User/BankCards/Remove',
            WITHDRAWALABLE: 'https://jym-product-api.jinyinmao.com.cn:443/User/BankCards/Withdrawalable',
            VERIFY_BANK_CARD_BY_YILIAN: 'https://jym-product-api.jinyinmao.com.cn:443/User/BankCards/VerifyBankCardByYilian',
            ADD_BANK_CARD: 'https://jym-product-api.jinyinmao.com.cn:443/User/BankCards/AddBankCard',
            ADD_BANK_CARD_BY_YILIAN: 'https://jym-product-api.jinyinmao.com.cn:443/User/BankCards/AddBankCardByYilian'
        },
        CONFIG: {
            FETCH: 'https://jymstoreproduct.blob.core.chinacloudapi.cn:443/publicfiles/Configs/AppConfig/3.1.1'
        },
        INVESTING: {
            JBY: 'https://jym-product-api.jinyinmao.com.cn:443/Investing/JBY',
            REGULAR: 'https://jym-product-api.jinyinmao.com.cn:443/Investing/Regular'
        },
        JINBAOYIN: {
            AGREEMENT: 'https://jym-product-api.jinyinmao.com.cn:443/Product/Current/Agreement/',
            FETCH: 'https://jym-product-api.jinyinmao.com.cn:443/Product/Current/JBY',
            SOLD: 'https://jym-product-api.jinyinmao.com.cn:443/Product/Current/Sold/'
        },
        ORDER: {
            INFO: 'https://jym-product-api.jinyinmao.com.cn:443/User/Order/Info/',
            LIST: 'https://jym-product-api.jinyinmao.com.cn:443/User/Order/Index/'
        },
        REGULARPRDUCT: {
            INFO: 'https://jym-product-api.jinyinmao.com.cn:443/Product/Regular/',
            PAGE: 'https://jym-product-api.jinyinmao.com.cn:443/Product/Regular/Page/',
            SOLD: 'https://jym-product-api.jinyinmao.com.cn:443/Product/Regular/Sold/',
            AGREEMENT: 'https://jym-product-api.jinyinmao.com.cn:443/Product/Regular/Agreement/'
        },
        SETTLEACCOUNT: {
            LIST: 'https://jym-product-api.jinyinmao.com.cn:443/User/Settle/Transactions/',
            INFO: 'https://jym-product-api.jinyinmao.com.cn:443/User/Settle/Transaction/',
            DEPOSIT: 'https://jym-product-api.jinyinmao.com.cn:443/User/Settle/Deposit/Yilian',
            WITHDRAWAL: 'https://jym-product-api.jinyinmao.com.cn:443/User/Settle/Withdrawal'
        },
        USER: {
            AUTHENTICATE: 'https://jym-product-api.jinyinmao.com.cn:443/User/Auth/Authenticate',
            GETINFO: 'https://jym-product-api.jinyinmao.com.cn:443/User',
            RESET_LOGIN_PASSWORD: 'https://jym-product-api.jinyinmao.com.cn:443/User/Auth/ResetLoginPassword',
            RESET_PAYMENT_PASSWORD: 'https://jym-product-api.jinyinmao.com.cn:443/User/Auth/ResetPaymentPassword',
            SEND_VERICODE: 'https://jym-product-api.jinyinmao.com.cn:443/SendVeriCode',
            SET_PAYMENT_PASSWORD: 'https://jym-product-api.jinyinmao.com.cn:443/User/Auth/SetPaymentPassword',
            SINGUP: 'https://jym-product-api.jinyinmao.com.cn:443/User/Auth/SignUp',
            SIGNIN: 'https://jym-product-api.jinyinmao.com.cn:443/User/Auth/SignIn',
            VERIFY_VERICODE: 'https://jym-product-api.jinyinmao.com.cn:443/VerifyVeriCode'
        },
        USERJINBAOYIN: {
            INFO: 'https://jym-product-api.jinyinmao.com.cn:443/User/JBY/Transaction/',
            LIST: 'https://jym-product-api.jinyinmao.com.cn:443/User/JBY/Transactions/',
            WITHDRAWAL: 'https://jym-product-api.jinyinmao.com.cn:443/User/JBY/Withdrawal'
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
                SET_PAYMENT_PASSWORD: '设置成功',
                RESET_PAYMENT_PASSWORD: '支付密码修改成功'
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
        VERSION: '13.1.30',
        ENV: 'product'
    });

'use strict';
angular.module('jym.controllers', [
    'jym.services'
])
    .controller('SlidesCtrl', ['$timeout', '$ionicSlideBoxDelegate', 'JYMConfigService', 'JYMUtilityService', function($timeout, $ionicSlideBoxDelegate, JYMConfigService, JYMUtilityService) {
        var ctrl = this;

        ctrl.slides = [];
        ctrl.activeSlideIndex = 0;

        JYMConfigService.getSlidesConfig()
            .then(function(result) {
                ctrl.slides = result;
            })
            .then(function() {
                $ionicSlideBoxDelegate.update();
            });

        ctrl.clickSlide = function(url) {
            JYMUtilityService.open(url);
        };

        ctrl.onSlideChanged = function() {
            if (ctrl.activeSlideIndex === ctrl.slides.length - 2) {
                $timeout(function() {
                    ctrl.activeSlideIndex = 0;
                }, 5000);
            }
        };
    }])
    .controller('TabsCtrl', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state) {
        var indexPage = ['jym.jinbaoyin', 'jym.shangpiao', 'jym.user', 'jym.user-login', 'jym.yinpiao', 'jym.zhuanqu'];
        $rootScope.$on('$ionicView.beforeEnter', function() {
            var pageName = $state.current.name;
            $rootScope.hideTabs = indexPage.indexOf(pageName) < 0;
        });
        $rootScope.$on('$ionicView.enter', function() {
            var pageName = $state.current.name;
            $rootScope.hideTabs = indexPage.indexOf(pageName) < 0;
        });
    }]);

'use strict';
angular.module('jym.filters', [])
    .filter('bankCardStatus', function() {
        return function(card) {
            if (card) {
                if (card.verifiedByYilian) {
                    return '签约支付';
                }

                if (card.verified) {
                    return '短信验证支付';
                }
            }

            return '';
        };
    })
    .filter('bankImg', function() {
        return function(bankName) {

            switch (bankName) {
                case '浦发银行':
                    return 'assets/img/bank/pufa@40x40-3cda6c.png';
                case '深发银行':
                    return 'assets/img/bank/shenfazhan@40x40-922fbb.png';
                case '平安银行':
                    return 'assets/img/bank/pingan@40x40-487256.png';
                case '民生银行':
                    return 'assets/img/bank/minsheng@40x40-573103.png';
                case '工商银行':
                    return 'assets/img/bank/gonghang@40x40-844afd.png';
                case '农业银行':
                    return 'assets/img/bank/nonghang@40x40-ada715.png';
                case '建设银行':
                    return 'assets/img/bank/jianhang@40x40-de9c06.png';
                case '招商银行':
                    return 'assets/img/bank/zhaoshang@40x40-5bc7fd.png';
                case '广发银行':
                    return 'assets/img/bank/guangfa@40x40-270364.png';
                case '广州银行':
                    return 'assets/img/bank/guangzhou@40x40-df18d8.png';
                case '邮储银行':
                    return 'assets/img/bank/youzheng@40x40-90986d.png';
                case '兴业银行':
                    return 'assets/img/bank/xingye@40x40-6770ec.png';
                case '光大银行':
                    return 'assets/img/bank/guangda@40x40-c356de.png';
                case '华夏银行':
                    return 'assets/img/bank/huaxia@40x40-5f3ce6.png';
                case '中信银行':
                    return 'assets/img/bank/zhongxin@40x40-a69ffa.png';
                case '广州农商行':
                    return 'assets/img/bank/guangzhounongshang@40x40-bacdad.png';
                case '中国银行':
                    return 'assets/img/bank/zhonghang@40x39-ae01dc.png';
                case '富滇银行':
                    return 'assets/img/bank/fudian@40x40-dc7016.png';
                default:
                    return 'assets/img/bank/zhonghang@40x39-ae01dc.png';
            }
        };
    })
    .filter('city', function() {
        return function(cityId) {
            if (!isFinite(cityId)) {
                return cityId;
            }

            var citis = [
                { id: 1, cityName: '北京  东城区' },
                { id: 2, cityName: '北京  西城区' },
                { id: 3, cityName: '北京  崇文区' },
                { id: 4, cityName: '北京  宣武区' },
                { id: 5, cityName: '北京  朝阳区' },
                { id: 6, cityName: '北京  丰台区' },
                { id: 7, cityName: '北京  石景山区' },
                { id: 8, cityName: '北京  海淀区' },
                { id: 9, cityName: '北京  门头沟区' },
                { id: 10, cityName: '北京  房山区' },
                { id: 11, cityName: '北京  通州区' },
                { id: 12, cityName: '北京  顺义区' },
                { id: 13, cityName: '北京  昌平区' },
                { id: 14, cityName: '北京  大兴区' },
                { id: 15, cityName: '北京  平谷区' },
                { id: 16, cityName: '北京  怀柔区' },
                { id: 17, cityName: '北京  密云县' },
                { id: 18, cityName: '北京  延庆县' },
                { id: 19, cityName: '上海  浦东新区' },
                { id: 20, cityName: '上海  徐汇区' },
                { id: 21, cityName: '上海  黄浦区' },
                { id: 22, cityName: '上海  杨浦区' },
                { id: 23, cityName: '上海  虹口区' },
                { id: 24, cityName: '上海  闵行区' },
                { id: 25, cityName: '上海  长宁区' },
                { id: 26, cityName: '上海  普陀区' },
                { id: 27, cityName: '上海  宝山区' },
                { id: 28, cityName: '上海  静安区' },
                { id: 29, cityName: '上海  闸北区' },
                { id: 30, cityName: '上海  卢湾区' },
                { id: 31, cityName: '上海  松江区' },
                { id: 32, cityName: '上海  嘉定区' },
                { id: 33, cityName: '上海  南汇区' },
                { id: 34, cityName: '上海  金山区' },
                { id: 35, cityName: '上海  青浦区' },
                { id: 36, cityName: '上海  奉贤区' },
                { id: 37, cityName: '上海  崇明县' },
                { id: 38, cityName: '天津  和平区' },
                { id: 39, cityName: '天津  河东区' },
                { id: 40, cityName: '天津  河西区' },
                { id: 41, cityName: '天津  南开区' },
                { id: 42, cityName: '天津  河北区' },
                { id: 43, cityName: '天津  红桥区' },
                { id: 44, cityName: '天津  塘沽区' },
                { id: 45, cityName: '天津  汉沽区' },
                { id: 46, cityName: '天津  大港区' },
                { id: 47, cityName: '天津  东丽区' },
                { id: 48, cityName: '天津  西青区' },
                { id: 49, cityName: '天津  津南区' },
                { id: 50, cityName: '天津  北辰区' },
                { id: 51, cityName: '天津  武清区' },
                { id: 52, cityName: '天津  宝坻区' },
                { id: 53, cityName: '天津  宁河县' },
                { id: 54, cityName: '天津  静海县' },
                { id: 55, cityName: '天津  蓟县' },
                { id: 56, cityName: '重庆  万州区' },
                { id: 57, cityName: '重庆  涪陵区' },
                { id: 58, cityName: '重庆  渝中区' },
                { id: 59, cityName: '重庆  大渡口区' },
                { id: 60, cityName: '重庆  江北区' },
                { id: 61, cityName: '重庆  沙坪坝区' },
                { id: 62, cityName: '重庆  九龙坡区' },
                { id: 63, cityName: '重庆  南岸区' },
                { id: 64, cityName: '重庆  北碚区' },
                { id: 65, cityName: '重庆  万盛区' },
                { id: 66, cityName: '重庆  双桥区' },
                { id: 67, cityName: '重庆  渝北区' },
                { id: 68, cityName: '重庆  巴南区' },
                { id: 69, cityName: '重庆  长寿县' },
                { id: 70, cityName: '重庆  綦江县' },
                { id: 71, cityName: '重庆  潼南县' },
                { id: 72, cityName: '重庆  铜梁县' },
                { id: 73, cityName: '重庆  大足县' },
                { id: 74, cityName: '重庆  荣昌县' },
                { id: 75, cityName: '重庆  璧山县' },
                { id: 76, cityName: '重庆  梁平县' },
                { id: 77, cityName: '重庆  城口县' },
                { id: 78, cityName: '重庆  丰都县' },
                { id: 79, cityName: '重庆  垫江县' },
                { id: 80, cityName: '重庆  武隆县' },
                { id: 81, cityName: '重庆  忠县' },
                { id: 82, cityName: '重庆  开县' },
                { id: 83, cityName: '重庆  云阳县' },
                { id: 84, cityName: '重庆  奉节县' },
                { id: 85, cityName: '重庆  巫山县' },
                { id: 86, cityName: '重庆  巫溪县' },
                { id: 87, cityName: '重庆  黔江土家族苗族自治县' },
                { id: 88, cityName: '重庆  石柱土家族自治县' },
                { id: 89, cityName: '重庆  秀山土家族苗族自治县' },
                { id: 90, cityName: '重庆  酉阳土家族苗族自治县' },
                { id: 91, cityName: '重庆  彭水苗族土家族自治县' },
                { id: 92, cityName: '重庆  江津市' },
                { id: 93, cityName: '重庆  合川市' },
                { id: 94, cityName: '重庆  永川市' },
                { id: 95, cityName: '重庆  南川市' },
                { id: 96, cityName: '宁夏  银川市' },
                { id: 97, cityName: '宁夏  石嘴山市' },
                { id: 98, cityName: '宁夏  吴忠市' },
                { id: 99, cityName: '宁夏  固原地区' },
                { id: 100, cityName: '宁夏  中卫市' },
                { id: 101, cityName: '内蒙古 呼和浩特市' },
                { id: 102, cityName: '内蒙古 包头市' },
                { id: 103, cityName: '内蒙古 乌海市' },
                { id: 104, cityName: '内蒙古 赤峰市' },
                { id: 105, cityName: '内蒙古 呼伦贝尔市' },
                { id: 106, cityName: '内蒙古 兴安盟' },
                { id: 107, cityName: '内蒙古 通辽市' },
                { id: 108, cityName: '内蒙古 锡林郭勒盟' },
                { id: 109, cityName: '内蒙古 乌兰察布盟' },
                { id: 110, cityName: '内蒙古 伊克昭盟' },
                { id: 111, cityName: '内蒙古 巴彦淖尔盟' },
                { id: 112, cityName: '内蒙古 阿拉善盟' },
                { id: 113, cityName: '安徽省 合肥市' },
                { id: 114, cityName: '安徽省 芜湖市' },
                { id: 115, cityName: '安徽省 蚌埠市' },
                { id: 116, cityName: '安徽省 淮南市' },
                { id: 117, cityName: '安徽省 马鞍山市' },
                { id: 118, cityName: '安徽省 淮北市' },
                { id: 119, cityName: '安徽省 铜陵市' },
                { id: 120, cityName: '安徽省 安庆市' },
                { id: 121, cityName: '安徽省 黄山市' },
                { id: 122, cityName: '安徽省 滁州市' },
                { id: 123, cityName: '安徽省 阜阳市' },
                { id: 124, cityName: '安徽省 宿州市' },
                { id: 125, cityName: '安徽省 六安市' },
                { id: 126, cityName: '安徽省 宣城市' },
                { id: 127, cityName: '安徽省 巢湖市' },
                { id: 128, cityName: '安徽省 池州市' },
                { id: 129, cityName: '福建省 福州市' },
                { id: 130, cityName: '福建省 厦门市' },
                { id: 131, cityName: '福建省 宁德市' },
                { id: 132, cityName: '福建省 莆田市' },
                { id: 133, cityName: '福建省 泉州市' },
                { id: 134, cityName: '福建省 漳州市' },
                { id: 135, cityName: '福建省 龙岩' },
                { id: 136, cityName: '福建省 三明市' },
                { id: 137, cityName: '福建省 南平市' },
                { id: 138, cityName: '甘肃省 兰州市' },
                { id: 139, cityName: '甘肃省 嘉峪关市' },
                { id: 140, cityName: '甘肃省 金昌市' },
                { id: 141, cityName: '甘肃省 白银市' },
                { id: 142, cityName: '甘肃省 天水市' },
                { id: 143, cityName: '甘肃省 酒泉地区' },
                { id: 144, cityName: '甘肃省 张掖地区' },
                { id: 145, cityName: '甘肃省 武威地区' },
                { id: 146, cityName: '甘肃省 定西地区' },
                { id: 147, cityName: '甘肃省 陇南地区' },
                { id: 148, cityName: '甘肃省 平凉地区' },
                { id: 149, cityName: '甘肃省 庆阳地区' },
                { id: 150, cityName: '甘肃省 临夏回族自治州' },
                { id: 151, cityName: '甘肃省 甘南藏族自治州' },
                { id: 152, cityName: '广东省 广州市' },
                { id: 153, cityName: '广东省 韶关市' },
                { id: 154, cityName: '广东省 深圳市' },
                { id: 155, cityName: '广东省 珠海市' },
                { id: 156, cityName: '广东省 汕头市' },
                { id: 157, cityName: '广东省 佛山市' },
                { id: 158, cityName: '广东省 江门市' },
                { id: 159, cityName: '广东省 湛江市' },
                { id: 160, cityName: '广东省 茂名市' },
                { id: 161, cityName: '广东省 肇庆市' },
                { id: 162, cityName: '广东省 惠州市' },
                { id: 163, cityName: '广东省 梅州市' },
                { id: 164, cityName: '广东省 汕尾市' },
                { id: 165, cityName: '广东省 河源市' },
                { id: 166, cityName: '广东省 阳江市' },
                { id: 167, cityName: '广东省 清远市' },
                { id: 168, cityName: '广东省 潮州市' },
                { id: 169, cityName: '广东省 揭阳市' },
                { id: 170, cityName: '广东省 云浮市' },
                { id: 171, cityName: '广东省 东莞市' },
                { id: 172, cityName: '广东省 中山市' },
                { id: 173, cityName: '广西省 南宁市' },
                { id: 174, cityName: '广西省 柳州市' },
                { id: 175, cityName: '广西省 桂林市' },
                { id: 176, cityName: '广西省 梧州市' },
                { id: 177, cityName: '广西省 北海市' },
                { id: 178, cityName: '广西省 防城港市' },
                { id: 179, cityName: '广西省 钦州市' },
                { id: 180, cityName: '广西省 贵港市' },
                { id: 181, cityName: '广西省 玉林市' },
                { id: 182, cityName: '广西省 崇左市' },
                { id: 183, cityName: '广西省 来宾市' },
                { id: 184, cityName: '广西省 贺州市' },
                { id: 185, cityName: '广西省 百色市' },
                { id: 186, cityName: '广西省 河池市' },
                { id: 187, cityName: '贵州省 贵阳市' },
                { id: 188, cityName: '贵州省 六盘水市' },
                { id: 189, cityName: '贵州省 遵义市' },
                { id: 190, cityName: '贵州省 铜仁地区' },
                { id: 191, cityName: '贵州省 黔西南布依族苗族自治州' },
                { id: 192, cityName: '贵州省 毕节地区' },
                { id: 193, cityName: '贵州省 安顺地区' },
                { id: 194, cityName: '贵州省 黔东南苗族侗族自治州' },
                { id: 195, cityName: '贵州省 黔南布依族苗族自治州' },
                { id: 196, cityName: '海南省 海口市' },
                { id: 197, cityName: '海南省 三亚市' },
                { id: 198, cityName: '海南省 文昌市' },
                { id: 199, cityName: '海南省 万宁市' },
                { id: 200, cityName: '海南省 东方市' },
                { id: 201, cityName: '海南省 定安县' },
                { id: 202, cityName: '海南省 屯昌县' },
                { id: 203, cityName: '海南省 澄迈县' },
                { id: 204, cityName: '海南省 临高县' },
                { id: 205, cityName: '海南省 白沙黎族自治县' },
                { id: 206, cityName: '海南省 昌江黎族自治县' },
                { id: 207, cityName: '海南省 乐东黎族自治县' },
                { id: 208, cityName: '海南省 陵水黎族自治县' },
                { id: 209, cityName: '海南省 保亭黎族苗族自治县' },
                { id: 210, cityName: '海南省 琼中黎族苗族自治县' },
                { id: 211, cityName: '海南省 西南中沙群岛办事处' },
                { id: 212, cityName: '河北省 石家庄市' },
                { id: 213, cityName: '河北省 唐山市' },
                { id: 214, cityName: '河北省 秦皇岛市' },
                { id: 215, cityName: '河北省 邯郸市' },
                { id: 216, cityName: '河北省 邢台市' },
                { id: 217, cityName: '河北省 保定市' },
                { id: 218, cityName: '河北省 张家口市' },
                { id: 219, cityName: '河北省 承德市' },
                { id: 220, cityName: '河北省 沧州市' },
                { id: 221, cityName: '河北省 廊坊市' },
                { id: 222, cityName: '河北省 衡水市' },
                { id: 223, cityName: '河南省 郑州市' },
                { id: 224, cityName: '河南省 开封市' },
                { id: 225, cityName: '河南省 洛阳市' },
                { id: 226, cityName: '河南省 平顶山市' },
                { id: 227, cityName: '河南省 安阳市' },
                { id: 228, cityName: '河南省 鹤壁市' },
                { id: 229, cityName: '河南省 新乡市' },
                { id: 230, cityName: '河南省 焦作市' },
                { id: 231, cityName: '河南省 濮阳市' },
                { id: 232, cityName: '河南省 许昌市' },
                { id: 233, cityName: '河南省 漯河市' },
                { id: 234, cityName: '河南省 三门峡市' },
                { id: 235, cityName: '河南省 南阳市' },
                { id: 236, cityName: '河南省 商丘市' },
                { id: 237, cityName: '河南省 信阳市' },
                { id: 238, cityName: '河南省 周口市' },
                { id: 239, cityName: '河南省 济源市' },
                { id: 240, cityName: '河南省 驻马店地区' },
                { id: 241, cityName: '黑龙江 哈尔滨市' },
                { id: 242, cityName: '黑龙江 齐齐哈尔市' },
                { id: 243, cityName: '黑龙江 鸡西市' },
                { id: 244, cityName: '黑龙江 鹤岗市' },
                { id: 245, cityName: '黑龙江 双鸭山市' },
                { id: 246, cityName: '黑龙江 大庆市' },
                { id: 247, cityName: '黑龙江 伊春市' },
                { id: 248, cityName: '黑龙江 七台河市' },
                { id: 249, cityName: '黑龙江 牡丹江市' },
                { id: 250, cityName: '黑龙江 黑河市' },
                { id: 251, cityName: '黑龙江 绥化市' },
                { id: 252, cityName: '黑龙江 大兴安岭地区' },
                { id: 253, cityName: '湖北省 武汉市' },
                { id: 254, cityName: '湖北省 黄石市' },
                { id: 255, cityName: '湖北省 十堰市' },
                { id: 256, cityName: '湖北省 宜昌市' },
                { id: 257, cityName: '湖北省 襄樊市' },
                { id: 258, cityName: '湖北省 鄂州市' },
                { id: 259, cityName: '湖北省 荆门市' },
                { id: 260, cityName: '湖北省 孝感市' },
                { id: 261, cityName: '湖北省 荆州市' },
                { id: 262, cityName: '湖北省 黄冈市' },
                { id: 263, cityName: '湖北省 咸宁市' },
                { id: 264, cityName: '湖北省 恩施土家族苗族自治州' },
                { id: 265, cityName: '湖北省 仙桃市' },
                { id: 266, cityName: '湖北省 潜江市' },
                { id: 267, cityName: '湖北省 天门市' },
                { id: 268, cityName: '湖北省 神农架林区' },
                { id: 269, cityName: '湖南省 长沙市' },
                { id: 270, cityName: '湖南省 株洲市' },
                { id: 271, cityName: '湖南省 湘潭市' },
                { id: 272, cityName: '湖南省 衡阳市' },
                { id: 273, cityName: '湖南省 邵阳市' },
                { id: 274, cityName: '湖南省 岳阳市' },
                { id: 275, cityName: '湖南省 常德市' },
                { id: 276, cityName: '湖南省 张家界市' },
                { id: 277, cityName: '湖南省 益阳市' },
                { id: 278, cityName: '湖南省 郴州市' },
                { id: 279, cityName: '湖南省 永州市' },
                { id: 280, cityName: '湖南省 怀化市' },
                { id: 281, cityName: '湖南省 娄底地区' },
                { id: 282, cityName: '湖南省 湘西土家族苗族自治州' },
                { id: 283, cityName: '吉林省 长春市' },
                { id: 284, cityName: '吉林省 吉林市' },
                { id: 285, cityName: '吉林省 四平市' },
                { id: 286, cityName: '吉林省 辽源市' },
                { id: 287, cityName: '吉林省 通化市' },
                { id: 288, cityName: '吉林省 白山市' },
                { id: 289, cityName: '吉林省 松原市' },
                { id: 290, cityName: '吉林省 白城市' },
                { id: 291, cityName: '吉林省 延边朝鲜族自治州' },
                { id: 292, cityName: '江苏省 南京市' },
                { id: 293, cityName: '江苏省 无锡市' },
                { id: 294, cityName: '江苏省 徐州市' },
                { id: 295, cityName: '江苏省 常州市' },
                { id: 296, cityName: '江苏省 苏州市' },
                { id: 297, cityName: '江苏省 南通市' },
                { id: 298, cityName: '江苏省 连云港市' },
                { id: 299, cityName: '江苏省 淮阴市' },
                { id: 300, cityName: '江苏省 盐城市' },
                { id: 301, cityName: '江苏省 扬州市' },
                { id: 302, cityName: '江苏省 镇江市' },
                { id: 303, cityName: '江苏省 泰州市' },
                { id: 304, cityName: '江苏省 宿迁市' },
                { id: 305, cityName: '江西省 南昌市' },
                { id: 306, cityName: '江西省 景德镇市' },
                { id: 307, cityName: '江西省 萍乡市' },
                { id: 308, cityName: '江西省 九江市' },
                { id: 309, cityName: '江西省 新余市' },
                { id: 310, cityName: '江西省 鹰潭市' },
                { id: 311, cityName: '江西省 赣州市' },
                { id: 312, cityName: '江西省 宜春市' },
                { id: 313, cityName: '江西省 上饶市' },
                { id: 314, cityName: '江西省 吉安市' },
                { id: 315, cityName: '江西省 抚州市' },
                { id: 316, cityName: '辽宁省 大连市' },
                { id: 317, cityName: '辽宁省 鞍山市' },
                { id: 318, cityName: '辽宁省 抚顺市' },
                { id: 319, cityName: '辽宁省 本溪市' },
                { id: 320, cityName: '辽宁省 丹东市' },
                { id: 321, cityName: '辽宁省 锦州市' },
                { id: 322, cityName: '辽宁省 营口市' },
                { id: 323, cityName: '辽宁省 阜新市' },
                { id: 324, cityName: '辽宁省 辽阳市' },
                { id: 325, cityName: '辽宁省 盘锦市' },
                { id: 326, cityName: '辽宁省 铁岭市' },
                { id: 327, cityName: '辽宁省 朝阳市' },
                { id: 328, cityName: '辽宁省 葫芦岛市' },
                { id: 329, cityName: '青海省 西宁市' },
                { id: 330, cityName: '青海省 海东地区' },
                { id: 331, cityName: '青海省 海北藏族自治州' },
                { id: 332, cityName: '青海省 黄南藏族自治州' },
                { id: 333, cityName: '青海省 海南藏族自治州' },
                { id: 334, cityName: '青海省 果洛藏族自治州' },
                { id: 335, cityName: '青海省 玉树藏族自治州' },
                { id: 336, cityName: '青海省 海西蒙古族藏族自治州' },
                { id: 337, cityName: '山东省 济南市' },
                { id: 338, cityName: '山东省 青岛市' },
                { id: 339, cityName: '山东省 淄博市' },
                { id: 340, cityName: '山东省 枣庄市' },
                { id: 341, cityName: '山东省 东营市' },
                { id: 342, cityName: '山东省 烟台市' },
                { id: 343, cityName: '山东省 潍坊市' },
                { id: 344, cityName: '山东省 济宁市' },
                { id: 345, cityName: '山东省 泰安市' },
                { id: 346, cityName: '山东省 威海市' },
                { id: 347, cityName: '山东省 日照市' },
                { id: 348, cityName: '山东省 莱芜市' },
                { id: 349, cityName: '山东省 临沂市' },
                { id: 350, cityName: '山东省 德州市' },
                { id: 351, cityName: '山东省 聊城市' },
                { id: 352, cityName: '山东省 滨州市' },
                { id: 353, cityName: '山东省 菏泽市' },
                { id: 354, cityName: '山西省 太原市' },
                { id: 355, cityName: '山西省 大同市' },
                { id: 356, cityName: '山西省 阳泉市' },
                { id: 357, cityName: '山西省 长治市' },
                { id: 358, cityName: '山西省 晋城市' },
                { id: 359, cityName: '山西省 朔州市' },
                { id: 360, cityName: '山西省 忻州市' },
                { id: 361, cityName: '山西省 吕梁市' },
                { id: 362, cityName: '山西省 晋中市' },
                { id: 363, cityName: '山西省 临汾市' },
                { id: 364, cityName: '山西省 运城市' },
                { id: 365, cityName: '陕西省 西安市' },
                { id: 366, cityName: '陕西省 铜川市' },
                { id: 367, cityName: '陕西省 宝鸡市' },
                { id: 368, cityName: '陕西省 咸阳市' },
                { id: 369, cityName: '陕西省 渭南市' },
                { id: 370, cityName: '陕西省 延安市' },
                { id: 371, cityName: '陕西省 汉中市' },
                { id: 372, cityName: '陕西省 安康地区' },
                { id: 373, cityName: '陕西省 商洛地区' },
                { id: 374, cityName: '陕西省 榆林地区' },
                { id: 375, cityName: '四川省 成都市' },
                { id: 376, cityName: '四川省 自贡市' },
                { id: 377, cityName: '四川省 攀枝花市' },
                { id: 378, cityName: '四川省 泸州市' },
                { id: 379, cityName: '四川省 德阳市' },
                { id: 380, cityName: '四川省 绵阳市' },
                { id: 381, cityName: '四川省 广元市' },
                { id: 382, cityName: '四川省 遂宁市' },
                { id: 383, cityName: '四川省 内江市' },
                { id: 384, cityName: '四川省 乐山市' },
                { id: 385, cityName: '四川省 南充市' },
                { id: 386, cityName: '四川省 宜宾市' },
                { id: 387, cityName: '四川省 广安市' },
                { id: 388, cityName: '四川省 达川地区' },
                { id: 389, cityName: '四川省 雅安地区' },
                { id: 390, cityName: '四川省 阿坝藏族羌族自治州' },
                { id: 391, cityName: '四川省 甘孜藏族自治州' },
                { id: 392, cityName: '四川省 凉山彝族自治州' },
                { id: 393, cityName: '四川省 巴中地区' },
                { id: 394, cityName: '四川省 眉山地区' },
                { id: 395, cityName: '四川省 资阳地区' },
                { id: 396, cityName: '云南省 昆明市' },
                { id: 397, cityName: '云南省 曲靖市' },
                { id: 398, cityName: '云南省 玉溪市' },
                { id: 399, cityName: '云南省 昭通地区' },
                { id: 400, cityName: '云南省 楚雄彝族自治州' },
                { id: 401, cityName: '云南省 红河哈尼族彝族自治州' },
                { id: 402, cityName: '云南省 文山壮族苗族自治州' },
                { id: 403, cityName: '云南省 思茅市' },
                { id: 404, cityName: '云南省 西双版纳傣族自治州' },
                { id: 405, cityName: '云南省 大理白族自治州' },
                { id: 406, cityName: '云南省 保山地区' },
                { id: 407, cityName: '云南省 德宏傣族景颇族自治州' },
                { id: 408, cityName: '云南省 丽江地区' },
                { id: 409, cityName: '云南省 怒江傈僳族自治州' },
                { id: 410, cityName: '云南省 迪庆藏族自治州' },
                { id: 411, cityName: '云南省 临沧地区' },
                { id: 412, cityName: '浙江省 杭州市' },
                { id: 413, cityName: '浙江省 宁波市' },
                { id: 414, cityName: '浙江省 温州市' },
                { id: 415, cityName: '浙江省 嘉兴市' },
                { id: 416, cityName: '浙江省 湖州市' },
                { id: 417, cityName: '浙江省 绍兴市' },
                { id: 418, cityName: '浙江省 金华市' },
                { id: 419, cityName: '浙江省 衢州市' },
                { id: 420, cityName: '浙江省 舟山市' },
                { id: 421, cityName: '浙江省 台州市' },
                { id: 422, cityName: '浙江省 丽水市' },
                { id: 423, cityName: '西藏  拉萨市' },
                { id: 424, cityName: '西藏  昌都地区' },
                { id: 425, cityName: '西藏  山南地区' },
                { id: 426, cityName: '西藏  日喀则地区' },
                { id: 427, cityName: '西藏  那曲地区' },
                { id: 428, cityName: '西藏  阿里地区' },
                { id: 429, cityName: '西藏  林芝地区' },
                { id: 430, cityName: '新疆  乌鲁木齐市' },
                { id: 431, cityName: '新疆  克拉玛依市' },
                { id: 432, cityName: '新疆  吐鲁番地区' },
                { id: 433, cityName: '新疆  哈密地区' },
                { id: 434, cityName: '新疆  昌吉回族自治州' },
                { id: 435, cityName: '新疆  博尔塔拉蒙古自治州' },
                { id: 436, cityName: '新疆  巴音郭楞蒙古自治州' },
                { id: 437, cityName: '新疆  阿克苏地区' },
                { id: 438, cityName: '新疆  克孜勒苏柯尔克孜自治州' },
                { id: 439, cityName: '新疆  喀什地区' },
                { id: 440, cityName: '新疆  和田地区' },
                { id: 441, cityName: '新疆  伊犁哈萨克自治州' },
                { id: 442, cityName: '新疆  塔城地区' },
                { id: 443, cityName: '新疆  阿勒泰地区' },
                { id: 444, cityName: '新疆  石河子市' },
                { id: 445, cityName: '新疆  阿拉尔市' },
                { id: 446, cityName: '新疆  图木舒克市' },
                { id: 447, cityName: '新疆  五家渠市' }
            ];

            var c = _.find(citis, function(i) {
                return i.id === cityId;
            });

            if (c) {
                return c.cityName;
            } else {
                return '上海';
            }
        };
    })
    .filter('longTime', function() {
        return function(time) {
            if (time === undefined || time === null || time === '') {
                return '';
            }

            return moment(time).format('YYYY年MM月DD日 HH:mm');
        };
    })
    .filter('resultText', function() {
        return function(resultCode) {
            if (!isFinite(resultCode)) {
                return resultCode;
            }

            switch (resultCode) {
                case 1:
                    return '交易成功';
                case -1:
                    return '交易失败';
                default:
                    return '交易中';
            }
        };
    })
    .filter('time', function() {
        return function(time) {
            if (time === undefined || time === null || time === '') {
                return '';
            }

            return moment(time).format('YYYY年MM月DD日');
        };
    })
    .filter('tradeCodeForJBY', function() {
        return function(tradeCode) {
            if (!isFinite(tradeCode)) {
                return tradeCode;
            }

            switch (tradeCode) {
                case 2001011101:
                    return '账户冲正';
                case 2001012101:
                    return '账户冲正';
                case 2001051102:
                    return '金包银申购';
                case 2001012002:
                    return '金包银赎回';
                case 2001011106:
                    return '金包银利息复投';
                default:
                    return '未知交易';
            }
        };
    })
    .filter('tradeCodeForSettle', function() {
        return function(tradeCode) {
            if (!isFinite(tradeCode)) {
                return tradeCode;
            }

            switch (tradeCode) {
                case 1005051001:
                    return '账户充值';
                case 1005011101:
                    return '账户冲正';
                case 1005011103:
                    return '金包银赎回';
                case 1005011104:
                    return '理财本金返还';
                case 1005021104:
                    return '理财本金返还';
                case 1005011105:
                    return '理财利息入账';
                case 1005021105:
                    return '理财利息入账';
                case 1005052001:
                    return '账户取现';
                case 1005012101:
                    return '账户冲正';
                case 1005012003:
                    return '金包银申购';
                case 1005012004:
                    return '购买理财产品';
                case 1005022004:
                    return '购买理财产品';
                case 1005012102:
                    return '取现手续费';
                default:
                    return '未知交易';
            }
        };
    })
    .filter('tradeForJBY', function() {
        return function(trade) {
            if (!isFinite(trade)) {
                return trade;
            }

            if (trade === 0) {
                return '申购';
            }

            return '赎回';
        };
    })
    .filter('tradeForSettle', function() {
        return function(trade) {
            if (!isFinite(trade)) {
                return trade;
            }

            if (trade === 0) {
                return '充值';
            }

            return '取现';
        };
    });

'use strict';
angular.module('jym.interceptors', [
    'jym.services'
])
    .factory('globalInterceptor', ['$rootScope', '$injector', '$q', function($rootScope, $injector, $q) {
        var authService = $injector.get('JYMAuthService');
        var timeService = $injector.get('JYMTimeService');
        return {
            request: function(config) {
                config.headers['x-jym-auth'] = authService.getToken();
                return config;
            },

            requestError: function(rejection) {
                $rootScope.$broadcast('http:requestError');
                return $q.reject(rejection);
            },

            response: function(response) {
                if (response.headers()['x-jym-auth']) {
                    authService.setToken(response.headers()['x-jym-auth']);
                }
                if (response.headers().date) {
                    timeService.setTime(moment(response.headers().date));
                }

                return response;
            },

            responseError: function(rejection) {
                var $state = $injector.get('$state');
                var $ionicHistory = $injector.get('$ionicHistory');
                var $ionicLoading = $injector.get('$ionicLoading');

                if (rejection.status >= 400 && rejection.status < 500) {
                    if (rejection.data.message) {
                        var message = rejection.data.message.split(':');
                        var errorMessage = message[message.length - 1];
                        $ionicLoading.show({
                            template: errorMessage,
                            duration: 3000,
                            hideOnStateChange: true
                        });
                    }
                }

                if (rejection.status === 401 || rejection.status === 403) {
                    authService.clearToken();

                    $ionicHistory.nextViewOptions({
                        disableBack: true
                    });
                    $state.go('jym.user-login', { backState: $state.current.name });
                }

                if (rejection.status >= 500) {
                    $rootScope.$broadcast('http:responseError-500');
                }

                return $q.reject(rejection);
            }
        };
    }])
    .factory('loadingInterceptor', ['$rootScope', '$timeout', function($rootScope, $timeout) {
        return {
            request: function(config) {
                if (config.method.toUpperCase() !== 'GET') {
                    $rootScope.$broadcast('loading:show');
                    $timeout(function() {
                        $rootScope.$broadcast('loading:hide');
                    }, 10000);
                }

                return config;
            },
            response: function(response) {
                $rootScope.$broadcast('loading:hide');
                return response;
            }
        };
    }]);

'use strict';
angular.module('jym.services', [
    'ngAnimate',
    'angular-cache'
])
    .service('JYMAuthService', ['JYMCacheService', function(JYMCacheService) {
        var service = this;
        var tokenStorage = JYMCacheService.get('authTokenCache');

        service.clearToken = function() {
            tokenStorage.removeAll();
        };

        service.getToken = function() {
            return tokenStorage.get('auth') || '';
        };

        service.setToken = function(newToken) {
            if (newToken) {
                tokenStorage.put('auth', newToken);
            }
        };
    }])
    .service('JYMCacheService', ['CacheFactory', function(CacheFactory) {
        var service = this;

        CacheFactory('authTokenCache', {
            maxAge: 365 * 24 * 60 * 60 * 1000,
            deleteOnExpire: 'aggressive',
            storageMode: 'localStorage'
        });

        CacheFactory('configCache', {
            maxAge: 15 * 60 * 1000,
            deleteOnExpire: 'aggressive',
            storageMode: 'localStorage'
        });

        CacheFactory('productCache', {
            maxAge: 60 * 1000,
            deleteOnExpire: 'aggressive',
            storageMode: 'memory'
        });

        CacheFactory('userCache', {
            maxAge: 5 * 1000,
            deleteOnExpire: 'aggressive',
            storageMode: 'memory'
        });

        service.get = function(cacheName, maxAge, storageMode) {
            maxAge = maxAge || 60 * 1000;
            storageMode = storageMode || 'memory';

            if (!CacheFactory.get(cacheName)) {
                CacheFactory(cacheName, {
                    maxAge: maxAge,
                    deleteOnExpire: 'aggressive',
                    storageMode: storageMode
                });
            }

            return CacheFactory.get(cacheName);
        };
    }])
    .service('JYMConfigService', ['$http', '$q', 'URLS', 'JYMCacheService', function($http, $q, URLS, JYMCacheService) {
        var service = this;

        function parseConfig(result) {
            if (ionic.Platform.isIOS()) {
                return result.data.ios;
            }

            if (ionic.Platform.isAndroid()) {
                return result.data.android;
            }

            return result.data.web;
        }

        service.getConfig = function() {
            return $http.get(URLS.CONFIG.FETCH, {
                cache: JYMCacheService.get('configCache')
            })
                .then(parseConfig);
        };

        service.getSlidesConfig = function() {
            var extractSlidersConfig = function(result) {
                return result.slides;
            };

            return service.getConfig().then(extractSlidersConfig);
        };
    }])
    .service('JYMTimeService', function() {
        var service = this;

        var now = moment();

        service.getTime = function() {
            return now;
        };

        service.setTime = function(time) {
            now = time;
        };
    })
    .service('JYMUtilityService', ['$state', '$timeout', '$ionicLoading', '$ionicHistory', '$cordovaInAppBrowser', '$cordovaToast', 'REGEX', 'JYMCacheService', function($state, $timeout, $ionicLoading, $ionicHistory, $cordovaInAppBrowser, $cordovaToast, REGEX, JYMCacheService) {
        var service = this;

        service.clearCache = function() {
            JYMCacheService.get('authTokenCache').removeAll();
            JYMCacheService.get('configCache').removeAll();
            JYMCacheService.get('productCache').removeAll();
            JYMCacheService.get('userCache').removeAll();
        };

        service.go = function(to, params, options) {
            $state.go(to, params, options);
        };

        service.goWithDisableBack = function(to, params, options) {
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $state.go(to, params, options);
        };

        service.isUrl = function(string) {
            return REGEX.URL.test(string);
        };

        service.open = function(url) {
            if (service.isUrl(url)) {
                $cordovaInAppBrowser.open(url, '_system');
            } else {
                $state.go(url);
            }
        };

        service.showAlert = function(text) {
            $ionicLoading.show({
                template: text,
                duration: 3000,
                hideOnStateChange: true
            });
        };
    }]);

angular.module('jym.templates', ['app/common/templates/index-slide-box.tpl.html', 'app/index.tpl.html', 'app/jinbaoyin/detail/detail.tpl.html', 'app/jinbaoyin/index.tpl.html', 'app/jinbaoyin/purchase/purchase.tpl.html', 'app/shangpiao/detail/detail.tpl.html', 'app/shangpiao/index.tpl.html', 'app/shangpiao/purchase/purchase.tpl.html', 'app/user/about/about.tpl.html', 'app/user/bank-card/add/add.tpl.html', 'app/user/bank-card/add/bankSelector.tpl.html', 'app/user/bank-card/add/methodSelector.tpl.html', 'app/user/bank-card/bank-card.tpl.html', 'app/user/bank-card/detail/detail.tpl.html', 'app/user/bank-card/upgrade/upgrade.tpl.html', 'app/user/bank-card/yilian-notice.tpl.html', 'app/user/index.tpl.html', 'app/user/jinbaoyin/detail/detail.tpl.html', 'app/user/jinbaoyin/jinbaoyin.tpl.html', 'app/user/jinbaoyin/list/list.tpl.html', 'app/user/jinbaoyin/withdrawal/withdrawal.tpl.html', 'app/user/login/login.tpl.html', 'app/user/order/detail/detail.tpl.html', 'app/user/order/order.tpl.html', 'app/user/security/password/password.tpl.html', 'app/user/security/password/sendVeriCode.tpl.html', 'app/user/security/paymentPassword/paymentPassword.tpl.html', 'app/user/security/paymentPassword/sendVeriCode.tpl.html', 'app/user/security/paymentPassword/setPaymentPassword.tpl.html', 'app/user/security/security.tpl.html', 'app/user/settle-account/deposit/bank-card-selector.tpl.html', 'app/user/settle-account/deposit/deposit-success.tpl.html', 'app/user/settle-account/deposit/deposit.tpl.html', 'app/user/settle-account/detail/detail.tpl.html', 'app/user/settle-account/list/list.tpl.html', 'app/user/settle-account/settle-account.tpl.html', 'app/user/settle-account/withdrawal/bank-card-selector.tpl.html', 'app/user/settle-account/withdrawal/withdrawal.tpl.html', 'app/user/signup/sendVeriCode.tpl.html', 'app/user/signup/signup.tpl.html', 'app/yinpiao/detail/detail.tpl.html', 'app/yinpiao/index.tpl.html', 'app/yinpiao/purchase/purchase.tpl.html', 'app/zhuanqu/detail/detail.tpl.html', 'app/zhuanqu/index.tpl.html', 'app/zhuanqu/list.tpl.html', 'app/zhuanqu/purchase/purchase.tpl.html']);

angular.module("app/common/templates/index-slide-box.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/common/templates/index-slide-box.tpl.html",
    "<div ng-controller=\"SlidesCtrl as ctrl\"><ion-slide-box auto-play=true slide-interval=5000 on-slide-changed=ctrl.onSlideChanged() active-slide=ctrl.activeSlideIndex><ion-slide ng-repeat=\"slide in ctrl.slides\"><a ng-click=ctrl.clickSlide(slide.targetUrl)><img ng-src=\"{{ slide.imageSource }}\"></a></ion-slide></ion-slide-box></div>");
}]);

angular.module("app/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/index.tpl.html",
    "<ion-tabs class=\"tabs-jym tabs-icon-only\" ng-controller=TabsCtrl ng-class=\"{'tabs-item-hide': hideTabs}\"><ion-tab ui-sref=jym.jinbaoyin icon-on=jym-icon-home icon-off=jym-icon-home><ion-nav-view name=jinbaoyin></ion-nav-view></ion-tab><ion-tab ui-sref=jym.zhuanqu icon-on=jym-icon-zhuan icon-off=jym-icon-zhuan><ion-nav-view name=zhuanqu></ion-nav-view></ion-tab><ion-tab ui-sref=jym.yinpiao icon-on=jym-icon-yin icon-off=jym-icon-yin><ion-nav-view name=yinpiao></ion-nav-view></ion-tab><ion-tab ui-sref=jym.shangpiao icon-on=jym-icon-shang icon-off=jym-icon-shang><ion-nav-view name=shangpiao></ion-nav-view></ion-tab><ion-tab ui-sref=jym.user icon-on=jym-icon-user icon-off=jym-icon-user><ion-nav-view name=user></ion-nav-view></ion-tab></ion-tabs>");
}]);

angular.module("app/jinbaoyin/detail/detail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/jinbaoyin/detail/detail.tpl.html",
    "<ion-view title=金包银><ion-content><ion-refresher pulling-icon=ion-arrow-down-c spinner=spiral on-refresh=product.doRefresh()></ion-refresher><ion-list class=order-detail><ion-item><div class=row><div class=\"col col-50\"><div class=center><p>已售出</p><p><span ng-bind=product.viewModel.sellProgress></span><samp>%</samp></p><progress-arc class=circle-progress stroke=#facb3a size=100 stroke-width=5 complete=product.viewModel.sellProgressInCircleProgress background=#eee></progress-arc></div></div><div class=col><ul><li><samp ng-bind=product.viewModel.yield></samp><span>%</span></li><li class=space></li><li>下一工作日起息</li><li>随存随取 承兑汇票抵押</li></ul></div></div></ion-item></ion-list><div class=card><ion-item class=item-divider><p class=pull-left>剩余份数：<span ng-bind=product.viewModel.remainCount></span> 份（<span ng-bind=product.viewModel.unitPrice></span>元／份）</p></ion-item><ion-item class=item-input-inset><label class=item-input-wrapper><input type=number placeholder=投资份数 ng-model=product.viewModel.investCount required min=1 max=100000000 ng-change=product.investCountChange()> <samp>份</samp></label><button class=\"button button-small button-assertive\" id=btn-narrow ng-bind=product.viewModel.statusText ng-disabled=!product.goPurchaseButtonEnable() ng-click=product.goPurchase()></button></ion-item><ion-item class=item-divider><p class=pull-right>投资金额：<span>&nbsp;</span><span ng-bind=product.viewModel.investAmount></span><span>&nbsp;</span>元</p><p class=pull-right>预计收益（30天）：<span>&nbsp;</span><span ng-bind=product.viewModel.expectedInterest></span><span>&nbsp;</span>元</p></ion-item></div><ion-list><ion-item class=item-divider><p ng-bind=product.viewModel.productTitle class=product-no></p></ion-item><ion-item><p class=pull-left>项目状态</p><p class=pull-right><span ng-bind=product.viewModel.statusText></span></p></ion-item><ion-item><p class=pull-left>项目名称</p><p class=pull-right><span ng-bind=product.viewModel.productName></span></p></ion-item><ion-item><p class=pull-left>项目期数</p><p class=pull-right><span>第&nbsp;</span><span ng-bind=product.viewModel.issueNo></span><span>&nbsp;期</span></p></ion-item><ion-item><p class=pull-left>融资总额</p><p class=pull-right><span ng-bind=product.viewModel.financingSumAmount></span> 万元</p></ion-item><ion-item><p class=pull-left>投资单位</p><p class=pull-right><span ng-bind=product.viewModel.unitPrice></span>元</p></ion-item><ion-item><p class=pull-left>起息日期</p><p class=pull-right><span ng-bind=product.viewModel.valueDateMode></span></p></ion-item></ion-list></ion-content></ion-view>>");
}]);

angular.module("app/jinbaoyin/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/jinbaoyin/index.tpl.html",
    "<ion-view title=金银猫><ion-content id=nonbackcolor><ion-refresher pulling-icon=ion-arrow-down-c spinner=spiral on-refresh=product.doRefresh()></ion-refresher><div ng-include=\"'app/common/templates/index-slide-box.tpl.html'\"></div><div class=\"jinbaoyin-index-product padding\"><h4 class=padding ng-bind=product.viewModel.title></h4><h5>承兑汇票抵押</h5><strong class=jinbaoyin-yield><em ng-bind=product.viewModel.yield></em><samp>%</samp></strong><div class=clearfix><span><em ng-bind=product.viewModel.unitPrice></em>元起</span> <span>随时存取</span> <span>灵活投资</span></div></div><div class=jym-index-purchase><button class=\"btn button-action\" ui-sref=jym.jinbaoyin-detail>立即抢购</button></div><div class=jym-safe-control><div class=row><div class=\"col col-33 block-a\"><span class=icon-safe-1></span> <em>风险趋零</em></div><div class=\"col col-33 block-b\"><span class=icon-safe-2></span> <em>刚性兑付</em></div><div class=\"col col-33 block-c\"><span class=icon-safe-3></span> <em>双重保障</em></div></div></div></ion-content></ion-view>");
}]);

angular.module("app/jinbaoyin/purchase/purchase.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/jinbaoyin/purchase/purchase.tpl.html",
    "<ion-view title=金包银认购><ion-content><ion-list class=deposit><ion-item><span class=pull-left>订单金额</span> <span class=pull-right><strong ng-bind=purchase.viewModel.amount></strong>&nbsp;&nbsp;元</span></ion-item></ion-list><ion-list><ion-item class=\"card deposit\"><ion-item class=item><span class=pull-left>账户余额&nbsp;&nbsp;</span> <span class=pull-left><strong ng-bind=purchase.viewModel.balance></strong>&nbsp;&nbsp;元</span></ion-item><label class=\"item item-input\"><span class=input-label>输入密码</span> <input type=password placeholder=请输入您的支付密码 ng-model=purchase.viewModel.password required minlength=8 maxlength=18 ng-pattern=\"/^(?![^a-zA-Z~!@#$%^&*_]+$)(?!\\D+$).{8,18}$/\"></label></ion-item><div class=narrow><button ng-click=purchase.check()><span><i class=\"icon ion-android-checkbox-outline-blank\" ng-if=!purchase.viewModel.checked></i> <i class=\"icon ion-android-checkbox-outline\" ng-if=purchase.viewModel.checked></i></span> <span>同意</span></button> <span ng-click=purchase.toggleAgreement()>《金银猫金包银投资协议》</span></div></ion-list><button class=\"btn button-yellow\" ng-disabled=!purchase.purchaseButtonEnable() ng-click=purchase.purchase()>同意协议并付款</button><br><br><h4 id=tel>如有问题，请垂询&nbsp;4008-556-333。</h4><div class=agreement ng-if=purchase.viewModel.showAgreement><div ng-bind-html=purchase.viewModel.agreement></div><div class=space></div><div class=space></div><button class=\"btn button-yellow\" ng-click=purchase.toggleAgreement()>返回</button></div></ion-content></ion-view>");
}]);

angular.module("app/shangpiao/detail/detail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/shangpiao/detail/detail.tpl.html",
    "<ion-view title=商融保盈><ion-content><ion-refresher pulling-icon=ion-arrow-down-c spinner=spiral on-refresh=product.doRefresh()></ion-refresher><ion-list class=order-detail><ion-item><div class=row><div class=\"col col-50\"><div class=center><p>已售出</p><p><span ng-bind=product.viewModel.sellProgress></span><samp>%</samp></p><progress-arc class=circle-progress stroke=#facb3a size=100 stroke-width=5 complete=product.viewModel.sellProgressInCircleProgress background=#eee></progress-arc></div></div><div class=col><ul><li><samp ng-bind=product.viewModel.yield></samp><span>%</span></li><li><span ng-bind=product.viewModel.unitPrice></span>元起投</li><li><span ng-bind=product.viewModel.period></span>天</li><li><span ng-bind=product.viewModel.financingSumAmount></span>万元</li></ul></div></div></ion-item></ion-list><div class=card><ion-item class=item-divider><p class=pull-left>剩余份数：<span ng-bind=product.viewModel.remainCount></span>份（<span ng-bind=product.viewModel.unitPrice></span>元／份）</p></ion-item><ion-item class=item-input-inset><label class=item-input-wrapper><input type=number placeholder=投资份数 ng-model=product.viewModel.investCount required min=1 max=100000000 ng-change=product.investCountChange()> <samp>份</samp></label><button class=\"button button-small button-assertive\" id=btn-narrow ng-bind=product.viewModel.statusText ng-click=product.goPurchase() ng-disabled=!product.goPurchaseButtonEnable()></button></ion-item><ion-item class=item-divider><p class=pull-left>投资金额：<span>&nbsp;</span><span ng-bind=product.viewModel.investAmount></span><span>&nbsp;</span>元</p><p class=pull-right>预计收益：<span>&nbsp;</span><span ng-bind=product.viewModel.expectedInterest></span><span>&nbsp;</span>元</p></ion-item></div><ion-list><ion-item class=item-divider><p ng-bind=product.viewModel.productNo class=product-no></p></ion-item><ion-item><p class=pull-left>项目状态</p><p class=pull-right><span ng-bind=product.viewModel.statusText></span></p></ion-item><ion-item><p class=pull-left>项目名称</p><p class=pull-right><span ng-bind=product.viewModel.productName></span></p></ion-item><ion-item><p class=pull-left>项目期数</p><p class=pull-right><span>第&nbsp;</span><span ng-bind=product.viewModel.issueNo></span><span>&nbsp;期</span></p></ion-item><ion-item><p class=pull-left>项目类型</p><p class=pull-right><span ng-bind=product.viewModel.riskManagementMode></span></p></ion-item><ion-item><p class=pull-left>风控措施</p><p class=pull-right><span ng-bind=product.viewModel.riskManagement></span></p></ion-item><ion-item><p class=pull-left>融资总额</p><p class=pull-right><span ng-bind=product.viewModel.financingSumAmount></span> 万元</p></ion-item><ion-item><p class=pull-left>投资单位</p><p class=pull-right><span ng-bind=product.viewModel.unitPrice></span>元</p></ion-item><ion-item><p class=pull-left>起息日期</p><p class=pull-right><span ng-bind=product.viewModel.valueDateText></span></p></ion-item><ion-item><p class=pull-left>结息日期</p><p class=pull-right><span ng-bind=\"product.viewModel.settleDate | time\"></span></p></ion-item><ion-item><p class=pull-left>最迟还款日</p><p class=pull-right><span ng-bind=\"product.viewModel.repaymentDeadline | time\"></span></p></ion-item></ion-list></ion-content></ion-view>");
}]);

angular.module("app/shangpiao/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/shangpiao/index.tpl.html",
    "<ion-view title=商融保盈><ion-content><ion-refresher pulling-icon=ion-arrow-down-c spinner=spiral on-refresh=products.doRefresh()></ion-refresher><ion-list><div ng-repeat=\"item in products.viewModel.items\"><ion-item ui-sref=\"jym.shangpiao-detail({ productIdentifier: item.productIdentifier })\"><div class=row><div class=\"col col-33\"><em ng-bind=item.yield></em><samp>%</samp><li class=jqm-prd-period><span ng-bind=item.period></span><samp>&nbsp;天</samp></li><li class=jqm-min-price><span ng-bind=item.unitPrice></span><samp>&nbsp;元起</samp></li><li class=jqm-prd-price><span ng-bind=item.financingSumAmount></span><samp>&nbsp;万</samp></li></div><div class=\"col col-67\"><li ng-bind=item.productName></li><div class=detail><li class=saleStatus ng-bind=item.statusText></li><li ng-bind=item.timeText></li><li ng-bind=item.riskManagement></li></div></div></div></ion-item><ion-item class=divider></ion-item></div></ion-list><ion-infinite-scroll ng-if=products.moreDataCanBeLoaded() on-infinite=products.loadMoreData() distance=1% spinner=spiral></ion-infinite-scroll></ion-content></ion-view>");
}]);

angular.module("app/shangpiao/purchase/purchase.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/shangpiao/purchase/purchase.tpl.html",
    "<ion-view title=确认购买><ion-content class=has-header><ion-list class=deposit><ion-item><span class=pull-left>订单金额</span> <span class=pull-right><strong ng-bind=purchase.viewModel.amount></strong> &nbsp;元</span></ion-item></ion-list><ion-list><ion-item class=\"card deposit\"><ion-item class=item><span class=pull-left>账户余额&nbsp;&nbsp;</span> <span class=pull-left><strong ng-bind=purchase.viewModel.balance></strong> &nbsp;&nbsp;元</span></ion-item><label class=\"item item-input\"><span class=input-label>输入密码</span> <input type=password placeholder=请输入您的支付密码 ng-model=purchase.viewModel.password required minlength=8 maxlength=18 ng-pattern=\"/^(?![^a-zA-Z~!@#$%^&*_]+$)(?!\\D+$).{8,18}$/\"></label></ion-item><div class=narrow><button ng-click=purchase.check()><span><i class=\"icon ion-android-checkbox-outline-blank\" ng-if=!purchase.viewModel.checked></i> <i class=\"icon ion-android-checkbox-outline\" ng-if=purchase.viewModel.checked></i></span> <span>同意</span></button> <span ng-click=purchase.toggleAgreement1()>《委托协议》</span> <span>及</span> <span ng-click=purchase.toggleAgreement2()>《借款协议》</span></div></ion-list><button class=\"btn button-yellow\" ng-disabled=!purchase.purchaseButtonEnable() ng-click=purchase.purchase()>同意协议并付款</button><br><br><h4 id=tel>如有问题，请垂询&nbsp;4008-556-333。</h4><div class=agreement ng-if=purchase.viewModel.showAgreement1><div ng-bind-html=purchase.viewModel.agreement1></div><div class=space></div><div class=space></div><button class=\"btn button-yellow\" ng-click=purchase.toggleAgreement1()>返回</button></div><div class=agreement ng-if=purchase.viewModel.showAgreement2><div ng-bind-html=purchase.viewModel.agreement2></div><div class=space></div><div class=space></div><button class=\"btn button-yellow\" ng-click=purchase.toggleAgreement2()>返回</button></div></ion-content></ion-view>");
}]);

angular.module("app/user/about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/about/about.tpl.html",
    "<ion-view title=关于金银猫><ion-content><ion-list><ion-item><p class=pull-left>平台网站</p><p class=pull-right>www.jinyinmao.com.cn</p></ion-item><ion-item><p class=pull-left>移动网站</p><p class=pull-right>m.jinyinmao.com.cn</p></ion-item><ion-item><p class=pull-left>客服热线</p><p class=pull-right>4008-556-333</p></ion-item><ion-item><p class=pull-left>新浪微博</p><p class=pull-right>金银猫</p></ion-item><ion-item><p class=pull-left>微信服务号</p><p class=pull-right>金银猫服务号</p></ion-item><ion-item><p class=pull-left>版本号</p><p class=pull-right ng-bind=ctrl.viewModel.version></p></ion-item></ion-list></ion-content></ion-view>");
}]);

angular.module("app/user/bank-card/add/add.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/bank-card/add/add.tpl.html",
    "<ion-view title=添加银行卡><ion-content><div ng-if=card.viewModel.hasSetPaymentPassword><ion-list><label class=\"item item-input\"><span class=input-label>手机</span> <input type=text placeholder=请输入手机号码 required minlength=11 maxlength=11 ng-model=card.viewModel.cellphone readonly=\"readonly\"></label><label class=\"item item-input\"><span class=input-label>姓名</span> <input type=text placeholder=请输入姓名 required minlength=2 maxlength=30 ng-model=card.viewModel.realName ng-readonly=\"card.viewModel.verified\"></label><label class=\"item item-input\"><span class=input-label>身份证</span> <input type=text placeholder=请输入18位身份证号 required minlength=5 maxlength=18 ng-model=card.viewModel.credentialNo ng-readonly=\"card.viewModel.verified\"></label><ion-item class=divider></ion-item><label class=\"item item-input\"><span class=input-label>卡号</span> <input type=text placeholder=请输入借记卡号 required minlength=15 maxlength=19 ng-model=card.viewModel.bankCardNo ng-pattern=\"/^\\d{15,19}$/\"></label><ion-item class=\"item-thumbnail-left bank-card item-icon-right\" ui-sref=jym.user-bank-card-add-bank-selector><img ng-src=\"{{ card.viewModel.bankName | bankImg }}\"><h2 ng-bind=card.viewModel.bankName></h2><i class=\"icon ion-chevron-right\"></i></ion-item></ion-list><div class=space></div><div class=space></div><button class=\"btn button-yellow\" ng-disabled=!card.buttonEnable() ng-click=card.verify() ng-if=card.viewModel.hasSetPaymentPassword>认证银行卡</button><p class=attention ng-if=card.viewModel.hasSetPaymentPassword>认证时会从卡内试扣1.08元，认证结束后即归还原卡。请保持身份信息与该银行卡开户信息一致，否则将认证失败。</p></div><div ng-if=!card.viewModel.hasSetPaymentPassword><div class=space></div><div class=space></div><div class=space></div><div class=space></div><button class=\"btn button-yellow\" ui-sref=jym.user-security-set-payment-password ng-if=!card.viewModel.hasSetPaymentPassword>设置支付密码</button><p class=attention>为保证您能够正常使用支付功能，请先设置支付密码。</p></div></ion-content></ion-view>");
}]);

angular.module("app/user/bank-card/add/bankSelector.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/bank-card/add/bankSelector.tpl.html",
    "<ion-view title=选择开户行><ion-content><ion-list class=bank-card><ion-item ng-repeat=\"item in ctrl.items\" class=\"item-thumbnail-left item-icon-right\" ng-click=ctrl.select(item)><img ng-src=\"{{ item | bankImg }}\"><h1 ng-bind=item></h1></ion-item></ion-list></ion-content></ion-view>");
}]);

angular.module("app/user/bank-card/add/methodSelector.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/bank-card/add/methodSelector.tpl.html",
    "<ion-view title=选择支付方式><ion-content><div class=space></div><div class=space></div><div class=space></div><button class=\"btn button-yellow\" ui-sref=jym.user-bank-card-add>签约支付</button><div class=space></div><div class=space></div><button class=\"btn button-grey\" disabled=disabled>短信支付验证(敬请期待)</button><p class=attention>认证时会从卡内试扣1.08元，认证结束后即归还原卡。请保持身份信息与该银行卡开户信息一致，否则将认证失败。</p></ion-content></ion-view>");
}]);

angular.module("app/user/bank-card/bank-card.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/bank-card/bank-card.tpl.html",
    "<ion-view title=我的银行卡><ion-content><ion-refresher pulling-icon=ion-arrow-down-c spinner=spiral on-refresh=cards.doRefresh()></ion-refresher><ion-list class=bank-card><ion-item ng-repeat=\"item in cards.viewModel.items\" class=\"item-thumbnail-left item-icon-right\" ui-sref=\"jym.user-bank-card-detail({ bankCardNo: item.bankCardNo })\"><img ng-src=\"{{ item.bankName | bankImg }}\"><h2 ng-bind=item.bankName></h2><p class=pull-right ng-bind=\"item | bankCardStatus\"></p><p>尾号 <em ng-bind=item.bankCardNo.substr(-4)></em></p><i class=\"icon ion-chevron-right\"></i></ion-item></ion-list><ion-list class=plus-card ng-if=cards.showAddButton()><ion-item ui-sref=jym.user-bank-card-add-method-selector><i class=\"icon ion-ios-plus-outline\"></i> <span>添加新银行卡</span></ion-item></ion-list></ion-content></ion-view>");
}]);

angular.module("app/user/bank-card/detail/detail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/bank-card/detail/detail.tpl.html",
    "<ion-view title=我的银行卡><ion-content><ion-refresher pulling-icon=ion-arrow-down-c spinner=spiral on-refresh=card.doRefresh()></ion-refresher><ion-list class=\"bank-card detail\"><ion-item class=item-thumbnail-left><img ng-src=\"{{ card.viewModel.bankName | bankImg }}\"><h2 ng-bind=card.viewModel.bankName></h2><span class=pull-right ng-bind=\"card.viewModel | bankCardStatus\"></span><p>尾号 <em ng-bind=card.viewModel.bankCardNo.substr(-4)></em></p></ion-item></ion-list><br><button class=\"btn button-yellow\" ng-if=!card.viewModel.verifiedByYilian ui-sref=\"jym.user-bank-card-upgrade({ bankCardNo: card.viewModel.bankCardNo })\">升级签约支付</button><div class=space></div><div class=space></div><button class=\"btn button-yellow\" ng-click=card.removeCard()>删除银行卡</button></ion-content></ion-view>");
}]);

angular.module("app/user/bank-card/upgrade/upgrade.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/bank-card/upgrade/upgrade.tpl.html",
    "<ion-view title=认证银行卡><ion-content><ion-list><label class=\"item item-input\"><span class=input-label>手机</span> <input type=text placeholder=请输入手机号码 required minlength=11 maxlength=11 ng-model=card.viewModel.cellphone readonly=\"readonly\"></label><label class=\"item item-input\"><span class=input-label>姓名</span> <input type=text placeholder=请输入姓名 required minlength=2 maxlength=30 ng-model=card.viewModel.realName ng-readonly=\"card.viewModel.verified\"></label><label class=\"item item-input\"><span class=input-label>身份证</span> <input type=text placeholder=请输入18位身份证号 required minlength=5 maxlength=18 ng-model=card.viewModel.credentialNo ng-readonly=\"card.viewModel.verified\"></label><ion-item class=divider></ion-item><label class=\"item item-input\"><span class=input-label>卡号</span> <input type=text placeholder=请输入借记卡号 required minlength=15 maxlength=19 ng-model=card.viewModel.bankCardNo readonly=readonly ng-pattern=\"/^\\d{15,19}$/\"></label><ion-item class=\"bank-card item-thumbnail-left\"><img ng-src=\"{{ card.viewModel.bankName | bankImg }}\"><h2 ng-bind=card.viewModel.bankName></h2></ion-item></ion-list><div class=space></div><div class=space></div><button class=\"btn button-yellow\" ng-disabled=!card.buttonEnable() ng-click=card.verify()>认证银行卡</button><p class=attention>认证时会从卡内试扣1.08元，认证结束后即归还原卡。请保持身份信息与该银行卡开户信息一致，否则将认证失败。</p></ion-content></ion-view>");
}]);

angular.module("app/user/bank-card/yilian-notice.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/bank-card/yilian-notice.tpl.html",
    "<ion-view title=认证受理中><ion-content><div id=yilian-notice><h2>请求已受理</h2><p>在十分钟之内您可能会接到银联（广州）来电。号码为020&nbsp;96585.</p><p>请您配合语音提示进行操作</p><p>如您没有接到此来电，则会绑定失败。</p><div class=space></div><p>认证流程可能会需要长达十分钟的时间，请您耐心等待。</p><i class=\"icon ion-ios-information\"></i> <span>成功之后就可以充值啦！</span><div class=space></div></div><div class=space></div><button class=\"btn button-yellow\" ng-click=\"ctrl.go('jym.user')\">返回个人中心</button></ion-content></ion-view>");
}]);

angular.module("app/user/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/index.tpl.html",
    "<ion-view title=我的金银猫><ion-content id=user-index><ion-refresher pulling-icon=ion-arrow-down-c spinner=spiral on-refresh=user.doRefresh()></ion-refresher><ion-list><ion-item><p class=pull-left>手机号</p><p class=pull-right ng-bind=user.viewModel.cellphone></p></ion-item><ion-item><p class=pull-left>真实姓名</p><p class=pull-right ng-bind=user.viewModel.realName></p></ion-item><ion-item><p class=pull-left>身份证</p><p class=pull-right ng-bind=user.viewModel.credentialNo></p></ion-item><ion-item class=divider></ion-item><ion-item class=item-icon-right ui-sref=jym.user-settle-account><p>资金账户</p><i class=\"icon ion-chevron-right\"></i></ion-item><ion-item class=item-icon-right ui-sref=jym.user-jinbaoyin><p>金包银账户</p><i class=\"icon ion-chevron-right\"></i></ion-item><ion-item class=item-icon-right ui-sref=jym.user-orders><p>我的订单</p><i class=\"icon ion-chevron-right\"></i></ion-item><ion-item class=item-icon-right ui-sref=jym.user-bank-card><p>我的银行卡</p><i class=\"icon ion-chevron-right\"></i></ion-item><ion-item class=divider></ion-item><ion-item class=item-icon-right ui-sref=jym.user-security><p>密码设置</p><i class=\"icon ion-chevron-right\"></i></ion-item><ion-item class=divider></ion-item><ion-item class=item-icon-right ui-sref=jym.user-about><p>关于金银猫</p><i class=\"icon ion-chevron-right\"></i></ion-item></ion-list><br><button class=\"btn button-grey\" ng-click=user.loginOut()>登出</button></ion-content></ion-view>");
}]);

angular.module("app/user/jinbaoyin/detail/detail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/jinbaoyin/detail/detail.tpl.html",
    "<ion-view title=金包银流水记录><ion-content><ion-refresher pulling-icon=ion-arrow-down-c spinner=spiral on-refresh=transaction.doRefresh()></ion-refresher><ion-list class=reorder><ion-item><p class=pull-left>交易时间</p><p class=pull-right ng-bind=\"transaction.viewModel.transactionTime | longTime\"></p></ion-item><ion-item ng-if=\"transaction.viewModel.resultCode === 0\"><p class=pull-left>预计完成日期</p><p class=pull-right ng-bind=\"transaction.viewModel.predeterminedResultDate | time\"></p></ion-item><ion-item ng-if=\"transaction.viewModel.resultCode === 1\"><p class=pull-left>完成时间</p><p class=pull-right ng-bind=\"transaction.viewModel.resultTime | longTime\"></p></ion-item><ion-item><p class=pull-left>交易类型</p><p class=pull-right ng-bind=\"transaction.viewModel.tradeCode | tradeCodeForJBY\"></p></ion-item><ion-item><p class=pull-left>金额（元）</p><p class=pull-right><span class=plus ng-if=\"transaction.viewModel.trade === 0\">+</span> <span class=minus ng-if=\"transaction.viewModel.trade === 1\">-</span> <span ng-bind=transaction.viewModel.amount></span></p></ion-item><ion-item><p class=pull-left>备注说明</p><p class=pull-right ng-bind=transaction.viewModel.transDesc></p></ion-item><ion-item class=divider></ion-item><ion-item class=item-icon-right ng-click=transaction.toggleAgreement()><p>协议</p><i class=\"icon ion-chevron-right\"></i></ion-item><ion-item class=divider></ion-item><ion-item><p class=pull-left>状态</p><p class=pull-right ng-bind=\"transaction.viewModel.resultCode | resultText\" ng-style=transaction.viewModel.resultStyle></p></ion-item></ion-list><div ng-if=!transaction.canBack()><div class=space></div><div class=space></div><button class=\"btn button-yellow\" ng-click=\"transaction.go('jym.user')\">返回个人中心</button></div><div class=agreement ng-if=transaction.viewModel.showAgreement><div ng-bind-html=transaction.viewModel.agreement></div><div class=space></div><div class=space></div><button class=\"btn button-yellow\" ng-click=transaction.toggleAgreement()>返回</button><div class=space></div><div class=space></div></div></ion-content></ion-view>");
}]);

angular.module("app/user/jinbaoyin/jinbaoyin.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/jinbaoyin/jinbaoyin.tpl.html",
    "<ion-view title=金包银><ion-content><ion-refresher pulling-icon=ion-arrow-down-c spinner=spiral on-refresh=ctrl.doRefresh()></ion-refresher><ion-list class=jbyaccount ui-sref=jym.user-jinbaoyin-list><ion-item><p>昨日收益（元）</p></ion-item><ion-item class=item-icon-right><h1 ng-bind=ctrl.viewModel.jBYLastInterest></h1><i class=\"icon ion-chevron-right\"></i></ion-item><ion-item><p class=pull-right>累计收益（元）：<span ng-bind=ctrl.viewModel.jBYTotalInterest class=white-span></span></p></ion-item></ion-list><ion-list><ion-item><p class=pull-left>在投资金（元）</p><p class=pull-right ng-bind=ctrl.viewModel.jBYTotalAmount>42355667.12</p></ion-item><ion-item><p class=pull-left>可取现资金（元）</p><p class=pull-right ng-bind=ctrl.viewModel.jBYWithdrawalableAmount>5667.12</p></ion-item><ion-item><p class=pull-left>今日利率</p><p class=pull-right><em ng-bind=ctrl.viewModel.jBYYield></em><span>&nbsp;&nbsp;%</span></p></ion-item></ion-list><br><button class=\"btn button-grey\" ui-sref=jym.user-jinbaoyin-withdrawal>提现</button><div class=space></div><button class=\"btn button-yellow\" ui-sref=jym.jinbaoyin>认购</button></ion-content></ion-view>");
}]);

angular.module("app/user/jinbaoyin/list/list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/jinbaoyin/list/list.tpl.html",
    "<ion-view title=金包银明细><ion-content><ion-refresher pulling-icon=ion-arrow-down-c spinner=spiral on-refresh=account.doRefresh()></ion-refresher><ion-list class=jinbaoyin-list><div ng-repeat=\"item in account.viewModel.items\"><ion-item class=item-icon-right ui-sref=\"jym.user-jinbaoyin-detail({\n" +
    "        transactionIdentifier: item.transactionIdentifier})\"><p><span class=pull-left ng-bind=\"item.tradeCode | tradeCodeForJBY\"></span> <span class=pull-right><span class=plus ng-if=\"item.trade === 0\">+</span> <span class=minus ng-if=\"item.trade === 1\">-</span> <span ng-bind=item.amount></span></span></p><p><span class=pull-left ng-bind=\"item.resultCode | resultText\"></span> <span class=pull-right><span ng-bind=\"item.transactionTime | time\"></span></span></p><i class=\"icon ion-chevron-right icon-accessory\"></i></ion-item><ion-item class=divider></ion-item></div></ion-list><ion-infinite-scroll ng-if=account.moreDataCanBeLoaded() on-infinite=account.loadMoreData() distance=1% spinner=spiral></ion-infinite-scroll></ion-content></ion-view>");
}]);

angular.module("app/user/jinbaoyin/withdrawal/withdrawal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/jinbaoyin/withdrawal/withdrawal.tpl.html",
    "<ion-view title=金包银赎回><ion-content><ion-list class=deposit><ion-item><span class=pull-left>可取资金（元）</span> <span class=pull-right><strong ng-bind=account.viewModel.jBYWithdrawalableAmount></strong></span></ion-item><ion-item class=\"card deposit\"><ion-item class=item><span class=pull-left>今日可申请额度（元）：&nbsp;</span> <span class=pull-left ng-bind=account.viewModel.todayJBYWithdrawalableAmount>元</span></ion-item><ion-item class=divider></ion-item><label class=\"item item-input\"><span class=input-label>取款金额</span> <input type=number placeholder=请输入取款金额（元） required min=0.01 max=1000000 ng-model=account.viewModel.amount></label><label class=\"item item-input\"><span class=input-label>输入密码</span> <input type=password placeholder=请输入您的支付密码 ng-model=account.viewModel.password required minlength=8 maxlength=18 ng-pattern=\"/^(?![^a-zA-Z~!@#$%^&*_]+$)(?!\\D+$).{8,18}$/\"></label></ion-item><div class=narrow><button ng-click=account.check()><span><i class=\"icon ion-android-checkbox-outline-blank\" ng-if=!account.viewModel.checked></i> <i class=\"icon ion-android-checkbox-outline\" ng-if=account.viewModel.checked></i></span> <span>同意</span></button> <span ng-click=account.toggleAgreement()>《金包银自动交易授权委托书》</span></div></ion-list><button class=\"btn button-yellow\" ng-disabled=!account.withdrawButtonEnable() ng-click=account.withdraw()>同意协议并取现</button><br><br><a ng-href=http://source.jinyinmao.com.cn/deal/certificate/29_1.html>提现规则</a><h4 id=tel>如有问题，请垂询&nbsp;4008-556-333。</h4><div class=agreement ng-if=account.viewModel.showAgreement><div ng-bind-html=account.viewModel.agreement></div><div class=space></div><div class=space></div><button class=\"btn button-yellow\" ng-click=account.toggleAgreement()>返回</button></div></ion-content></ion-view>");
}]);

angular.module("app/user/login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/login/login.tpl.html",
    "<ion-view title=登录><ion-content><ion-list id=login-card><ion-item class=divider></ion-item><label class=\"item item-input\"><span class=input-label>账号</span> <input type=text placeholder=手机号码 ng-model=user.viewModel.cellphone required minlength=11 maxlength=11 ng-pattern=\"/^(13|14|15|17|18)\\d{9}$/\" ng-trim=true></label><label class=\"item item-input\"><span class=input-label>密码</span> <input type=password placeholder=6-18位数字或字母 ng-model=user.viewModel.password required minlength=5 maxlength=18 ng-pattern=\"/^[a-zA-Z\\d~!@#$%^&*_]{6,18}$/\"></label></ion-list><div class=space></div><p id=forget-password class=pull-right ui-sref=jym.user-security-password-send-veri-code><i class=\"icon ion-ios-help-outline\"></i>&nbsp;忘记密码</p><div class=space></div><div class=space></div><button class=\"btn button-yellow\" ng-click=user.login() ng-disabled=!user.loginButtonEnable()>登 录</button><div class=space></div><div class=space></div><button class=\"btn button-yellow\" ui-sref=jym.user-signup-send-veri-code>创建金银猫账户</button></ion-content></ion-view>");
}]);

angular.module("app/user/order/detail/detail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/order/detail/detail.tpl.html",
    "<ion-view title=订单详情><ion-content><ion-list class=order-list><ion-item class=item-divider><span>订单号：</span> <samp ng-bind=order.viewModel.orderNo></samp></ion-item><ion-item><p><span class=pull-left>订单金额</span> <span class=pull-right ng-bind=order.viewModel.principal><samp>&nbsp;元</samp></span></p><p><span class=pull-left>预计收益：</span> <span ng-bind=order.viewModel.interest></span> <span ng-if=\"order.viewModel.extraInterest > 0\">&nbsp;&nbsp;&nbsp;+</span> <span ng-if=\"order.viewModel.extraInterest > 0\" ng-bind=order.viewModel.extraInterest></span> <span class=pull-right ng-bind=order.viewModel.statusText></span></p></ion-item><ion-item class=divider></ion-item></ion-list><ion-list class=orderDetail><ion-item><span class=pull-left>项目名称</span> <span class=pull-right ng-bind=order.viewModel.productSnapshot.productTitle></span></ion-item><ion-item><span class=pull-left>项目期数</span> <span class=pull-right ng-bind=order.viewModel.productSnapshot.issueNo></span></ion-item><ion-item><span class=pull-left>投资周期</span> <span class=pull-right ng-bind=order.viewModel.productSnapshot.period></span></ion-item><ion-item><span class=pull-left>起息日期</span> <span class=pull-right ng-bind=\"order.viewModel.valueDate | time\"></span></ion-item><ion-item><span class=pull-left>结息日期</span> <span class=pull-right ng-bind=\"order.viewModel.settleDate | time\"></span></ion-item><ion-item><span class=pull-left>最迟还款日</span> <span class=pull-right ng-bind=\"order.viewModel.productSnapshot.repaymentDeadline | time\"></span></ion-item><ion-item class=divider></ion-item><ion-item class=item-icon-right ng-click=order.toggleAgreement1()><p>委托协议</p><i class=\"icon ion-chevron-right\"></i></ion-item><ion-item class=item-icon-right ng-click=order.toggleAgreement2()><p>借款协议</p><i class=\"icon ion-chevron-right\"></i></ion-item></ion-list><div ng-if=!order.canBack()><div class=space></div><div class=space></div><button class=\"btn button-yellow\" ng-click=\"order.go('jym.user')\">返回个人中心</button></div><div class=agreement ng-if=order.viewModel.showAgreement1><div ng-bind-html=order.viewModel.agreement1></div><div class=space></div><div class=space></div><button class=\"btn button-yellow\" ng-click=order.toggleAgreement1()>返回</button></div><div class=agreement ng-if=order.viewModel.showAgreement2><div ng-bind-html=order.viewModel.agreement2></div><div class=space></div><div class=space></div><button class=\"btn button-yellow\" ng-click=order.toggleAgreement2()>返回</button><div class=space></div><div class=space></div></div></ion-content></ion-view>");
}]);

angular.module("app/user/order/order.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/order/order.tpl.html",
    "<ion-view title=订单列表><ion-content><ion-refresher pulling-icon=ion-arrow-down-c spinner=spiral on-refresh=orders.doRefresh()></ion-refresher><ion-list class=order-list><div ng-repeat=\"item in orders.viewModel.items\" ui-sref=\"jym.user-orders-detail({ orderIdentifier: item.orderIdentifier })\"><ion-item class=\"item-divider item-icon-right\"><span>订单号：</span> <samp ng-bind=item.orderNo></samp> <i class=\"icon ion-chevron-right\"></i></ion-item><ion-item><p><span class=pull-left>订单金额</span> <span class=pull-right ng-bind=\"item.orderTime | longTime\"></span></p><p><strong class=pull-left ng-bind=item.principal></strong> <samp>&nbsp;元</samp></p><p><span class=pull-left>预计收益：</span> <span ng-bind=item.interest></span> <span ng-if=\"item.extraInterest > 0\">&nbsp;&nbsp;&nbsp;+</span> <span ng-if=\"item.extraInterest > 0\" ng-bind=item.extraInterest></span> <span class=pull-right ng-bind=item.statusText></span></p></ion-item><ion-item class=divider></ion-item></div></ion-list><ion-infinite-scroll ng-if=orders.moreDataCanBeLoaded() on-infinite=orders.loadMoreData() distance=1% spinner=spiral></ion-infinite-scroll></ion-content></ion-view>");
}]);

angular.module("app/user/security/password/password.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/security/password/password.tpl.html",
    "<ion-view title=设置新登录密码><ion-content><ion-list><ion-item class=divider></ion-item><label class=\"item item-input\"><span class=input-label>输入新密码</span> <input type=password placeholder=6-18位字符、数字或字母 ng-model=ctrl.viewModel.password required minlength=6 maxlength=18 ng-pattern=\"/^[a-zA-Z\\d~!@#$%^&*_]{6,18}$/\"></label><label class=\"item item-input\"><span class=input-label>确认新密码</span> <input type=password placeholder=再次输入新密码 ng-model=ctrl.viewModel.confirmPassword required minlength=6 maxlength=18 ng-pattern=\"/^[a-zA-Z\\d~!@#$%^&*_]{6,18}$/\"></label></ion-list><div class=space></div><div class=space></div><button class=\"btn button-yellow\" ng-click=ctrl.resetPassword() ng-disabled=!ctrl.enableButton()>修 改</button></ion-content></ion-view>");
}]);

angular.module("app/user/security/password/sendVeriCode.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/security/password/sendVeriCode.tpl.html",
    "<ion-view title=设置新登录密码><ion-content><ion-list><ion-item class=divider></ion-item><ion-item class=\"item item-input veri-code-refresh\"><input type=text placeholder=请输入手机号码 ng-model=ctrl.viewModel.cellphone required minlength=11 maxlength=11 ng-pattern=\"/^(13|14|15|17|18)\\d{9}$/\" ng-trim=true> <button class=\"button button-small\" ng-click=ctrl.sendVeriCode() ng-if=ctrl.showVeriCodeButton() ng-disabled=!ctrl.sendVeriCodeButtonEnable()>&nbsp;&nbsp;点击发送验证码&nbsp;&nbsp;</button> <button class=\"button button-small\" ng-click=ctrl.sendVeriCode() ng-if=!ctrl.showVeriCodeButton() ng-disabled=!ctrl.sendVeriCodeButtonEnable()>&nbsp;&nbsp;重新发送（<span ng-bind=ctrl.viewModel.remainSeconds></span>）&nbsp;&nbsp;</button></ion-item><ion-item class=\"item item-input veri-code-refresh\"><input type=text placeholder=请输入验证码 ng-model=ctrl.viewModel.veriCode required minlength=6 maxlength=6 ng-trim=true></ion-item><div class=space></div><div class=space></div></ion-list><button class=\"btn button-yellow\" ng-click=ctrl.verifyVeriCode() ng-disabled=!ctrl.verifyVeriCodeButtonEnable()>校验验证码</button></ion-content></ion-view>");
}]);

angular.module("app/user/security/paymentPassword/paymentPassword.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/security/paymentPassword/paymentPassword.tpl.html",
    "<ion-view title=设置新支付密码><ion-content><ion-list class=reset-payment-passsword><ion-item class=divider></ion-item><label class=\"item item-input\" ng-if=ctrl.viewModel.needUserInfo><span class=input-label>输入您的姓名</span> <input type=text placeholder=姓名 ng-model=ctrl.viewModel.realName required minlength=1 maxlength=8 ng-trim=true></label><label class=\"item item-input\" ng-if=ctrl.viewModel.needUserInfo><span class=input-label>确认您的证件号</span> <input type=text placeholder=证件号 ng-model=ctrl.viewModel.credentialNo required minlength=5 maxlength=30 ng-trim=true></label><label class=\"item item-input\"><span class=input-label>输入新支付密码</span> <input type=password placeholder=8-18位字符，必须包含大写字母 ng-model=ctrl.viewModel.password required minlength=8 maxlength=18 ng-pattern=\"/^(?![^a-zA-Z~!@#$%^&*_]+$)(?!\\D+$).{8,18}$/\"></label><label class=\"item item-input\"><span class=input-label>确认新支付密码</span> <input type=password placeholder=再次输入新支付密码 ng-model=ctrl.viewModel.confirmPassword required minlength=8 maxlength=18 ng-pattern=\"/^(?![^a-zA-Z~!@#$%^&*_]+$)(?!\\D+$).{8,18}$/\"></label></ion-list><div class=space></div><div class=space></div><button class=\"btn button-yellow\" ng-click=ctrl.resetPassword() ng-disabled=!ctrl.enableButton()>修 改</button></ion-content></ion-view>");
}]);

angular.module("app/user/security/paymentPassword/sendVeriCode.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/security/paymentPassword/sendVeriCode.tpl.html",
    "<ion-view title=设置新支付密码><ion-content><ion-list><ion-item class=divider></ion-item><ion-item class=\"item item-input veri-code-refresh\"><input type=text placeholder=请输入手机号码 ng-model=ctrl.viewModel.cellphone required minlength=11 maxlength=11 ng-pattern=\"/^(13|14|15|17|18)\\d{9}$/\" ng-trim=true readonly=readonly> <button class=\"button button-small\" ng-click=ctrl.sendVeriCode() ng-if=ctrl.showVeriCodeButton() ng-disabled=!ctrl.sendVeriCodeButtonEnable()>&nbsp;&nbsp;点击发送验证码&nbsp;&nbsp;</button> <button class=\"button button-small\" ng-click=ctrl.sendVeriCode() ng-if=!ctrl.showVeriCodeButton() ng-disabled=!ctrl.sendVeriCodeButtonEnable()>&nbsp;&nbsp;重新发送（<span ng-bind=ctrl.viewModel.remainSeconds></span>）&nbsp;&nbsp;</button></ion-item><ion-item class=\"item item-input veri-code-refresh\"><input type=text placeholder=请输入验证码 ng-model=ctrl.viewModel.veriCode required minlength=6 maxlength=6 ng-trim=true></ion-item><div class=space></div><div class=space></div></ion-list><button class=\"btn button-yellow\" ng-click=ctrl.verifyVeriCode() ng-disabled=!ctrl.verifyVeriCodeButtonEnable()>校验验证码</button></ion-content></ion-view>");
}]);

angular.module("app/user/security/paymentPassword/setPaymentPassword.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/security/paymentPassword/setPaymentPassword.tpl.html",
    "<ion-view title=设置支付密码><ion-content><ion-list><ion-item class=divider></ion-item><label class=\"item item-input\"><span class=input-label>输入支付密码</span> <input type=password placeholder=8-18位字符，必须包含大写字母 ng-model=ctrl.viewModel.password required minlength=8 maxlength=18 ng-pattern=\"/^(?![^a-zA-Z~!@#$%^&*_]+$)(?!\\D+$).{8,18}$/\"></label><label class=\"item item-input\"><span class=input-label>确认支付密码</span> <input type=password placeholder=再次输入支付密码 ng-model=ctrl.viewModel.confirmPassword required minlength=8 maxlength=18 ng-pattern=\"/^(?![^a-zA-Z~!@#$%^&*_]+$)(?!\\D+$).{8,18}$/\"></label></ion-list><div class=space></div><div class=space></div><button class=\"btn button-yellow\" ng-click=ctrl.setPassword() ng-disabled=!ctrl.enableButton()>确 认</button></ion-content></ion-view>");
}]);

angular.module("app/user/security/security.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/security/security.tpl.html",
    "<ion-view title=安全设置><ion-content><ion-list><ion-item class=divider></ion-item><ion-item class=item-icon-right ui-sref=jym.user-security-password-send-veri-code><p>重置登录密码</p><i class=\"icon ion-chevron-right\"></i></ion-item><ion-item class=item-icon-right ng-if=ctrl.viewModel.hasSetPaymentPassword ui-sref=jym.user-security-payment-password-send-veri-code><p>重置支付密码</p><i class=\"icon ion-chevron-right\"></i></ion-item><ion-item class=item-icon-right ng-if=!ctrl.viewModel.hasSetPaymentPassword ui-sref=jym.user-security-set-payment-password><p>设置支付密码</p><i class=\"icon ion-chevron-right\"></i></ion-item></ion-list></ion-content></ion-view>");
}]);

angular.module("app/user/settle-account/deposit/bank-card-selector.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/settle-account/deposit/bank-card-selector.tpl.html",
    "<ion-view title=选择银行卡><ion-content><ion-refresher pulling-icon=ion-arrow-down-c spinner=spiral on-refresh=account.doRefresh()></ion-refresher><ion-list class=bank-card><ion-item ng-repeat=\"item in account.viewModel.items\" class=\"item-thumbnail-left item-icon-right\" ng-click=account.select(item.bankCardNo) ng-class=\"{\n" +
    "      'border-bottom-yellow': account.selected(item.bankCardNo) }\"><img ng-src=\"{{ item.bankName | bankImg }}\"><h2 ng-bind=item.bankName></h2><p>尾号 <em ng-bind=item.bankCardNo.substr(-4)></em><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><samp ng-bind=\"item | bankCardStatus\"></samp></p><i class=\"icon ion-checkmark-round\" ng-hide=!account.selected(item.bankCardNo)></i></ion-item></ion-list></ion-content></ion-view>");
}]);

angular.module("app/user/settle-account/deposit/deposit-success.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/settle-account/deposit/deposit-success.tpl.html",
    "<ion-view title=充值><ion-content><div id=yilian-notice><h2>正在付款中！</h2><p>我们会以短信方式通知您充值结果！</p></div><div class=space></div><button class=\"btn button-yellow\" ng-click=\"ctrl.go('jym.user')\">返回个人中心</button></ion-content></ion-view>");
}]);

angular.module("app/user/settle-account/deposit/deposit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/settle-account/deposit/deposit.tpl.html",
    "<ion-view title=充值><ion-content><ion-list class=bank-card><ion-item class=\"item-thumbnail-left item-icon-right\" ng-if=!account.viewModel.noCard ui-sref=jym.user-settle-account-deposit-bank-card-selector><img ng-src=\"{{ account.viewModel.bankName | bankImg }}\"><h2 ng-bind=account.viewModel.bankName></h2><p>尾号 <em ng-bind=account.viewModel.bankCardNo.substr(-4)></em></p><i class=\"icon ion-chevron-right\"></i></ion-item><ion-item class=plus-card ng-if=account.viewModel.noCard ui-sref=jym.user-bank-card-add><i class=\"icon ion-ios-plus-outline\"></i> <span>添加新银行卡</span></ion-item><ion-item class=divider></ion-item><ion-item class=item-input><span class=input-label>金额</span> <input type=number placeholder=请填写充值金额（元） required min=1 max=1000000 ng-model=account.viewModel.amount></ion-item><ion-item class=item-input><span class=input-label>密码</span> <input type=password placeholder=请填写支付密码 required minlength=8 maxlength=18 ng-model=account.viewModel.password></ion-item></ion-list><div class=space></div><div class=space></div><button class=\"btn button-yellow\" ng-disabled=!account.buttonEnable() ng-click=account.deposit()>付款</button></ion-content></ion-view>");
}]);

angular.module("app/user/settle-account/detail/detail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/settle-account/detail/detail.tpl.html",
    "<ion-view title=账户流水记录><ion-content><ion-refresher pulling-icon=ion-arrow-down-c spinner=spiral on-refresh=transaction.doRefresh()></ion-refresher><ion-list class=reorder><ion-item><p class=pull-left>交易时间</p><p class=pull-right ng-bind=\"transaction.viewModel.transactionTime | longTime\"></p></ion-item><ion-item ng-if=\"transaction.viewModel.resultCode === 1\"><p class=pull-left>完成时间</p><p class=pull-right ng-bind=\"transaction.viewModel.resultTime | longTime\"></p></ion-item><ion-item><p class=pull-left>交易类型</p><p class=pull-right ng-bind=\"transaction.viewModel.tradeCode | tradeCodeForSettle\"></p></ion-item><ion-item ng-if=transaction.viewModel.showBankCard><p class=pull-left>银行卡号</p><p class=pull-right ng-bind=transaction.viewModel.bankCardNo></p></ion-item><ion-item><p class=pull-left>金额（元）</p><p class=pull-right><span class=plus ng-if=\"transaction.viewModel.trade === 0\">+</span> <span class=minus ng-if=\"transaction.viewModel.trade === 1\">-</span> <span ng-bind=transaction.viewModel.amount></span></p></ion-item><ion-item><p class=pull-left>备注说明</p><p class=pull-right ng-bind=transaction.viewModel.transDesc></p></ion-item><ion-item class=divider></ion-item><ion-item><p class=pull-left>状态</p><p class=pull-right ng-bind=\"transaction.viewModel.resultCode | resultText\" ng-style=transaction.viewModel.resultStyle></p></ion-item></ion-list><div ng-if=!transaction.canBack()><div class=space></div><div class=space></div><button class=\"btn button-yellow\" ng-click=\"transaction.go('jym.user')\">返回个人中心</button><div class=space></div><div class=space></div></div></ion-content></ion-view>");
}]);

angular.module("app/user/settle-account/list/list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/settle-account/list/list.tpl.html",
    "<ion-view title=资金账户明细><ion-content><ion-refresher pulling-icon=ion-arrow-down-c spinner=spiral on-refresh=account.doRefresh()></ion-refresher><ion-list class=settle-account-list><div ng-repeat=\"item in account.viewModel.items\"><ion-item class=item-icon-right ui-sref=\"jym.user-settle-account-detail({\n" +
    "        transactionIdentifier: item.transactionIdentifier})\"><p><span class=pull-left ng-bind=\"item.tradeCode | tradeCodeForSettle\"></span> <span class=pull-right><span class=plus ng-if=\"item.trade === 0\">+</span> <span class=minus ng-if=\"item.trade === 1\">-</span> <span ng-bind=item.amount></span></span></p><p><span class=pull-left ng-bind=\"item.resultCode | resultText\"></span> <span class=pull-right><span ng-bind=\"item.transactionTime | time\"></span></span></p><i class=\"icon ion-chevron-right icon-accessory\"></i></ion-item><ion-item class=divider></ion-item></div></ion-list><ion-infinite-scroll ng-if=account.moreDataCanBeLoaded() on-infinite=account.loadMoreData() distance=1% spinner=spiral></ion-infinite-scroll></ion-content></ion-view>");
}]);

angular.module("app/user/settle-account/settle-account.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/settle-account/settle-account.tpl.html",
    "<ion-view title=资金账户><ion-content class=settle-account><ion-refresher pulling-icon=ion-arrow-down-c spinner=spiral on-refresh=user.doRefresh()></ion-refresher><ion-list><ion-item class=item-icon-right ui-sref=jym.user-settle-account-list><p><strong ng-bind=user.viewModel.balance></strong> 元</p><i class=\"icon ion-chevron-right\"></i></ion-item><ion-item><p>投资中金额（元）：<em ng-bind=user.viewModel.investingPrincipal></em></p></ion-item><ion-item class=divider></ion-item><ion-item class=item-icon-right ui-sref=jym.user-settle-account-deposit><h2>充值</h2><i class=\"icon ion-chevron-right\"></i></ion-item><ion-item class=item-icon-right ui-sref=jym.user-settle-account-withdrawal><h2>提现</h2><i class=\"icon ion-chevron-right\"></i></ion-item></ion-list></ion-content></ion-view>");
}]);

angular.module("app/user/settle-account/withdrawal/bank-card-selector.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/settle-account/withdrawal/bank-card-selector.tpl.html",
    "<ion-view title=选择银行卡><ion-content><ion-refresher pulling-icon=ion-arrow-down-c spinner=spiral on-refresh=account.doRefresh()></ion-refresher><ion-list class=bank-card-select><ion-item ng-repeat=\"item in account.viewModel.items\" class=\"item-thumbnail-left item-icon-right\" ng-click=account.select(item.bankCardNo) ng-class=\"{\n" +
    "      'border-bottom-yellow': account.selected(item.bankCardNo) }\"><img ng-src=\"{{ item.bankName | bankImg }}\"><h2 ng-bind=item.bankName></h2><p>尾号 <em ng-bind=item.bankCardNo.substr(-4)></em><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><samp ng-bind=\"item | bankCardStatus\"></samp></p><p>取现额度（元）<span ng-bind=item.withdrawAmount></span></p><i class=\"icon ion-checkmark-round\" ng-hide=!account.selected(item.bankCardNo)></i></ion-item></ion-list></ion-content></ion-view>");
}]);

angular.module("app/user/settle-account/withdrawal/withdrawal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/settle-account/withdrawal/withdrawal.tpl.html",
    "<ion-view title=提现><ion-content><div ng-if=!account.viewModel.noCard><ion-list class=bank-card><ion-item class=\"item-thumbnail-left item-icon-right\" ui-sref=jym.user-settle-account-withdrawal-bank-card-selector><img ng-src=\"{{ account.viewModel.bankName | bankImg }}\"><h2><span ng-bind=account.viewModel.bankName></span> <span>尾号 <em ng-bind=account.viewModel.bankCardNo.substr(-4)></em></span></h2><p>限取额度（元）<span ng-bind=account.viewModel.withdrawAmount></span></p><i class=\"icon ion-chevron-right\"></i></ion-item><ion-item class=divider></ion-item><ion-item><span>可取金额（元）：<em ng-bind=account.viewModel.withdrawalableAmount></em></span></ion-item><ion-item class=divider></ion-item><ion-item class=\"item-input max-withdrawal\"><span class=input-label>取款金额</span> <input type=number placeholder=请输入取款金额（元） required min=0.01 max=\"{{ account.viewModel.withdrawalableAmount }}\" ng-model=account.viewModel.amount></ion-item><ion-item class=item-input><span class=input-label>输入密码</span> <input type=password placeholder=请输入您的支付密码 ng-model=account.viewModel.password required minlength=8 maxlength=18 ng-pattern=\"/^(?![^a-zA-Z~!@#$%^&*_]+$)(?!\\D+$).{8,18}$/\"></ion-item></ion-list><div class=space></div><div class=space></div><button class=\"btn button-yellow\" ng-disabled=!account.buttonEnable() ng-click=account.withdraw()>提现</button></div><div ng-if=account.viewModel.noCard><div id=yilian-notice><h3>为了您的资金安全，您必须先签约绑定银行卡，才能进行取现操作！</h3></div><div class=space></div><button class=\"btn button-yellow\" ui-sref=jym.user-bank-card-add>绑定银行卡</button></div></ion-content></ion-view>");
}]);

angular.module("app/user/signup/sendVeriCode.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/signup/sendVeriCode.tpl.html",
    "<ion-view title=创建金银猫账户><ion-content><ion-list><ion-item class=divider></ion-item><ion-item class=\"item item-input veri-code-refresh\"><input type=text placeholder=请输入手机号码 ng-model=ctrl.viewModel.cellphone required minlength=11 maxlength=11 ng-pattern=\"/^(13|14|15|17|18)\\d{9}$/\" ng-trim=true> <button class=\"button button-small\" ng-click=ctrl.sendVeriCode() ng-if=ctrl.showVeriCodeButton() ng-disabled=!ctrl.sendVeriCodeButtonEnable()>&nbsp;&nbsp;点击发送验证码&nbsp;&nbsp;</button> <button class=\"button button-small\" ng-click=ctrl.sendVeriCode() ng-if=!ctrl.showVeriCodeButton() ng-disabled=!ctrl.sendVeriCodeButtonEnable()>&nbsp;&nbsp;重新发送（<span ng-bind=ctrl.viewModel.remainSeconds></span>）&nbsp;&nbsp;</button></ion-item><ion-item class=\"item item-input veri-code-refresh\"><input type=text placeholder=请输入验证码 ng-model=ctrl.viewModel.veriCode required minlength=6 maxlength=6 ng-trim=true></ion-item><div class=space></div><div class=space></div></ion-list><button class=\"btn button-yellow\" ng-click=ctrl.verifyVeriCode() ng-disabled=!ctrl.verifyVeriCodeButtonEnable()>校验验证码</button></ion-content></ion-view>");
}]);

angular.module("app/user/signup/signup.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/user/signup/signup.tpl.html",
    "<ion-view title=设置登录密码><ion-content><ion-list><ion-item class=divider></ion-item><label class=\"item item-input\"><span class=input-label>输入登录密码</span> <input type=password placeholder=6-18位字符、数字或字母 ng-model=ctrl.viewModel.password required minlength=6 maxlength=18 ng-pattern=\"/^[a-zA-Z\\d~!@#$%^&*_]{6,18}$/\"></label><label class=\"item item-input\"><span class=input-label>确认登录密码</span> <input type=password placeholder=再次输入登录密码 ng-model=ctrl.viewModel.confirmPassword required minlength=6 maxlength=18 ng-pattern=\"/^[a-zA-Z\\d~!@#$%^&*_]{6,18}$/\"></label></ion-list><div class=space></div><div class=space></div><div class=narrow><button class=accept ng-click=ctrl.check()><span><i class=\"icon ion-android-checkbox-outline-blank\" ng-if=!ctrl.viewModel.checked></i> <i class=\"icon ion-android-checkbox-outline\" ng-if=ctrl.viewModel.checked></i></span> <span>同意</span></button> <span ng-click=ctrl.toggleAgreement1()>《金银猫会员注册协议》</span> <span ng-click=ctrl.toggleAgreement2()>《隐私政策》</span></div><button class=\"btn button-yellow\" ng-click=ctrl.resetPassword() ng-disabled=!ctrl.enableButton()>确 认</button><div class=agreement ng-if=ctrl.viewModel.showAgreement1><div align=center><strong>金银猫平台个人会员服务协议</strong></div><br><span>www.jinyinmao.com.cn（以下简称“网站”）是由上海金银猫金融服务有限公司（以下简称“金银猫”）提供综合金融服务的网络平台。金银猫根据本协议约定为金银猫会员提供服务，金银猫已将本协议中免除、限制金银猫责任或限制会员权利的条款已提醒您特别注意，请保证您在仔细阅读、并完全理解本协议的情况下，选择接受或不接受本协议。因金银猫的服务仅向金银猫会员提供，若您一经注册成为金银猫会员或使用金银猫提供的服务，则表示您完全接受以下条款的约束，并视为对本协议全部条款已充分理解、完全接受，否则您无权使用金银猫提供的服务。若您不接受以下条款，请您停止注册和停止使用金银猫的服务。<br>一、 签署<br>1.1请您确认按照中华人民共和国的法律法规，您有独立签署本协议并使用金银猫提供的服务的权利。若您不符合此条件，请立即停止注册。<br>1.2请您在注册时填写真实、有效的信息，如姓名、身份证号码、手机号码、邮箱等，及时更新在金银猫填写的信息。并按照金银猫的规定完成身份认证等。否则由您独自承担由此产生的所有可能的损失。<br>1.3本协议内容及已经发布的或将来发布在金银猫平台的各类规则为本协议不可分割的一部分，与协议正文具有同等法律效力。<br>同时，金银猫有权根据需要变更本协议或已发布在金银猫平台的各项规则，发生如上变更金银猫将在网站主页公布最新的协议内容和规则，不再个别通知。若您不能接受修改的协议或规则，请您立即停止使用金银猫提供的服务，否则，则视为您对修改后的协议、规则完全理解和接受，也将按照修改后的协议和规则使用金银猫提供的服务，同时就您在协议和具体规则修订前通过金银猫进行的交易亦将遵从新修改的协议和规则。<br>1.4金银猫以电子形式发出的通知在发出当日视为送达，并在您和金银猫之间产生法律效力。<br>1.5您在此同意将全面接受和履行与金银猫其他用户在金银猫平台签订的任何电子法律文本，并承诺按该等法律文本享有相应的权利、承担相应的义务。<br>二、 服务说明<br>2.1提供平台信息服务<br>您可以通过金银猫平台查询交易机会，签订合同，合同文本等， 具体内容以金银猫平台当时提供的服务内容为准。<br>2.2您理解并同意，由于借款总金额未达到企业需求金额或其他各种原因，金银猫没有义务保证您在支付借款后，能够实际提供借款，金银猫对此不承担任何责任，已支付的借款由第三方支付负责解冻或退回您对应的第三方支付的账户。对于多个会员提供借款的，如果出借的资金已经达到了企业需求的金额，以资金先到者得。若因此未达成交易的，由您自行承担损失，金银猫不承担任何责任，已支付的资金，由第三方支付负责解冻或退回您对应的第三方支付的账户。<br>2.3金银猫的客服电话为：40085563333若金银猫发布新的客服电话或更改网址均会在网站主页提前公布。请不要通过其他网址登录金银猫网站或者拨打其他电话联系金银猫，否则由此导致的损失由您自行承担。<br>2.4交易服务<br>金银猫平台将提供一家或几家第三方支付提供交易过程中收付款服务，您可以选定相应的第三方支付完成交易过程中的收付款服务，当资金进入您在第三方支付开立的独立账户后，资金、交易风险将由您和第三方支付负责，金银猫将不承担任何责任。<br>您若在金银猫平台选定合适的交易机会，您将通过您选择的第三方支付向借款人支付借款并且借款人的还款亦通过该第三方支付平台支付至您对应的第三方支付的账户，一旦款项进入您的第三方支付的账户，则代表企业已完成了还款。<br>您的本金与利息一般于还款日后的一到三个工作日支付至您对应的第三方支付的账户。<br>由此，金银猫再次特别提醒您，请确保您在金银猫和第三方支付注册、认证等填写的所有信息的准确、完整，并及时更新，否则导致的资金损失由您完全承担。<br>2.5您若在金银猫平台选定合适的交易机会，通过金银猫平台将借款金额预先充值至您对应在第三方支付的独立账户，第三方支付将把该笔资金冻结，待交易/借款协议达成，第三方支付将借款转入借款企业账户。<br>在此，我们特别提醒您，请务必在金银猫平台选择交易后直接进入第三方支付的页面进行充值支付，若未通过金银猫平台直接进入第三方支付页面进行充值导致交易未成功的，金银猫不承担任何责任。<br>若资金冻结后，交易/借款协议未达成，则第三方支付将对该笔款项解冻，您可以按照第三方支付的相关规定提现或直接使用。<br>2.6在此我们要特别提醒您，您在第三方支付开立账户里的资金由第三方支付决定是否计收利息，同时您向第三方支付充值或提现亦由第三方支付决定是否收取相关费用，金银猫不做任何承诺，也不承担您任何资金或利息的损失。<br>2.7货币贬值、汇率损失风险由您独自承担。<br>2.8一经您使用金银猫提供的服务，即表示您不可撤销地授权金银猫进行相关操作，且该等操作是不可逆转的，您不能以任何理由拒绝支付或要求取消交易。就前述服务，可能与第三方发生费用，您与第三方之间就费用支付事项产生的争议或纠纷，与金银猫无关。<br>您在金银猫平台上按金银猫服务流程所确认的交易状态将成为金银猫为您进行相关交易或操作（包括但不限于冻结资金、支付或收取款项、订立合同等）的明确指令。您同意金银猫有权按相关指令依据本协议和/或相关规则进行处理。<br>2.9您保证并承诺您通过金银猫平台进行交易的资金来源合法。您同意，金银猫有权按照包括但不限于公安机关、检察机关、法院等司法机关、行政机关、军事机关的要求协助对您的账户及资金等进行查询、冻结或扣划等操作。<br>2.10您同意，金银猫有权进行关于您交易借款的违约提醒及催收工作，包括但不限于：电话通知、上门催收提醒、发律师函、对乙方提起诉讼等。并授权金银猫可以将此工作委托给本协议外的其他方进行。<br>2.11您同意委托金银猫代您办理票据质押手续，并代为签章背书。金银猫接受您或您相对交易方的委托行为所产生的法律后果由相应委托方承担。<br>2.12金银猫会对您和与您交易方以及其他金银猫会员的信息及本协议内容保密；如任何一方违约，或因相关权力部门要求（包括但不限于法院、仲裁机构、金融监管机构等），金银猫有权披露。<br>三、 合同签订、管理<br>您理解并同意在金银猫平台交易所订立的合同采用电子合同方式，即您使用您的金银猫账户ID在金银猫网站通过点击确认或类似方式签署的电子合同即视为您本人真实意愿并以您本人名义签署的合同，具有法律效力，并且您确认在金银猫平台，如您不点击确认按钮签署本协议，则你无法进行后续任何操作。因此金银猫在此特别提醒您，请您妥善保管您的账户信息和密码，您不得以其账户密码等账户信息被盗用或其他理由否认通过前述方式订立的电子合同对各方具有的法律约束力或不按照该等合同履行义务。<br>在您以前述方式签署电子合同后不得擅自修改合同。如您对电子合同的内容有任何疑问，您可以在您的金银猫账户里查阅合同，若对此有任何争议的，应以金银猫记录的合同为准。<br>四、会员的义务与承诺<br>4.1您应按约定的借款期限起始日期将足额的借款本金通过与金银猫对接的第三方支付平台将借款打入指定乙方账户。若借款本金未按时打入乙方账户，导致借款不成功的，由您承担相应责任。<br>4.2您同意，金银猫有权以各种方式投放各种商业性广告或其他任何类型的商业信息（包括不限于在金银猫网站的任何页面上投放广告），并且，您同意接受金银猫通过电子邮件、短信或其他方式向您发送产品信息或其他相关商业信息。<br>4.3无论因金银猫、第三方支付或银行系统故障或其他原因导致结算错误，您都有义务退回多结算的款项，少结算的款项，亦会补还于您的第三方账户。<br>4.4在任何情况下，对于您使用金银猫服务过程中涉及由第三方提供相关服务的责任由该第三方承担，金银猫不承担该等责任。因您自身的原因导致金银猫服务无法提供或提供时发生任何错误而产生的任何损失或责任，由您自行负责，金银猫不承担责任。<br>4.5金银猫有权对平台进行升级或基于平台运行和交易安全的考虑，金银猫可以暂时停止提供服务、也可以改变所提供服务的内容，增加或减少平台功能，只要您继续使用金银猫的服务，则您接受以上内容对您的约束。<br>4.6账户及密码安全<br>您了解并同意，确保密码及账号的机密安全是您的责任。您应避免设置过于明显或简单的密码，如您的姓名、昵称或者您的生日。<br>您将对利用该密码及账号所进行的一切行为负完全的责任，同时，您应保证您不对其他任何人泄露您的账户或密码，亦不可使用其他任何人的账户或密码。<br>因黑客、病毒或您的保管疏忽等原因导致账号遭他人非法使用的，金银猫不承担任何责任。<br>金银猫通过您的会员账户及密码来识别您的指令，您确认，使用您的会员账户和密码登陆后在金银猫的一切行为均代表您本人。会员账户操作所产生的电子信息记录均为您行为的有效凭据，并由您本人承担由此产生的全部责任。<br>冒用他人账户及密码的，金银猫及其合法授权主体保留追究实际使用人连带责任的权利。<br>4.7在任何情况下，金银猫及其股东、创建人、高级职员、董事、代理人、关联公司、母公司、子公司和雇员等和金银猫有关联方均不以任何明示或默示的方式对您使用金银猫服务而产生的任何形式的直接或间接损失承担法律责任，包括但不限于资金损失、利润损失，并且金银猫不保证网站内容的真实性、充分性、及时性、可靠性、完整性和有效性，并且金银猫免除任何由此引起的法律责任。<br>4.8您承诺合法使用金银猫提供的服务及网站内容。您不得利用本服务从事侵害他人合法权益之行为，不得在金银猫平台从事任何可能违反中国的法律、法规、规章和政府规范性文件的行为或者任何未经授权的行为，如擅自进入金银猫的未公开的系统、不正当的使用账号密码和网站的任何内容等。<br>4.10金银猫没有义务监测网站内容，但是您确认并同意金银猫有权根据法律、法规、政府要求透露、修改或者删除必要的信息，以便更好地运营金银猫并保护自身及金银猫的其他合法用户。<br>4.11金银猫中全部内容的版权均属于金银猫所有，该等内容包括但不限于文本、数据、文章、设计、源代码、软件、图片、照片及其他全部信息（以下称“网站内容”）。网站内容受中华人民共和国著作权法及各国际版权公约的保护。未经金银猫事先书面同意，您承诺不以任何方式、不以任何形式复制、模仿、传播、出版、公布、展示网站内容，包括但不限于电子的、机械的、复印的、录音录像的方式和形式等。您承认网站内容是属于金银猫的财产。未经金银猫书面同意，您亦不得将金银猫包含的资料等任何内容镜像到任何其他网站或者服务器。任何未经授权对网站内容的使用均属于违法行为，金银猫将追究您的法律责任。<br>4.12由于您违反本协议或任何法律、法规或侵害第三方的权利，而引起第三方对金银猫提出的任何形式的索赔、要求、诉讼，金银猫有权向您追偿相关损失，包括但不限于金银猫的法律费用、名誉损失、及向第三方支付的补偿金等。<br>4.13 在任何情况下，如果您的出资未能得到及时清偿，如有任何第三方自愿代还款义务人向您或您指定的第三方偿还（垫付）应向您偿还的本金及利息时，均视为您不可撤销地将您的债权及从属权利全部转让给向您支付款项之第三方。该第三方得以行使作为债权人的全部权利。<br>五、服务费用<br>5.1各项服务费用请详见您使用金银猫服务时在网站上所列的收费说明。金银猫有权单方面订立和调整服务费用。<br>5.2您在使用金银猫服务过程中（如充值或提现等）可能需要向第三方（如银行或第三方支付公司等）支付一定的费用，具体收费标准详见第三方网站相关页面。<br>六、风险提示<br>6.1政策风险：有关法律、法规及相关政策、规则发生变化，影响金银猫或其他与金银猫平台相关的第三方提供服务或影响已提供的服务，您有可能遭受损失。<br>6.2违约风险：因其他交易方无力或无意愿按时足额履约，您有可能遭受损失。<br>6.3利率风险：市场利率变化可能对您持有产品的实际收益产生影响。<br>6.4还款资金和相关权益当遇到法院及其他有权机关执行查封、冻结或扣划措施时，银行将依司法机关或监管机构等的要求行事。<br>6.5不可抗力因素导致的风险。<br>6.6因您的过错导致的任何损失由您自行承担，该过错包括但不限于：决策失误、操作不当、遗忘或泄露密码、密码被他人破解、您使用的计算机系统被第三方侵入、您委托他人代理交易时他人恶意或不当操作而造成的损失。<br>6.7金银猫不对任何会员和任何交易提供任何担保，或参与任何交易，无论是明示、默示或法定的。<br>6.8会员信息是由会员自行发布和提供，金银猫不承担任何形式的证明、鉴定服务，即使金银猫进行审核，也不代表金银猫因此承担相应责任，请您自己的判断进行交易，您应对您的判断承担全部责任，金银猫均不能完全保证网站内容（包括测算工具等）的真实性、充分性、可靠性、完整性和有效性，并且无需承担任何由此引起的法律责任。<br>6.9以上并未涵盖在金银猫平台交易的全部风险。您在做出交易决策前，应仔细、全面了解所进行的交易的风险特征，并根据本人的交易目标、交易期限、风险承受能力和资产状况等谨慎决策，并自行承担全部风险。<br>七、不可抗力、责任限制<br>7.1系统服务中断或故障<br>基于互联网的特殊性，金银猫不保证服务不会中断，也不保证服务的及时性和/或安全性。系统因相关状况无法正常运作，使会员无法使用任何金银猫服务或使用任何金银猫服务时受到任何影响时，金银猫对您或第三方不负任何责任，前述状况包括但不限于：<br>a金银猫系统或第三方支付停机维护期间。<br>b电信设备出现故障不能进行数据传输的。<br>c由于黑客攻击、网络供应商技术调整或故障、网站升级、银行方面的问题等原因而造成的金银猫服务中断或延迟。<br>d因台风、地震、海啸、洪水、停电、战争、恐怖袭击等不可抗力之因素，造成金银猫系统障碍不能提供服务的。<br>7.2责任限制<br>a金银猫仅对本协议中所列明的金银猫应承担相关义务承担责任。<br>b您确认因交易而产生的任何风险应由交易双方承担。<br>c会员信息是由会员自行发布，金银猫无法保证会员信息的真实、及时和完整，您应对您的判断承担全部责任。<br>d金银猫未对交易种类、交易结果等交易事项及金银猫服务提供任何形式的保证，包括但不限于以下事项：<br>(1)金银猫服务将符合您的需求。<br>(2)金银猫服务将不受干扰、及时提供或免于出错。<br>(3)您经金银猫平台达成的交易符合您的期望。<br>7.3与金银猫服务相关的第三方或者与金银猫合作单位，所提供的服务品质及内容由该第三方或合作单位自行负责。<br>7.4金银猫的网站内容可能涉及由第三方所有、控制或者运营的其他网站（以下简称“第三方网站”）。金银猫不能保证也没有义务保证第三方网站上任何信息的真实性和有效性。 您确认按照第三方网站的服务协议使用第三方网站，而不是按照本协议。第三方网站不是金银猫推荐或者介绍的，第三方网站的内容、产品、广告和其他任何信息均由您自行判断并承担风险，与金银猫无关。您经由金银猫服务的使用下载或取得任何资料，应由您自负风险，因资料的下载而导致您电脑系统的任何损坏或资料流失，您应自行承担全部风险和责任。<br>7.5您自金银猫及金银猫相关工作人员或经由金银猫服务取得的建议或资讯，无论其为书面或口头，均不构成金银猫对金银猫服务的任何保证。<br>7.6金银猫不保证为向您提供便利而设置的外部链接的准确性、有效性、安全性和完整性，同时，对于该等外部链接指向的不由金银猫实际控制的任何网页上的内容，金银猫不承担任何责任。<br>7.7在法律允许的情况下，金银猫对于与本协议有关或由本协议引起的，或者，由于使用金银猫网站、或由于其所包含的或以其它方式通过金银猫网站提供给您的全部信息、内容、产品（包括软件）和服务、或购买和使用产品引起的任何间接的、惩罚性的、特殊的、派生的损失（包括但不限于收益损失、利润损失、使用数据或其他经济利益的损失），不论是如何产生的，也不论是由对本协议的违约（包括违反保证）还是由侵权造成的，均不负有任何责任，即使其事先已被告知此等损失的可能性。另外即使本协议规定的排他性救济没有达到其基本目的，金银猫也不承担上述损失的责任。<br>7.8除本协议另有规定外，在任何情况下，金银猫对本协议所承担的违约赔偿责任总额不超过向您收取的当次服务费用总额。<br>八、 协议终止及账户的暂停、注销或终止<br>8.1除非金银猫终止本协议或者您申请终止本协议且经金银猫同意，否则本协议始终有效。在您违反了本协议、相关规则，或在相关法律法规、政府部门的要求下，金银猫有权通过站内信、电子邮件通知等方式终止本协议、关闭您的账户或者限制您使用金银猫。但金银猫的终止行为不能免除您根据本协议或在金银猫生成的其他协议项下的还未履行完毕的义务。<br>8.2您若发现有第三人冒用或盗用您的用户账户及密码，或其他任何未经合法授权的情形，应立即以有效方式通知金银猫，要求金银猫暂停相关服务，否则由此产生的一切责任由您本人承担。同时，您理解金银猫对您的请求采取行动需要合理期限，在此之前，金银猫对第三人使用该服务所导致的损失不承担任何责任。<br>8.3您决定不再使用用户账户时，应首先清偿所有应付款项（包括但不限于借款本金、利息、罚息、违约金、服务费、管理费等），并向金银猫申请注销该用户账户，经金银猫审核同意后可正式注销用户账户。会员死亡或被宣告死亡的，其在本协议项下的各项权利义务由其继承人承担。若会员丧失全部或部分民事权利能力或民事行为能力，金银猫有权根据有效法律文书（包括但不限于生效的法院判决等）或其法定监护人的指示处置与用户账户相关的款项。<br>8.4金银猫特别提醒您，在您有借款交易尚未到期时，请保证您金银猫账户和对应的第三方账户的有效性和可使用性，否则导致您到期债权无法入您的账户的情形，由您承担由此导致的损失。<br>8.5金银猫有权基于单方独立判断，在认为可能发生危害交易安全等情形时，不经通知而先行暂停、中断或终止向您提供本协议项下的全部或部分会员服务，并将注册资料移除或删除，且无需对您或任何第三方承担任何责任。前述情形包括但不限于：<br>a金银猫认为您提供的个人资料不具有真实性、有效性或完整性；<br>b金银猫发现异常交易或有疑义或有违法之虞时；<br>c金银猫认为您的账户涉嫌洗钱、套现、传销、被冒用或其他金银猫认为有风险之情形；<br>d金银猫认为您已经违反本协议中规定的各类规则及精神；<br>e金银猫基于交易安全等原因，根据其单独判断需先行暂停、中断或终止向您提供本协议项下的全部或部分会员服务，并将注册资料移除或删除的其他情形。<br>f您同意在必要时，金银猫无需进行事先通知即有权终止提供用户账户服务，并可能立即暂停、关闭或删除您的用户账户及该用户账户中的所有相关资料及档案。<br>8.6您同意，用户账户的暂停、中断或终止不代表您责任的终止，您仍应对您使用金银猫服务期间的行为承担可能的违约或损害赔偿责任，同时金银猫仍可保留您的相关信息。<br>8.7金银猫在此特别提醒您注意，由于您违反以上约定或由于您的原因导致金银猫账号或第三方支付的账户被停止使用或限制使用的，导致您已经发生的交易在到期时无法还款进您的相应账户的损失，由您承担。<br>九、 通知<br>本协议项下的通知一经在网站公示即视为已经送达。除此之外，其他向您个人发布的具有专属性的通知将由金银猫向您在注册时提供的电子邮箱，或金银猫在您的个人账户中为您设置的站内消息系统栏，或您在注册后在金银猫绑定的手机发送，一经发送即视为已经送达。请您密切关注您的电子邮箱、站内消息系统栏中的邮件、信息及手机中的短信信息。您同意金银猫出于向您提供服务之目的，可以向您的电子邮箱、站内消息系统栏和手机发送有关通知或提醒；若您不愿意接收，请在金银猫相应系统板块进行设置。但您同时同意并确认，若您设置了不接收有关通知或提醒，则您有可能收不到该等通知信息，您不得以您未收到或未阅读该等通知信息主张相关通知未送达于您。<br>十、 适用法律和管辖<br>因金银猫所提供服务而产生的争议均适用中华人民共和国法律，并由金银猫住所地的人民法院管辖。<br>十一、 其他<br>金银猫对本协议拥有最终的解释权。本协议及金银猫有关页面的相关名词可互相引用参照，如有不同理解，则以本协议条款为准。此外，若本协议的部分条款被认定为无效或者无法实施时，本协议中的其他条款仍然有效。<br>&nbsp;<br></span><div class=space></div><div class=space></div><button class=\"btn button-yellow\" ng-click=ctrl.toggleAgreement1()>返回</button></div><div class=agreement ng-if=ctrl.viewModel.showAgreement2><div align=center><strong>隐私说明</strong></div><br><span>1、本网站所收集的信息，仅限于那些金银猫认为是了解您财务需求和开展业务所必需的或与之相关的个人信息。<br>2、金银猫使用您的个人信息，目的在于能为您提供更优质的优质服务和理财产品。<br>3、金银猫严格遵守国家相关的法律法规，对您的隐私信息进行严密多重保护。未经您的同意，我们不会向任何第三方公司、组织和个人披露您的个人信息、账户信息以及交易信息。<br>4、金银猫将对您提供的信息严格保密，除具备下列情形之一外，不会向任何第三方披露您的相关信息：<br>（1）经过您事先同意而披露。<br>（2）只有披露您的相关信息，才能提供您所要求的产品或服务。<br>（3）应相关的法律法规要求而披露。<br>（4）应政府部门、司法机构或其他代理机构的要求而披露。<br>（5）应国家金融监管机构的要求而披露。<br>（6）其他金银猫认为需要公开、编辑或披露相关信息的情况。<br>5、如果您不是具备完全民事权利能力和完全民事行为能力的自然人，您无权使用金银猫平台服务，由此产生的损失或引起的法律纠纷，金银猫将不承担任何责任。</span><div class=space></div><div class=space></div><button class=\"btn button-yellow\" ng-click=ctrl.toggleAgreement2()>返回</button></div></ion-content></ion-view>");
}]);

angular.module("app/yinpiao/detail/detail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/yinpiao/detail/detail.tpl.html",
    "<ion-view title=银企众盈><ion-content><ion-refresher pulling-icon=ion-arrow-down-c spinner=spiral on-refresh=product.doRefresh()></ion-refresher><ion-list class=order-detail><ion-item><div class=row><div class=\"col col-50\"><div class=center><p>已售出</p><p><span ng-bind=product.viewModel.sellProgress></span><samp>%</samp></p><progress-arc class=circle-progress stroke=#facb3a size=100 stroke-width=5 complete=product.viewModel.sellProgressInCircleProgress background=#eee></progress-arc></div></div><div class=col><ul><li><samp ng-bind=product.viewModel.yield></samp><span>%</span></li><li><span ng-bind=product.viewModel.unitPrice></span>元起投</li><li><span ng-bind=product.viewModel.period></span>天</li><li><span ng-bind=product.viewModel.financingSumAmount></span>万元</li></ul></div></div></ion-item></ion-list><div class=card><ion-item class=item-divider><p class=pull-left>剩余份数：<span ng-bind=product.viewModel.remainCount></span>份（<span ng-bind=product.viewModel.unitPrice></span>元／份）</p></ion-item><ion-item class=item-input-inset><label class=item-input-wrapper><input type=number placeholder=投资份数 ng-model=product.viewModel.investCount required min=1 max=100000000 ng-change=product.investCountChange()> <samp>份</samp></label><button class=\"button button-small button-assertive\" id=btn-narrow ng-bind=product.viewModel.statusText ng-click=product.goPurchase() ng-disabled=!product.goPurchaseButtonEnable()></button></ion-item><ion-item class=item-divider><p class=pull-left>投资金额：<span>&nbsp;</span><span ng-bind=product.viewModel.investAmount></span><span>&nbsp;</span>元</p><p class=pull-right>预计收益：<span>&nbsp;</span><span ng-bind=product.viewModel.expectedInterest></span><span>&nbsp;</span>元</p></ion-item></div><ion-list><ion-item class=item-divider><p ng-bind=product.viewModel.productNo class=product-no></p></ion-item><ion-item><p class=pull-left>项目状态</p><p class=pull-right><span ng-bind=product.viewModel.statusText></span></p></ion-item><ion-item><p class=pull-left>项目名称</p><p class=pull-right><span ng-bind=product.viewModel.productName></span></p></ion-item><ion-item><p class=pull-left>项目期数</p><p class=pull-right><span>第&nbsp;</span><span ng-bind=product.viewModel.issueNo></span><span>&nbsp;期</span></p></ion-item><ion-item><p class=pull-left>承兑行</p><p class=pull-right><span ng-bind=product.viewModel.bankName></span></p></ion-item><ion-item><p class=pull-left>融资总额</p><p class=pull-right><span ng-bind=product.viewModel.financingSumAmount></span> 万元</p></ion-item><ion-item><p class=pull-left>投资单位</p><p class=pull-right><span ng-bind=product.viewModel.unitPrice></span>元</p></ion-item><ion-item><p class=pull-left>起息日期</p><p class=pull-right><span ng-bind=product.viewModel.valueDateText></span></p></ion-item><ion-item><p class=pull-left>结息日期</p><p class=pull-right><span ng-bind=\"product.viewModel.settleDate | time\"></span></p></ion-item><ion-item><p class=pull-left>最迟还款日</p><p class=pull-right><span ng-bind=\"product.viewModel.repaymentDeadline | time\"></span></p></ion-item></ion-list></ion-content></ion-view>");
}]);

angular.module("app/yinpiao/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/yinpiao/index.tpl.html",
    "<ion-view title=银企众盈><ion-content><ion-refresher pulling-icon=ion-arrow-down-c spinner=spiral on-refresh=products.doRefresh()></ion-refresher><ion-list><div ng-repeat=\"item in products.viewModel.items\"><ion-item ui-sref=\"jym.yinpiao-detail({ productIdentifier: item.productIdentifier })\"><div class=row><div class=\"col col-33\"><em ng-bind=item.yield></em><samp>%</samp><li class=jqm-prd-period><span ng-bind=item.period></span><samp>&nbsp;天</samp></li><li class=jqm-min-price><span ng-bind=item.unitPrice></span><samp>&nbsp;元起</samp></li><li class=jqm-prd-price><span ng-bind=item.financingSumAmount></span><samp>&nbsp;万</samp></li></div><div class=\"col col-67\"><li ng-bind=item.productName></li><div class=detail><li class=saleStatus ng-bind=item.statusText></li><li ng-bind=item.timeText></li><li ng-bind=item.bankName></li></div></div></div></ion-item><ion-item class=divider></ion-item></div></ion-list><ion-infinite-scroll ng-if=products.moreDataCanBeLoaded() on-infinite=products.loadMoreData() distance=1% spinner=spiral></ion-infinite-scroll></ion-content></ion-view>");
}]);

angular.module("app/yinpiao/purchase/purchase.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/yinpiao/purchase/purchase.tpl.html",
    "<ion-view title=确认购买><ion-content class=has-header><ion-list class=deposit><ion-item><span class=pull-left>订单金额</span> <span class=pull-right><strong ng-bind=purchase.viewModel.amount></strong> &nbsp;元</span></ion-item></ion-list><ion-list><ion-item class=\"card deposit\"><ion-item class=item><span class=pull-left>账户余额&nbsp;&nbsp;</span> <span class=pull-left><strong ng-bind=purchase.viewModel.balance></strong> &nbsp;&nbsp;元</span></ion-item><label class=\"item item-input\"><span class=input-label>输入密码</span> <input type=password placeholder=请输入您的支付密码 ng-model=purchase.viewModel.password required minlength=8 maxlength=18 ng-pattern=\"/^(?![^a-zA-Z~!@#$%^&*_]+$)(?!\\D+$).{8,18}$/\"></label></ion-item><div class=narrow><button ng-click=purchase.check()><span><i class=\"icon ion-android-checkbox-outline-blank\" ng-if=!purchase.viewModel.checked></i> <i class=\"icon ion-android-checkbox-outline\" ng-if=purchase.viewModel.checked></i></span> <span>同意</span></button> <span ng-click=purchase.toggleAgreement1()>《委托协议》</span> <span>及</span> <span ng-click=purchase.toggleAgreement2()>《借款协议》</span></div></ion-list><button class=\"btn button-yellow\" ng-disabled=!purchase.purchaseButtonEnable() ng-click=purchase.purchase()>同意协议并付款</button><br><br><h4 id=tel>如有问题，请垂询&nbsp;4008-556-333。</h4><div class=agreement ng-if=purchase.viewModel.showAgreement1><div ng-bind-html=purchase.viewModel.agreement1></div><div class=space></div><div class=space></div><button class=\"btn button-yellow\" ng-click=purchase.toggleAgreement1()>返回</button></div><div class=agreement ng-if=purchase.viewModel.showAgreement2><div ng-bind-html=purchase.viewModel.agreement2></div><div class=space></div><div class=space></div><button class=\"btn button-yellow\" ng-click=purchase.toggleAgreement2()>返回</button></div></ion-content></ion-view>");
}]);

angular.module("app/zhuanqu/detail/detail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/zhuanqu/detail/detail.tpl.html",
    "<ion-view title=银行专区><ion-content><ion-refresher pulling-icon=ion-arrow-down-c spinner=spiral on-refresh=product.doRefresh()></ion-refresher><ion-list class=order-detail><ion-item><div class=row><div class=\"col col-50\"><div class=center><p>已售出</p><p><span ng-bind=product.viewModel.sellProgress></span><samp>%</samp></p><progress-arc class=circle-progress stroke=#facb3a size=100 stroke-width=5 complete=product.viewModel.sellProgressInCircleProgress background=#eee></progress-arc></div></div><div class=col><ul><li><samp ng-bind=product.viewModel.yield></samp><span>%</span></li><li><span ng-bind=product.viewModel.unitPrice></span>元起投</li><li><span ng-bind=product.viewModel.period></span>天</li><li><span ng-bind=product.viewModel.financingSumAmount></span>万元</li></ul></div></div></ion-item></ion-list><div class=card><ion-item class=item-divider><p class=pull-left>剩余份数：<span ng-bind=product.viewModel.remainCount></span>份（<span ng-bind=product.viewModel.unitPrice></span>元／份）</p></ion-item><ion-item class=item-input-inset><label class=item-input-wrapper><input type=number placeholder=投资份数 ng-model=product.viewModel.investCount required min=1 max=100000000 ng-change=product.investCountChange()> <samp>份</samp></label><button class=\"button button-small button-assertive\" id=btn-narrow ng-bind=product.viewModel.statusText ng-click=product.goPurchase() ng-disabled=!product.goPurchaseButtonEnable()></button></ion-item><ion-item class=item-divider><p class=pull-left>投资金额：<span>&nbsp;</span><span ng-bind=product.viewModel.investAmount></span><span>&nbsp;</span>元</p><p class=pull-right>预计收益：<span>&nbsp;</span><span ng-bind=product.viewModel.expectedInterest></span><span>&nbsp;</span>元</p></ion-item></div><ion-list><ion-item class=item-divider><p ng-bind=product.viewModel.productNo class=product-no></p></ion-item><ion-item><p class=pull-left>项目状态</p><p class=pull-right><span ng-bind=product.viewModel.statusText></span></p></ion-item><ion-item><p class=pull-left>项目名称</p><p class=pull-right><span ng-bind=product.viewModel.productName></span></p></ion-item><ion-item><p class=pull-left>项目期数</p><p class=pull-right><span>第&nbsp;</span><span ng-bind=product.viewModel.issueNo></span><span>&nbsp;期</span></p></ion-item><ion-item ng-if=product.viewModel.isYinpiao><p class=pull-left>承兑行</p><p class=pull-right><span ng-bind=product.viewModel.bankName></span></p></ion-item><ion-item ng-if=product.viewModel.isShangpiao><p class=pull-left>项目类型</p><p class=pull-right><span ng-bind=product.viewModel.riskManagementMode></span></p></ion-item><ion-item><p class=pull-left>融资总额</p><p class=pull-right><span ng-bind=product.viewModel.financingSumAmount></span> 万元</p></ion-item><ion-item><p class=pull-left>投资单位</p><p class=pull-right><span ng-bind=product.viewModel.unitPrice></span>元</p></ion-item><ion-item><p class=pull-left>起息日期</p><p class=pull-right><span ng-bind=product.viewModel.valueDateText></span></p></ion-item><ion-item><p class=pull-left>结息日期</p><p class=pull-right><span ng-bind=\"product.viewModel.settleDate | time\"></span></p></ion-item><ion-item><p class=pull-left>最迟还款日</p><p class=pull-right><span ng-bind=\"product.viewModel.repaymentDeadline | time\"></span></p></ion-item></ion-list></ion-content></ion-view>");
}]);

angular.module("app/zhuanqu/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/zhuanqu/index.tpl.html",
    "<ion-view title=银行专区><ion-content id=zhuanqu><ion-list><ion-item class=item-icon-right ui-sref=\"jym.zhuanqu-list({ bankName: 'fudian' })\"><h2 id=fudian>富滇银行</h2><i class=\"icon ion-chevron-right\"></i></ion-item><ion-item ui-sref=\"jym.zhuanqu-list({ bankName: 'fudian' })\"><img src=assets/img/zhuanqu/fudian@308x130-ff6b31.gif></ion-item><ion-item><p>票据由富滇银行代为保管和托收</p><p>到期由承兑银行无条件兑付</p><p>本息安全 风险趋零</p></ion-item><ion-item class=divider></ion-item><ion-item class=item-icon-right ui-sref=\"jym.zhuanqu-list({ bankName: 'fuxin' })\"><h2 id=fuxin>阜新银行</h2><i class=\"icon ion-chevron-right\"></i></ion-item><ion-item ui-sref=\"jym.zhuanqu-list({ bankName: 'fuxin' })\"><img src=assets/img/zhuanqu/fuxin@308x130-73f47c.gif></ion-item><ion-item><p>票据由阜新银行代为保管和托收</p><p>到期由承兑银行无条件兑付</p><p>本息安全 风险趋零</p></ion-item><ion-item class=divider></ion-item><ion-item class=item-icon-right ui-sref=\"jym.zhuanqu-list({ bankName: 'shibing' })\"><h2 id=shibingcunzhen>施秉金鼎村镇银行</h2><i class=\"icon ion-chevron-right\"></i></ion-item><ion-item ui-sref=\"jym.zhuanqu-list({ bankName: 'shibing' })\"><img src=assets/img/zhuanqu/sbjd@308x130-04c7a4.gif></ion-item><ion-item><p>募集资金由施秉金鼎村镇银行进行资金监管</p></ion-item><ion-item class=divider></ion-item><ion-item class=\"item item-icon-right\" ng-click=\"ctrl.go('https://piao.cib.com.cn/')\"><h2 id=xingye>兴业银行</h2><i class=\"icon ion-chevron-right\"></i></ion-item><ion-item class=item><img src=assets/img/zhuanqu/cib@308x130-6bb205.gif></ion-item><ion-item><p>到期由兴业银行无条件兑付</p><p>本息安全 风险趋零</p></ion-item></ion-list></ion-content></ion-view>");
}]);

angular.module("app/zhuanqu/list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/zhuanqu/list.tpl.html",
    "<ion-view title=银行专区><ion-content><ion-refresher pulling-icon=ion-arrow-down-c spinner=spiral on-refresh=products.doRefresh()></ion-refresher><ion-list><div ng-repeat=\"item in products.viewModel.items\"><ion-item ui-sref=\"jym.zhuanqu-detail({ productIdentifier: item.productIdentifier, bankName: products.viewModel.bankName })\"><div class=row><div class=\"col col-33\"><em ng-bind=item.yield></em><samp>%</samp><li class=jqm-prd-period><span ng-bind=item.period></span><samp>&nbsp;天</samp></li><li class=jqm-min-price><span ng-bind=item.unitPrice></span><samp>&nbsp;元起</samp></li><li class=jqm-prd-price><span ng-bind=item.financingSumAmount></span><samp>&nbsp;万</samp></li></div><div class=\"col col-67\"><li ng-bind=item.productName></li><div class=detail><li class=saleStatus ng-bind=item.statusText></li><li ng-bind=item.timeText></li><li ng-bind=item.riskManagementText></li></div></div></div></ion-item><ion-item class=divider></ion-item></div></ion-list><ion-infinite-scroll ng-if=products.moreDataCanBeLoaded() on-infinite=products.loadMoreData() distance=1% spinner=spiral></ion-infinite-scroll></ion-content></ion-view>");
}]);

angular.module("app/zhuanqu/purchase/purchase.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/zhuanqu/purchase/purchase.tpl.html",
    "<ion-view title=确认购买><ion-content><ion-list class=deposit><ion-item><span class=pull-left>订单金额</span> <span class=pull-right><strong ng-bind=purchase.viewModel.amount></strong> &nbsp;元</span></ion-item></ion-list><ion-list><ion-item class=\"card deposit\"><ion-item class=item><span class=pull-left>账户余额&nbsp;&nbsp;</span> <span class=pull-left><strong ng-bind=purchase.viewModel.balance></strong> &nbsp;&nbsp;元</span></ion-item><label class=\"item item-input\"><span class=input-label>输入密码</span> <input type=password placeholder=请输入您的支付密码 ng-model=purchase.viewModel.password required minlength=8 maxlength=18 ng-pattern=\"/^(?![^a-zA-Z~!@#$%^&*_]+$)(?!\\D+$).{8,18}$/\"></label></ion-item><div class=narrow><button ng-click=purchase.check()><span><i class=\"icon ion-android-checkbox-outline-blank\" ng-if=!purchase.viewModel.checked></i> <i class=\"icon ion-android-checkbox-outline\" ng-if=purchase.viewModel.checked></i></span> <span>同意</span></button> <span ng-click=purchase.toggleAgreement1()>《委托协议》</span> <span>及</span> <span ng-click=purchase.toggleAgreement2()>《借款协议》</span></div></ion-list><button class=\"btn button-yellow\" ng-disabled=!purchase.purchaseButtonEnable() ng-click=purchase.purchase()>同意协议并付款</button><br><br><h4 id=tel>如有问题，请垂询&nbsp;4008-556-333。</h4><div class=agreement ng-if=purchase.viewModel.showAgreement1><div ng-bind-html=purchase.viewModel.agreement1></div><div class=space></div><div class=space></div><button class=\"btn button-yellow\" ng-click=purchase.toggleAgreement1()>返回</button></div><div class=agreement ng-if=purchase.viewModel.showAgreement2><div ng-bind-html=purchase.viewModel.agreement2></div><div class=space></div><div class=space></div><button class=\"btn button-yellow\" ng-click=purchase.toggleAgreement2()>返回</button></div></ion-content></ion-view>");
}]);

/*jshint -W024 */
'use strict';
angular.module('jym.jinbaoyin.detail', [
    'jym.services',
    'jym.services.jinbaoyin',
    'jym.services.product',
    'jym.services.purchase',
    'jym.services.user',
    'jym.jinbaoyin.purchase'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.jinbaoyin-detail', {
                url: '/jinbaoyin/detail',
                views: {
                    jinbaoyin: {
                        controller: 'JinbaoyinDetailCtrl as product',
                        templateUrl: 'app/jinbaoyin/detail/detail.tpl.html'
                    }
                }
            });
    }])
    .controller('JinbaoyinDetailCtrl', ['$scope', '$state', '$timeout', '$q', 'JinbaoyinService', 'ProductService', 'PurchaseService', 'UserService', 'JYMUtilityService', function($scope, $state, $timeout, $q, JinbaoyinService, ProductService, PurchaseService, UserService, JYMUtilityService) {
        var product = this;

        product.model = {};
        product.viewModel = {};

        var getSaleProgress = function(product) {
            return ProductService.getSaleProgress(product.paidAmount, product.financingSumAmount, product.soldOut, product.startSellTime, product.endSellTime);
        };

        var getSaleStatus = function(product) {
            return ProductService.getSaleStatus(product.soldOut, product.startSellTime, product.endSellTime);
        };

        var getValueDateModeText = function(valueDateMode) {
            return ProductService.getValueDateModeText(valueDateMode);
        };

        product.doRefresh = function() {
            product.viewModel.investCount = product.viewModel.investCount || 10;
            product.viewModel.investAmount = 0;
            product.viewModel.expectedInterest = 0;

            product.refreshProduct();

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        product.investCountChange = function() {
            if (product.viewModel.investCount < 0) {
                product.viewModel.investCount = 0;
            }

            if (product.viewModel.investCount > product.viewModel.remainCount) {
                product.viewModel.investCount = parseInt(product.viewModel.remainCount, 10);
            }

            product.refreshInvestViewModel();
        };

        product.goPurchase = function() {
            if (product.goPurchaseButtonEnable()) {
                var amount = product.viewModel.investCount * product.model.unitPrice;
                var checkUserPurchaseStatus = UserService.checkUserPurchaseStatus();
                var checkProductPurchaseStatus = ProductService.checkProductPurchaseStatus(product.refreshProduct(), amount);
                $q.all([checkUserPurchaseStatus, checkProductPurchaseStatus])
                    .then(function(result) {
                        PurchaseService.buildNewJBYOrder(amount, result[1].productIdentifier);

                        $state.go('jym.jinbaoyin-purchase', { productIdentifier: product.model.productIdentifier });
                    })
                    .catch(function(result) {
                        JYMUtilityService.showAlert(result);
                    });
            }
        };

        product.goPurchaseButtonEnable = function() {
            return product.viewModel.status === 20 && product.viewModel.investAmount && product.viewModel.investAmount >= product.viewModel.unitPrice;
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
                    product.model = result;
                    product.refreshViewModel();
                    product.refreshInvestViewModel();
                    return result;
                });
        };

        product.refreshViewModel = function() {
            product.viewModel.endSellTime = product.model.endSellTime;
            product.viewModel.financingSumAmount = (product.model.financingSumAmount / 1000000).toFixed(0);
            product.viewModel.issueNo = parseInt(product.model.issueNo, 10);
            product.viewModel.issueTime = product.model.issueTime;
            product.viewModel.paidAmount = product.model.paidAmount;
            product.viewModel.productCategory = product.model.productCategory;
            product.viewModel.productIdentifier = product.model.productIdentifier;
            product.viewModel.productName = product.model.productName;
            product.viewModel.productNo = product.model.productNo;
            product.viewModel.productTitle = product.model.productName + ' 第' + product.model.issueNo + '期';
            product.viewModel.remainCount = ((product.model.financingSumAmount - product.model.paidAmount) / product.model.unitPrice).toFixed(0);
            product.viewModel.sellProgress = getSaleProgress(product.model);
            product.viewModel.sellProgressInCircleProgress = product.viewModel.sellProgress / 100;
            product.viewModel.status = getSaleStatus(product.model);
            product.viewModel.unitPrice = (product.model.unitPrice / 100).toFixed(0);
            product.viewModel.valueDateMode = getValueDateModeText(product.model.valueDateMode);
            product.viewModel.yield = product.model.yield / 100;


            if (product.viewModel.status !== 20) {
                product.viewModel.remainCount = 0;
            }

            switch (product.viewModel.status) {
                case 10:
                    product.viewModel.statusText = '待售';
                    break;
                case 20:
                    product.viewModel.statusText = '抢购';
                    break;
                case 30:
                    product.viewModel.statusText = '售罄';
                    break;
                case 40:
                    product.viewModel.statusText = '结束';
                    break;
                default :
                    product.viewModel.statusText = '';
            }
        };

        product.doRefresh();
    }]);

/*jshint -W024 */
'use strict';
angular.module('jym.jinbaoyin', [
    'jym.services.jinbaoyin',
    'jym.jinbaoyin.detail'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.jinbaoyin', {
                url: '/jinbaoyin',
                views: {
                    jinbaoyin: {
                        controller: 'JinbaoyinCtrl as product',
                        templateUrl: 'app/jinbaoyin/index.tpl.html'
                    }
                }
            });
    }])
    .controller('JinbaoyinCtrl', ['$scope', '$timeout', '$ionicDeploy', 'APP', 'JinbaoyinService', function($scope, $timeout, $ionicDeploy, APP, JinbaoyinService) {
        var product = this;

        product.model = {};
        product.viewModel = {};

        product.doRefresh = function() {
            product.refreshProduct();

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        product.refreshProduct = function() {
            JinbaoyinService.getIndex()
                .then(function(result) {
                    product.model = result;

                    product.viewModel.title = result.productName + ' ' + '第' + result.issueNo + '期';
                    product.viewModel.yield = result.yield / 100;
                    product.viewModel.unitPrice = (result.unitPrice / 100).toFixed(0);
                });
        };

        product.doRefresh();
    }]);

'use strict';
angular.module('jym.jinbaoyin.purchase', [
    'jym.services',
    'jym.services.purchase',
    'jym.services.user'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.jinbaoyin-purchase', {
                url: '/jinbaoyin/purchase/{productIdentifier}',
                views: {
                    jinbaoyin: {
                        controller: 'JinbaoyinPurchaseCtrl as purchase',
                        templateUrl: 'app/jinbaoyin/purchase/purchase.tpl.html'
                    }
                }
            });
    }])
    .controller('JinbaoyinPurchaseCtrl', ['$scope', '$stateParams', '$timeout', '$ionicScrollDelegate', 'RESOURCES', 'JinbaoyinService', 'ProductService', 'PurchaseService', 'UserService', 'JYMUtilityService', function($scope, $stateParams, $timeout, $ionicScrollDelegate, RESOURCES, JinbaoyinService, ProductService, PurchaseService, UserService, JYMUtilityService) {
        var purchase = this;

        purchase.model = {};
        purchase.viewModel = {};

        purchase.check = function() {
            purchase.viewModel.checked = !purchase.viewModel.checked;
        };

        purchase.doRefresh = function() {
            purchase.viewModel.agreement = '金银猫金包银投资协议';

            purchase.resetInput();

            purchase.refreshUserInfo()
                .then(function(result) {
                    purchase.model.user = result;
                    purchase.model.order = PurchaseService.getNewJBYOrder();
                    purchase.refreshViewModel();
                    return result;
                })
                .then(function() {
                    purchase.refreshAgreement()
                        .then(function(result) {
                            purchase.viewModel.agreement = ProductService.fillDataForAgreement(result.content, {
                                cellphone: purchase.model.user.cellphone,
                                credentialNo: purchase.model.user.credentialNo,
                                realName: purchase.model.user.realName
                            });
                        });
                });
        };

        purchase.refreshAgreement = function() {
            return JinbaoyinService.getAgreement($stateParams.productIdentifier, 1);
        };

        purchase.refreshUserInfo = function() {
            return UserService.getUserInfo();
        };

        purchase.refreshViewModel = function() {
            purchase.viewModel.balance = (purchase.model.user.balance / 100).toFixed(2);
            purchase.viewModel.amount = (purchase.model.order.amount / 100).toFixed(2);
        };

        purchase.purchaseButtonEnable = function() {
            return purchase.viewModel.checked && purchase.viewModel.amount && purchase.viewModel.password && purchase.model.user.balance >= purchase.model.order.amount;
        };

        purchase.purchase = function() {
            if (purchase.purchaseButtonEnable()) {
                var amount = purchase.model.order.amount;
                UserService.investingJBY(amount, purchase.viewModel.password, purchase.model.order.productIdentifier)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.INVESTING.JBY);

                            PurchaseService.clearJBYOrder();

                            $timeout(function() {
                                purchase.resetInput();
                                JYMUtilityService.goWithDisableBack('jym.user-jinbaoyin-detail', { transactionIdentifier: result.transactionIdentifier });
                            }, 1000);
                        }
                    });
            }
        };

        purchase.resetInput = function() {
            purchase.viewModel.checked = true;
            purchase.viewModel.password = '';
        };

        purchase.toggleAgreement = function() {
            $ionicScrollDelegate.scrollTop();
            purchase.viewModel.showAgreement = !purchase.viewModel.showAgreement;
        };

        $scope.$on('$ionicView.enter', function() {
            purchase.doRefresh();
        });

        purchase.doRefresh();
    }]);

'use strict';
angular.module('JYM', [
    'ionic',
    'ionic.service.core',
    'ionic.service.deploy',
    'ngCordova',
    'angular-progress-arc',
    'jym.constants',
    'jym.controllers',
    'jym.filters',
    'jym.interceptors',
    'jym.jinbaoyin',
    'jym.shangpiao',
    'jym.templates',
    'jym.user',
    'jym.yinpiao',
    'jym.zhuanqu'
])
    .config(['$ionicConfigProvider', function($ionicConfigProvider) {
        $ionicConfigProvider.views.transition('ios');
        $ionicConfigProvider.views.maxCache(0);
        $ionicConfigProvider.tabs.position('bottom');
        $ionicConfigProvider.backButton.text('').icon('ion-ios-arrow-back');
    }])
    .config(['$ionicAppProvider', function($ionicAppProvider) {
        $ionicAppProvider.identify({
            app_id: '6e37fda2',
            api_key: 'c1006ace57b45a0a7b5543cd6e65bb5e689b95d7b00cfad0'
        });
    }])
    .config(['$httpProvider', function($httpProvider) {
        // $httpProvider.defaults.withCredentials = true;
        $httpProvider.interceptors.push('globalInterceptor');
        $httpProvider.interceptors.push('loadingInterceptor');
    }])
    .config(['$compileProvider', function($compileProvider) {
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|file|blob|cdvfile):|data:image\//);
    }])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('jym', {
            url: '',
            'abstract': true,
            templateUrl: 'app/index.tpl.html'
        });

        $urlRouterProvider.otherwise('/jinbaoyin');
    }])
    .run(['$state', '$timeout', '$ionicDeploy', '$ionicPlatform', 'APP', function($state, $timeout, $ionicDeploy, $ionicPlatform, APP) {
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }

            var checkUpdate = function() {
                $ionicDeploy.setChannel(APP.ENV);
                $ionicDeploy.watch().then(function() {
                    }, function() {
                    },
                    function(hasUpdate) {
                        if (hasUpdate) {
                            $ionicDeploy.update().then(function() {
                                $ionicDeploy.load();
                            });
                        }
                    });
            };

            checkUpdate();
        });
    }])
    .run(['$rootScope', '$ionicLoading', function($rootScope, $ionicLoading) {
        $rootScope.$on('loading:show', function() {
            $ionicLoading.show({
                template: '<ion-spinner icon="spiral" class="spinner-energized"></ion-spinner>'
            });
        });

        $rootScope.$on('loading:hide', function() {
            $ionicLoading.hide();
        });

        $rootScope.$on('http:requestError', function() {
            $ionicLoading.hide();
            $ionicLoading.show({
                template: '请求失败',
                duration: 3000
            });
        });

        $rootScope.$on('http:responseError-500', function() {
            $ionicLoading.hide();
            $ionicLoading.show({
                template: '请稍后再试',
                duration: 3000
            });
        });
    }]);


'use strict';
angular.module('jym.services.jinbaoyin', [
    'jym.services'
])
    .service('JinbaoyinService', ['$http', 'URLS', 'JYMCacheService', function($http, URLS, JYMCacheService) {
        var service = this;

        service.buildOrder = function(data) {
            var url = URLS.INVESTING.JBY;

            return $http.post(url, data);
        };

        service.getAgreement = function(productIdentifier, agreementIndex) {
            var url = URLS.JINBAOYIN.AGREEMENT + productIdentifier + '-' + agreementIndex;

            return $http.get(url, {
                cache: JYMCacheService.get('productCache')
            }).then(function(result) {
                return result.data;
            });
        };

        service.getIndex = function() {
            var url = URLS.JINBAOYIN.FETCH;

            return $http.get(url, {
                cache: JYMCacheService.get('productCache')
            }).then(function(result) {
                return result.data;
            });
        };

        service.getInvestingAgreement = function() {
            return service.getIndex()
                .then(function(result) {
                    return service.getAgreement(result.productIdentifier, 2);
                });

        };

        service.getSold = function(productIdentifier) {
            var url = URLS.JINBAOYIN.SOLD + productIdentifier;

            return $http.get(url, {}).then(function(result) {
                return result.data;
            });
        };

        service.getTransferAgreement = function() {
            return service.getIndex()
                .then(function(result) {
                    return service.getAgreement(result.productIdentifier, 1);
                });
        };
    }]);

'use strict';
angular.module('jym.services.product', [
    'jym.services'
])
    .service('ProductService', ['$http', '$filter', 'RESOURCES', 'URLS', 'JYMCacheService', 'JYMTimeService', function($http, $filter, RESOURCES, URLS, JYMCacheService, JYMTimeService) {
        var service = this;

        service.checkProductPurchaseStatus = function(getProductInfo, amount) {
            return getProductInfo.then(function(product) {
                var repaid = product.repaid || false;

                var status = service.getSaleStatus(product.soldOut, product.startSellTime, product.endSellTime, repaid);
                if (status === 10) {
                    throw RESOURCES.ALERT.PRODUCT.NOT_ON_SALE;
                }

                if (status === 30) {
                    throw RESOURCES.ALERT.PRODUCT.SOLD_OUT;
                }

                if (product.financingSumAmount - product.paidAmount < amount) {
                    throw RESOURCES.ALERT.PRODUCT.SHARE_INSUFFICIENT;
                }

                if (amount % product.unitPrice !== 0) {
                    throw RESOURCES.ALERT.PRODUCT.AMOUNT_INCORRECT;
                }

                return product;
            });
        };

        service.fillDataForAgreement = function(content, data) {
            var agreement = content;
            if (data.orderNo) {
                agreement = agreement.replace(/<--协议编号-->/g, data.orderNo);
            }

            if (data.orderTime) {
                agreement = agreement.replace(/<--订单生成日期-->/g, $filter('time')(data.orderTime));
            }

            if (data.realName) {
                agreement = agreement.replace(/<--用户姓名-->/g, data.realName);
            }

            if (data.credentialNo) {
                agreement = agreement.replace(/<--证件号码-->/g, data.credentialNo);
            }

            if (data.principal) {
                agreement = agreement.replace(/<--投资金额-->/g, data.principal);
            }

            if (data.interest) {
                agreement = agreement.replace(/<--投资利息-->/g, data.principal);
            }

            if (data.cellphone) {
                agreement = agreement.replace(/<--用户ID-->/g, data.cellphone);
            }

            return agreement;
        };

        service.getAgreementContent = function(productIdentifier, agreementIndex) {
            if (agreementIndex <= 1) {
                agreementIndex = 1;
            }

            var url = URLS.REGULARPRDUCT.AGREEMENT + productIdentifier + '-' + agreementIndex;

            return $http.get(url, {
                cache: JYMCacheService.get('productCache')
            }).then(function(result) {
                return result.data;
            });
        };

        service.getInterest = function(pricipal, _yield, duration) {
            // 返回的金额以 分 为单位
            // 本金的单位为 分
            // 收益率的单位为 万分之一
            return Math.floor(pricipal * _yield * duration / 3600000);
        };

        service.getRegularPage = function(pageIndex, productCategoryName) {
            var productCategory = 100000010;

            switch (productCategoryName) {
                case 'yinpiao':
                    productCategory = 100000010;
                    break;
                case 'shangpiao':
                    productCategory = 100000020;
                    break;
                case 'fudian':
                    productCategory = 210001010;
                    break;
                case 'fuxin':
                    productCategory = 210003010;
                    break;
                case 'shibing':
                    productCategory = 210002020;
                    break;
                default :
                    productCategory = 100000010;
            }

            var url = URLS.REGULARPRDUCT.PAGE + pageIndex + '?categories=' + productCategory;

            return $http.get(url, {
                cache: JYMCacheService.get('productCache')
            }).then(function(result) {
                return result.data;
            });
        };

        service.getRegularProductInfo = function(productIdentifier) {
            var url = URLS.REGULARPRDUCT.INFO + productIdentifier;

            return $http.get(url, {
                cache: JYMCacheService.get('productCache')
            }).then(function(result) {
                return result.data;
            });
        };

        service.getSaleProgress = function(paidAmount, financingSumAmount, soldOut, startSellTime, endSellTime, repaid) {
            var status = service.getSaleStatus(soldOut, startSellTime, endSellTime, repaid);

            if (status === 30 || status === 40) {
                return 100;
            }

            if (status === 10) {
                return 0;
            }

            if (paidAmount >= financingSumAmount) {
                return 100;
            }

            if (paidAmount >= financingSumAmount * 0.991) {
                return 99;
            }

            return (paidAmount / financingSumAmount * 100).toFixed(0);
        };

        service.getSaleStatus = function(soldOut, startSellTime, endSellTime, repaid) {
            repaid = repaid || false;

            var now = JYMTimeService.getTime();
            // 项目结束
            if (repaid === true) {
                return 40;
            }
            // 售罄
            if (soldOut === true || moment(endSellTime) < now) {
                return 30;
            }

            // 在售
            if (moment(startSellTime) < now) {
                return 20;
            }

            // 待售
            return 10;
        };

        service.getShangpiaoPage = function(pageIndex) {
            return service.getRegularPage(pageIndex, 'shangpiao');
        };

        service.getSold = function(productIdentifier) {
            var url = URLS.REGULARPRDUCT.SOLD + productIdentifier;

            return $http.get(url).then(function(result) {
                return result.data;
            });
        };

        service.getYinpiaoPage = function(pageIndex) {
            return service.getRegularPage(pageIndex, 'yinpiao');
        };

        service.getValueDateModeText = function(valueDateMode, valueDate, specifyValueDate) {
            if (specifyValueDate) {
                return moment(valueDate).format('LL');
            }

            if (valueDateMode <= 0) {
                return '购买成功立刻起息';
            }

            return '购买成功T+' + valueDateMode + '工作日起息';
        };
    }]);

'use strict';
angular.module('jym.services.purchase', [
    'jym.services',
    'jym.services.jinbaoyin'
])
    .service('PurchaseService', ['$http', 'JinbaoyinService', 'JYMUtilityService', function($http, JinbaoyinService, JYMUtilityService) {
        var service = this;

        var jbyOrder = {};
        var regularOrder = {};

        service.buildNewJBYOrder = function(amount, productIdentifier) {
            jbyOrder.amount = amount;
            jbyOrder.productIdentifier = productIdentifier;
        };

        service.buildRegularOrder = function(amount, productIdentifier, productCategory) {
            regularOrder.amount = amount;
            regularOrder.productIdentifier = productIdentifier;
            regularOrder.productCategory = productCategory;
        };

        service.clearJBYOrder = function() {
            jbyOrder = {};
        };

        service.clearRegularOrder = function() {
            regularOrder = {};
        };

        service.getNewJBYOrder = function() {
            if (!jbyOrder.amount || jbyOrder.amount <= 0) {
                jbyOrder.amount = 1000;
            }

            if (!jbyOrder.productIdentifier) {
                JYMUtilityService.goWithDisableBack('jym.jinbaoyin');
            }

            return jbyOrder;
        };

        service.getRegularOrder = function(productCategory) {
            if (!regularOrder.amount || regularOrder.amount <= 0) {
                regularOrder.amount = 1000;
            }

            if (regularOrder.productCategory !== productCategory) {
                regularOrder.productCategory = productCategory;
            }

            if (!regularOrder.productIdentifier) {
                if (productCategory === 100000010) {
                    JYMUtilityService.goWithDisableBack('jym.yinpiao');
                } else if (productCategory === 100000020) {
                    JYMUtilityService.goWithDisableBack('jym.shangpiao');
                } else if (productCategory === 100000030) {
                    JYMUtilityService.goWithDisableBack('jym.jinbaoyin');
                } else {
                    JYMUtilityService.goWithDisableBack('jym.zhuanqu');
                }
            }
            return regularOrder;
        };
    }]);

'use strict';
angular.module('jym.services.user', [
    'ionic',
    'jym.services'
])
    .service('UserService', ['$http', 'URLS', 'RESOURCES', 'JYMAuthService', 'JYMCacheService', 'JYMUtilityService', function($http, URLS, RESOURCES, JYMAuthService, JYMCacheService, JYMUtilityService) {
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

        service.checkUserPurchaseStatus = function() {
            return service.getUserInfo()
                .then(function(user) {
                    if (user.closed === true) {
                        throw RESOURCES.ALERT.USER.CLOSED;
                    }

                    if (user.hasSetPaymentPassword === false) {
                        throw RESOURCES.ALERT.USER.HAS_NOT_SET_PAYMENT_PASSWORD;
                    }

                    if (user.hasSetPaymentPassword >= 5) {
                        throw RESOURCES.ALERT.USER.PAYMENT_PASSWORD_NEED_RESET;
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

        service.investingRegular = function(amount, paymentPassword, productIdentifier) {
            var url = URLS.INVESTING.REGULAR;

            return $http.post(url, {
                amount: amount,
                paymentPassword: paymentPassword,
                productIdentifier: productIdentifier
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
            var url = URLS.SETTLEACCOUNT.LIST + pageIndex;

            return $http.get(url, {
                cache: JYMCacheService.get('userCache')
            }).then(function(result) {
                return result.data;
            });
        };

        service.getSettelAccountTransaction = function(transactionIdentifier) {
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
                inviteBy: 'jinyinmao',
                outletCode: 'jinyinmao',
                password: password,
                token: token
            })
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
            var url = URLS.SETTLEACCOUNT.WITHDRAWAL;

            return $http.post(url, {
                amount: amount,
                bankCardNo: bankCardNo,
                paymentPassword: paymentPassword
            }).then(function(result) {
                return result.data;
            });
        };
    }]);

/*jshint -W024 */
'use strict';
angular.module('jym.shangpiao.detail', [
    'jym.services',
    'jym.services.product',
    'jym.services.purchase',
    'jym.services.user',
    'jym.shangpiao.purchase'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.shangpiao-detail', {
                url: '/shangpiao/detail/{productIdentifier}',
                views: {
                    shangpiao: {
                        controller: 'ShangpiaoDetailCtrl as product',
                        templateUrl: 'app/shangpiao/detail/detail.tpl.html'
                    }
                }
            });
    }])
    .controller('ShangpiaoDetailCtrl', ['$scope', '$state', '$stateParams', '$q', '$timeout', 'ProductService', 'PurchaseService', 'UserService', 'JYMUtilityService', function($scope, $state, $stateParams, $q, $timeout, ProductService, PurchaseService, UserService, JYMUtilityService) {
        var product = this;

        product.model = {};
        product.viewModel = {};

        var getSaleProgress = function(product) {
            return ProductService.getSaleProgress(product.paidAmount, product.financingSumAmount, product.soldOut, product.startSellTime, product.endSellTime, product.repaid);
        };

        var getSaleStatus = function(product) {
            return ProductService.getSaleStatus(product.soldOut, product.startSellTime, product.endSellTime, product.repaid);
        };

        var getValueDateModeText = function(valueDateMode) {
            return ProductService.getValueDateModeText(valueDateMode);
        };

        product.doRefresh = function() {
            product.viewModel.investCount = product.viewModel.investCount || 10;
            product.viewModel.investAmount = 0;
            product.viewModel.expectedInterest = 0;

            product.refreshProduct();

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        product.investCountChange = function() {
            if (product.viewModel.investCount < 0) {
                product.viewModel.investCount = 0;
            }

            if (product.viewModel.investCount > product.viewModel.remainCount) {
                product.viewModel.investCount = parseInt(product.viewModel.remainCount, 10);
            }

            product.refreshInvestViewModel();
        };

        product.getAccrualDuration = function() {
            var diff = (moment(product.model.settleDate) - moment(product.model.currentValueDate)) / (1000 * 60 * 60 * 24);
            return parseInt(diff, 10);
        };

        product.goPurchase = function() {
            if (product.goPurchaseButtonEnable()) {
                var amount = product.viewModel.investCount * product.model.unitPrice;
                var checkUserPurchaseStatus = UserService.checkUserPurchaseStatus();
                var checkProductPurchaseStatus = ProductService.checkProductPurchaseStatus(product.refreshProduct(), amount);
                $q.all([checkUserPurchaseStatus, checkProductPurchaseStatus])
                    .then(function(result) {
                        PurchaseService.buildRegularOrder(amount, result[1].productIdentifier, 100000020);

                        $state.go('jym.shangpiao-purchase');
                    })
                    .catch(function(result) {
                        JYMUtilityService.showAlert(result);
                    });
            }
        };

        product.goPurchaseButtonEnable = function() {
            return product.viewModel.status === 20 && product.viewModel.investAmount && product.viewModel.investAmount >= product.viewModel.unitPrice;
        };

        product.refreshInvestViewModel = function() {
            if (isFinite(product.viewModel.investCount)) {
                product.viewModel.investAmount = product.viewModel.investCount * product.viewModel.unitPrice;
            } else {
                product.viewModel.investAmount = 0;
            }

            product.viewModel.expectedInterest = (ProductService.getInterest(product.viewModel.investAmount * 100, product.model.yield, product.getAccrualDuration()) / 100).toFixed(2);
        };

        product.refreshProduct = function() {
            return ProductService.getRegularProductInfo($stateParams.productIdentifier)
                .then(function(result) {
                    product.model = result;
                    product.refreshViewModel();
                    product.refreshInvestViewModel();
                    return result;
                });
        };

        product.refreshViewModel = function() {
            product.viewModel.bankName = product.model.bankName;
            product.viewModel.currentValueDate = product.model.currentValueDate;
            product.viewModel.drawee = product.model.drawee;
            product.viewModel.draweeInfo = product.model.draweeInfo;
            product.viewModel.endorseImageLink = product.model.endorseImageLink;
            product.viewModel.endSellTime = product.model.endSellTime;
            product.viewModel.enterpriseInfo = product.model.enterpriseInfo;
            product.viewModel.enterpriseLicense = product.model.enterpriseLicense;
            product.viewModel.enterpriseName = product.model.enterpriseName;
            product.viewModel.financingSumAmount = product.model.financingSumAmount / 1000000;
            product.viewModel.issueNo = product.model.issueNo;
            product.viewModel.issueTime = product.model.issueTime;
            product.viewModel.paidAmount = product.model.paidAmount;
            product.viewModel.period = product.model.period;
            product.viewModel.productCategory = product.model.productCategory;
            product.viewModel.productIdentifier = product.model.productIdentifier;
            product.viewModel.productName = product.model.productName;
            product.viewModel.productNo = product.model.productNo;
            product.viewModel.remainCount = ((product.model.financingSumAmount - product.model.paidAmount) / product.model.unitPrice).toFixed(0);
            product.viewModel.repaid = product.model.repaid;
            product.viewModel.repaidTime = product.model.repaidTime;
            product.viewModel.repaymentDeadline = product.model.repaymentDeadline;
            product.viewModel.riskManagement = product.model.riskManagement;
            product.viewModel.riskManagementInfo = product.model.riskManagementInfo;
            product.viewModel.riskManagementMode = product.model.riskManagementMode;
            product.viewModel.sellProgress = getSaleProgress(product.model);
            product.viewModel.sellProgressInCircleProgress = product.viewModel.sellProgress / 100;
            product.viewModel.settleDate = product.model.settleDate;
            product.viewModel.soldOut = product.model.soldOut;
            product.viewModel.soldOutTime = product.model.soldOutTime;
            product.viewModel.specifyValueDate = product.model.specifyValueDate;
            product.viewModel.startSellTime = product.model.startSellTime;
            product.viewModel.status = getSaleStatus(product.model);
            product.viewModel.unitPrice = (product.model.unitPrice / 100).toFixed(0);
            product.viewModel.usage = product.model.usage;
            product.viewModel.valueDate = product.model.valueDate;
            product.viewModel.valueDateMode = product.model.valueDateMode;
            product.viewModel.valueDateText = getValueDateModeText(product.model.valueDateMode, product.model.valueDate, product.model.specifyValueDate);
            product.viewModel.yield = product.model.yield / 100;


            if (product.viewModel.status !== 20) {
                product.viewModel.remainCount = 0;
            }

            switch (product.viewModel.status) {
                case 10:
                    product.viewModel.statusText = '待售';
                    break;
                case 20:
                    product.viewModel.statusText = '抢购';
                    break;
                case 30:
                    product.viewModel.statusText = '售罄';
                    break;
                case 40:
                    product.viewModel.statusText = '结束';
                    break;
                default :
                    product.viewModel.statusText = '';
            }
        };

        product.doRefresh();
    }]);

'use strict';
angular.module('jym.shangpiao.purchase', [
    'jym.services',
    'jym.services.product',
    'jym.services.purchase',
    'jym.services.user',
    'jym.user.orders-detail'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.shangpiao-purchase', {
                url: '/shangpiao/purchase',
                views: {
                    shangpiao: {
                        controller: 'ShangpiaoPurchaseCtrl as purchase',
                        templateUrl: 'app/shangpiao/purchase/purchase.tpl.html'
                    }
                }
            });
    }])
    .controller('ShangpiaoPurchaseCtrl', ['$scope', '$timeout', '$ionicScrollDelegate', 'RESOURCES', 'ProductService', 'PurchaseService', 'UserService', 'JYMUtilityService', function($scope, $timeout, $ionicScrollDelegate, RESOURCES, ProductService, PurchaseService, UserService, JYMUtilityService) {
        var purchase = this;

        purchase.model = {};
        purchase.viewModel = {};

        purchase.check = function() {
            purchase.viewModel.checked = !purchase.viewModel.checked;
        };

        purchase.doRefresh = function() {
            purchase.viewModel.agreement1 = '委托协议';
            purchase.viewModel.agreement2 = '借款协议';
            purchase.viewModel.showAgreement1 = false;
            purchase.viewModel.showAgreement2 = false;

            purchase.resetInput();

            purchase.refreshUserInfo()
                .then(function(result) {
                    purchase.model.user = result;
                    purchase.model.order = PurchaseService.getRegularOrder(100000020);
                    purchase.refreshViewModel();
                    return result;
                })
                .then(function() {
                    var agreementData = {
                        cellphone: purchase.model.user.cellphone,
                        credentialNo: purchase.model.user.credentialNo,
                        realName: purchase.model.user.realName
                    };

                    purchase.refreshAgreement(1)
                        .then(function(result) {
                            purchase.viewModel.agreement1 = ProductService.fillDataForAgreement(result.content, agreementData);
                        });

                    purchase.refreshAgreement(2)
                        .then(function(result) {
                            purchase.viewModel.agreement2 = ProductService.fillDataForAgreement(result.content, agreementData);
                        });
                });
        };

        purchase.refreshAgreement = function(agreementIndex) {
            return ProductService.getAgreementContent(purchase.model.order.productIdentifier, agreementIndex);
        };

        purchase.refreshUserInfo = function() {
            return UserService.getUserInfo();
        };

        purchase.refreshViewModel = function() {
            purchase.viewModel.balance = (purchase.model.user.balance / 100).toFixed(2);
            purchase.viewModel.amount = (purchase.model.order.amount / 100).toFixed(2);
        };

        purchase.purchaseButtonEnable = function() {
            return purchase.viewModel.checked && purchase.viewModel.amount && purchase.viewModel.password && purchase.model.user.balance >= purchase.model.order.amount;
        };

        purchase.purchase = function() {
            if (purchase.purchaseButtonEnable()) {
                var amount = purchase.model.order.amount;
                UserService.investingRegular(amount, purchase.viewModel.password, purchase.model.order.productIdentifier)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.INVESTING.REGULAR);

                            PurchaseService.clearRegularOrder();

                            $timeout(function() {
                                purchase.resetInput();
                                JYMUtilityService.goWithDisableBack('jym.user-orders-detail', { orderIdentifier: result.orderIdentifier });
                            }, 1000);
                        }
                    });
            }
        };

        purchase.resetInput = function() {
            purchase.viewModel.checked = true;
            purchase.viewModel.password = '';
        };

        purchase.toggleAgreement1 = function() {
            purchase.viewModel.showAgreement2 = false;
            $ionicScrollDelegate.scrollTop();
            purchase.viewModel.showAgreement1 = !purchase.viewModel.showAgreement1;
        };

        purchase.toggleAgreement2 = function() {
            purchase.viewModel.showAgreement1 = false;
            $ionicScrollDelegate.scrollTop();
            purchase.viewModel.showAgreement2 = !purchase.viewModel.showAgreement2;
        };

        $scope.$on('$ionicView.enter', function() {
            purchase.doRefresh();
        });

        purchase.doRefresh();
    }]);

/*jshint -W024 */
'use strict';
angular.module('jym.shangpiao', [
    'jym.services',
    'jym.shangpiao.detail'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.shangpiao', {
                url: '/shangpiao',
                views: {
                    shangpiao: {
                        controller: 'ShangpiaoIndexCtrl as products',
                        templateUrl: 'app/shangpiao/index.tpl.html'
                    }
                }
            });
    }])
    .controller('ShangpiaoIndexCtrl', ['$scope', '$timeout', '$filter', 'ProductService', function($scope, $timeout, $filter, ProductService) {
        var products = this;

        products.viewModel = {};

        var getSaleProgress = function(product) {
            return ProductService.getSaleProgress(product.paidAmount, product.financingSumAmount, product.soldOut, product.startSellTime, product.endSellTime, product.repaid);
        };

        var getSaleStatus = function(product) {
            return ProductService.getSaleStatus(product.soldOut, product.startSellTime, product.endSellTime, product.repaid);
        };

        var getValueDateModeText = function(valueDateMode, valueDate, specifyValueDate) {
            return ProductService.getValueDateModeText(valueDateMode, valueDate, specifyValueDate);
        };

        var getViewItem = function(modelItem) {
            var item = {};
            item.bankName = modelItem.bankName;
            item.currentValueDate = modelItem.currentValueDate;
            item.drawee = modelItem.drawee;
            item.draweeInfo = modelItem.draweeInfo;
            item.endorseImageLink = modelItem.endorseImageLink;
            item.endSellTime = modelItem.endSellTime;
            item.enterpriseInfo = modelItem.enterpriseInfo;
            item.enterpriseLicense = modelItem.enterpriseLicense;
            item.enterpriseName = modelItem.enterpriseName;
            item.financingSumAmount = modelItem.financingSumAmount / 1000000;
            item.issueNo = modelItem.issueNo;
            item.issueTime = modelItem.issueTime;
            item.paidAmount = modelItem.paidAmount;
            item.period = modelItem.period;
            item.productCategory = modelItem.productCategory;
            item.productIdentifier = modelItem.productIdentifier;
            item.productName = modelItem.productName + ' ' + '第' + modelItem.issueNo + '期';
            item.productNo = modelItem.productNo;
            item.remainCount = ((modelItem.financingSumAmount - modelItem.paidAmount) / modelItem.unitPrice).toFixed(0);
            item.repaid = modelItem.repaid;
            item.repaidTime = modelItem.repaidTime;
            item.repaymentDeadline = modelItem.repaymentDeadline;
            item.riskManagement = modelItem.riskManagement;
            item.riskManagementInfo = modelItem.riskManagementInfo;
            item.riskManagementMode = modelItem.riskManagementMode;
            item.sellProgress = getSaleProgress(modelItem);
            item.sellProgressInCircleProgress = item.sellProgress / 100;
            item.settleDate = modelItem.settleDate;
            item.soldOut = modelItem.soldOut;
            item.soldOutTime = modelItem.soldOutTime;
            item.specifyValueDate = modelItem.specifyValueDate;
            item.startSellTime = modelItem.startSellTime;
            item.status = getSaleStatus(modelItem);
            item.unitPrice = (modelItem.unitPrice / 100).toFixed(0);
            item.usage = modelItem.usage;
            item.valueDate = modelItem.valueDate;
            item.valueDateMode = modelItem.valueDateMode;
            item.valueDateText = getValueDateModeText(modelItem.valueDateMode, modelItem.valueDate, modelItem.specifyValueDate);
            item.yield = modelItem.yield / 100;

            switch (item.status) {
                case 10:
                    item.statusText = '待售';
                    item.timeText = '开售时间 ' + $filter('time')(item.startSellTime);
                    break;
                case 20:
                    item.statusText = '抢购 已售出' + item.sellProgress + '%';
                    item.timeText = '起息时间 ' + item.valueDateText;
                    break;
                case 30:
                    item.statusText = '售罄 请期待下期';
                    item.timeText = '预计还款时间 ' + $filter('time')(item.repaymentDeadline);
                    break;
                case 40:
                    item.statusText = '项目结束';
                    item.timeText = '还款时间 ' + $filter('time')(item.repaidTime);
                    break;
                default :
                    item.statusText = '';
                    item.timeText = '';
            }

            return item;
        };

        products.doRefresh = function() {
            products.viewModel.items = [];
            products.viewModel.currentPageIndex = 0;
            products.viewModel.nextPageIndex = 0;
            products.viewModel.pageSize = 10;
            products.viewModel.totalCount = 0;
            products.viewModel.totalPageCount = 1;
            products.viewModel.loading = false;

            products.loadMoreData();

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        products.loadMoreData = function() {
            if (products.viewModel.loading) {
                return;
            }

            products.viewModel.loading = true;

            ProductService.getShangpiaoPage(products.viewModel.nextPageIndex)
                .then(function(result) {
                    products.viewModel.currentPageIndex = result.pageIndex;
                    products.viewModel.nextPageIndex = result.pageIndex + 1;
                    products.viewModel.pageSize = result.pageSize;
                    products.viewModel.totalCount = result.totalCount;
                    products.viewModel.totalPageCount = result.totalPageCount;

                    _.forEach(result.items, function(i) {
                        products.viewModel.items.push(getViewItem(i));
                    });

                    products.viewModel.loading = false;
                });
            $timeout(function() {
                $scope.$broadcast('scroll.infiniteScrollComplete');
            }, 1000);
        };

        products.moreDataCanBeLoaded = function() {
            return products.viewModel.nextPageIndex < products.viewModel.totalPageCount;
        };

        products.doRefresh();
    }]);

'use strict';
angular.module('jym.user.about', [])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.user-about', {
                url: '/about',
                views: {
                    user: {
                        controller: 'AboutCtrl as ctrl',
                        templateUrl: 'app/user/about/about.tpl.html'
                    }
                }
            });
    }])
    .controller('AboutCtrl', ['APP', function(APP) {
        var ctrl = this;

        ctrl.viewModel = {};

        ctrl.viewModel.version = APP.VERSION;
    }]);

'use strict';
angular.module('jym.user.bank-card-add', [
    'jym.services.user'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.user-bank-card-add', {
                url: '/user/bank-card/add',
                views: {
                    user: {
                        controller: 'UserBankCardAddCtrl as card',
                        templateUrl: 'app/user/bank-card/add/add.tpl.html'
                    }
                }
            })
            .state('jym.user-bank-card-add-bank-selector', {
                url: '/user/bank-card/add/select-bank',
                views: {
                    user: {
                        controller: 'UserBankCardAddBankSelectorCtrl as ctrl',
                        templateUrl: 'app/user/bank-card/add/bankSelector.tpl.html'
                    }
                }
            })
            .state('jym.user-bank-card-add-method-selector', {
                url: '/user/bank-card/add/select-method',
                views: {
                    user: {
                        templateUrl: 'app/user/bank-card/add/methodSelector.tpl.html'
                    }
                }
            });
    }])
    .controller('UserBankCardAddCtrl', ['$scope', '$state', '$timeout', 'RESOURCES', 'UserService', 'JYMUtilityService', function($scope, $state, $timeout, RESOURCES, UserService, JYMUtilityService) {
        var card = this;

        card.model = {};
        card.viewModel = {};

        card.buttonEnable = function() {
            return card.viewModel.cellphone && card.viewModel.realName && card.viewModel.credentialNo && card.viewModel.bankCardNo && card.viewModel.bankName;
        };

        card.doRefresh = function() {
            card.refreshUser()
                .then(function(result) {
                    card.model.user = result;
                    card.refreshViewModel();
                    return result;
                });
        };

        card.refreshUser = function() {
            return UserService.getUserInfo();
        };

        card.refreshViewModel = function() {
            card.viewModel.cellphone = card.model.user.cellphone;
            card.viewModel.bankCardsCount = card.model.user.bankCardsCount;
            card.viewModel.hasSetPaymentPassword = card.model.user.hasSetPaymentPassword;
            card.viewModel.shouldAddBankCard = card.viewModel.bankCardsCount <= 0;
            card.viewModel.verified = card.model.user.verified;

            if (card.viewModel.verified) {
                card.viewModel.credentialNo = card.model.user.credentialNo;
                card.viewModel.realName = card.model.user.realName;
            } else {
                card.viewModel.credentialNo = card.viewModel.credentialNo || '';
                card.viewModel.realName = card.viewModel.realName || '';
            }

            card.viewModel.bankCardNo = card.viewModel.bankCardNo || '';
            card.viewModel.bankName = UserService.sharedData.addBankName || '工商银行';
        };

        card.resetInput = function() {
            card.viewModel.bankCardNo = '';
            card.viewModel.cellphone = '';
            card.viewModel.credentialNo = '';
            card.viewModel.realName = '';
        };

        card.verify = function() {
            if (card.buttonEnable()) {
                if (card.viewModel.verified) {
                    UserService.addBankCardByYilian(card.viewModel.bankCardNo, card.viewModel.bankName)
                        .then(function(result) {
                            if (result) {
                                JYMUtilityService.showAlert(RESOURCES.TIP.BANKCARD.SIGN);

                                $timeout(function() {
                                    card.resetInput();
                                    JYMUtilityService.goWithDisableBack('jym.user-bank-card-yilian-notice');
                                }, 1000);
                            }
                        });
                } else {
                    UserService.authenticate(card.viewModel.bankCardNo, card.viewModel.bankName, card.viewModel.credentialNo, card.viewModel.realName)
                        .then(function(result) {
                            if (result) {
                                JYMUtilityService.showAlert(RESOURCES.TIP.BANKCARD.SIGN);

                                $timeout(function() {
                                    card.resetInput();
                                    JYMUtilityService.goWithDisableBack('jym.user-bank-card-yilian-notice');
                                }, 1000);
                            }
                        });
                }
            }
        };

        $scope.$on('$ionicView.enter', function() {
            card.doRefresh();
        });

        card.doRefresh();
    }])
    .controller('UserBankCardAddBankSelectorCtrl', ['$ionicHistory', 'UserService', function($ionicHistory, UserService) {
        var ctrl = this;

        ctrl.items = [
            '浦发银行',
            '深发银行',
            '平安银行',
            '民生银行',
            '工商银行',
            '农业银行',
            '建设银行',
            '招商银行',
            '广发银行',
            '广州银行',
            '邮储银行',
            '兴业银行',
            '光大银行',
            '华夏银行',
            '中信银行',
            '广州农商行',
            '中国银行',
            '富滇银行'
        ];

        ctrl.select = function(bankName) {
            UserService.sharedData.addBankName = bankName;
            $ionicHistory.goBack();
        };
    }]);

'use strict';
angular.module('jym.user.bank-card', [
    'jym.services.user',
    'jym.user.bank-card-add',
    'jym.user.bank-card-detail'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.user-bank-card', {
                url: '/user/bank-card',
                views: {
                    user: {
                        controller: 'UserBankCardCtrl as cards',
                        templateUrl: 'app/user/bank-card/bank-card.tpl.html'
                    }
                }
            })
            .state('jym.user-bank-card-yilian-notice', {
                url: '/user/bank-card/yilian-notice',
                views: {
                    user: {
                        controller: 'UserBankCardYilianNoticeCtrl as ctrl',
                        templateUrl: 'app/user/bank-card/yilian-notice.tpl.html'
                    }
                }
            });
    }])
    .controller('UserBankCardCtrl', ['$scope', '$state', '$timeout', 'RESOURCES', 'UserService', function($scope, $state, $timeout, RESOURCES, UserService) {
        var cards = this;

        cards.model = {};
        cards.viewModel = {};
        cards.viewModel.items = [];

        cards.doRefresh = function() {
            cards.refreshBankCards()
                .then(function(result) {
                    cards.model = result;
                    cards.refreshViewModel();
                    return result;
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        cards.refreshBankCards = function() {
            return UserService.getBankCards();
        };

        cards.refreshViewModel = function() {
            cards.viewModel.items = cards.model;
        };

        cards.showAddButton = function() {
            return cards.viewModel.items.length < 10;
        };

        $scope.$on('$ionicView.enter', function() {
            cards.doRefresh();
        });

        cards.doRefresh();
    }])
    .controller('UserBankCardYilianNoticeCtrl', ['JYMUtilityService', function(JYMUtilityService) {
        var ctrl = this;

        ctrl.go = function(toState, params) {
            params = params || {};
            JYMUtilityService.goWithDisableBack(toState, params);
        };
    }]);

'use strict';
angular.module('jym.user.bank-card-detail', [
    'jym.services',
    'jym.services.user',
    'jym.user.bank-card-upgrade'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.user-bank-card-detail', {
                url: '/user/bank-card-detail/{bankCardNo}',
                views: {
                    user: {
                        controller: 'UserBankCardDetailCtrl as card',
                        templateUrl: 'app/user/bank-card/detail/detail.tpl.html'
                    }
                }
            });
    }])
    .controller('UserBankCardDetailCtrl', ['$scope', '$state', '$stateParams', '$timeout', '$ionicHistory', 'RESOURCES', 'UserService', 'JYMUtilityService', function($scope, $state, $stateParams, $timeout, $ionicHistory, RESOURCES, UserService, JYMUtilityService) {
        var card = this;

        card.model = {};
        card.viewModel = {};

        card.doRefresh = function() {
            card.refreshBankCard()
                .then(function(result) {
                    card.model = result;
                    card.refreshViewModel();
                    return result;
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        card.refreshBankCard = function() {
            return UserService.getBankCard($stateParams.bankCardNo);
        };

        card.refreshViewModel = function() {
            card.viewModel = card.model;
        };

        card.removeCard = function() {
            if (card.model.bankCardNo) {
                UserService.removeCard(card.model.bankCardNo)
                    .then(function() {
                        JYMUtilityService.showAlert(RESOURCES.TIP.BANKCARD.REMOVE_SUCCESS);

                        $timeout(function() {
                            $ionicHistory.goBack();
                        }, 1000);
                    });
            }
        };

        $scope.$on('$ionicView.enter', function() {
            card.doRefresh();
        });

        card.doRefresh();
    }]);

'use strict';
angular.module('jym.user.bank-card-upgrade', [
    'jym.services.user'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.user-bank-card-upgrade', {
                url: '/user/bank-card-upgrade/{bankCardNo}',
                views: {
                    user: {
                        controller: 'UserBankCardUpgradeCtrl as card',
                        templateUrl: 'app/user/bank-card/upgrade/upgrade.tpl.html'
                    }
                }
            });
    }])
    .controller('UserBankCardUpgradeCtrl', ['$scope', '$state', '$stateParams', '$timeout', 'RESOURCES', 'UserService', 'JYMUtilityService', function($scope, $state, $stateParams, $timeout, RESOURCES, UserService, JYMUtilityService) {
        var card = this;

        card.model = {};
        card.viewModel = {};

        card.buttonEnable = function() {
            return card.viewModel.cellphone && card.viewModel.realName && card.viewModel.credentialNo && card.viewModel.bankCardNo && card.viewModel.bankName;
        };

        card.doRefresh = function() {
            card.refreshUser()
                .then(function(result) {
                    card.model.user = result;
                    return result;
                }).then(function() {
                    card.refreshBankCard()
                        .then(function(result) {
                            card.model.card = result;
                            card.refreshViewModel();

                        });
                });
        };

        card.refreshBankCard = function() {
            return UserService.getBankCard($stateParams.bankCardNo);
        };

        card.refreshUser = function() {
            return UserService.getUserInfo();
        };

        card.refreshViewModel = function() {
            card.viewModel.verified = card.model.user.verified;
            card.viewModel.cellphone = card.model.user.cellphone;

            if (card.viewModel.verified) {
                card.viewModel.credentialNo = card.model.user.credentialNo;
                card.viewModel.realName = card.model.user.realName;
            } else {
                card.viewModel.credentialNo = card.viewModel.credentialNo || '';
                card.viewModel.realName = card.viewModel.realName || '';
            }

            card.viewModel.bankCardNo = card.model.card.bankCardNo;
            card.viewModel.bankName = card.model.card.bankName;
        };

        card.verify = function() {
            if (card.buttonEnable()) {

                if (card.viewModel.verified) {
                    UserService.verifyBankCardByYilian(card.viewModel.bankCardNo)
                        .then(function(result) {
                            if (result) {
                                JYMUtilityService.showAlert(RESOURCES.TIP.BANKCARD.SIGN);

                                $timeout(function() {
                                    JYMUtilityService.goWithDisableBack('jym.user-bank-card-yilian-notice');
                                }, 1000);
                            }
                        });
                } else {
                    UserService.authenticate(card.viewModel.bankCardNo, card.viewModel.bankName, card.viewModel.credentialNo, card.viewModel.realName)
                        .then(function(result) {
                            if (result) {
                                JYMUtilityService.showAlert(RESOURCES.TIP.BANKCARD.SIGN);

                                $timeout(function() {
                                    JYMUtilityService.goWithDisableBack('jym.user-bank-card-yilian-notice');
                                }, 1000);
                            }
                        });
                }
            }
        };

        $scope.$on('$ionicView.enter', function() {
            card.doRefresh();
        });

        card.doRefresh();
    }]);

'use strict';
angular.module('jym.user.jinbaoyin-detail', [
    'jym.services',
    'jym.services.user'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.user-jinbaoyin-detail', {
                url: '/user/jinbaoyin/detail/{transactionIdentifier}',
                views: {
                    user: {
                        controller: 'UserJinbaoyinDetailCtrl as transaction',
                        templateUrl: 'app/user/jinbaoyin/detail/detail.tpl.html'
                    }
                }
            });
    }])
    .controller('UserJinbaoyinDetailCtrl', ['$scope', '$stateParams', '$timeout', '$q', '$ionicHistory', '$ionicScrollDelegate', 'JinbaoyinService', 'ProductService', 'UserService', 'JYMUtilityService', function($scope, $stateParams, $timeout, $q, $ionicHistory, $ionicScrollDelegate, JinbaoyinService, ProductService, UserService, JYMUtilityService) {
        var transaction = this;

        transaction.model = {};
        transaction.viewModel = {};

        transaction.canBack = function() {
            return $ionicHistory.backView();
        };

        transaction.doRefresh = function() {
            transaction.viewModel.agreement = '';
            transaction.viewModel.showAgreement = false;

            var refreshTransaction = transaction.refreshTransaction()
                .then(function(result) {
                    transaction.model.transaction = result;
                    transaction.refreshViewModel();
                    return result;
                });

            var refreshUser = transaction.refreshUser()
                .then(function(result) {
                    transaction.model.user = result;
                    return result;
                });

            $q.all([refreshTransaction, refreshUser])
                .then(function() {
                    var agreementData = {
                        cellphone: transaction.model.user.cellphone,
                        credentialNo: transaction.model.user.credentialNo,
                        orderTime: transaction.viewModel.resultTime,
                        principal: transaction.viewModel.amount,
                        realName: transaction.model.user.realName
                    };

                    transaction.refreshAgreement()
                        .then(function(result) {
                            transaction.viewModel.agreement = ProductService.fillDataForAgreement(result.content, agreementData);
                        });
                });


            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        transaction.go = function(toState, params) {
            params = params || {};
            JYMUtilityService.goWithDisableBack(toState, params);
        };

        transaction.refreshTransaction = function() {
            return UserService.getJBYAccountTransaction($stateParams.transactionIdentifier);
        };

        transaction.refreshAgreement = function() {
            if (transaction.viewModel.trade === 0) {
                return JinbaoyinService.getInvestingAgreement();
            } else {
                return JinbaoyinService.getTransferAgreement();
            }
        };

        transaction.refreshViewModel = function() {
            transaction.viewModel.amount = (transaction.model.transaction.amount / 100).toFixed(2);
            transaction.viewModel.predeterminedResultDate = transaction.model.transaction.predeterminedResultDate;
            transaction.viewModel.resultCode = transaction.model.transaction.resultCode;
            transaction.viewModel.resultTime = transaction.model.transaction.resultTime;
            transaction.viewModel.settleAccountTranscationId = transaction.model.transaction.settleAccountTranscationId;
            transaction.viewModel.trade = transaction.model.transaction.trade;
            transaction.viewModel.tradeCode = transaction.model.transaction.tradeCode;
            transaction.viewModel.transactionIdentifier = transaction.model.transaction.transactionIdentifier;
            transaction.viewModel.transactionTime = transaction.model.transaction.transactionTime;
            transaction.viewModel.transDesc = transaction.model.transaction.transDesc;
            transaction.viewModel.resultStyle = { color: '#444' };

            if (transaction.viewModel.resultCode === 1) {
                transaction.viewModel.resultStyle = { color: '#47B28B' };
            }

            if (transaction.viewModel.resultCode === -1) {
                transaction.viewModel.resultStyle = { color: '#E74C3C' };
            }
        };

        transaction.refreshUser = function() {
            return UserService.getUserInfo();
        };

        transaction.toggleAgreement = function() {
            $ionicScrollDelegate.scrollTop();
            transaction.viewModel.showAgreement = !transaction.viewModel.showAgreement;
        };

        $scope.$on('$ionicView.enter', function() {
            transaction.doRefresh();
        });

        transaction.doRefresh();
    }]);

/*jshint -W024 */
'use strict';
angular.module('jym.user.jinbaoyin', [
    'jym.services.user',
    'jym.user.jinbaoyin-list',
    'jym.user.jinbaoyin-withdrawal'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.user-jinbaoyin', {
                url: '/user/jinbaoyin',
                views: {
                    user: {
                        controller: 'UserJinbaoyinCtrl as ctrl',
                        templateUrl: 'app/user/jinbaoyin/jinbaoyin.tpl.html'
                    }
                }
            });
    }])
    .controller('UserJinbaoyinCtrl', ['$scope', '$state', '$timeout', '$q', 'RESOURCES', 'JinbaoyinService', 'UserService', function($scope, $state, $timeout, $q, RESOURCES, JinbaoyinService, UserService) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};

        ctrl.doRefresh = function() {
            ctrl.refreshUser()
                .then(function(result) {
                    ctrl.model.user = result;
                    ctrl.refreshUserViewModel();
                    return result;
                });

            ctrl.refreshProduct()
                .then(function(result) {
                    ctrl.model.product = result;
                    ctrl.refreshProductViewModel();
                    return result;
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        ctrl.refreshUser = function() {
            return UserService.getUserInfo();
        };

        ctrl.refreshProduct = function() {
            return JinbaoyinService.getIndex();
        };

        ctrl.refreshProductViewModel = function() {
            ctrl.viewModel.jBYYield = ctrl.model.product.yield / 100;
        };

        ctrl.refreshUserViewModel = function() {
            ctrl.viewModel.jBYLastInterest = (ctrl.model.user.jBYLastInterest / 100).toFixed(2);
            ctrl.viewModel.jBYTotalAmount = (ctrl.model.user.jBYTotalAmount / 100).toFixed(2);
            ctrl.viewModel.jBYTotalInterest = (ctrl.model.user.jBYTotalInterest / 100).toFixed(2);
            ctrl.viewModel.jBYTotalPricipal = (ctrl.model.user.jBYTotalPricipal / 100).toFixed(2);
            ctrl.viewModel.jBYWithdrawalableAmount = (ctrl.model.user.jBYWithdrawalableAmount / 100).toFixed(2);
            ctrl.viewModel.todayJBYWithdrawalAmount = (ctrl.model.user.todayJBYWithdrawalAmount / 100).toFixed(2);
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    }]);

'use strict';
angular.module('jym.user.jinbaoyin-list', [
    'jym.services.user',
    'jym.user.jinbaoyin-detail'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.user-jinbaoyin-list', {
                url: '/user/jinbaoyin/list',
                views: {
                    user: {
                        controller: 'UserJinbaoyinListCtrl as account',
                        templateUrl: 'app/user/jinbaoyin/list/list.tpl.html'
                    }
                }
            });
    }])
    .controller('UserJinbaoyinListCtrl', ['$scope', '$timeout', 'UserService', function($scope, $timeout, UserService) {
        var account = this;

        var getViewItem = function(modelItem) {
            var item = {};
            item.amount = (modelItem.amount / 100).toFixed(2);
            item.predeterminedResultDate = modelItem.predeterminedResultDate;
            item.resultCode = modelItem.resultCode;
            item.resultTime = modelItem.resultTime;
            item.trade = modelItem.trade;
            item.tradeCode = modelItem.tradeCode;
            item.transactionIdentifier = modelItem.transactionIdentifier;
            item.transactionTime = modelItem.transactionTime;
            item.transDesc = modelItem.transDesc;
            return item;
        };

        account.viewModel = {};

        account.doRefresh = function() {
            account.viewModel.items = [];
            account.viewModel.currentPageIndex = 0;
            account.viewModel.nextPageIndex = 0;
            account.viewModel.pageSize = 10;
            account.viewModel.totalCount = 0;
            account.viewModel.totalPageCount = 1;
            account.viewModel.loading = false;

            account.loadMoreData();

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        account.loadMoreData = function() {
            if (account.viewModel.loading) {
                return;
            }

            account.viewModel.loading = true;

            UserService.getJBYAccountList(account.viewModel.nextPageIndex)
                .then(function(result) {
                    account.viewModel.currentPageIndex = result.pageIndex;
                    account.viewModel.nextPageIndex = result.pageIndex + 1;
                    account.viewModel.pageSize = result.pageSize;
                    account.viewModel.totalCount = result.totalCount;
                    account.viewModel.totalPageCount = result.totalPageCount;

                    _.forEach(result.items, function(i) {
                        account.viewModel.items.push(getViewItem(i));
                    });

                    account.viewModel.loading = false;
                });
            $timeout(function() {
                $scope.$broadcast('scroll.infiniteScrollComplete');
            }, 1000);
        };

        account.moreDataCanBeLoaded = function() {
            return account.viewModel.nextPageIndex < account.viewModel.totalPageCount;
        };

        account.doRefresh();
    }]);

'use strict';
angular.module('jym.user.jinbaoyin-withdrawal', [
    'jym.services.user'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.user-jinbaoyin-withdrawal', {
                url: '/user/jinbaoyin/withdrawal',
                views: {
                    user: {
                        controller: 'UserJinbaoyinWithdrawalCtrl as account',
                        templateUrl: 'app/user/jinbaoyin/withdrawal/withdrawal.tpl.html'
                    }
                }
            });
    }])
    .controller('UserJinbaoyinWithdrawalCtrl', ['$scope', '$timeout', '$ionicScrollDelegate', 'RESOURCES', 'JinbaoyinService', 'ProductService', 'UserService', 'JYMUtilityService', function($scope, $timeout, $ionicScrollDelegate, RESOURCES, JinbaoyinService, ProductService, UserService, JYMUtilityService) {
        var account = this;

        account.model = {};
        account.viewModel = {};

        account.check = function() {
            account.viewModel.checked = !account.viewModel.checked;
        };

        account.doRefresh = function() {
            account.viewModel.agreement = '金包银自动交易授权委托书';
            account.viewModel.amount = null;
            account.viewModel.showAgreement = false;

            account.resetInput();

            account.refreshUser()
                .then(function(result) {
                    account.model.user = result;
                    account.refreshViewModel();
                    return result;
                })
                .then(function() {
                    account.refreshAgreement()
                        .then(function(result) {
                            var agreementData = {
                                cellphone: account.model.user.cellphone,
                                credentialNo: account.model.user.credentialNo,
                                realName: account.model.user.realName
                            };

                            account.viewModel.agreement = ProductService.fillDataForAgreement(result.content, agreementData);
                        });

                });
        };

        account.refreshAgreement = function() {
            return JinbaoyinService.getTransferAgreement();
        };

        account.refreshUser = function() {
            return UserService.getUserInfo();
        };

        account.refreshViewModel = function() {
            account.viewModel.userBalance = (account.model.user.balance / 100).toFixed(2);
            account.viewModel.jBYLastInterest = (account.model.user.jBYLastInterest / 100).toFixed(2);
            account.viewModel.jBYTotalAmount = (account.model.user.jBYTotalAmount / 100).toFixed(2);
            account.viewModel.jBYTotalInterest = (account.model.user.jBYTotalInterest / 100).toFixed(2);
            account.viewModel.jBYTotalPricipal = (account.model.user.jBYTotalPricipal / 100).toFixed(2);
            account.viewModel.jBYWithdrawalableAmount = (account.model.user.jBYWithdrawalableAmount / 100).toFixed(2);
            account.viewModel.todayJBYWithdrawalAmount = (account.model.user.todayJBYWithdrawalAmount / 100).toFixed(2);
            account.viewModel.todayJBYWithdrawalableAmount = 100000 - account.viewModel.todayJBYWithdrawalAmount;

            if (account.viewModel.todayJBYWithdrawalableAmount > account.viewModel.jBYWithdrawalableAmount) {
                account.viewModel.todayJBYWithdrawalableAmount = account.viewModel.jBYWithdrawalableAmount;
            }
        };

        account.resetInput = function() {
            account.viewModel.amount = null;
            account.viewModel.checked = true;
            account.viewModel.password = '';
        };

        account.toggleAgreement = function() {
            $ionicScrollDelegate.scrollTop();
            account.viewModel.showAgreement = !account.viewModel.showAgreement;
        };

        account.withdraw = function() {
            var amount = parseInt(account.viewModel.amount * 100, 10);
            if (account.withdrawButtonEnable()) {
                UserService.jBYWithdrawal(amount, account.viewModel.password)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.JINBAOYIN.WITHDRAWAL_SUCCESS);
                            $timeout(function() {
                                account.resetInput();

                                JYMUtilityService.goWithDisableBack('jym.user-jinbaoyin-detail', {
                                    transactionIdentifier: result.transactionIdentifier
                                });
                            }, 1000);
                        }
                    });
            }
        };

        account.withdrawButtonEnable = function() {
            return account.viewModel.checked && account.viewModel.amount && account.viewModel.password && account.viewModel.amount <= account.viewModel.todayJBYWithdrawalableAmount;
        };

        $scope.$on('$ionicView.enter', function() {
            account.doRefresh();
        });

        account.doRefresh();
    }]);

'use strict';
angular.module('jym.user.login', [
    'jym.services.user',
    'jym.user.signup'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.user-login', {
                url: '/user/login/{backState}',
                views: {
                    user: {
                        controller: 'UserLoginCtrl as user',
                        templateUrl: 'app/user/login/login.tpl.html'
                    }
                }
            });
    }])
    .controller('UserLoginCtrl', ['$scope', '$stateParams', '$timeout', 'RESOURCES', 'REGEX', 'UserService', 'JYMUtilityService', function($scope, $stateParams, $timeout, RESOURCES, REGEX, UserService, JYMUtilityService) {
        var user = this;

        user.viewModel = {};

        user.doRefresh = function() {
            user.resetInput();
        };

        user.login = function() {
            if (user.loginButtonEnable()) {
                UserService.login(user.viewModel.cellphone, user.viewModel.password)
                    .then(function(result) {
                        if (!result.userExist) {
                            JYMUtilityService.showAlert(RESOURCES.ALERT.USER.USER_NOT_EXIST);
                            return;
                        }

                        if (result.lock) {
                            JYMUtilityService.showAlert(RESOURCES.ALERT.USER.USER_LOGIN_PASSWORD_LOCK);
                            return;
                        }

                        if (result.remainCount < 3) {
                            JYMUtilityService.showAlert(RESOURCES.ALERT.USER.USER_LOGIN_PASSWORD_REMIAN_LESS);
                            return;
                        }

                        if (!result.success) {
                            JYMUtilityService.showAlert(RESOURCES.ALERT.USER.USER_LOGIN_FAIL);
                            return;
                        }

                        JYMUtilityService.showAlert(RESOURCES.TIP.USER.LOGIN_SUCCESS);

                        $timeout(function() {
                            user.resetInput();
                            JYMUtilityService.goWithDisableBack('jym.user');
                        }, 1000);
                    });

            }
        };

        user.loginButtonEnable = function() {
            return user.viewModel.cellphone && user.viewModel.password;
        };

        user.resetInput = function() {
            user.viewModel.cellphone = user.viewModel.cellphone || '';
            user.viewModel.password = '';
        };

        $scope.$on('$ionicView.enter', function() {
            user.doRefresh();
        });

        user.doRefresh();
    }]);

/*jshint -W024 */
'use strict';
angular.module('jym.user.orders-detail', [
    'jym.services',
    'jym.services.user'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.user-orders-detail', {
                url: '/user/orders/detail/{orderIdentifier}',
                views: {
                    user: {
                        controller: 'UserOrderDetailCtrl as order',
                        templateUrl: 'app/user/order/detail/detail.tpl.html'
                    }
                }
            });
    }])
    .controller('UserOrderDetailCtrl', ['$scope', '$stateParams', '$timeout', '$q', '$ionicHistory', '$ionicScrollDelegate', 'ProductService', 'UserService', 'JYMTimeService', 'JYMUtilityService', function($scope, $stateParams, $timeout, $q, $ionicHistory, $ionicScrollDelegate, ProductService, UserService, JYMTimeService, JYMUtilityService) {
        var order = this;

        order.model = {};
        order.viewModel = {};

        order.canBack = function() {
            return $ionicHistory.backView();
        };

        order.doRefresh = function() {
            order.viewModel.agreement1 = '委托协议';
            order.viewModel.agreement2 = '借款协议';
            order.viewModel.showAgreement1 = false;
            order.viewModel.showAgreement2 = false;

            var refreshOrder = order.refreshOrder()
                .then(function(result) {
                    order.model.order = result;
                    order.refreshViewModel();
                    return result;
                });

            var refreshUser = order.refreshUser()
                .then(function(result) {
                    order.model.user = result;
                    return result;
                });

            $q.all([refreshOrder, refreshUser])
                .then(function() {
                    var agreementData = {
                        cellphone: order.model.user.cellphone,
                        credentialNo: order.model.user.credentialNo,
                        interest: order.viewModel.interest,
                        orderNo: order.viewModel.orderNo,
                        orderTime: order.viewModel.orderTime,
                        principal: order.viewModel.principal,
                        realName: order.model.user.realName
                    };

                    order.refreshOrderAgreement(1)
                        .then(function(result) {
                            order.viewModel.agreement1 = ProductService.fillDataForAgreement(result.content, agreementData);
                        });

                    order.refreshOrderAgreement(2)
                        .then(function(result) {
                            order.viewModel.agreement2 = ProductService.fillDataForAgreement(result.content, agreementData);
                        });
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        order.go = function(toState, params) {
            params = params || {};
            JYMUtilityService.goWithDisableBack(toState, params);
        };

        order.refreshOrder = function() {
            return UserService.getOrderInfo($stateParams.orderIdentifier);
        };

        order.refreshOrderAgreement = function(agreementIndex) {
            return ProductService.getAgreementContent(order.model.order.productSnapshot.productIdentifier, agreementIndex);
        };

        order.refreshUser = function() {
            return UserService.getUserInfo();
        };

        order.refreshViewModel = function() {
            order.viewModel.accountTransactionIdentifier = order.model.order.accountTransactionIdentifier;
            order.viewModel.extraInterest = (order.model.order.extraInterest / 100).toFixed(2);
            order.viewModel.extraInterestRecords = order.model.order.extraInterestRecords;
            order.viewModel.extraYield = (order.model.order.extraYield / 100).toFixed(2);
            order.viewModel.interest = (order.model.order.interest / 100).toFixed(2);
            order.viewModel.isRepaid = order.model.order.isRepaid;
            order.viewModel.orderIdentifier = order.model.order.orderIdentifier;
            order.viewModel.orderNo = order.model.order.orderNo;
            order.viewModel.orderTime = order.model.order.orderTime;
            order.viewModel.principal = (order.model.order.principal / 100).toFixed(2);
            order.viewModel.productCategory = order.model.order.productCategory;
            order.viewModel.productIdentifier = order.model.order.productIdentifier;
            order.viewModel.repaidTime = order.model.order.repaidTime;
            order.viewModel.resultCode = order.model.order.resultCode;
            order.viewModel.resultTime = order.model.order.resultTime;
            order.viewModel.settleDate = order.model.order.settleDate;
            order.viewModel.transDesc = order.model.order.transDesc;
            order.viewModel.valueDate = order.model.order.valueDate;
            order.viewModel.yield = (order.model.order.yield / 100).toFixed(2);

            order.viewModel.productSnapshot = {};
            order.viewModel.productSnapshot.bankName = order.model.order.productSnapshot.bankName;
            order.viewModel.productSnapshot.drawee = order.model.order.productSnapshot.drawee;
            order.viewModel.productSnapshot.draweeInfo = order.model.order.productSnapshot.draweeInfo;
            order.viewModel.productSnapshot.endorseImageLink = order.model.order.productSnapshot.endorseImageLink;
            order.viewModel.productSnapshot.endSellTime = order.model.order.productSnapshot.endSellTime;
            order.viewModel.productSnapshot.enterpriseInfo = order.model.order.productSnapshot.enterpriseInfo;
            order.viewModel.productSnapshot.enterpriseLicense = order.model.order.productSnapshot.enterpriseLicense;
            order.viewModel.productSnapshot.enterpriseName = order.model.order.productSnapshot.enterpriseName;
            order.viewModel.productSnapshot.financingSumAmount = (order.model.order.productSnapshot.financingSumAmount / 100).toFixed(2);
            order.viewModel.productSnapshot.issueNo = order.model.order.productSnapshot.issueNo;
            order.viewModel.productSnapshot.issueTime = order.model.order.productSnapshot.issueTime;
            order.viewModel.productSnapshot.paidAmount = (order.model.order.productSnapshot.paidAmount / 100).toFixed(2);
            order.viewModel.productSnapshot.period = order.model.order.productSnapshot.period;
            order.viewModel.productSnapshot.pledgeNo = order.model.order.productSnapshot.pledgeNo;
            order.viewModel.productSnapshot.productCategory = order.model.order.productSnapshot.productCategory;
            order.viewModel.productSnapshot.productIdentifier = order.model.order.productSnapshot.productIdentifier;
            order.viewModel.productSnapshot.productName = order.model.order.productSnapshot.productName;
            order.viewModel.productSnapshot.productNo = order.model.order.productSnapshot.productNo;
            order.viewModel.productSnapshot.productTitle = order.viewModel.productSnapshot.productName + ' 第' + parseInt(order.viewModel.productSnapshot.issueNo, 10) + '期';
            order.viewModel.productSnapshot.repaid = order.model.order.productSnapshot.repaid;
            order.viewModel.productSnapshot.repaidTime = order.model.order.productSnapshot.repaidTime;
            order.viewModel.productSnapshot.repaymentDeadline = order.model.order.productSnapshot.repaymentDeadline;
            order.viewModel.productSnapshot.riskManagement = order.model.order.productSnapshot.riskManagement;
            order.viewModel.productSnapshot.riskManagementInfo = order.model.order.productSnapshot.riskManagementInfo;
            order.viewModel.productSnapshot.riskManagementMode = order.model.order.productSnapshot.riskManagementMode;
            order.viewModel.productSnapshot.settleDate = order.model.order.productSnapshot.settleDate;
            order.viewModel.productSnapshot.soldOut = order.model.order.productSnapshot.soldOut;
            order.viewModel.productSnapshot.soldOutTime = order.model.order.productSnapshot.soldOutTime;
            order.viewModel.productSnapshot.specifyValueDate = order.model.order.productSnapshot.riskManagement;
            order.viewModel.productSnapshot.startSellTime = order.model.order.productSnapshot.riskManagementInfo;
            order.viewModel.productSnapshot.unitPrice = (order.model.order.productSnapshot.riskManagementMode / 100).toFixed(2);
            order.viewModel.productSnapshot.usage = order.model.order.productSnapshot.settleDate;
            order.viewModel.productSnapshot.valueDate = order.model.order.productSnapshot.soldOut;
            order.viewModel.productSnapshot.valueDateMode = order.model.order.productSnapshot.soldOutTime;
            order.viewModel.productSnapshot.yield = (order.model.order.productSnapshot.yield / 100).toFixed(2);

            var now = JYMTimeService.getTime();
            if (order.viewModel.isRepaid) {
                order.viewModel.statusText = '已还款';
            } else if (now > moment(order.viewModel.settleDate)) {
                order.viewModel.statusText = '已结息';
            } else if (now > now > moment(order.viewModel.valueDate)) {
                order.viewModel.statusText = '已起息';
            } else {
                order.viewModel.statusText = '下单成功';
            }
        };

        order.toggleAgreement1 = function() {
            order.viewModel.showAgreement2 = false;
            $ionicScrollDelegate.scrollTop();
            order.viewModel.showAgreement1 = !order.viewModel.showAgreement1;
        };

        order.toggleAgreement2 = function() {
            order.viewModel.showAgreement1 = false;
            $ionicScrollDelegate.scrollTop();
            order.viewModel.showAgreement2 = !order.viewModel.showAgreement2;
        };

        $scope.$on('$ionicView.enter', function() {
            order.doRefresh();
        });

        order.doRefresh();
    }]);

/*jshint -W024 */
'use strict';
angular.module('jym.user.orders', [
    'jym.services',
    'jym.services.user',
    'jym.user.settle-account-detail'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.user-orders', {
                url: '/user/orders',
                views: {
                    user: {
                        controller: 'UserOrdersCtrl as orders',
                        templateUrl: 'app/user/order/order.tpl.html'
                    }
                }
            });
    }])
    .controller('UserOrdersCtrl', ['$scope', '$timeout', 'UserService', 'JYMTimeService', function($scope, $timeout, UserService, JYMTimeService) {
        var orders = this;

        var getViewItem = function(modelItem) {
            var item = {};
            item.accountTransactionIdentifier = modelItem.accountTransactionIdentifier;
            item.extraInterest = (modelItem.extraInterest / 100).toFixed(2);
            item.extraInterestRecords = modelItem.extraInterestRecords;
            item.extraYield = (modelItem.extraYield / 100).toFixed(2);
            item.interest = (modelItem.interest / 100).toFixed(2);
            item.isRepaid = modelItem.isRepaid;
            item.orderIdentifier = modelItem.orderIdentifier;
            item.orderNo = modelItem.orderNo;
            item.orderTime = modelItem.orderTime;
            item.principal = (modelItem.principal / 100).toFixed(2);
            item.productCategory = modelItem.productCategory;
            item.productIdentifier = modelItem.productIdentifier;
            item.repaidTime = modelItem.repaidTime;
            item.resultCode = modelItem.resultCode;
            item.resultTime = modelItem.resultTime;
            item.settleDate = modelItem.settleDate;
            item.transDesc = modelItem.transDesc;
            item.valueDate = modelItem.valueDate;
            item.yield = (modelItem.yield / 100).toFixed(2);

            item.productSnapshot = {};
            item.productSnapshot.bankName = modelItem.productSnapshot.bankName;
            item.productSnapshot.drawee = modelItem.productSnapshot.drawee;
            item.productSnapshot.draweeInfo = modelItem.productSnapshot.draweeInfo;
            item.productSnapshot.endorseImageLink = modelItem.productSnapshot.endorseImageLink;
            item.productSnapshot.endSellTime = modelItem.productSnapshot.endSellTime;
            item.productSnapshot.enterpriseInfo = modelItem.productSnapshot.enterpriseInfo;
            item.productSnapshot.enterpriseLicense = modelItem.productSnapshot.enterpriseLicense;
            item.productSnapshot.enterpriseName = modelItem.productSnapshot.enterpriseName;
            item.productSnapshot.financingSumAmount = (modelItem.productSnapshot.financingSumAmount / 100).toFixed(2);
            item.productSnapshot.issueNo = modelItem.productSnapshot.issueNo;
            item.productSnapshot.issueTime = modelItem.productSnapshot.issueTime;
            item.productSnapshot.paidAmount = (modelItem.productSnapshot.paidAmount / 100).toFixed(2);
            item.productSnapshot.period = modelItem.productSnapshot.period;
            item.productSnapshot.pledgeNo = modelItem.productSnapshot.pledgeNo;
            item.productSnapshot.productCategory = modelItem.productSnapshot.productCategory;
            item.productSnapshot.productIdentifier = modelItem.productSnapshot.productIdentifier;
            item.productSnapshot.productName = modelItem.productSnapshot.productName;
            item.productSnapshot.productNo = modelItem.productSnapshot.productNo;
            item.productSnapshot.productTitle = item.productSnapshot.productName + ' 第' + parseInt(item.productSnapshot.issueNo, 10) + '期';
            item.productSnapshot.repaid = modelItem.productSnapshot.repaid;
            item.productSnapshot.repaidTime = modelItem.productSnapshot.repaidTime;
            item.productSnapshot.repaymentDeadline = modelItem.productSnapshot.repaymentDeadline;
            item.productSnapshot.riskManagement = modelItem.productSnapshot.riskManagement;
            item.productSnapshot.riskManagementInfo = modelItem.productSnapshot.riskManagementInfo;
            item.productSnapshot.riskManagementMode = modelItem.productSnapshot.riskManagementMode;
            item.productSnapshot.settleDate = modelItem.productSnapshot.settleDate;
            item.productSnapshot.soldOut = modelItem.productSnapshot.soldOut;
            item.productSnapshot.soldOutTime = modelItem.productSnapshot.soldOutTime;
            item.productSnapshot.specifyValueDate = modelItem.productSnapshot.riskManagement;
            item.productSnapshot.startSellTime = modelItem.productSnapshot.riskManagementInfo;
            item.productSnapshot.unitPrice = (modelItem.productSnapshot.riskManagementMode / 100).toFixed(2);
            item.productSnapshot.usage = modelItem.productSnapshot.settleDate;
            item.productSnapshot.valueDate = modelItem.productSnapshot.soldOut;
            item.productSnapshot.valueDateMode = modelItem.productSnapshot.soldOutTime;
            item.productSnapshot.yield = (modelItem.productSnapshot.yield / 100).toFixed(2);

            var now = JYMTimeService.getTime();
            if (item.isRepaid) {
                item.statusText = '已还款';
            } else if (now > moment(item.settleDate)) {
                item.statusText = '已结息';
            } else if (now > moment(item.valueDate)) {
                item.statusText = '已起息';
            } else {
                item.statusText = '下单成功';
            }
            return item;
        };

        orders.viewModel = {};

        orders.doRefresh = function() {
            orders.viewModel.items = [];
            orders.viewModel.currentPageIndex = 0;
            orders.viewModel.nextPageIndex = 0;
            orders.viewModel.pageSize = 10;
            orders.viewModel.totalCount = 0;
            orders.viewModel.totalPageCount = 1;
            orders.viewModel.loading = false;

            orders.loadMoreData();

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        orders.loadMoreData = function() {
            if (orders.viewModel.loading) {
                return;
            }

            orders.viewModel.loading = true;

            UserService.getOrderList(orders.viewModel.nextPageIndex)
                .then(function(result) {
                    orders.viewModel.currentPageIndex = result.pageIndex;
                    orders.viewModel.nextPageIndex = result.pageIndex + 1;
                    orders.viewModel.pageSize = result.pageSize;
                    orders.viewModel.totalCount = result.totalCount;
                    orders.viewModel.totalPageCount = result.totalPageCount;

                    _.forEach(result.items, function(i) {
                        orders.viewModel.items.push(getViewItem(i));
                    });

                    orders.viewModel.loading = false;
                });
            $timeout(function() {
                $scope.$broadcast('scroll.infiniteScrollComplete');
            }, 1000);
        };

        orders.moreDataCanBeLoaded = function() {
            return orders.viewModel.nextPageIndex < orders.viewModel.totalPageCount;
        };

        orders.doRefresh();
    }]);

'use strict';
angular.module('jym.user.security-password', [])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.user-security-password', {
                url: '/user/security-password/{token}',
                views: {
                    user: {
                        controller: 'UserSecurityPasswordCtrl as ctrl',
                        templateUrl: 'app/user/security/password/password.tpl.html'
                    }
                }
            })
            .state('jym.user-security-password-send-veri-code', {
                url: '/user/security-password-send-veri-code',
                views: {
                    user: {
                        controller: 'UserSecurityPasswordSendVeriCodeCtrl as ctrl',
                        templateUrl: 'app/user/security/password/sendVeriCode.tpl.html'
                    }
                }
            });
    }])
    .controller('UserSecurityPasswordCtrl', ['$scope', '$timeout', '$stateParams', 'RESOURCES', 'UserService', 'JYMUtilityService', function($scope, $timeout, $stateParams, RESOURCES, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.viewModel = {};

        ctrl.doRefresh = function() {
            ctrl.resetInput();
        };

        ctrl.enableButton = function() {
            return ctrl.viewModel.password && ctrl.viewModel.confirmPassword && ctrl.viewModel.password === ctrl.viewModel.confirmPassword;
        };

        ctrl.resetInput = function() {
            ctrl.viewModel.password = '';
            ctrl.viewModel.confirmPassword = '';
        };

        ctrl.resetPassword = function() {
            if (ctrl.enableButton()) {
                UserService.resetLoginPassword(ctrl.viewModel.password, $stateParams.token)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.SECURITY.RESET_PASSWORD);
                            UserService.loginOut();
                            $timeout(function() {
                                ctrl.resetInput();
                                JYMUtilityService.goWithDisableBack('jym.user-login');
                            }, 1000);
                        }
                    });
            }
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });
    }])
    .controller('UserSecurityPasswordSendVeriCodeCtrl', ['$scope', '$timeout', 'RESOURCES', 'UserService', 'JYMUtilityService', function($scope, $timeout, RESOURCES, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.viewModel = {};
        ctrl.viewModel.remainSeconds = 0;

        ctrl.doRefresh = function() {
            ctrl.resetInput();
        };

        ctrl.resetInput = function() {
            ctrl.viewModel.cellphone = '';
            ctrl.viewModel.veriCode = '';
        };

        ctrl.sendVeriCode = function() {
            if (ctrl.sendVeriCodeButtonEnable()) {
                ctrl.viewModel.remainSeconds = 60;
                UserService.sendVeriCode(ctrl.viewModel.cellphone, 20)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.MISC.SEND_VERI_CODE);
                        }
                    });
                ctrl.startTimer();
            }
        };

        ctrl.sendVeriCodeButtonEnable = function() {
            return ctrl.viewModel.cellphone && ctrl.viewModel.remainSeconds <= 0;
        };

        ctrl.showVeriCodeButton = function() {
            return ctrl.viewModel.remainSeconds <= 0;
        };

        ctrl.startTimer = function() {
            if (ctrl.viewModel.remainSeconds > 0) {
                ctrl.viewModel.remainSeconds = ctrl.viewModel.remainSeconds - 1;
                $timeout(ctrl.startTimer, 1000);
            }
        };

        ctrl.verifyVeriCode = function() {
            if (ctrl.verifyVeriCodeButtonEnable()) {
                UserService.verifyVeriCode(ctrl.viewModel.cellphone, ctrl.viewModel.veriCode, 20)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.MISC.VERIFY_VERI_CODE);

                            $timeout(function() {
                                ctrl.resetInput();
                                JYMUtilityService.go('jym.user-security-password', { token: result.token });
                            }, 1000);
                        }
                    });
            }
        };

        ctrl.verifyVeriCodeButtonEnable = function() {
            return ctrl.viewModel.cellphone && ctrl.viewModel.veriCode;
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    }]);

'use strict';
angular.module('jym.user.security-payment-password', [])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.user-security-reset-payment-password', {
                url: '/user/security-reset-payment-password/{token}',
                views: {
                    user: {
                        controller: 'UserSecurityPaymentPasswordCtrl as ctrl',
                        templateUrl: 'app/user/security/paymentPassword/paymentPassword.tpl.html'
                    }
                }
            })
            .state('jym.user-security-set-payment-password', {
                url: '/user/security-set-payment-password',
                views: {
                    user: {
                        controller: 'UserSecuritySetPaymentPasswordCtrl as ctrl',
                        templateUrl: 'app/user/security/paymentPassword/setPaymentPassword.tpl.html'
                    }
                }
            })
            .state('jym.user-security-payment-password-send-veri-code', {
                url: '/user/security-payment-password-send-veri-code',
                views: {
                    user: {
                        controller: 'UserSecurityPaymentPasswordSendVeriCodeCtrl as ctrl',
                        templateUrl: 'app/user/security/paymentPassword/sendVeriCode.tpl.html'
                    }
                }
            });
    }])
    .controller('UserSecurityPaymentPasswordCtrl', ['$scope', '$stateParams', '$timeout', 'RESOURCES', 'UserService', 'JYMUtilityService', function($scope, $stateParams, $timeout, RESOURCES, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};


        ctrl.doRefresh = function() {
            ctrl.resetInput();

            ctrl.refreshUser()
                .then(function(result) {
                    ctrl.model.user = result;
                    ctrl.refreshViewModel();
                    return result;
                });
        };

        ctrl.enableButton = function() {
            if (ctrl.viewModel.needUserInfo) {
                return ctrl.viewModel.password && ctrl.viewModel.confirmPassword && ctrl.viewModel.password === ctrl.viewModel.confirmPassword && ctrl.viewModel.realName && ctrl.viewModel.credentialNo;
            } else {
                return ctrl.viewModel.password && ctrl.viewModel.confirmPassword && ctrl.viewModel.password === ctrl.viewModel.confirmPassword;
            }
        };

        ctrl.refreshUser = function() {
            return UserService.getUserInfo();
        };

        ctrl.refreshViewModel = function() {
            ctrl.viewModel.needUserInfo = ctrl.model.user.verified;
        };

        ctrl.resetInput = function() {
            ctrl.viewModel.confirmPassword = '';
            ctrl.viewModel.credentialNo = '';
            ctrl.viewModel.password = '';
            ctrl.viewModel.realName = '';
        };

        ctrl.resetPassword = function() {
            if (ctrl.enableButton()) {
                UserService.resetPaymentPassword(ctrl.viewModel.credentialNo, ctrl.viewModel.password, $stateParams.token, ctrl.viewModel.realName)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.SECURITY.RESET_PAYMENT_PASSWORD);
                            ctrl.resetInput();
                            $timeout(function() {
                                JYMUtilityService.goWithDisableBack('jym.user');
                            }, 1000);
                        }
                    });
            }
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    }])
    .controller('UserSecuritySetPaymentPasswordCtrl', ['$scope', '$timeout', '$stateParams', '$ionicHistory', 'RESOURCES', 'UserService', 'JYMUtilityService', function($scope, $timeout, $stateParams, $ionicHistory, RESOURCES, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.viewModel = {};

        ctrl.doRefresh = function() {
            ctrl.resetInput();
        };

        ctrl.enableButton = function() {
            return ctrl.viewModel.password && ctrl.viewModel.confirmPassword && ctrl.viewModel.password === ctrl.viewModel.confirmPassword;
        };

        ctrl.resetInput = function() {
            ctrl.viewModel.confirmPassword = '';
            ctrl.viewModel.password = '';
        };

        ctrl.setPassword = function() {
            if (ctrl.enableButton()) {
                UserService.setPaymentPassword(ctrl.viewModel.password)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.SECURITY.SET_PAYMENT_PASSWORD);
                            $timeout(function() {
                                ctrl.resetInput();
                                if ($ionicHistory.backView()) {
                                    $ionicHistory.goBack();
                                } else {
                                    JYMUtilityService.goWithDisableBack('jym.user');
                                }

                            }, 1000);
                        }
                    });
            }
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    }])
    .controller('UserSecurityPaymentPasswordSendVeriCodeCtrl', ['$scope', '$timeout', 'RESOURCES', 'UserService', 'JYMUtilityService', function($scope, $timeout, RESOURCES, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};
        ctrl.viewModel.remainSeconds = 0;


        ctrl.doRefresh = function() {
            ctrl.resetInput();

            ctrl.refreshUser()
                .then(function(result) {
                    ctrl.model.user = result;
                    ctrl.refreshViewModel();
                    return result;
                });
        };

        ctrl.refreshUser = function() {
            return UserService.getUserInfo();
        };

        ctrl.refreshViewModel = function() {
            ctrl.viewModel.cellphone = ctrl.model.user.cellphone;
            ctrl.viewModel.veriCode = '';
        };

        ctrl.resetInput = function() {
            ctrl.viewModel.cellphone = '';
            ctrl.viewModel.veriCode = '';
        };

        ctrl.sendVeriCode = function() {
            if (ctrl.sendVeriCodeButtonEnable()) {
                ctrl.viewModel.remainSeconds = 60;
                UserService.sendVeriCode(ctrl.viewModel.cellphone, 30)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.MISC.SEND_VERI_CODE);
                        }
                    });
                ctrl.startTimer();
            }
        };

        ctrl.sendVeriCodeButtonEnable = function() {
            return ctrl.viewModel.cellphone && ctrl.viewModel.remainSeconds <= 0;
        };

        ctrl.showVeriCodeButton = function() {
            return ctrl.viewModel.remainSeconds <= 0;
        };

        ctrl.startTimer = function() {
            if (ctrl.viewModel.remainSeconds > 0) {
                ctrl.viewModel.remainSeconds = ctrl.viewModel.remainSeconds - 1;
                $timeout(ctrl.startTimer, 1000);
            }
        };

        ctrl.verifyVeriCode = function() {
            if (ctrl.verifyVeriCodeButtonEnable()) {
                UserService.verifyVeriCode(ctrl.viewModel.cellphone, ctrl.viewModel.veriCode, 30)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.MISC.VERIFY_VERI_CODE);

                            $timeout(function() {
                                ctrl.resetInput();
                                JYMUtilityService.go('jym.user-security-reset-payment-password', { token: result.token });
                            }, 1000);
                        }
                    });
            }
        };

        ctrl.verifyVeriCodeButtonEnable = function() {
            return ctrl.viewModel.cellphone && ctrl.viewModel.veriCode;
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    }]);

'use strict';
angular.module('jym.user.security', [
    'jym.user.security-password',
    'jym.user.security-payment-password'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.user-security', {
                url: '/user/security',
                views: {
                    user: {
                        controller: 'UserSecurityCtrl as ctrl',
                        templateUrl: 'app/user/security/security.tpl.html'
                    }
                }
            });
    }])
    .controller('UserSecurityCtrl', ['$scope', '$stateParams', '$timeout', 'RESOURCES', 'UserService', function($scope, $stateParams, $timeout, RESOURCES, UserService) {
        var ctrl = this;

        ctrl.model = {};
        ctrl.viewModel = {};

        ctrl.doRefresh = function() {
            ctrl.refreshUser()
                .then(function(result) {
                    ctrl.model.user = result;
                    ctrl.refreshViewModel();
                    return result;
                });
        };

        ctrl.refreshUser = function() {
            return UserService.getUserInfo();
        };

        ctrl.refreshViewModel = function() {
            ctrl.viewModel.hasSetPaymentPassword = ctrl.model.user.hasSetPaymentPassword;
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    }]);

'use strict';
angular.module('jym.user.settle-account-deposit', [
    'jym.services.user'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.user-settle-account-deposit', {
                url: '/user/settle-account/deposit',
                views: {
                    user: {
                        controller: 'UserSettleAccountDepositCtrl as account',
                        templateUrl: 'app/user/settle-account/deposit/deposit.tpl.html'
                    }
                }
            })
            .state('jym.user-settle-account-deposit-bank-card-selector', {
                url: '/user/settle-account/deposit/select-bank-card',
                views: {
                    user: {
                        controller: 'UserSettleAccountDepositBankCardSeletorCtrl as account',
                        templateUrl: 'app/user/settle-account/deposit/bank-card-selector.tpl.html'
                    }
                }
            })
            .state('jym.user-settle-account-deposit-success', {
                url: '/user/settle-account/deposit/success/{transactionIdentifier}',
                views: {
                    user: {
                        controller: 'UserSettleAccountDepositSuccessCtrl as ctrl',
                        templateUrl: 'app/user/settle-account/deposit/deposit-success.tpl.html'
                    }
                }
            });
    }])
    .controller('UserSettleAccountDepositCtrl', ['$scope', '$timeout', 'RESOURCES', 'UserService', 'JYMUtilityService', function($scope, $timeout, RESOURCES, UserService, JYMUtilityService) {
        var account = this;

        account.model = {};
        account.viewModel = {};

        account.buttonEnable = function() {
            return account.viewModel.bankCardNo && account.viewModel.amount && account.viewModel.password;
        };

        account.doRefresh = function() {
            account.resetInput();

            account.refresh()
                .then(function(result) {
                    account.model = result;
                    account.refreshViewModel();
                    return result;
                });
        };

        account.deposit = function() {
            if (account.buttonEnable()) {
                var amount = parseInt(account.viewModel.amount * 100, 10);
                UserService.depositByYilian(amount, account.viewModel.bankCardNo, account.viewModel.password)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.SETTLEACCOUNT.DEPOSIT_SUCCESS);

                            UserService.sharedData.depositBankCardNo = undefined;

                            $timeout(function() {
                                account.resetInput();
                                JYMUtilityService.goWithDisableBack('jym.user-settle-account-deposit-success');
                            }, 1000);
                        }
                    });
            }
        };

        account.refresh = function() {
            if (UserService.sharedData.depositBankCardNo) {
                return UserService.getBankCard(UserService.sharedData.depositBankCardNo);
            } else {
                return UserService.getBankCards()
                    .then(function(result) {
                        result = _.filter(result, function(r) {
                            return r.verifiedByYilian && r.verified;
                        });

                        if (result.length > 0) {
                            UserService.sharedData.depositBankCardNo = result[0].bankCardNo;
                            return result[0];
                        } else {
                            return null;
                        }
                    });
            }
        };

        account.refreshViewModel = function() {
            if (account.model === null) {
                account.viewModel.noCard = true;
            } else {
                account.viewModel.bankCardNo = account.model.bankCardNo;
                account.viewModel.bankName = account.model.bankName;
                account.viewModel.cellphone = account.model.cellphone;
                account.viewModel.cityName = account.model.cityName;
                account.viewModel.verified = account.model.verified;
                account.viewModel.verifiedByYilian = account.model.verifiedByYilian;
                account.viewModel.verifiedTime = account.model.verifiedTime;
                account.viewModel.withdrawAmount = (account.model.withdrawAmount / 100).toFixed(2);
                account.viewModel.noCard = false;
            }
        };

        account.resetInput = function() {
            account.viewModel.amount = null;
            account.viewModel.password = '';
        };

        $scope.$on('$ionicView.enter', function() {
            account.doRefresh();
        });

        account.doRefresh();

    }])
    .controller('UserSettleAccountDepositBankCardSeletorCtrl', ['$scope', '$timeout', '$ionicHistory', 'UserService', function($scope, $timeout, $ionicHistory, UserService) {
        var account = this;

        account.model = {};
        account.viewModel = {};
        account.viewModel.items = [];

        account.doRefresh = function() {
            account.refreshBankCards()
                .then(function(result) {
                    account.model = result;
                    account.refreshViewModel();
                    return result;
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        account.refreshBankCards = function() {
            return UserService.getBankCards();
        };

        account.refreshViewModel = function() {
            account.viewModel.items = [];

            _.forEach(account.model, function(c) {
                var card = {};

                card.bankCardNo = c.bankCardNo;
                card.bankName = c.bankName;
                card.cellphone = c.cellphone;
                card.cityName = c.cityName;
                card.verified = c.verified;
                card.verifiedByYilian = c.verifiedByYilian;
                card.verifiedTime = c.verifiedTime;
                card.withdrawAmount = (c.withdrawAmount / 100).toFixed(2);
                account.viewModel.items.push(c);
            });
        };

        account.select = function(bankCardNo) {
            UserService.sharedData.depositBankCardNo = bankCardNo;
            $ionicHistory.goBack();
        };

        account.selected = function(bankCardNo) {
            return UserService.sharedData.depositBankCardNo === bankCardNo;
        };

        $scope.$on('$ionicView.enter', function() {
            account.doRefresh();
        });

        account.doRefresh();
    }])
    .controller('UserSettleAccountDepositSuccessCtrl', ['$stateParams', 'JYMUtilityService', function($stateParams, JYMUtilityService) {
        var ctrl = this;

        ctrl.transactionIdentifier = $stateParams.transactionIdentifier;

        ctrl.go = function(toState, params) {
            params = params || {};
            JYMUtilityService.goWithDisableBack(toState, params);
        };

    }]);

'use strict';
angular.module('jym.user.settle-account-detail', [
    'jym.services.user'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.user-settle-account-detail', {
                url: '/user/settle-account/detail/{transactionIdentifier}',
                views: {
                    user: {
                        controller: 'UserSettleAccountDetailCtrl as transaction',
                        templateUrl: 'app/user/settle-account/detail/detail.tpl.html'
                    }
                }
            });
    }])
    .controller('UserSettleAccountDetailCtrl', ['$scope', '$stateParams', '$timeout', '$ionicHistory', 'UserService', 'JYMUtilityService', function($scope, $stateParams, $timeout, $ionicHistory, UserService, JYMUtilityService) {
        var transaction = this;

        transaction.model = {};
        transaction.viewModel = {};

        transaction.canBack = function() {
            return $ionicHistory.backView();
        };

        transaction.doRefresh = function() {
            transaction.refresh()
                .then(function(result) {
                    transaction.model = result;
                    transaction.refreshViewModel();
                    return result;
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        transaction.go = function(toState, params) {
            params = params || {};
            JYMUtilityService.goWithDisableBack(toState, params);
        };

        transaction.refresh = function() {
            return UserService.getSettelAccountTransaction($stateParams.transactionIdentifier);
        };

        transaction.refreshViewModel = function() {
            transaction.viewModel.amount = (transaction.model.amount / 100).toFixed(2);
            transaction.viewModel.bankCardNo = transaction.model.bankCardNo;
            transaction.viewModel.channelCode = transaction.model.channelCode;
            transaction.viewModel.resultCode = transaction.model.resultCode;
            transaction.viewModel.resultTime = transaction.model.resultTime;
            transaction.viewModel.showBankCard = transaction.viewModel.bankCardNo.length > 0;
            transaction.viewModel.trade = transaction.model.trade;
            transaction.viewModel.tradeCode = transaction.model.tradeCode;
            transaction.viewModel.transactionIdentifier = transaction.model.transactionIdentifier;
            transaction.viewModel.transactionTime = transaction.model.transactionTime;
            transaction.viewModel.transDesc = transaction.model.transDesc;

            transaction.viewModel.resultStyle = { color: '#444' };

            if (transaction.viewModel.resultCode === 1) {
                transaction.viewModel.resultStyle = { color: '#47B28B' };
            }

            if (transaction.viewModel.resultCode === -1) {
                transaction.viewModel.resultStyle = { color: '#E74C3C' };
            }
        };

        $scope.$on('$ionicView.enter', function() {
            transaction.doRefresh();
        });

        transaction.doRefresh();
    }]);

'use strict';
angular.module('jym.user.settle-account-list', [
    'jym.services.user',
    'jym.user.settle-account-detail'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.user-settle-account-list', {
                url: '/user/settle-account/list',
                views: {
                    user: {
                        controller: 'UserSettleAccountListCtrl as account',
                        templateUrl: 'app/user/settle-account/list/list.tpl.html'
                    }
                }
            });
    }])
    .controller('UserSettleAccountListCtrl', ['$scope', '$timeout', 'UserService', function($scope, $timeout, UserService) {
        var account = this;

        var getViewItem = function(modelItem) {
            var item = {};
            item.amount = (modelItem.amount / 100).toFixed(2);
            item.resultCode = modelItem.resultCode;
            item.resultTime = modelItem.resultTime;
            item.trade = modelItem.trade;
            item.tradeCode = modelItem.tradeCode;
            item.transactionIdentifier = modelItem.transactionIdentifier;
            item.transactionTime = modelItem.transactionTime;
            item.transDesc = modelItem.transDesc;
            return item;
        };

        account.viewModel = {};

        account.doRefresh = function() {
            account.viewModel.items = [];
            account.viewModel.currentPageIndex = 0;
            account.viewModel.nextPageIndex = 0;
            account.viewModel.pageSize = 10;
            account.viewModel.totalCount = 0;
            account.viewModel.totalPageCount = 1;
            account.viewModel.loading = false;

            account.loadMoreData();

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        account.loadMoreData = function() {
            if (account.viewModel.loading) {
                return;
            }

            account.viewModel.loading = true;

            UserService.getSettelAccountList(account.viewModel.nextPageIndex)
                .then(function(result) {
                    account.viewModel.currentPageIndex = result.pageIndex;
                    account.viewModel.nextPageIndex = result.pageIndex + 1;
                    account.viewModel.pageSize = result.pageSize;
                    account.viewModel.totalCount = result.totalCount;
                    account.viewModel.totalPageCount = result.totalPageCount;

                    _.forEach(result.items, function(i) {
                        account.viewModel.items.push(getViewItem(i));
                    });

                    account.viewModel.loading = false;
                });
            $timeout(function() {
                $scope.$broadcast('scroll.infiniteScrollComplete');
            }, 1000);
        };

        account.moreDataCanBeLoaded = function() {
            return account.viewModel.nextPageIndex < account.viewModel.totalPageCount;
        };

        account.doRefresh();
    }]);

'use strict';
angular.module('jym.user.settle-account', [
    'jym.services.user',
    'jym.user.settle-account-deposit',
    'jym.user.settle-account-list',
    'jym.user.settle-account-withdrawal'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.user-settle-account', {
                url: '/user/settle-account',
                views: {
                    user: {
                        controller: 'UserSettleAccountCtrl as user',
                        templateUrl: 'app/user/settle-account/settle-account.tpl.html'
                    }
                }
            });
    }])
    .controller('UserSettleAccountCtrl', ['$scope', '$state', '$timeout', 'RESOURCES', 'UserService', function($scope, $state, $timeout, RESOURCES, UserService) {
        var user = this;

        user.model = {};
        user.viewModel = {};

        user.doRefresh = function() {
            user.refreshUser()
                .then(function(result) {
                    user.model = result;
                    user.refreshViewModel();
                    return result;
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        user.refreshUser = function() {
            return UserService.getUserInfo();
        };

        user.refreshViewModel = function() {
            user.viewModel.balance = (user.model.balance / 100).toFixed(2);
            user.viewModel.investingPrincipal = (user.model.investingPrincipal / 100).toFixed(2);
        };

        $scope.$on('$ionicView.enter', function() {
            user.doRefresh();
        });

        user.doRefresh();
    }]);

'use strict';
angular.module('jym.user.settle-account-withdrawal', [
    'jym.services.user'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.user-settle-account-withdrawal', {
                url: '/user/settle-account/withdrawal',
                views: {
                    user: {
                        controller: 'UserSettleAccountWithdrawalCtrl as account',
                        templateUrl: 'app/user/settle-account/withdrawal/withdrawal.tpl.html'
                    }
                }
            })
            .state('jym.user-settle-account-withdrawal-bank-card-selector', {
                url: '/user/settle-account/withdrawal/select-bank-card',
                views: {
                    user: {
                        controller: 'UserSettleAccountWithdrawalBankCardSeletorCtrl as account',
                        templateUrl: 'app/user/settle-account/withdrawal/bank-card-selector.tpl.html'
                    }
                }
            });
    }])
    .controller('UserSettleAccountWithdrawalCtrl', ['$scope', '$timeout', '$q', 'RESOURCES', 'UserService', 'JYMUtilityService', function($scope, $timeout, $q, RESOURCES, UserService, JYMUtilityService) {
        var account = this;

        account.model = {};
        account.viewModel = {};

        account.buttonEnable = function() {
            return account.viewModel.bankCardNo && account.viewModel.amount && account.viewModel.password;
        };

        account.doRefresh = function() {
            account.resetInput();

            var refreshBankCard = account.refreshBankCard()
                .then(function(result) {
                    account.model.bankCard = result;
                    return result;
                });

            var refreshUser = account.refreshUser()
                .then(function(result) {
                    account.model.user = result;
                });

            $q.all([refreshBankCard, refreshUser])
                .then(function() {
                    account.refreshViewModel();
                });
        };

        account.refreshBankCard = function() {
            if (UserService.sharedData.withdrawalBankCardNo) {
                return UserService.getBankCard(UserService.sharedData.withdrawalBankCardNo);
            } else {
                return UserService.getWithdrawalableBankCards()
                    .then(function(result) {
                        if (result.length > 0) {
                            UserService.sharedData.withdrawalBankCardNo = result[0].bankCardNo;
                            return result[0];
                        } else {
                            return null;
                        }
                    });
            }
        };

        account.refreshUser = function() {
            return UserService.getUserInfo();
        };

        account.refreshViewModel = function() {
            if (account.model.bankCard === null) {
                account.viewModel.noCard = true;
            } else {
                account.viewModel.bankCardNo = account.model.bankCard.bankCardNo;
                account.viewModel.bankName = account.model.bankCard.bankName;
                account.viewModel.cellphone = account.model.bankCard.cellphone;
                account.viewModel.cityName = account.model.bankCard.cityName;
                account.viewModel.verified = account.model.bankCard.verified;
                account.viewModel.verifiedByYilian = account.model.bankCard.verifiedByYilian;
                account.viewModel.verifiedTime = account.model.bankCard.verifiedTime;
                account.viewModel.withdrawAmount = (account.model.bankCard.withdrawAmount / 100).toFixed(2);
                account.viewModel.noCard = false;

                account.viewModel.withdrawalableAmount = (account.model.user.withdrawalableAmount / 100).toFixed(2);
            }
        };

        account.resetInput = function() {
            account.viewModel.amount = null;
            account.viewModel.password = '';
        };

        account.selectAll = function() {
            account.viewModel.amount = account.viewModel.withdrawAmount;
        };

        account.withdraw = function() {
            var amount = parseInt(account.viewModel.amount * 100, 10);
            if (account.buttonEnable()) {
                UserService.withdrawal(amount, account.viewModel.bankCardNo, account.viewModel.password)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.SETTLEACCOUNT.WITHDRAWAL_SUCCESS);

                            UserService.sharedData.withdrawalBankCardNo = undefined;

                            $timeout(function() {
                                account.resetInput();
                                JYMUtilityService.go('jym.user-settle-account-detail', {
                                    transactionIdentifier: result.transactionIdentifier
                                });
                            }, 1000);
                        }
                    });
            }
        };

        $scope.$on('$ionicView.enter', function() {
            account.doRefresh();
        });

        account.doRefresh();
    }])
    .controller('UserSettleAccountWithdrawalBankCardSeletorCtrl', ['$scope', '$timeout', '$ionicHistory', 'UserService', function($scope, $timeout, $ionicHistory, UserService) {
        var account = this;

        var getViewItem = function(modelItem) {
            var card = {};
            card.bankCardNo = modelItem.bankCardNo;
            card.bankName = modelItem.bankName;
            card.cellphone = modelItem.cellphone;
            card.cityName = modelItem.cityName;
            card.verified = modelItem.verified;
            card.verifiedByYilian = modelItem.verifiedByYilian;
            card.verifiedTime = modelItem.verifiedTime;
            card.withdrawAmount = (modelItem.withdrawAmount / 100).toFixed(2);
            return card;
        };

        account.model = {};
        account.viewModel = {};

        account.doRefresh = function() {
            account.refreshBankCards()
                .then(function(result) {
                    account.model = result;
                    account.refreshViewModel();
                    return result;
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        account.refreshBankCards = function() {
            return UserService.getWithdrawalableBankCards();
        };

        account.refreshViewModel = function() {
            account.viewModel.items = [];

            _.forEach(account.model, function(c) {
                account.viewModel.items.push(getViewItem(c));
            });
        };

        account.select = function(bankCardNo) {
            UserService.sharedData.withdrawalBankCardNo = bankCardNo;
            $ionicHistory.goBack();
        };

        account.selected = function(bankCardNo) {
            return UserService.sharedData.withdrawalBankCardNo === bankCardNo;
        };

        $scope.$on('$ionicView.enter', function() {
            account.doRefresh();
        });

        account.doRefresh();
    }]);

'use strict';
angular.module('jym.user.signup', [])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.user-signup', {
                url: '/user/signup/{token}',
                views: {
                    user: {
                        controller: 'UserSignUpCtrl as ctrl',
                        templateUrl: 'app/user/signup/signup.tpl.html'
                    }
                }
            })
            .state('jym.user-signup-send-veri-code', {
                url: '/user/signup-send-veri-code',
                views: {
                    user: {
                        controller: 'UserSignUpSendVeriCodeCtrl as ctrl',
                        templateUrl: 'app/user/signup/sendVeriCode.tpl.html'
                    }
                }
            });
    }])
    .controller('UserSignUpCtrl', ['$scope', '$stateParams', '$timeout', '$ionicScrollDelegate', 'RESOURCES', 'UserService', 'JYMUtilityService', function($scope, $stateParams, $timeout, $ionicScrollDelegate, RESOURCES, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.viewModel = {};

        ctrl.check = function() {
            ctrl.viewModel.checked = !ctrl.viewModel.checked;
        };

        ctrl.doRefresh = function() {
            ctrl.viewModel.checked = true;
            ctrl.viewModel.showAgreement1 = false;
            ctrl.viewModel.showAgreement2 = false;

            ctrl.resetInput();
        };

        ctrl.enableButton = function() {
            return ctrl.viewModel.checked && ctrl.viewModel.password && ctrl.viewModel.confirmPassword && ctrl.viewModel.password === ctrl.viewModel.confirmPassword;
        };

        ctrl.resetInput = function() {
            ctrl.viewModel.confirmPassword = '';
            ctrl.viewModel.password = '';
        };

        ctrl.resetPassword = function() {
            if (ctrl.enableButton()) {
                UserService.signUp(ctrl.viewModel.password, $stateParams.token)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.SIGNUP.SIGNUP_SUCCESS);
                            UserService.loginOut();
                            ctrl.viewModel.password = '';
                            ctrl.viewModel.confirmPassword = '';
                            $timeout(function() {
                                JYMUtilityService.goWithDisableBack('jym.user-login');
                            }, 1000);
                        }
                    });
            }
        };

        ctrl.toggleAgreement1 = function() {
            ctrl.viewModel.showAgreement2 = false;
            $ionicScrollDelegate.scrollTop();
            ctrl.viewModel.showAgreement1 = !ctrl.viewModel.showAgreement1;
        };

        ctrl.toggleAgreement2 = function() {
            ctrl.viewModel.showAgreement1 = false;
            $ionicScrollDelegate.scrollTop();
            ctrl.viewModel.showAgreement2 = !ctrl.viewModel.showAgreement2;
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    }])
    .controller('UserSignUpSendVeriCodeCtrl', ['$scope', '$timeout', 'RESOURCES', 'UserService', 'JYMUtilityService', function($scope, $timeout, RESOURCES, UserService, JYMUtilityService) {
        var ctrl = this;

        ctrl.viewModel = {};
        ctrl.viewModel.remainSeconds = 0;

        ctrl.doRefresh = function() {
            ctrl.resetInput();
        };

        ctrl.resetInput = function() {
            ctrl.viewModel.cellphone = '';
            ctrl.viewModel.veriCode = '';
        };

        ctrl.sendVeriCode = function() {
            if (ctrl.sendVeriCodeButtonEnable()) {
                ctrl.viewModel.remainSeconds = 60;
                UserService.sendVeriCode(ctrl.viewModel.cellphone, 10)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.MISC.SEND_VERI_CODE);
                        }
                    });
                ctrl.startTimer();
            }
        };

        ctrl.sendVeriCodeButtonEnable = function() {
            return ctrl.viewModel.cellphone && ctrl.viewModel.remainSeconds <= 0;
        };

        ctrl.showVeriCodeButton = function() {
            return ctrl.viewModel.remainSeconds <= 0;
        };

        ctrl.startTimer = function() {
            if (ctrl.viewModel.remainSeconds > 0) {
                ctrl.viewModel.remainSeconds = ctrl.viewModel.remainSeconds - 1;
                $timeout(ctrl.startTimer, 1000);
            }
        };

        ctrl.verifyVeriCode = function() {
            if (ctrl.verifyVeriCodeButtonEnable()) {
                UserService.verifyVeriCode(ctrl.viewModel.cellphone, ctrl.viewModel.veriCode, 10)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.MISC.VERIFY_VERI_CODE);

                            $timeout(function() {
                                ctrl.resetInput();
                                JYMUtilityService.go('jym.user-signup', { token: result.token });
                            }, 1000);
                        }
                    });
            }
        };

        ctrl.verifyVeriCodeButtonEnable = function() {
            return ctrl.viewModel.cellphone && ctrl.viewModel.veriCode;
        };

        $scope.$on('$ionicView.enter', function() {
            ctrl.doRefresh();
        });

        ctrl.doRefresh();
    }]);

'use strict';
angular.module('jym.user', [
    'jym.services.user',
    'jym.user.about',
    'jym.user.bank-card',
    'jym.user.login',
    'jym.user.jinbaoyin',
    'jym.user.orders',
    'jym.user.security',
    'jym.user.settle-account'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.user', {
                url: '/user',
                views: {
                    user: {
                        controller: 'UserCtrl as user',
                        templateUrl: 'app/user/index.tpl.html'
                    }
                }
            });
    }])
    .controller('UserCtrl', ['$scope', '$timeout', '$ionicScrollDelegate', 'RESOURCES', 'UserService', 'JYMUtilityService', function($scope, $timeout, $ionicScrollDelegate, RESOURCES, UserService, JYMUtilityService) {
        var user = this;

        user.model = {};
        user.viewModel = {};

        user.doRefresh = function() {
            user.refreshUser()
                .then(function(result) {
                    user.model = result;
                    user.refreshViewModel();
                    return result;
                });

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        user.refreshUser = function() {
            return UserService.getUserInfo();
        };

        user.refreshViewModel = function() {
            user.viewModel.cellphone = user.model.cellphone;
            user.viewModel.realName = user.model.realName || '未实名认证';
            user.viewModel.credentialNo = user.model.credentialNo || '未实名认证';
        };

        user.loginOut = function() {
            UserService.loginOut();

            JYMUtilityService.showAlert(RESOURCES.TIP.USER.LOGIN_OUT);

            $timeout(function() {
                JYMUtilityService.goWithDisableBack('jym.user-login');
            }, 1000);
        };

        $scope.$on('$ionicView.enter', function() {
            user.doRefresh();
        });

        $scope.$on('$ionicView.leave', function() {
            $ionicScrollDelegate.scrollTop();
        });

        user.doRefresh();
    }]);

/*jshint -W024 */
'use strict';
angular.module('jym.yinpiao.detail', [
    'jym.services',
    'jym.services.product',
    'jym.services.purchase',
    'jym.services.user',
    'jym.yinpiao.purchase'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.yinpiao-detail', {
                url: '/yinpiao/detail/{productIdentifier}',
                views: {
                    yinpiao: {
                        controller: 'YinpiaoDetailCtrl as product',
                        templateUrl: 'app/yinpiao/detail/detail.tpl.html'
                    }
                }
            });
    }])
    .controller('YinpiaoDetailCtrl', ['$scope', '$state', '$stateParams', '$q', '$timeout', 'ProductService', 'PurchaseService', 'UserService', 'JYMUtilityService', function($scope, $state, $stateParams, $q, $timeout, ProductService, PurchaseService, UserService, JYMUtilityService) {
        var product = this;

        product.model = {};
        product.viewModel = {};

        var getSaleProgress = function(product) {
            return ProductService.getSaleProgress(product.paidAmount, product.financingSumAmount, product.soldOut, product.startSellTime, product.endSellTime, product.repaid);
        };

        var getSaleStatus = function(product) {
            return ProductService.getSaleStatus(product.soldOut, product.startSellTime, product.endSellTime, product.repaid);
        };

        var getValueDateModeText = function(valueDateMode) {
            return ProductService.getValueDateModeText(valueDateMode);
        };

        product.doRefresh = function() {
            product.viewModel.investCount = product.viewModel.investCount || 10;
            product.viewModel.investAmount = 0;
            product.viewModel.expectedInterest = 0;

            product.refreshProduct();

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        product.investCountChange = function() {
            if (product.viewModel.investCount < 0) {
                product.viewModel.investCount = 0;
            }

            if (product.viewModel.investCount > product.viewModel.remainCount) {
                product.viewModel.investCount = parseInt(product.viewModel.remainCount, 10);
            }

            product.refreshInvestViewModel();
        };

        product.getAccrualDuration = function() {
            var diff = (moment(product.model.settleDate) - moment(product.model.currentValueDate)) / (1000 * 60 * 60 * 24);
            return parseInt(diff, 10);
        };

        product.goPurchase = function() {
            if (product.goPurchaseButtonEnable()) {
                var amount = product.viewModel.investCount * product.model.unitPrice;
                var checkUserPurchaseStatus = UserService.checkUserPurchaseStatus();
                var checkProductPurchaseStatus = ProductService.checkProductPurchaseStatus(product.refreshProduct(), amount);
                $q.all([checkUserPurchaseStatus, checkProductPurchaseStatus])
                    .then(function(result) {
                        PurchaseService.buildRegularOrder(amount, result[1].productIdentifier, 100000010);

                        $state.go('jym.yinpiao-purchase');
                    })
                    .catch(function(result) {
                        JYMUtilityService.showAlert(result);
                    });
            }
        };

        product.goPurchaseButtonEnable = function() {
            return product.viewModel.status === 20 && product.viewModel.investAmount && product.viewModel.investAmount >= product.viewModel.unitPrice;
        };

        product.refreshInvestViewModel = function() {
            if (isFinite(product.viewModel.investCount)) {
                product.viewModel.investAmount = product.viewModel.investCount * product.viewModel.unitPrice;
            } else {
                product.viewModel.investAmount = 0;
            }

            product.viewModel.expectedInterest = (ProductService.getInterest(product.viewModel.investAmount * 100, product.model.yield, product.getAccrualDuration()) / 100).toFixed(2);
        };

        product.refreshProduct = function() {
            return ProductService.getRegularProductInfo($stateParams.productIdentifier)
                .then(function(result) {
                    product.model = result;
                    product.refreshViewModel();
                    product.refreshInvestViewModel();
                    return result;
                });
        };

        product.refreshViewModel = function() {
            product.viewModel.bankName = product.model.bankName;
            product.viewModel.currentValueDate = product.model.currentValueDate;
            product.viewModel.drawee = product.model.drawee;
            product.viewModel.draweeInfo = product.model.draweeInfo;
            product.viewModel.endorseImageLink = product.model.endorseImageLink;
            product.viewModel.endSellTime = product.model.endSellTime;
            product.viewModel.enterpriseInfo = product.model.enterpriseInfo;
            product.viewModel.enterpriseLicense = product.model.enterpriseLicense;
            product.viewModel.enterpriseName = product.model.enterpriseName;
            product.viewModel.financingSumAmount = product.model.financingSumAmount / 1000000;
            product.viewModel.issueNo = product.model.issueNo;
            product.viewModel.issueTime = product.model.issueTime;
            product.viewModel.paidAmount = product.model.paidAmount;
            product.viewModel.period = product.model.period;
            product.viewModel.productCategory = product.model.productCategory;
            product.viewModel.productIdentifier = product.model.productIdentifier;
            product.viewModel.productName = product.model.productName;
            product.viewModel.productNo = product.model.productNo;
            product.viewModel.remainCount = ((product.model.financingSumAmount - product.model.paidAmount) / product.model.unitPrice).toFixed(0);
            product.viewModel.repaid = product.model.repaid;
            product.viewModel.repaidTime = product.model.repaidTime;
            product.viewModel.repaymentDeadline = product.model.repaymentDeadline;
            product.viewModel.riskManagement = product.model.riskManagement;
            product.viewModel.riskManagementInfo = product.model.riskManagementInfo;
            product.viewModel.riskManagementMode = product.model.riskManagementMode;
            product.viewModel.sellProgress = getSaleProgress(product.model);
            product.viewModel.sellProgressInCircleProgress = product.viewModel.sellProgress / 100;
            product.viewModel.settleDate = product.model.settleDate;
            product.viewModel.soldOut = product.model.soldOut;
            product.viewModel.soldOutTime = product.model.soldOutTime;
            product.viewModel.specifyValueDate = product.model.specifyValueDate;
            product.viewModel.startSellTime = product.model.startSellTime;
            product.viewModel.status = getSaleStatus(product.model);
            product.viewModel.unitPrice = (product.model.unitPrice / 100).toFixed(0);
            product.viewModel.usage = product.model.usage;
            product.viewModel.valueDate = product.model.valueDate;
            product.viewModel.valueDateMode = product.model.valueDateMode;
            product.viewModel.valueDateText = getValueDateModeText(product.model.valueDateMode, product.model.valueDate, product.model.specifyValueDate);
            product.viewModel.yield = product.model.yield / 100;

            if (product.viewModel.status !== 20) {
                product.viewModel.remainCount = 0;
            }

            switch (product.viewModel.status) {
                case 10:
                    product.viewModel.statusText = '待售';
                    break;
                case 20:
                    product.viewModel.statusText = '抢购';
                    break;
                case 30:
                    product.viewModel.statusText = '售罄';
                    break;
                case 40:
                    product.viewModel.statusText = '结束';
                    break;
                default :
                    product.viewModel.statusText = '';
            }
        };

        product.doRefresh();
    }]);

'use strict';
angular.module('jym.yinpiao.purchase', [
    'jym.services',
    'jym.services.product',
    'jym.services.purchase',
    'jym.services.user',
    'jym.user.orders-detail'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.yinpiao-purchase', {
                url: '/yinpiao/purchase',
                views: {
                    yinpiao: {
                        controller: 'YinpiaoPurchaseCtrl as purchase',
                        templateUrl: 'app/yinpiao/purchase/purchase.tpl.html'
                    }
                }
            });
    }])
    .controller('YinpiaoPurchaseCtrl', ['$scope', '$timeout', '$ionicScrollDelegate', 'RESOURCES', 'ProductService', 'PurchaseService', 'UserService', 'JYMUtilityService', function($scope, $timeout, $ionicScrollDelegate, RESOURCES, ProductService, PurchaseService, UserService, JYMUtilityService) {
        var purchase = this;

        purchase.model = {};
        purchase.viewModel = {};

        purchase.check = function() {
            purchase.viewModel.checked = !purchase.viewModel.checked;
        };

        purchase.doRefresh = function() {
            purchase.viewModel.agreement1 = '委托协议';
            purchase.viewModel.agreement2 = '借款协议';
            purchase.viewModel.showAgreement1 = false;
            purchase.viewModel.showAgreement2 = false;

            purchase.resetInput();

            purchase.refreshUserInfo()
                .then(function(result) {
                    purchase.model.user = result;
                    purchase.model.order = PurchaseService.getRegularOrder(100000010);
                    purchase.refreshViewModel();
                    return result;
                })
                .then(function() {
                    var agreementData = {
                        cellphone: purchase.model.user.cellphone,
                        credentialNo: purchase.model.user.credentialNo,
                        realName: purchase.model.user.realName
                    };

                    purchase.refreshAgreement(1)
                        .then(function(result) {
                            purchase.viewModel.agreement1 = ProductService.fillDataForAgreement(result.content, agreementData);
                        });

                    purchase.refreshAgreement(2)
                        .then(function(result) {
                            purchase.viewModel.agreement2 = ProductService.fillDataForAgreement(result.content, agreementData);
                        });
                });
        };

        purchase.refreshAgreement = function(agreementIndex) {
            return ProductService.getAgreementContent(purchase.model.order.productIdentifier, agreementIndex);
        };

        purchase.refreshUserInfo = function() {
            return UserService.getUserInfo();
        };

        purchase.refreshViewModel = function() {
            purchase.viewModel.amount = (purchase.model.order.amount / 100).toFixed(2);
            purchase.viewModel.balance = (purchase.model.user.balance / 100).toFixed(2);
        };

        purchase.resetInput = function() {
            purchase.viewModel.checked = true;
            purchase.viewModel.password = '';
        };

        purchase.purchaseButtonEnable = function() {
            return purchase.viewModel.checked && purchase.viewModel.amount && purchase.viewModel.password && purchase.model.user.balance >= purchase.model.order.amount;
        };

        purchase.purchase = function() {
            if (purchase.purchaseButtonEnable()) {
                var amount = purchase.model.order.amount;
                UserService.investingRegular(amount, purchase.viewModel.password, purchase.model.order.productIdentifier)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.INVESTING.REGULAR);

                            PurchaseService.clearRegularOrder();

                            $timeout(function() {
                                purchase.resetInput();
                                JYMUtilityService.goWithDisableBack('jym.user-orders-detail', { orderIdentifier: result.orderIdentifier });
                            }, 1000);
                        }
                    });
            }
        };

        purchase.toggleAgreement1 = function() {
            purchase.viewModel.showAgreement2 = false;
            $ionicScrollDelegate.scrollTop();
            purchase.viewModel.showAgreement1 = !purchase.viewModel.showAgreement1;
        };

        purchase.toggleAgreement2 = function() {
            purchase.viewModel.showAgreement1 = false;
            $ionicScrollDelegate.scrollTop();
            purchase.viewModel.showAgreement2 = !purchase.viewModel.showAgreement2;
        };

        $scope.$on('$ionicView.enter', function() {
            purchase.doRefresh();
        });

        purchase.doRefresh();
    }]);

/*jshint -W024 */
'use strict';
angular.module('jym.yinpiao', [
    'jym.services',
    'jym.yinpiao.detail'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.yinpiao', {
                url: '/yinpiao',
                views: {
                    yinpiao: {
                        controller: 'YinpiaoIndexCtrl as products',
                        templateUrl: 'app/yinpiao/index.tpl.html'
                    }
                }
            });
    }])
    .controller('YinpiaoIndexCtrl', ['$scope', '$filter', '$timeout', 'ProductService', function($scope, $filter, $timeout, ProductService) {
        var products = this;

        products.viewModel = {};

        var getSaleProgress = function(product) {
            return ProductService.getSaleProgress(product.paidAmount, product.financingSumAmount, product.soldOut, product.startSellTime, product.endSellTime, product.repaid);
        };

        var getSaleStatus = function(product) {
            return ProductService.getSaleStatus(product.soldOut, product.startSellTime, product.endSellTime, product.repaid);
        };

        var getValueDateModeText = function(valueDateMode, valueDate, specifyValueDate) {
            return ProductService.getValueDateModeText(valueDateMode, valueDate, specifyValueDate);
        };

        var getViewItem = function(modelItem) {
            var item = {};
            item.bankName = modelItem.bankName;
            item.currentValueDate = modelItem.currentValueDate;
            item.drawee = modelItem.drawee;
            item.draweeInfo = modelItem.draweeInfo;
            item.endorseImageLink = modelItem.endorseImageLink;
            item.endSellTime = modelItem.endSellTime;
            item.enterpriseInfo = modelItem.enterpriseInfo;
            item.enterpriseLicense = modelItem.enterpriseLicense;
            item.enterpriseName = modelItem.enterpriseName;
            item.financingSumAmount = modelItem.financingSumAmount / 1000000;
            item.issueNo = modelItem.issueNo;
            item.issueTime = modelItem.issueTime;
            item.paidAmount = modelItem.paidAmount;
            item.period = modelItem.period;
            item.productCategory = modelItem.productCategory;
            item.productIdentifier = modelItem.productIdentifier;
            item.productName = modelItem.productName + ' ' + '第' + modelItem.issueNo + '期';
            item.productNo = modelItem.productNo;
            item.remainCount = ((modelItem.financingSumAmount - modelItem.paidAmount) / modelItem.unitPrice).toFixed(0);
            item.repaid = modelItem.repaid;
            item.repaidTime = modelItem.repaidTime;
            item.repaymentDeadline = modelItem.repaymentDeadline;
            item.riskManagement = modelItem.riskManagement;
            item.riskManagementInfo = modelItem.riskManagementInfo;
            item.riskManagementMode = modelItem.riskManagementMode;
            item.sellProgress = getSaleProgress(modelItem);
            item.sellProgressInCircleProgress = item.sellProgress / 100;
            item.settleDate = modelItem.settleDate;
            item.soldOut = modelItem.soldOut;
            item.soldOutTime = modelItem.soldOutTime;
            item.specifyValueDate = modelItem.specifyValueDate;
            item.startSellTime = modelItem.startSellTime;
            item.status = getSaleStatus(modelItem);
            item.unitPrice = (modelItem.unitPrice / 100).toFixed(0);
            item.usage = modelItem.usage;
            item.valueDate = modelItem.valueDate;
            item.valueDateMode = modelItem.valueDateMode;
            item.valueDateText = getValueDateModeText(modelItem.valueDateMode, modelItem.valueDate, modelItem.specifyValueDate);
            item.yield = modelItem.yield / 100;

            switch (item.status) {
                case 10:
                    item.statusText = '待售';
                    item.timeText = '开售时间 ' + $filter('time')(item.startSellTime);
                    break;
                case 20:
                    item.statusText = '抢购 已售出' + item.sellProgress + '%';
                    item.timeText = '起息时间 ' + item.valueDateText;
                    break;
                case 30:
                    item.statusText = '售罄 请期待下期';
                    item.timeText = '预计还款时间 ' + $filter('time')(item.repaymentDeadline);
                    break;
                case 40:
                    item.statusText = '项目结束';
                    item.timeText = '还款时间 ' + $filter('time')(item.repaidTime);
                    break;
                default :
                    item.statusText = '';
                    item.timeText = '';
            }

            return item;
        };

        products.doRefresh = function() {
            products.viewModel.items = [];
            products.viewModel.currentPageIndex = 0;
            products.viewModel.nextPageIndex = 0;
            products.viewModel.pageSize = 10;
            products.viewModel.totalCount = 0;
            products.viewModel.totalPageCount = 1;
            products.viewModel.loading = false;

            products.loadMoreData();

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        products.loadMoreData = function() {
            if (products.viewModel.loading) {
                return;
            }

            products.viewModel.loading = true;

            ProductService.getYinpiaoPage(products.viewModel.nextPageIndex)
                .then(function(result) {
                    products.viewModel.currentPageIndex = result.pageIndex;
                    products.viewModel.nextPageIndex = result.pageIndex + 1;
                    products.viewModel.pageSize = result.pageSize;
                    products.viewModel.totalCount = result.totalCount;
                    products.viewModel.totalPageCount = result.totalPageCount;

                    _.forEach(result.items, function(i) {
                        products.viewModel.items.push(getViewItem(i));
                    });

                    products.viewModel.loading = false;
                });
            $timeout(function() {
                $scope.$broadcast('scroll.infiniteScrollComplete');
            }, 1000);
        };

        products.moreDataCanBeLoaded = function() {
            return products.viewModel.nextPageIndex < products.viewModel.totalPageCount;
        };

        products.doRefresh();
    }]);

/*jshint -W024 */
'use strict';
angular.module('jym.zhuanqu.detail', [
    'jym.services',
    'jym.services.product',
    'jym.services.purchase',
    'jym.services.user',
    'jym.zhuanqu.purchase'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.zhuanqu-detail', {
                url: '/zhuanqu/detail/{bankName}/{productIdentifier}',
                views: {
                    zhuanqu: {
                        controller: 'ZhuanquDetailCtrl as product',
                        templateUrl: 'app/zhuanqu/detail/detail.tpl.html'
                    }
                }
            });
    }])
    .controller('ZhuanquDetailCtrl', ['$scope', '$state', '$stateParams', '$q', '$timeout', 'ProductService', 'PurchaseService', 'UserService', 'JYMUtilityService', function($scope, $state, $stateParams, $q, $timeout, ProductService, PurchaseService, UserService, JYMUtilityService) {
        var product = this;

        product.model = {};
        product.viewModel = {};

        var getSaleProgress = function(product) {
            return ProductService.getSaleProgress(product.paidAmount, product.financingSumAmount, product.soldOut, product.startSellTime, product.endSellTime, product.repaid);
        };

        var getSaleStatus = function(product) {
            return ProductService.getSaleStatus(product.soldOut, product.startSellTime, product.endSellTime, product.repaid);
        };

        var getValueDateModeText = function(valueDateMode) {
            return ProductService.getValueDateModeText(valueDateMode);
        };

        product.doRefresh = function() {
            product.viewModel.investCount = product.viewModel.investCount || 10;
            product.viewModel.investAmount = 0;
            product.viewModel.expectedInterest = 0;

            product.refreshProduct();

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        product.investCountChange = function() {
            if (product.viewModel.investCount < 0) {
                product.viewModel.investCount = 0;
            }

            if (product.viewModel.investCount > product.viewModel.remainCount) {
                product.viewModel.investCount = parseInt(product.viewModel.remainCount, 10);
            }

            product.refreshInvestViewModel();
        };

        product.getAccrualDuration = function() {
            var diff = (moment(product.model.settleDate) - moment(product.model.currentValueDate)) / (1000 * 60 * 60 * 24);
            return parseInt(diff, 10);
        };

        product.goPurchase = function() {
            var productCategory;
            if ($stateParams.bankName === 'fudian') {
                productCategory = 210001010;
            } else if ($stateParams.bankName === 'fuxin') {
                productCategory = 210003010;
            } else if ($stateParams.bankName === 'shibing') {
                productCategory = 210002020;
            } else {
                productCategory = 100000010;
            }

            if (product.goPurchaseButtonEnable()) {
                var amount = product.viewModel.investCount * product.model.unitPrice;
                var checkUserPurchaseStatus = UserService.checkUserPurchaseStatus();
                var checkProductPurchaseStatus = ProductService.checkProductPurchaseStatus(product.refreshProduct(), amount);
                $q.all([checkUserPurchaseStatus, checkProductPurchaseStatus])
                    .then(function(result) {
                        PurchaseService.buildRegularOrder(amount, result[1].productIdentifier, productCategory);

                        $state.go('jym.zhuanqu-purchase', { bankName: $stateParams.bankName });
                    })
                    .catch(function(result) {
                        JYMUtilityService.showAlert(result);
                    });
            }
        };

        product.goPurchaseButtonEnable = function() {
            return product.viewModel.status === 20 && product.viewModel.investAmount && product.viewModel.investAmount >= product.viewModel.unitPrice;
        };

        product.refreshInvestViewModel = function() {
            if (isFinite(product.viewModel.investCount)) {
                product.viewModel.investAmount = product.viewModel.investCount * product.viewModel.unitPrice;
            } else {
                product.viewModel.investAmount = 0;
            }

            product.viewModel.expectedInterest = (ProductService.getInterest(product.viewModel.investAmount * 100, product.model.yield, product.getAccrualDuration()) / 100).toFixed(2);
        };

        product.refreshProduct = function() {
            return ProductService.getRegularProductInfo($stateParams.productIdentifier)
                .then(function(result) {
                    product.model = result;
                    product.refreshViewModel();
                    product.refreshInvestViewModel();
                    return result;
                });
        };

        product.refreshViewModel = function() {
            product.viewModel.bankName = product.model.bankName;
            product.viewModel.currentValueDate = product.model.currentValueDate;
            product.viewModel.drawee = product.model.drawee;
            product.viewModel.draweeInfo = product.model.draweeInfo;
            product.viewModel.endorseImageLink = product.model.endorseImageLink;
            product.viewModel.endSellTime = product.model.endSellTime;
            product.viewModel.enterpriseInfo = product.model.enterpriseInfo;
            product.viewModel.enterpriseLicense = product.model.enterpriseLicense;
            product.viewModel.enterpriseName = product.model.enterpriseName;
            product.viewModel.financingSumAmount = product.model.financingSumAmount / 1000000;
            product.viewModel.issueNo = product.model.issueNo;
            product.viewModel.issueTime = product.model.issueTime;
            product.viewModel.paidAmount = product.model.paidAmount;
            product.viewModel.period = product.model.period;
            product.viewModel.productCategory = product.model.productCategory;
            product.viewModel.productIdentifier = product.model.productIdentifier;
            product.viewModel.productName = product.model.productName;
            product.viewModel.productNo = product.model.productNo;
            product.viewModel.remainCount = ((product.model.financingSumAmount - product.model.paidAmount) / product.model.unitPrice).toFixed(0);
            product.viewModel.repaid = product.model.repaid;
            product.viewModel.repaidTime = product.model.repaidTime;
            product.viewModel.repaymentDeadline = product.model.repaymentDeadline;
            product.viewModel.riskManagement = product.model.riskManagement;
            product.viewModel.riskManagementInfo = product.model.riskManagementInfo;
            product.viewModel.riskManagementMode = product.model.riskManagementMode;
            product.viewModel.sellProgress = getSaleProgress(product.model);
            product.viewModel.sellProgressInCircleProgress = product.viewModel.sellProgress / 100;
            product.viewModel.settleDate = product.model.settleDate;
            product.viewModel.soldOut = product.model.soldOut;
            product.viewModel.soldOutTime = product.model.soldOutTime;
            product.viewModel.specifyValueDate = product.model.specifyValueDate;
            product.viewModel.startSellTime = product.model.startSellTime;
            product.viewModel.status = getSaleStatus(product.model);
            product.viewModel.unitPrice = (product.model.unitPrice / 100).toFixed(0);
            product.viewModel.usage = product.model.usage;
            product.viewModel.valueDate = product.model.valueDate;
            product.viewModel.valueDateMode = product.model.valueDateMode;
            product.viewModel.valueDateText = getValueDateModeText(product.model.valueDateMode, product.model.valueDate, product.model.specifyValueDate);
            product.viewModel.yield = product.model.yield / 100;


            if ($stateParams.bankName === 'fudian') {
                product.viewModel.isYinpiao = true;
                product.viewModel.isShangpiao = false;
                product.viewModel.riskManagementText = product.viewModel.bankName;
            } else if ($stateParams.bankName === 'fuxin') {
                product.viewModel.isYinpiao = true;
                product.viewModel.isShangpiao = false;
                product.viewModel.riskManagementText = product.viewModel.bankName;
            } else if ($stateParams.bankName === 'shibing') {
                product.viewModel.isYinpiao = false;
                product.viewModel.isShangpiao = true;
                product.viewModel.riskManagementText = product.viewModel.riskManagement;
            } else {
                product.viewModel.isYinpiao = false;
                product.viewModel.isShangpiao = false;
                product.viewModel.riskManagementText = product.viewModel.riskManagement;
            }

            if (product.viewModel.status !== 20) {
                product.viewModel.remainCount = 0;
            }

            switch (product.viewModel.status) {
                case 10:
                    product.viewModel.statusText = '待售';
                    break;
                case 20:
                    product.viewModel.statusText = '抢购';
                    break;
                case 30:
                    product.viewModel.statusText = '售罄';
                    break;
                case 40:
                    product.viewModel.statusText = '结束';
                    break;
                default :
                    product.viewModel.statusText = '';
            }
        };

        product.doRefresh();
    }]);

'use strict';
angular.module('jym.zhuanqu.purchase', [
    'jym.services',
    'jym.services.product',
    'jym.services.purchase',
    'jym.services.user',
    'jym.user.orders-detail'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.zhuanqu-purchase', {
                url: '/zhuanqu/purchase/{bankName}',
                views: {
                    zhuanqu: {
                        controller: 'ZhuanquPurchaseCtrl as purchase',
                        templateUrl: 'app/zhuanqu/purchase/purchase.tpl.html'
                    }
                }
            });
    }])
    .controller('ZhuanquPurchaseCtrl', ['$scope', '$stateParams', '$timeout', '$ionicScrollDelegate', 'RESOURCES', 'ProductService', 'PurchaseService', 'UserService', 'JYMUtilityService', function($scope, $stateParams, $timeout, $ionicScrollDelegate, RESOURCES, ProductService, PurchaseService, UserService, JYMUtilityService) {
        var purchase = this;

        purchase.model = {};
        purchase.viewModel = {};

        purchase.check = function() {
            purchase.viewModel.checked = !purchase.viewModel.checked;
        };

        purchase.doRefresh = function() {
            purchase.viewModel.agreement1 = '委托协议';
            purchase.viewModel.agreement2 = '借款协议';
            purchase.viewModel.bankName = $stateParams.bankName || purchase.viewModel.bankName || 'fudian';
            purchase.viewModel.showAgreement1 = false;
            purchase.viewModel.showAgreement2 = false;

            purchase.resetInput();

            var productCategory;
            switch (purchase.viewModel.bankName) {
                case 'fudian':
                    productCategory = 210001010;
                    break;
                case 'fuxin':
                    productCategory = 210003010;
                    break;
                case 'shibing':
                    productCategory = 210002020;
                    break;
                default :
                    productCategory = 210001010;
            }

            purchase.refreshUserInfo()
                .then(function(result) {
                    purchase.model.user = result;
                    purchase.model.order = PurchaseService.getRegularOrder(productCategory);
                    purchase.refreshViewModel();
                    return result;
                })
                .then(function() {
                    var agreementData = {
                        cellphone: purchase.model.user.cellphone,
                        credentialNo: purchase.model.user.credentialNo,
                        realName: purchase.model.user.realName
                    };

                    purchase.refreshAgreement(1)
                        .then(function(result) {
                            purchase.viewModel.agreement1 = ProductService.fillDataForAgreement(result.content, agreementData);
                        });

                    purchase.refreshAgreement(2)
                        .then(function(result) {
                            purchase.viewModel.agreement2 = ProductService.fillDataForAgreement(result.content, agreementData);
                        });
                });
        };

        purchase.refreshAgreement = function(agreementIndex) {
            return ProductService.getAgreementContent(purchase.model.order.productIdentifier, agreementIndex);
        };

        purchase.refreshUserInfo = function() {
            return UserService.getUserInfo();
        };

        purchase.refreshViewModel = function() {
            purchase.viewModel.amount = (purchase.model.order.amount / 100).toFixed(2);
            purchase.viewModel.balance = (purchase.model.user.balance / 100).toFixed(2);
        };

        purchase.resetInput = function() {
            purchase.viewModel.checked = true;
            purchase.viewModel.password = '';
        };

        purchase.purchaseButtonEnable = function() {
            return purchase.viewModel.checked && purchase.viewModel.amount && purchase.viewModel.password && purchase.model.user.balance >= purchase.model.order.amount;
        };

        purchase.purchase = function() {
            if (purchase.purchaseButtonEnable()) {
                var amount = purchase.model.order.amount;
                UserService.investingRegular(amount, purchase.viewModel.password, purchase.model.order.productIdentifier)
                    .then(function(result) {
                        if (result) {
                            JYMUtilityService.showAlert(RESOURCES.TIP.INVESTING.REGULAR);

                            PurchaseService.clearRegularOrder();

                            $timeout(function() {
                                purchase.resetInput();
                                JYMUtilityService.goWithDisableBack('jym.user-orders-detail', { orderIdentifier: result.orderIdentifier });
                            }, 1000);
                        }
                    });
            }
        };

        purchase.toggleAgreement1 = function() {
            purchase.viewModel.showAgreement2 = false;
            $ionicScrollDelegate.scrollTop();
            purchase.viewModel.showAgreement1 = !purchase.viewModel.showAgreement1;
        };

        purchase.toggleAgreement2 = function() {
            purchase.viewModel.showAgreement1 = false;
            $ionicScrollDelegate.scrollTop();
            purchase.viewModel.showAgreement2 = !purchase.viewModel.showAgreement2;
        };

        $scope.$on('$ionicView.enter', function() {
            purchase.doRefresh();
        });

        purchase.doRefresh();
    }]);

/*jshint -W024 */
'use strict';
angular.module('jym.zhuanqu', [
    'jym.services',
    'jym.zhuanqu.detail'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jym.zhuanqu', {
                url: '/zhuanqu',
                views: {
                    zhuanqu: {
                        controller: 'ZhuanquIndexCtrl as ctrl',
                        templateUrl: 'app/zhuanqu/index.tpl.html'
                    }
                }
            })
            .state('jym.zhuanqu-list', {
                url: '/zhuanqu/list/{bankName}',
                views: {
                    zhuanqu: {
                        controller: 'ZhuanquListCtrl as products',
                        templateUrl: 'app/zhuanqu/list.tpl.html'
                    }
                }
            });
    }])
    .controller('ZhuanquIndexCtrl', ['JYMUtilityService', function(JYMUtilityService) {
        var ctrl = this;

        ctrl.go = function(url) {
            JYMUtilityService.open(url);
        };
    }])
    .controller('ZhuanquListCtrl', ['$scope', '$stateParams', '$filter', '$timeout', 'ProductService', function($scope, $stateParams, $filter, $timeout, ProductService) {
        var products = this;

        products.viewModel = {};

        var getSaleProgress = function(product) {
            return ProductService.getSaleProgress(product.paidAmount, product.financingSumAmount, product.soldOut, product.startSellTime, product.endSellTime, product.repaid);
        };

        var getSaleStatus = function(product) {
            return ProductService.getSaleStatus(product.soldOut, product.startSellTime, product.endSellTime, product.repaid);
        };

        var getValueDateModeText = function(valueDateMode, valueDate, specifyValueDate) {
            return ProductService.getValueDateModeText(valueDateMode, valueDate, specifyValueDate);
        };

        var getViewItem = function(modelItem) {
            var item = {};
            item.bankName = modelItem.bankName;
            item.currentValueDate = modelItem.currentValueDate;
            item.drawee = modelItem.drawee;
            item.draweeInfo = modelItem.draweeInfo;
            item.endorseImageLink = modelItem.endorseImageLink;
            item.endSellTime = modelItem.endSellTime;
            item.enterpriseInfo = modelItem.enterpriseInfo;
            item.enterpriseLicense = modelItem.enterpriseLicense;
            item.enterpriseName = modelItem.enterpriseName;
            item.financingSumAmount = modelItem.financingSumAmount / 1000000;
            item.issueNo = modelItem.issueNo;
            item.issueTime = modelItem.issueTime;
            item.paidAmount = modelItem.paidAmount;
            item.period = modelItem.period;
            item.productCategory = modelItem.productCategory;
            item.productIdentifier = modelItem.productIdentifier;
            item.productName = modelItem.productName + ' ' + '第' + modelItem.issueNo + '期';
            item.productNo = modelItem.productNo;
            item.remainCount = ((modelItem.financingSumAmount - modelItem.paidAmount) / modelItem.unitPrice).toFixed(0);
            item.repaid = modelItem.repaid;
            item.repaidTime = modelItem.repaidTime;
            item.repaymentDeadline = modelItem.repaymentDeadline;
            item.riskManagement = modelItem.riskManagement;
            item.riskManagementInfo = modelItem.riskManagementInfo;
            item.riskManagementMode = modelItem.riskManagementMode;
            item.sellProgress = getSaleProgress(modelItem);
            item.sellProgressInCircleProgress = item.sellProgress / 100;
            item.settleDate = modelItem.settleDate;
            item.soldOut = modelItem.soldOut;
            item.soldOutTime = modelItem.soldOutTime;
            item.specifyValueDate = modelItem.specifyValueDate;
            item.startSellTime = modelItem.startSellTime;
            item.status = getSaleStatus(modelItem);
            item.unitPrice = (modelItem.unitPrice / 100).toFixed(0);
            item.usage = modelItem.usage;
            item.valueDate = modelItem.valueDate;
            item.valueDateMode = modelItem.valueDateMode;
            item.valueDateText = getValueDateModeText(modelItem.valueDateMode, modelItem.valueDate, modelItem.specifyValueDate);
            item.yield = modelItem.yield / 100;

            switch (item.status) {
                case 10:
                    item.statusText = '待售';
                    item.timeText = '开售时间 ' + $filter('time')(item.startSellTime);
                    break;
                case 20:
                    item.statusText = '抢购 已售出' + item.sellProgress + '%';
                    item.timeText = '起息时间 ' + item.valueDateText;
                    break;
                case 30:
                    item.statusText = '售罄 请期待下期';
                    item.timeText = '预计还款时间 ' + $filter('time')(item.repaymentDeadline);
                    break;
                case 40:
                    item.statusText = '项目结束';
                    item.timeText = '还款时间 ' + $filter('time')(item.repaidTime);
                    break;
                default :
                    item.statusText = '';
                    item.timeText = '';
            }

            if ($stateParams.bankName === 'fudian') {
                item.isYinpiao = true;
                item.isShangpiao = false;
                item.riskManagementText = item.bankName;
            } else if ($stateParams.bankName === 'fuxin') {
                item.isYinpiao = true;
                item.isShangpiao = false;
                item.riskManagementText = item.bankName;
            } else if ($stateParams.bankName === 'shibing') {
                item.isYinpiao = false;
                item.isShangpiao = true;
                item.riskManagementText = item.riskManagement;
            } else {
                item.isYinpiao = false;
                item.isShangpiao = false;
                item.riskManagementText = item.riskManagement;
            }

            return item;
        };

        products.doRefresh = function() {
            products.viewModel.items = [];
            products.viewModel.currentPageIndex = 0;
            products.viewModel.nextPageIndex = 0;
            products.viewModel.pageSize = 10;
            products.viewModel.totalCount = 0;
            products.viewModel.totalPageCount = 1;
            products.viewModel.loading = false;

            products.loadMoreData();

            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        };

        products.loadMoreData = function() {
            if (products.viewModel.loading) {
                return;
            }

            products.viewModel.loading = true;

            ProductService.getRegularPage(products.viewModel.nextPageIndex, $stateParams.bankName)
                .then(function(result) {
                    products.viewModel.currentPageIndex = result.pageIndex;
                    products.viewModel.nextPageIndex = result.pageIndex + 1;
                    products.viewModel.pageSize = result.pageSize;
                    products.viewModel.totalCount = result.totalCount;
                    products.viewModel.totalPageCount = result.totalPageCount;

                    _.forEach(result.items, function(i) {
                        products.viewModel.items.push(getViewItem(i));
                    });

                    products.viewModel.loading = false;
                });
            $timeout(function() {
                $scope.$broadcast('scroll.infiniteScrollComplete');
            }, 1000);
        };

        products.moreDataCanBeLoaded = function() {
            return products.viewModel.nextPageIndex < products.viewModel.totalPageCount;
        };

        products.doRefresh();
    }]);

'use strict';
window.paceOptions = {
    document: true, // disabled
    elements: true,
    eventLag: true,
    restartOnPushState: false,
    restartOnRequestAfter: false,
    ajax: {
        trackMethods: ['POST', 'GET']
    }
};

/*! pace 1.0.0 */
(function() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X = [].slice,
        Y = {}.hasOwnProperty,
        Z = function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b) Y.call(b, d) && (a[d] = b[d]);
            return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
        }, $ = [].indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (b in this && this[b] === a) return b;
                return -1
            };
    for (u = {
        catchupTime: 100,
        initialRate: .03,
        minTime: 250,
        ghostTime: 100,
        maxProgressPerFrame: 20,
        easeFactor: 1.25,
        startOnPageLoad: !0,
        restartOnPushState: !0,
        restartOnRequestAfter: 500,
        target: "body",
        elements: {
            checkInterval: 100,
            selectors: ["body"]
        },
        eventLag: {
            minSamples: 10,
            sampleCount: 3,
            lagThreshold: 3
        },
        ajax: {
            trackMethods: ["GET"],
            trackWebSockets: !0,
            ignoreURLs: []
        }
    }, C = function() {
        var a;
        return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date
    }, E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == E && (E = function(a) {
        return setTimeout(a, 50)
    }, t = function(a) {
        return clearTimeout(a)
    }), G = function(a) {
        var b, c;
        return b = C(), (c = function() {
            var d;
            return d = C() - b, d >= 33 ? (b = C(), a(d, function() {
                return E(c)
            })) : setTimeout(c, 33 - d)
        })()
    }, F = function() {
        var a, b, c;
        return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? X.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b]
    }, v = function() {
        var a, b, c, d, e, f, g;
        for (b = arguments[0], d = 2 <= arguments.length ? X.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++)
            if (c = d[f])
                for (a in c) Y.call(c, a) && (e = c[a], null != b[a] && "object" == typeof b[a] && null != e && "object" == typeof e ? v(b[a], e) : b[a] = e);
        return b
    }, q = function(a) {
        var b, c, d, e, f;
        for (c = b = 0, e = 0, f = a.length; f > e; e++) d = a[e], c += Math.abs(d), b++;
        return c / b
    }, x = function(a, b) {
        var c, d, e;
        if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) {
            if (c = e.getAttribute("data-pace-" + a), !b) return c;
            try {
                return JSON.parse(c)
            } catch (f) {
                return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0
            }
        }
    }, g = function() {
        function a() {}
        return a.prototype.on = function(a, b, c, d) {
            var e;
            return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({
                handler: b,
                ctx: c,
                once: d
            })
        }, a.prototype.once = function(a, b, c) {
            return this.on(a, b, c, !0)
        }, a.prototype.off = function(a, b) {
            var c, d, e;
            if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
                if (null == b) return delete this.bindings[a];
                for (c = 0, e = []; c < this.bindings[a].length;) e.push(this.bindings[a][c].handler === b ? this.bindings[a].splice(c, 1) : c++);
                return e
            }
        }, a.prototype.trigger = function() {
            var a, b, c, d, e, f, g, h, i;
            if (c = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) {
                for (e = 0, i = []; e < this.bindings[c].length;) h = this.bindings[c][e], d = h.handler, b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), i.push(f ? this.bindings[c].splice(e, 1) : e++);
                return i
            }
        }, a
    }(), j = window.Pace || {}, window.Pace = j, v(j, g.prototype), D = j.options = v({}, u, window.paceOptions, x()), U = ["ajax", "document", "eventLag", "elements"], Q = 0, S = U.length; S > Q; Q++) K = U[Q], D[K] === !0 && (D[K] = u[K]);
    i = function(a) {
        function b() {
            return V = b.__super__.constructor.apply(this, arguments)
        }
        return Z(b, a), b
    }(Error), b = function() {
        function a() {
            this.progress = 0
        }
        return a.prototype.getElement = function() {
            var a;
            if (null == this.el) {
                if (a = document.querySelector(D.target), !a) throw new i;
                this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el)
            }
            return this.el
        }, a.prototype.finish = function() {
            var a;
            return a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done"
        }, a.prototype.update = function(a) {
            return this.progress = a, this.render()
        }, a.prototype.destroy = function() {
            try {
                this.getElement().parentNode.removeChild(this.getElement())
            } catch (a) {
                i = a
            }
            return this.el = void 0
        }, a.prototype.render = function() {
            var a, b, c, d, e, f, g;
            if (null == document.querySelector(D.target)) return !1;
            for (a = this.getElement(), d = "translate3d(" + this.progress + "%, 0, 0)", g = ["webkitTransform", "msTransform", "transform"], e = 0, f = g.length; f > e; e++) b = g[e], a.children[0].style[b] = d;
            return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? c = "99" : (c = this.progress < 10 ? "0" : "", c += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + c)), this.lastRenderedProgress = this.progress
        }, a.prototype.done = function() {
            return this.progress >= 100
        }, a
    }(), h = function() {
        function a() {
            this.bindings = {}
        }
        return a.prototype.trigger = function(a, b) {
            var c, d, e, f, g;
            if (null != this.bindings[a]) {
                for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push(c.call(this, b));
                return g
            }
        }, a.prototype.on = function(a, b) {
            var c;
            return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b)
        }, a
    }(), P = window.XMLHttpRequest, O = window.XDomainRequest, N = window.WebSocket, w = function(a, b) {
        var c, d, e, f;
        f = [];
        for (d in b.prototype) try {
            e = b.prototype[d], f.push(null == a[d] && "function" != typeof e ? a[d] = e : void 0)
        } catch (g) {
            c = g
        }
        return f
    }, A = [], j.ignore = function() {
        var a, b, c;
        return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("ignore"), c = b.apply(null, a), A.shift(), c
    }, j.track = function() {
        var a, b, c;
        return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("track"), c = b.apply(null, a), A.shift(), c
    }, J = function(a) {
        var b;
        if (null == a && (a = "GET"), "track" === A[0]) return "force";
        if (!A.length && D.ajax) {
            if ("socket" === a && D.ajax.trackWebSockets) return !0;
            if (b = a.toUpperCase(), $.call(D.ajax.trackMethods, b) >= 0) return !0
        }
        return !1
    }, k = function(a) {
        function b() {
            var a, c = this;
            b.__super__.constructor.apply(this, arguments), a = function(a) {
                var b;
                return b = a.open, a.open = function(d, e) {
                    return J(d) && c.trigger("request", {
                        type: d,
                        url: e,
                        request: a
                    }), b.apply(a, arguments)
                }
            }, window.XMLHttpRequest = function(b) {
                var c;
                return c = new P(b), a(c), c
            };
            try {
                w(window.XMLHttpRequest, P)
            } catch (d) {}
            if (null != O) {
                window.XDomainRequest = function() {
                    var b;
                    return b = new O, a(b), b
                };
                try {
                    w(window.XDomainRequest, O)
                } catch (d) {}
            }
            if (null != N && D.ajax.trackWebSockets) {
                window.WebSocket = function(a, b) {
                    var d;
                    return d = null != b ? new N(a, b) : new N(a), J("socket") && c.trigger("request", {
                        type: "socket",
                        url: a,
                        protocols: b,
                        request: d
                    }), d
                };
                try {
                    w(window.WebSocket, N)
                } catch (d) {}
            }
        }
        return Z(b, a), b
    }(h), R = null, y = function() {
        return null == R && (R = new k), R
    }, I = function(a) {
        var b, c, d, e;
        for (e = D.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++)
            if (b = e[c], "string" == typeof b) {
                if (-1 !== a.indexOf(b)) return !0
            } else if (b.test(a)) return !0;
        return !1
    }, y().on("request", function(b) {
        var c, d, e, f, g;
        return f = b.type, e = b.request, g = b.url, I(g) ? void 0 : j.running || D.restartOnRequestAfter === !1 && "force" !== J(f) ? void 0 : (d = arguments, c = D.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function() {
            var b, c, g, h, i, k;
            if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) {
                for (j.restart(), i = j.sources, k = [], c = 0, g = i.length; g > c; c++) {
                    if (K = i[c], K instanceof a) {
                        K.watch.apply(K, d);
                        break
                    }
                    k.push(void 0)
                }
                return k
            }
        }, c))
    }), a = function() {
        function a() {
            var a = this;
            this.elements = [], y().on("request", function() {
                return a.watch.apply(a, arguments)
            })
        }
        return a.prototype.watch = function(a) {
            var b, c, d, e;
            return d = a.type, b = a.request, e = a.url, I(e) ? void 0 : (c = "socket" === d ? new n(b) : new o(b), this.elements.push(c))
        }, a
    }(), o = function() {
        function a(a) {
            var b, c, d, e, f, g, h = this;
            if (this.progress = 0, null != window.ProgressEvent)
                for (c = null, a.addEventListener("progress", function(a) {
                    return h.progress = a.lengthComputable ? 100 * a.loaded / a.total : h.progress + (100 - h.progress) / 2
                }, !1), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; e > d; d++) b = g[d], a.addEventListener(b, function() {
                    return h.progress = 100
                }, !1);
            else f = a.onreadystatechange, a.onreadystatechange = function() {
                var b;
                return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0
            }
        }
        return a
    }(), n = function() {
        function a(a) {
            var b, c, d, e, f = this;
            for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++) b = e[c], a.addEventListener(b, function() {
                return f.progress = 100
            }, !1)
        }
        return a
    }(), d = function() {
        function a(a) {
            var b, c, d, f;
            for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++) b = f[c], this.elements.push(new e(b))
        }
        return a
    }(), e = function() {
        function a(a) {
            this.selector = a, this.progress = 0, this.check()
        }
        return a.prototype.check = function() {
            var a = this;
            return document.querySelector(this.selector) ? this.done() : setTimeout(function() {
                return a.check()
            }, D.elements.checkInterval)
        }, a.prototype.done = function() {
            return this.progress = 100
        }, a
    }(), c = function() {
        function a() {
            var a, b, c = this;
            this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function() {
                return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0
            }
        }
        return a.prototype.states = {
            loading: 0,
            interactive: 50,
            complete: 100
        }, a
    }(), f = function() {
        function a() {
            var a, b, c, d, e, f = this;
            this.progress = 0, a = 0, e = [], d = 0, c = C(), b = setInterval(function() {
                var g;
                return g = C() - c - 50, c = C(), e.push(g), e.length > D.eventLag.sampleCount && e.shift(), a = q(e), ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3))
            }, 50)
        }
        return a
    }(), m = function() {
        function a(a) {
            this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = D.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = F(this.source, "progress"))
        }
        return a.prototype.tick = function(a, b) {
            var c;
            return null == b && (b = F(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / D.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, D.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
        }, a
    }(), L = null, H = null, r = null, M = null, p = null, s = null, j.running = !1, z = function() {
        return D.restartOnPushState ? j.restart() : void 0
    }, null != window.history.pushState && (T = window.history.pushState, window.history.pushState = function() {
        return z(), T.apply(window.history, arguments)
    }), null != window.history.replaceState && (W = window.history.replaceState, window.history.replaceState = function() {
        return z(), W.apply(window.history, arguments)
    }), l = {
        ajax: a,
        elements: d,
        document: c,
        eventLag: f
    }, (B = function() {
        var a, c, d, e, f, g, h, i;
        for (j.sources = L = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++) a = g[c], D[a] !== !1 && L.push(new l[a](D[a]));
        for (i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) K = i[d], L.push(new K(D));
        return j.bar = r = new b, H = [], M = new m
    })(), j.stop = function() {
        return j.trigger("stop"), j.running = !1, r.destroy(), s = !0, null != p && ("function" == typeof t && t(p), p = null), B()
    }, j.restart = function() {
        return j.trigger("restart"), j.stop(), j.start()
    }, j.go = function() {
        var a;
        return j.running = !0, r.render(), a = C(), s = !1, p = G(function(b, c) {
            var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w;
            for (l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length; u > q; i = ++q)
                for (K = L[i], o = null != H[i] ? H[i] : H[i] = [], h = null != (w = K.elements) ? w : [K], k = t = 0, v = h.length; v > t; k = ++t) g = h[k], n = null != o[k] ? o[k] : o[k] = new m(g), f &= n.done, n.done || (e++, p += n.tick(b));
            return d = p / e, r.update(M.tick(b, d)), r.done() || f || s ? (r.update(100), j.trigger("done"), setTimeout(function() {
                return r.finish(), j.running = !1, j.trigger("hide")
            }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0)))) : c()
        })
    }, j.start = function(a) {
        v(D, a), j.running = !0;
        try {
            r.render()
        } catch (b) {
            i = b
        }
        return document.querySelector(".pace") ? (j.trigger("start"), j.go()) : setTimeout(j.start, 50)
    }, "function" == typeof define && define.amd ? define(function() {
        return j
    }) : "object" == typeof exports ? module.exports = j : D.startOnPageLoad && j.start()
}).call(this);
