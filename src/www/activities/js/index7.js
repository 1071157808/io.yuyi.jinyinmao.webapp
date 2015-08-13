'use strict';

var USER = {
    SEND_VERICODE: 'https://jym-test-api.jinyinmao.com.cn:443/SendVeriCode',
    SINGUP: 'https://jym-test-api.jinyinmao.com.cn:443/User/Auth/SignUp',
    VERIFY_VERICODE: 'https://jym-test-api.jinyinmao.com.cn:443/VerifyVeriCode'
};

var waitCount = 60;
var waitTimer = null;

function sendWaitTimer() {
    if (waitCount > 0) {
        $("#btnGetCode").text(waitCount + '秒后重新获取');
        waitCount = waitCount - 1;
    } else {
        clearInterval(waitTimer);
        $("#btnGetCode").text("获取短信验证码");
        $("#btnGetCode").bind("click");
        waitCount = 60;
    }
}

function showAlert(text) {
    ZENG.msgbox.show(text, 1, 3000);
}

function signUp(password, token) {
    var contractId = 0;
    var arrCookies;
    var reg = new RegExp('(^| )JYM_contract_id=([^;]*)(;|$)');
    if (arrCookies = document.cookie.match(reg)) {
        contractId = arrCookies[2].toUpperCase();
    }
    $.ajax({
        type: "POST",
        url: USER.SINGUP,
        data: JSON.stringify({
            clientType: 903,
            contractId: contractId,
            inviteBy: 'jinyinmao',
            outletCode: 'jinyinmao',
            password: password,
            token: token
        }),
        contentType: "application/json"
    })
    .done(function (res) {
        if (res.userIdentifier !== "") {
            //window.location.href = "/#/user";
            fAgreement(3);
        }
    })
    .fail(function (res) {
        waitCount = 0;
        var jsonRes = $.parseJSON(res.responseText);
        showAlert(jsonRes.message.split(":")[1]);
    });
}

function fAgreement(index) {
    var ids = ["#divRegister", "#divAgreement1", "#divAgreement2", "#divSuccess"];
    for (var i = 0; i < ids.length; i++) {
        if (i === index) {
            $(ids[i]).show();
        } else {
            $(ids[i]).hide();
        }
    }
    $(window).scrollTop(0);
}


$(document).ready(function () {

    $("#btnGetCode").click(function () {
        if (waitCount != 60) {
            return false;
        }
        var cellphone = $("#txtPhone").val();
        if (cellphone == "") {
            showAlert("手机号码不能为空");
            return false;
        }
        var reg = /^[1][358]\d{9}$/;
        if (!reg.test($.trim(cellphone))) {
            showAlert("请填写有效手机号");
            return false;
        }
        waitTimer = setInterval(function () { sendWaitTimer(); }, 1000);
        $.ajax({
            type: "POST",
            url: USER.SEND_VERICODE,
            data: JSON.stringify({ cellphone: cellphone, type: 10 }),
            contentType: "application/json"
        })
        .done(function (res) {
            if (!res.success || res.remainCount <= 0) {
                showAlert("验证码发送次数过多 <br> 请明天再试");
            } else {
                showAlert("发送成功");
            }
        })
        .fail(function (res) {
            waitCount = 0;
            var jsonRes = $.parseJSON(res.responseText);
            showAlert(jsonRes.message.split(":")[1]);
        });
    });

    $("#a_register").click(function () {
        var cellphone = $("#txtPhone").val();
        if (cellphone === "") {
            showAlert("手机号码不能为空");
            return false;
        }

        var reg = /^(13|14|15|17|18)\d{9}$/;
        if (!reg.test($.trim(cellphone))) {
            showAlert("请填写有效手机号");
            return false;
        }
        var pwa = $("#txtPwd").val();
        reg = /^[a-zA-Z\d~!@#$%^&*_]{6,18}$/;
        if (pwa === "" || !reg.test($.trim(pwa))) {
            showAlert("请输入6-18位密码");
            return false;
        }
        var cpwa = $("#txtCPwd").val();
        if (cpwa === "" || !reg.test($.trim(cpwa))) {
            showAlert("请输入6-18位密码");
            return false;
        }
        if (pwa !== cpwa) {
            showAlert("两次输入密码不一致");
            return false;
        }
        var veriCode = $("#txtCode").val();
        if (veriCode === "") {
            showAlert("请输入验证码");
            return false;
        }
        reg = /^\d{6}$/;
        if (!reg.test($.trim(veriCode))) {
            showAlert("验证码有误");
            return false;
        }

        if ($("#chkAgreement").attr("attr-check") !== "1") {
            showAlert("请签署协议条款");
            return false;
        }

        $.ajax({
            type: "POST",
            url: USER.VERIFY_VERICODE,
            data: JSON.stringify({ cellphone: cellphone, code: veriCode, type: 10 }),
            contentType: "application/json"
        })
         .done(function (res) {
             if (res.success) {
                 //验证码验证通过
                 signUp(pwa, res.token);
             } else {
                 showAlert("验证码发送次数过多 <br> 请明天再试");
             }
         })
         .fail(function (res) {
             var jsonRes = $.parseJSON(res.responseText);
             showAlert(jsonRes.message.split(":")[1]);
         });

    });

    $("#chkAgreement").click(function () {
        var check = $(this).attr("attr-check");
        $(this).attr("src", check === "1" ? "images/index7/icon_n.png" : "images/index7/icon_x.png");
        $(this).attr("attr-check", check === "1" ? "0" : "1");
    });
});