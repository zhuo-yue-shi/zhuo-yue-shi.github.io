// 定义变量
var status = 1; // 当前验证的状态
var now_look = 0;

// 调试
var DEBUG  = false;

// 获取html标签
var tip_st = window.document.getElementById("tip_st");         // 第一个点
var tip_nd = window.document.getElementById("tip_nd");         // 第二个点
var tip_rd = window.document.getElementById("tip_rd");         // 第三个点
var tip    = window.document.getElementById("tip");            // 提示文字
var lable  = window.document.getElementById("is_human_lable"); // 确认文字
var check  = window.document.getElementById("is_human_box")    // 复选框
var card   = window.document.getElementById("is_human_card")   // 卡片

// 提示文字函数组
// 初始化
function change_text_unplayed(){
    // 背景框
    card.style.backgroundColor = "#f8f9fa";

    // 复选框
    check.disabled = false;

    // 上面大字
    lable.style.color = "";
    lable.firstChild.nodeValue = "点击验证"

    // 下面小字
    tip.firstChild.nodeValue = "等待开始验证";
}

// 菜单文字替换
function change_text_in_progress(){
    if (check.checked){
        // 背景色
        card.style.backgroundColor = "lightyellow";

        // 复选框
        check.disabled = true;

        // 上面大字
        lable.firstChild.nodeValue = "正在验证"

        // 下面小字
        tip.firstChild.nodeValue = "正在确认您的反馈，请稍后";

        // 模拟异步验证过程
        setTimeout(function() {
            // 验证完成，开始跳转
            lable.firstChild.nodeValue = "验证完成";
            tip.firstChild.nodeValue = "正在跳转网页";

            // 变绿
            card.style.backgroundColor = "lightgreen";

            // 配置cookie，允许入站
            setCookie("visit_website", "ok")

            // 跳转
            window.location.replace("../");
        }, 3000); // 3秒后完成验证

    } else {
        // 报错
        // 创建一个新的 <p> 元素
        var newParagraph = window.document.createElement('p');
        newParagraph.className = 'error';

        // 创建一个 <strong> 元素
        var strongElement = window.document.createElement('strong');
        strongElement.textContent = '[ERROR]';

        // 将 <strong> 元素添加到 <p> 元素中
        newParagraph.appendChild(strongElement);

        // 创建一个文本节点
        var textNode = window.document.createTextNode('验证的复选框没有正确地保持打开状态！');

        // 将文本节点添加到 <p> 元素中
        newParagraph.appendChild(textNode);

        // 获取错误容器元素
        var errorContainer = window.document.getElementById('error_container');

        // 将 <p> 元素添加到错误容器中
        errorContainer.appendChild(newParagraph);

        // 修改标题
        window.document.title = "元具·主页 - 发生错误！"
    }
}

// 下一个状态
function next_tick(){
    // 更新变量
    now_look = (now_look + 1) % 3;

    // 更新界面
    if (now_look == 0)
        tip_st.innerHTML = ".";
    else
        tip_st.innerHTML = "&nbsp;";

    if (now_look == 1)
        tip_nd.innerHTML = ".";
    else
        tip_nd.innerHTML = "&nbsp;";

    if (now_look == 2)
        tip_rd.innerHTML = ".";
    else
        tip_rd.innerHTML = "&nbsp;";
}

/*DEBUG专用*/
function DEBUG_ON_OFF(){
    DEBUG = 1 - DEBUG;

    var debug_div = window.document.getElementById("debug");
    if (DEBUG){
        debug_div.classList = ['visible'];
    } else {
        debug_div.classList = ['invisible'];
    }
}

// 切换到猫武士二创
function visit_cat_website(){
    setCookie('visit_website', 'ok');

    // 跳转
    window.location.replace("../cat_warriors/")
}

// 测试进入
function want_to_visit_homepage(){
    if(!getCookie("visit_website") || getCookie("visit_website" != "ok")){
        alert('请先完成选择！');
    } else {
        window.location.href = "../";
    }
}

// 初始化界面
change_text_unplayed();

// 计时器
setInterval(next_tick, 250);