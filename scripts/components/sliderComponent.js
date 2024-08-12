// components/sliderComponent.js

export function createSlider(images, containerId) {
    const container = document.getElementById(containerId);

    if (!container) {
        console.error(`Container with id ${containerId} not found.`);
        return;
    }

    // Создаем контейнер для слайдера
    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'slider-container';

    // Создаем контейнер для слайдов
    const slidesContainer = document.createElement('div');
    slidesContainer.className = 'slides';

    // Генерация слайдов
    images.forEach((src, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';

        const img = document.createElement('img');
        img.src = src;

        slide.appendChild(img);
        slidesContainer.appendChild(slide);

        // Добавляем класс active ко всем слайдам
        slide.classList.add('active');
    });

    sliderContainer.appendChild(slidesContainer);

    // Добавляем контейнер для индикаторов
    const indicatorsContainer = document.createElement('div');
    indicatorsContainer.className = 'indicators';

    images.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        if (index === 0) indicator.classList.add('active'); // Активный индикатор для первого слайда
        indicator.addEventListener('click', () => showSlide(index));
        indicatorsContainer.appendChild(indicator);
    });

    sliderContainer.appendChild(indicatorsContainer);
    container.appendChild(sliderContainer);

    // Логика переключения слайдов
    let currentIndex = 0;
    const totalSlides = images.length;

    function showSlide(index) {
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        slidesContainer.style.transform = `translateX(${offset}%)`;

        // Обновление активного индикатора
        document.querySelectorAll('.indicator').forEach((indicator, i) => {
            if (i === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    // Показать первый слайд
    showSlide(currentIndex);

    // Автоматическая закольцованная анимация слайдера
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000); // Смена слайдов каждые 3 секунды
}