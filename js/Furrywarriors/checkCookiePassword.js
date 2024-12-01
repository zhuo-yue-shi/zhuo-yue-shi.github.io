var password = "-1";
var visitType = false;

function getJsonData(){
    $.getJSON('../data/Basic inbound rules.json', function(data) {
        // log输出
        console.log("✅ 加载成功: [Basic inbound rules.json]")

        // 获取JSON属性
        visitType = data.openTheFurryWorriosSubsite;
        password = data.FurryWorriosSubsiteAccessPassword;

        // 默认密码
        if (!password){
            password = "-1";
        }

    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.error('❌ 请求失败: ' + textStatus + ', ' + errorThrown);
    });
}

function checkCookiePassword(){
    // 获取JSON
    getJsonData();

    // 获取cookie
    var cookiePassword = getCookie("FurrywarriorsPassword");

    // 防止过期
    if (!cookiePassword){
        console.log("⚠️ 防止越狱: [cookie密码检查函数]未找到名为[FurrywarriorsPassword]的Cookie。\n　 处理方式: 尝试“回炉重造”");
        
        if (!visitType){
            window.location.href = "../VisitFurryWarriors";
        }
    }

    if ((cookiePassword != password || password == "-1") && !visitType){
        console.log("⚠️ 防止越狱: [cookie密码检查函数]发现密码过期或者伪造。\n　 处理方式: 尝试“回炉重造”");

        window.location.href = "../VisitFurryWarriors";
    }
}

checkCookiePassword();
