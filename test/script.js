document.addEventListener('DOMContentLoaded', function() {
    const carouselTrack = document.getElementById('carouselTrack');
    const slides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0;

    // 计算每个幻灯片的宽度
    const slideWidth = slides[0].offsetWidth;

    // 设置初始位置
    carouselTrack.style.transform = `translateX(0)`;

    // 定义自动播放函数
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        const offset = -currentIndex * slideWidth;
        carouselTrack.style.transform = `translateX(${offset}px)`;
    }

    // 设置自动播放间隔
    setInterval(nextSlide, 3000); // 每 3 秒切换一次

    // 添加手动控制按钮（可选）
    const prevButton = document.createElement('button');
    const nextButton = document.createElement('button');

    prevButton.textContent = 'Previous';
    nextButton.textContent = 'Next';

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        const offset = -currentIndex * slideWidth;
        carouselTrack.style.transform = `translateX(${offset}px)`;
    });

    nextButton.addEventListener('click', function() {
        nextSlide();
    });

    document.body.appendChild(prevButton);
    document.body.appendChild(nextButton);
});