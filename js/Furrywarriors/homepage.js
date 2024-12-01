// 入站cookie
function check_cookie(){
    $.getJSON('../data/Basic inbound rules.json', function(data) {
        // 访问 inbound_redirection 属性
        const inboundRedirection = data.inbound_redirection;

        if (inboundRedirection){
            // 需要检查
            if (!getCookie("visit_website") || getCookie("visit_website" != "ok")){
                console.info("ℹ️ 页面重定向: 未通过入站许可，请通过导航页进入！");

                window.location.replace("../navigationPage/");
            }
        } else {
            // 不需要检查
            console.log("ℹ️ 由于JSON文档设置，取消Cookie检查。")
        }

    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.error('❌ 请求失败: ' + textStatus + ', ' + errorThrown);
    });


    
}

// 检查入站cookie
check_cookie();