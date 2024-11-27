// 入站cookie
function check_cookie(){
    if (!getCookie("visit_website") || getCookie("visit_website" != "ok")){
        window.location.replace("../navigationPage/")
    }
}

console.log("JS加载成功")

// 检查入站cookie
check_cookie();