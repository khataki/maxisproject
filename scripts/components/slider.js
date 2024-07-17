export function createSlider() {
    const sliderContainer = document.getElementById('slider');
    if (!sliderContainer) {
        console.error('Element with id "slider" not found.');
        return;
    }

    const slider = document.createElement('section');
    slider.classList.add('slider');

    slider.innerHTML = `
        <div class="slides">
            <div class="slide active">
                <img src="/images/image1.jpg" alt="Image 1" />
                <div class="caption">
                    <h2>Slide 1 Title</h2>
                    <p>Slide 1 Description</p>
                </div>
            </div>
            <div class="slide">
                <img src="/images/image2.jpg" alt="Image 2" />
                <div class="caption">
                    <h2>Slide 2 Title</h2>
                    <p>Slide 2 Description</p>
                </div>
            </div>
            <!-- Добавь столько слайдов сколько надо -->
        </div>
        <div class="navigation">
            <button class="arrow prev"></button>
            <button class="arrow next"></button>
        </div>
        <div class="dots"></div>
    `;

    sliderContainer.appendChild(slider);

    const slides = slider.querySelectorAll('.slide');
    const nextButton = slider.querySelector('.next');
    const prevButton = slider.querySelector('.prev');
    const dotsContainer = slider.querySelector('.dots');
    let currentSlide = 0;

    slides.forEach((slide, index) => {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            showSlide(index);
        });
        dotsContainer.appendChild(dot);
    });

    function updateDots() {
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        updateDots();
    }

    nextButton.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    prevButton.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    let autoSlideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000); // 5000 мс = 5 секунд

    slider.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });

    slider.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
    });

    updateDots(); // Обновление точек навигации при инициализации
}
