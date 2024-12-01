/*
    制作：name_is_zhuo_yue

    备注：
    导航栏提示器的移动脚本；
    导航栏提示器位置保存脚本。
    需操作DOM树！

    用法：
    放置于任何位置。

    提示：
    需要维护！
*/

// 常量
const defaultPosition = 0;

window.document.addEventListener('DOMContentLoaded', function() {
    // 加载成功
    console.log("✅ 加载成功: [导航栏指示器移动脚本]")

    // 获取变量
    const currentPath = window.location.pathname;
    const indicator = document.getElementById('indicator');

    // !需要根据页面的添加增减!
    const homeItem = document.getElementById('homeItem');
    const navigationItem = document.getElementById('navigationItem');
    const booksItem = document.getElementById('booksItem');
    const catsItem = document.getElementById('catsItem');
    const groupsItem = document.getElementById('groupsItem');
    const checkItem = document.getElementById('checkItem');

    // 变量获取确认
    if (!indicator){
        console.error("❌ 获取失败: [导航栏指示器元素]\n　 HTML代码中未包含ID为[indicator]的<div>");
        console.info("⚠️ 脚本逼停: [导航栏提示器移动脚本]停止运行");
        return;
    }
    if (!homeItem) {
        console.log("❌ 获取失败: [导航栏主页选项元素]\n　 HTML代码中未包含ID为[homeItem]的<div>");
    }
    if (!navigationItem) {
        console.log("❌ 获取失败: [导航栏导航选项元素]\n　 HTML代码中未包含ID为[navigationItem]的<div>");
    }
    if (!booksItem) {
        console.log("❌ 获取失败: [导航栏书籍选项元素]\n　 HTML代码中未包含ID为[booksItem]的<div>");
    }
    if (!catsItem) {
        console.log("❌ 获取失败: [导航栏人物选项元素]\n　 HTML代码中未包含ID为[catsItem]的<div>");
    }
    if (!groupsItem) {
        console.log("❌ 获取失败: [导航栏族群选项元素]\n　 HTML代码中未包含ID为[groupsItem]的<div>");
    }
    if (!checkItem) {
        console.log("❌ 获取失败: [导航栏检查选项元素]\n　 HTML代码中未包含ID为[groupsItem]的<div>");
    }

    console.log(`ℹ️ 获取路径: ${currentPath}`);
    
    // 获取每个菜单项的顶部位置
    // !需要根据页面的添加增减!
    const homeRect = (homeItem) ? homeItem.getBoundingClientRect() : defaultPosition;
    const navigationRect = (navigationItem) ? navigationItem.getBoundingClientRect() : defaultPosition;
    const booksRect = (booksItem) ? booksItem.getBoundingClientRect() : defaultPosition;
    const catsRect = (catsItem) ? catsItem.getBoundingClientRect() : defaultPosition;
    const groupsRect = (groupsItem) ? groupsItem.getBoundingClientRect() : defaultPosition;
    const checkRect = (checkItem) ? checkItem.getBoundingClientRect() : defaultPosition;

    // JS脚本正常运行，显示指示器
    console.log("ℹ️ 元素显示: [导航栏指示器元素]\n　 由于JS代码加载正常，启动导航栏指示器。")
    indicator.style.visibility = "visible";

    // 设置位置
    // !需要根据页面的添加增减!
    if (currentPath === '/Furrywarriors/') {
        indicator.style.top = `${homeRect.top + 15}px`; // 15px 是上边距
    } else if (currentPath === '/navigationPage/') {
        indicator.style.top = `${navigationRect.top + 15}px`; // 15px 是上边距
    } else if (currentPath === '/Furrywarriors/books/') {
        indicator.style.top = `${booksRect.top + 15}px`; // 15px 是上边距
    } else if (currentPath === '/Furrywarriors/cats/') {
        indicator.style.top = `${catsRect.top + 15}px`; // 15px 是上边距
    } else if (currentPath === '/Furrywarriors/groups/') {
        indicator.style.top = `${groupsRect.top + 15}px`; // 15px 是上边距
    } else if (currentPath === '/VisitFurryWarriors/') {
        indicator.style.top = `${checkRect.top + 15}px`; // 15px 是上边距
    } else {
        indicator.style.visibility = "hide";
    }

    console.log(`ℹ️ 导航栏指示器位置: ${indicator.style.top}`);

    // 在页面卸载前保存当前位置
    window.addEventListener('beforeunload', function() {
        localStorage.setItem('Furrywarriors_indicatorTop', indicator.style.top);
        console.log(`✅ 保存数据: [Furrywarriors_indicatorTop]:[${indicator.style.top}]`)
    });
});