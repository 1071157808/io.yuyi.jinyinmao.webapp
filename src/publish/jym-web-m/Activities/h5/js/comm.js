sendValidateCode: function(e, t, i, r, o) {

                        r = r || 120,
                            o = o || "",
                            this.sync({
                                type: "POST",
                                url: "http://www.dev.ad.jinyinmao.com.cn/Api/V1/Help/Api/POST-User-SignUp",
                                data: {
                                    Code: e,
                                    Password: t,
                                    Token: o
                                },
                                success: function(e) {
                                    e.Successful ? n.countdown({
                                        count: r,
                                        callback: function(e) {
                                            i(!0, e)
                                        }
                                    }) : i( - 1, e)
                                },
                                error: function() {
                                    i(!1)
                                }
                            })
}
 verifyCode: function(e, t, i, r) {
 alert(1);
                        this.sync({
                            type: "POST",
                            url: "http://www.dev.ad.jinyinmao.com.cn/Api/V1/Help/Api/POST-User-SignUp",
                            data: {
                                Code: e,
                                Password: t,
                                Type: i
                            },
                            success: function(e) { - 1 == e.RemainCount ? r( - 1) : e.Successful ? r(!0, e.Token) : r(!1)
                            },
                            error: function() {
                                r(!1)
                            }
                        })
}