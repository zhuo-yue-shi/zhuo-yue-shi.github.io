/*
    制作：name_is_zhuo_yue

    备注：
    导航栏提示器的创建脚本。

    用法：
    放置于导航栏末尾。
*/

// 导航栏指示器历史位置获取
const savedTop = localStorage.getItem('Furrywarriors_indicatorTop');

if (savedTop) {
    console.log(`✅ 读取成功: [导航栏指示器历史位置]: [${savedTop}]`);

    // 存在则使用位置
    window.document.write(`<div class='indicator' id='indicator' style='top: ${savedTop}'></div>`);
} else {
    console.log(`❌ 读取失败: [导航栏指示器历史位置]: none`);

    // 不存在则使用默认位置
    window.document.write(`<div class='indicator' id='indicator'></div>`)
}

