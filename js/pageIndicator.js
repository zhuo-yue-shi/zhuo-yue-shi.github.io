window.document.addEventListener('DOMContentLoaded', function() {
    console.log("指示器脚本加载成功")

    const currentPath = window.location.pathname;
    const indicator = document.getElementById('indicator');
    const homeItem = document.getElementById('homeItem');
    const navigationItem = document.getElementById('navigationItem');

    const savedTop = localStorage.getItem('indicatorTop');
    if (savedTop) {
        indicator.style.top = savedTop;
    }

    console.log(savedTop);
    console.log(indicator.style.top);
    indicator.style.visibility = "visible";

    // 获取每个菜单项的顶部位置
    const homeRect = homeItem.getBoundingClientRect();
    const navigationRect = navigationItem.getBoundingClientRect();

    console.log(`路径：${currentPath}`)

    // 设置初始位置
    indicator.style.transition = 'top 0.3s ease';
    if (currentPath === '/') {
        indicator.style.top = `${homeRect.top + 15}px`; // 15px 是上边距
    } else if (currentPath === '/navigationPage/') {
        indicator.style.top = `${navigationRect.top + 15}px`; // 15px 是上边距
    }

    // 在页面卸载前保存当前位置
    window.addEventListener('beforeunload', function() {
        localStorage.setItem('indicatorTop', indicator.style.top);
    });
});