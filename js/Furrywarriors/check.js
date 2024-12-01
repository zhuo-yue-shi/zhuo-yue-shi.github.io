/*
    制作：name_is_zhuo_yue

    备注：
    入站时进行配置文件检查。

    用法：
    用于入站须知界面（/VisitFurryWarriors/index.html。
*/

// 常量
const defaultPassword = "password"; // 默认密码
const defaultVisitType = false;     // 默认是否开放

var visitType = defaultVisitType;
var password = defaultPassword;

function getJsonData(){
    $.getJSON('../data/Basic inbound rules.json', function(data) {
        // log输出
        console.log("✅ 加载成功: [Basic inbound rules.json]")

        // 获取JSON属性
        visitType = data.openTheFurryWorriosSubsite;
        password = data.FurryWorriosSubsiteAccessPassword;

        // 默认密码
        if (!password){
            password = defaultPassword;
        }

    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.error('❌ 请求失败: ' + textStatus + ', ' + errorThrown);
    });
}

function checkPassword(testPassword){
    if (password == testPassword){
        return true;
    } else {
        return false;
    }
}

function checkCookiePassword(){
    // 获取cookie
    var cookiePassword = getCookie("FurrywarriorsPassword");

    // 防止过期
    if (!cookiePassword){
        console.log("⚠️ 函数返回: [cookie密码检查函数]未找到名为[FurrywarriorsPassword]的Cookie。\n　 返回结果: 直接返回false。");
        return false;
    }

    return checkPassword(cookiePassword);
}

window.document.addEventListener('DOMContentLoaded', function() {
    getJsonData();

    // 加载成功
    console.log("✅ 加载成功: [入站检查脚本]");

    // 检查
    if (visitType || checkCookiePassword()){
        window.location.href = "../Furrywarriors/";
        console.log("ℹ️ 网站跳转: 由于JSON代码或Cookie的设置，直接跳转至网站。");
    }

    // 页面变量
    const tip = window.document.getElementById("tip");
    const input = window.document.getElementById("password");
    const submit = window.document.getElementById("submit");
    
    // 变量防获取失败
    if (!tip || !input || !submit) {
        console.log("❌ 获取失败: HTML文档里有必要元素获取失败，无法进行后续操作。");
        console.info("⚠️ 脚本逼停: [入站检查脚本]停止运行");
        return;
    }

    // 设置组件
    tip.firstChild.nodeValue = "请输入入站密码以访问...";
    input.disabled = false;
});

function updataSubmitButton(){
    const input = window.document.getElementById("password");
    const submit = window.document.getElementById("submit");

    // 变量防获取失败
    if (!input || !submit) {
        console.error("❌ 获取失败: HTML文档里有必要元素获取失败，无法进行元素检查。");
        console.info("⚠️ 脚本逼停: [提交按钮更新函数]停止运行");
        return;
    }

    if (input.value.length > 0){
        submit.disabled = false;
    } else {
        submit.disabled = true;
    }
}

function checkInputPassword(){
    const input = window.document.getElementById("password");
    const tip = window.document.getElementById("tip");

    // 变量防获取失败
    if (!input || !tip) {
        console.error("❌ 获取失败: HTML文档里有必要元素获取失败，无法进行元素检查。");
        console.info("⚠️ 脚本逼停: [密码检查函数]停止运行");
        return;
    }

    if (checkPassword(input.value)){
        console.log("ℹ️ 通过识别，保存密码至Cookie。");

        setCookie("FurrywarriorsPassword", password);

        tip.firstChild.nodeValue = "密码正确，正在跳转...";
        tip.style.color = "green";

        window.location.href = "../Furrywarriors/";
    } else {
        console.log("❌ 未通过识别！");

        tip.firstChild.nodeValue = "密码不正确，请检查您的密码";
        tip.style.color = "red";
    }
}

getJsonData();