// 导航栏历史位置获取
const savedTop = localStorage.getItem('indicatorTop');


if (savedTop) {
    window.document.write(`<div class='indicator' id='indicator' style='top: ${savedTop}'></div>`)
} else {
    window.document.write(`<div class='indicator' id='indicator'></div>`)
}

