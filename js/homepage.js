// 入站cookie
function check_cookie(){
    if (!getCookie("visit_website") || getCookie("visit_website" != "ok")){
        window.location.replace("navigationPage/")
    }
}

function check_check_cookie(){
    
    // 使用 fetch API 读取 JSON 文件
    fetch('data/Basic inbound rules.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // 访问 inbound_redirection 属性
            const inboundRedirection = data.inbound_redirection;

            // 将结果输出到页面上
            if (inboundRedirection){
                if (!getCookie("visit_website") || getCookie("visit_website" != "ok")){
                    window.location.replace("navigationPage/")
                }
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
            
}

console.log("JS加载成功")

// 检查入站cookie
check_check_cookie();
