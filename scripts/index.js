document.addEventListener("DOMContentLoaded", function() {
    const message = "Здесь будет сообщение которое надо добавить в бегущую строку";
    const messageElement = document.getElementById("message");
    if (messageElement) {
        messageElement.textContent = message;
    }

    const slides = document.querySelectorAll('.slide');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let index = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        index = (index + 1) % slides.length;
        showSlide(index);
    }

    function prevSlide() {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    }

    if (next) {
        next.addEventListener('click', nextSlide);
    }
    if (prev) {
        prev.addEventListener('click', prevSlide);
    }

    showSlide(index);
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleVisibility = (triggers) => {
        triggers.forEach(({ triggerId, contentId, arrowId }) => {
            const trigger = document.getElementById(triggerId);
            const content = document.getElementById(contentId);
            const arrow = document.getElementById(arrowId);

            if (trigger && content && arrow) {
                trigger.addEventListener('click', () => {
                    const isHidden = content.classList.toggle('hidden');
                    content.classList.toggle('visible', !isHidden);
                    arrow.classList.toggle('arrow-up', !isHidden);
                    console.log(`${triggerId} clicked`);
                });
            } else {
                console.error(`Element not found: ${triggerId}, ${contentId}, or ${arrowId}`);
            }
        });
    };

    const visibilityToggles = [
        { triggerId: 'toggleQuality', contentId: 'qualityDescription', arrowId: 'arrowQuality' },
        { triggerId: 'toggleProduction', contentId: 'productionDescription', arrowId: 'arrowProduction' },
        { triggerId: 'toggleAboutUs', contentId: 'aboutUsDescription', arrowId: 'arrowAboutUs' }
    ];

    toggleVisibility(visibilityToggles);
});




// Каталог

document.addEventListener('DOMContentLoaded', function() {
    const template = document.getElementById('catalog-template');
    if (!template) {
        console.error('Template element with id "catalog-template" not found');
        return;
    }

    // Инициализация стрелок в каталоге
    const catalogContainers = document.querySelectorAll('.catalog-container');
    catalogContainers.forEach(container => {
        let catalogLink = container.querySelector('.nav-list__link');
        if (!catalogLink) {
            catalogLink = container;
        }

        const catalogArrow = catalogLink.querySelector('.catalog__arrow');
        if (!catalogArrow) {
            console.error('Element with class "catalog__arrow" not found inside "catalog-container"');
            return;
        }

        const clone = template.content.cloneNode(true);
        catalogArrow.appendChild(clone);

        const categoriesList = container.querySelector('.categories-list');
        if (!categoriesList) {
            console.error('Element with class "categories-list" not found inside "catalog-container"');
            return;
        }

        container.addEventListener('mouseenter', () => {
            categoriesList.classList.remove('hidden');
        });

        container.addEventListener('mouseleave', () => {
            categoriesList.classList.add('hidden');
        });
    });

    // Инициализация стрелок в элементах заказа
    const orderNumbers = document.querySelectorAll('.order-number .catalog__arrow');
    orderNumbers.forEach(arrow => {
        const clone = template.content.cloneNode(true);
        arrow.appendChild(clone);
    });

    // Добавление обработчика для раскрытия/скрытия деталей заказа
    document.querySelectorAll('.order-number').forEach(orderNumber => {
        orderNumber.addEventListener('click', function() {
            const orderDetails = this.closest('.order-details').querySelector('.order-item-list');
            const svg = this.querySelector('.catalog__arrow');

            if (orderDetails) {
                orderDetails.classList.toggle('open');
                if (orderDetails.classList.contains('open')) {
                    orderDetails.style.maxHeight = orderDetails.scrollHeight + 'px';
                    svg.style.transform = 'rotate(180deg)';
                } else {
                    orderDetails.style.maxHeight = '0';
                    svg.style.transform = 'rotate(0deg)';
                }
            }
        });
    });
});

function initializeArrows() {
    const template = document.getElementById('catalog-template');
    if (!template) {
        console.error('Template element with id "catalog-template" not found');
        return;
    }

    const catalogContainers = document.querySelectorAll('.catalog-container');
    catalogContainers.forEach(container => {
        let catalogLink = container.querySelector('.nav-list__link');
        if (!catalogLink) {
            catalogLink = container;
        }

        const catalogArrow = catalogLink.querySelector('.catalog__arrow');
        if (!catalogArrow) {
            console.error('Element with class "catalog__arrow" not found inside "catalog-container"');
            return;
        }

        const clone = template.content.cloneNode(true);
        catalogArrow.appendChild(clone);

        const categoriesList = container.querySelector('.categories-list');
        if (!categoriesList) {
            console.error('Element with class "categories-list" not found inside "catalog-container"');
            return;
        }

        container.addEventListener('mouseenter', () => {
            categoriesList.classList.remove('hidden');
        });

        container.addEventListener('mouseleave', () => {
            categoriesList.classList.add('hidden');
        });
    });
}

// Карточка товара

document.addEventListener('DOMContentLoaded', function() {
    const thumbImgs = document.querySelectorAll('.thumb-img');

    thumbImgs.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Удаляем класс 'selected' у всех миниатюр
            thumbImgs.forEach(img => img.classList.remove('selected'));
            
            // Добавляем класс 'selected' к выбранной миниатюре
            this.classList.add('selected');
        });
    });
});

