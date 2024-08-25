import { createTabs, attachTabsEventListeners } from './tabsComponent.js';
import { createCharacteristicsTable } from './characteristicsComponent.js';
import { createProductGrid } from './productGridComponent.js';
import { productInfo } from './productInfo.js';
import { items } from './productItemComponent.js';
import { createHoverCircle } from './hoverCircleComponent.js';
import { initZoom } from './modalComponents/zoomComponent.js'; // Импортируем зум компонент

// Импортируем функции и данные из cityDelivery.js
import { createCitySelect, attachCitySelectEventListeners, createDeliveryInfo, updateDeliveryInfo } from './cityDelivery.js';

// Пример данных для связанных продуктов
const relatedProducts = [
    {
        imageSrc: '/images/related_example.jpeg',
        link: 'product-link-1.html'
    },
    {
        imageSrc: '/images/related_example.jpeg',
        link: 'product-link-2.html'
    },
    // Добавьте другие связанные продукты по необходимости
];

document.addEventListener('DOMContentLoaded', function() {
    const productTitle = document.getElementById('productTitle');
    const productCode = document.getElementById('productCode');
    const tabsContainer = document.querySelector('.tab-container');
    const characteristicsContainer = document.querySelector('.characteristics');
    const productImagesContainer = document.querySelector('.main-images');
    const thumbnailImagesContainer = document.querySelector('.thumbnail-images');
    const modalImage = document.getElementById('modalImage');
    const imageModal = document.getElementById('imageModal');
    const closeModalButton = document.querySelector('.close-modal');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const productGridContainer = document.getElementById('productGridContainer');
    const addToCartButton = document.querySelector('.add-to-cart-button');
    const summaryQuantityElement = document.querySelector('.summary-quantity');
    const summaryPriceElement = document.querySelector('.summary-price');
    const scrollContainer = document.querySelector('.scroll-container');
    const deliveryInfoContainer = document.querySelector('.delivery-info-container');

    const elements = [
        { name: 'productTitle', element: productTitle },
        { name: 'productCode', element: productCode },
        { name: 'tabsContainer', element: tabsContainer },
        { name: 'characteristicsContainer', element: characteristicsContainer },
        { name: 'productImagesContainer', element: productImagesContainer },
        { name: 'thumbnailImagesContainer', element: thumbnailImagesContainer },
        { name: 'modalImage', element: modalImage },
        { name: 'imageModal', element: imageModal },
        { name: 'closeModalButton', element: closeModalButton },
        { name: 'prevButton', element: prevButton },
        { name: 'nextButton', element: nextButton },
        { name: 'productGridContainer', element: productGridContainer },
        { name: 'addToCartButton', element: addToCartButton },
        { name: 'summaryQuantityElement', element: summaryQuantityElement },
        { name: 'summaryPriceElement', element: summaryPriceElement },
        { name: 'scrollContainer', element: scrollContainer },
        { name: 'deliveryInfoContainer', element: deliveryInfoContainer }
    ];

    const missingElements = elements.filter(item => !item.element).map(item => item.name);

    if (missingElements.length > 0) {
        console.error('Не удалось найти следующие элементы на странице:', missingElements.join(', '));
        return;
    }

    // Заполняем данные из productInfo
    productTitle.textContent = productInfo.title;
    productCode.textContent = `Код товара: ${productInfo.code}`;

    // Рендерим табы и характеристики
    tabsContainer.innerHTML = createTabs();
    attachTabsEventListeners();

    characteristicsContainer.innerHTML = createCharacteristicsTable([
        { label: 'Бренд', value: productInfo.brand },
        { label: 'Количество изделий на один модельный ряд', value: items.length },
        { label: 'Материал', value: productInfo.material },
        { label: 'Состав', value: productInfo.composition },
        { label: 'Размеры', value: items.map(item => item.size).join(', ') },
        { label: 'Цвета', value: [...new Set(items.flatMap(item => item.colors))].join(', ') }
    ]);

    // Рендеринг информации о доставке
    deliveryInfoContainer.innerHTML = createDeliveryInfo();
    setTimeout(() => {
        attachCitySelectEventListeners(); // Прикрепляем обработчики событий
    }, 0);

    function renderDesktopImages() {
        // Преобразуем mainImages и additionalImages в массивы для использования в компоненте
        const mainImagesArray = Object.values(productInfo.mainImages).flat();
        const additionalImagesArray = Object.values(productInfo.additionalImages).flat();

        // Рендерим основные и эскизные изображения для десктопной версии
        productImagesContainer.innerHTML = mainImagesArray.map((img, index) => `
            <div class="main-img-container">
                <div class="image-container">
                    <img src="${img}" data-index="${index}" alt="Main Image ${index + 1}" class="main-img" />
                </div>
            </div>
        `).join('');

        thumbnailImagesContainer.innerHTML = `
            <button class="scroll-arrow thumb-prev"><i class="fa-solid fa-chevron-up"></i></button>
            <div class="thumbnail-container">
                <div class="thumbnail-images">
                    ${additionalImagesArray.map((img, index) => `
                        <img src="${img}" data-index="${index}" alt="Thumbnail ${index + 1}" class="thumb-img" />
                    `).join('')}
                </div>
            </div>
            <button class="scroll-arrow thumb-next"><i class="fa-solid fa-chevron-down"></i></button>
        `;
    }

    function renderMobileImages() {
        // Преобразуем mainImages и additionalImages в массивы для использования в компоненте
        const mainImagesArray = Object.values(productInfo.mainImages).flat();
        const additionalImagesArray = Object.values(productInfo.additionalImages).flat();

        // Рендерим основные и эскизные изображения для мобильной версии
        productImagesContainer.innerHTML = mainImagesArray.map((img, index) => `
            <div class="main-img-container">
                <div class="image-container">
                    <img src="${img}" data-index="${index}" alt="Main Image ${index + 1}" class="main-img" />
                </div>
            </div>
        `).join('');

        thumbnailImagesContainer.innerHTML = `
            <div class="thumbnail-container">
                <div class="thumbnail-images">
                    ${additionalImagesArray.map((img, index) => `
                        <img src="${img}" data-index="${index}" alt="Thumbnail ${index + 1}" class="thumb-img" />
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Определяем устройство и рендерим соответствующую разметку
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        renderMobileImages();
    } else {
        renderDesktopImages();
    }

    // Обновляем зум для всех изображений
    initZoom();

    let currentImageIndex = 0;

    function showImage(index) {
        const mainImagesArray = Object.values(productInfo.mainImages).flat();
        modalImage.src = mainImagesArray[index];
        currentImageIndex = index;
    }

    // Обработчики событий для эскизов и основного изображения
    document.querySelectorAll('.main-img').forEach(img => {
        img.addEventListener('click', function() {
            showImage(this.getAttribute('data-index'));
            imageModal.classList.add('open');
        });
    });

    document.querySelectorAll('.thumb-img').forEach(img => {
        img.addEventListener('click', function() {
            showImage(this.getAttribute('data-index'));
            imageModal.classList.add('open');
        });
    });

    // Закрытие модального окна
    closeModalButton.addEventListener('click', function() {
        imageModal.classList.remove('open');
    });

    // Перелистывание изображений
    prevButton.addEventListener('click', function() {
        const mainImagesArray = Object.values(productInfo.mainImages).flat();
        currentImageIndex = (currentImageIndex === 0) ? mainImagesArray.length - 1 : currentImageIndex - 1;
        showImage(currentImageIndex);
    });

    nextButton.addEventListener('click', function() {
        const mainImagesArray = Object.values(productInfo.mainImages).flat();
        currentImageIndex = (currentImageIndex === mainImagesArray.length - 1) ? 0 : currentImageIndex + 1;
        showImage(currentImageIndex);
    });

    // Закрытие модального окна при клике вне изображения
    window.addEventListener('click', function(event) {
        if (imageModal.classList.contains('open') && !event.target.closest('.modal-content-productcard') && !event.target.closest('.main-img') && !event.target.closest('.thumb-img')) {
            imageModal.classList.remove('open');
        }
    });

    // Добавление hover circle к изображениям
    const imageContainers = document.querySelectorAll('.image-container');
    imageContainers.forEach((container, index) => {
        if (relatedProducts[index]) {
            const hoverCircle = createHoverCircle(relatedProducts[index].imageSrc, relatedProducts[index].link);
            container.appendChild(hoverCircle);
        }
    });

    // Функция для удаления обработчиков событий
    function removeEventListeners(selectors, event, handler) {
        document.querySelectorAll(selectors).forEach(element => {
            element.removeEventListener(event, handler);
        });
    }

    // Рендерим сетку товаров
    function renderProductGrid() {
        productGridContainer.innerHTML = createProductGrid(items);
        attachGridEventListeners();
        updateSummary();
    }

    function attachGridEventListeners() {
        const decrementButtons = productGridContainer.querySelectorAll('.decrement');
        const incrementButtons = productGridContainer.querySelectorAll('.increment');
        const decrementColorButtons = productGridContainer.querySelectorAll('.decrement-color');
        const incrementColorButtons = productGridContainer.querySelectorAll('.increment-color');

        decrementButtons.forEach(button => {
            button.addEventListener('click', handleDecrementClick);
        });

        incrementButtons.forEach(button => {
            button.addEventListener('click', handleIncrementClick);
        });

        decrementColorButtons.forEach(button => {
            button.addEventListener('click', handleDecrementColorClick);
        });

        incrementColorButtons.forEach(button => {
            button.addEventListener('click', handleIncrementColorClick);
        });
    }

    function handleDecrementClick(event) {
        const index = parseInt(event.target.getAttribute('data-index'), 10);
        const item = items[index];
        if (item.availability) {
            item.quantity = Math.max(0, item.quantity - 1);
            updateSummary();
            renderProductGrid(); // Перерисовываем сетку продуктов после изменения
        }
    }

    function handleIncrementClick(event) {
        const index = parseInt(event.target.getAttribute('data-index'), 10);
        const item = items[index];
        if (item.availability) {
            item.quantity += 1;
            updateSummary();
            renderProductGrid(); // Перерисовываем сетку продуктов после изменения
        }
    }

    function handleDecrementColorClick(event) {
        const index = parseInt(event.target.getAttribute('data-index'), 10);
        const item = items[index];
        const currentColorIndex = item.colors.indexOf(event.target.closest('.color-value').textContent);
        const newColorIndex = (currentColorIndex === 0) ? item.colors.length - 1 : currentColorIndex - 1;
        event.target.closest('.color-value').textContent = item.colors[newColorIndex];
    }

    function handleIncrementColorClick(event) {
        const index = parseInt(event.target.getAttribute('data-index'), 10);
        const item = items[index];
        const currentColorIndex = item.colors.indexOf(event.target.closest('.color-value').textContent);
        const newColorIndex = (currentColorIndex === item.colors.length - 1) ? 0 : currentColorIndex + 1;
        event.target.closest('.color-value').textContent = item.colors[newColorIndex];
    }

    // Обновление итогов корзины
    function updateSummary() {
        const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = items.reduce((sum, item) => sum + (item.quantity * item.price), 0);

        summaryQuantityElement.textContent = `${totalQuantity} шт.`;
        summaryPriceElement.textContent = `${totalPrice}Р.`;
    }

    // Обработчик для кнопки "Добавить в корзину"
    addToCartButton.addEventListener('click', function() {
        items.forEach(item => {
            if (item.quantity > 0) {
                const event = new CustomEvent('addToCart', { detail: { item: { ...item, ...productInfo } } });
                window.dispatchEvent(event);
                item.quantity = 0;
            }
        });
        updateSummary();
        renderProductGrid();
    });

    // Обработчики событий для кнопок скролла, добавляются только на десктопной версии
    if (!isMobile) {
        document.querySelector('.thumb-prev').addEventListener('click', function() {
            thumbnailImagesContainer.querySelector('.thumbnail-container').scrollBy({
                top: -200,
                behavior: 'smooth'
            });
        });

        document.querySelector('.thumb-next').addEventListener('click', function() {
            thumbnailImagesContainer.querySelector('.thumbnail-container').scrollBy({
                top: 200,
                behavior: 'smooth'
            });
        });
    }

    renderProductGrid();

    // Горизонтальная прокрутка для изображений
    if (scrollContainer) {
        let isScrolling;

        scrollContainer.addEventListener('scroll', () => {
            window.clearTimeout(isScrolling);

            isScrolling = setTimeout(() => {
                const containers = document.querySelectorAll('.image-container');
                const containerWidth = containers[0].offsetWidth;
                const scrollLeft = scrollContainer.scrollLeft;
                const index = Math.round(scrollLeft / containerWidth);

                scrollContainer.scrollTo({
                    left: index * containerWidth,
                    behavior: 'smooth'
                });
            }, 100);
        });
    }
});
