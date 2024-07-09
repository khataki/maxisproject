import { createTabs, attachTabsEventListeners } from './tabsComponent.js';
import { createCharacteristicsTable } from './characteristicsComponent.js';
import { createProductGrid } from './productGridComponent.js';
import { productInfo } from './productInfo.js';
import { items } from './productItemComponent.js';
import { createHoverCircle } from './hoverCircleComponent.js';

// Пример данных для связанных продуктов
const relatedProducts = [
    {
        imageSrc: 'path/to/related-product-image1.jpg',
        link: 'product-link-1.html'
    },
    {
        imageSrc: 'path/to/related-product-image2.jpg',
        link: 'product-link-2.html'
    }
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

    if (!productTitle || !productCode || !tabsContainer || !characteristicsContainer || !productImagesContainer || !thumbnailImagesContainer || !modalImage || !imageModal || !closeModalButton || !prevButton || !nextButton || !productGridContainer || !addToCartButton || !summaryQuantityElement || !summaryPriceElement) {
        console.error('Не удалось найти один из элементов на странице');
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

    // Рендерим основные и эскизные изображения
    productImagesContainer.innerHTML = productInfo.mainImages.map((img, index) => `
        <div class="image-container">
            <img src="${img}" data-index="${index}" alt="Main Image ${index + 1}" class="main-img" />
        </div>
    `).join('');

    thumbnailImagesContainer.innerHTML = productInfo.mainImages.map((img, index) => `
        <img src="${img}" data-index="${index}" alt="Thumbnail ${index + 1}" class="thumb-img" />
    `).join('');

    let currentImageIndex = 0;

    function showImage(index) {
        modalImage.src = productInfo.mainImages[index];
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
        currentImageIndex = (currentImageIndex === 0) ? productInfo.mainImages.length - 1 : currentImageIndex - 1;
        showImage(currentImageIndex);
    });

    nextButton.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex === productInfo.mainImages.length - 1) ? 0 : currentImageIndex + 1;
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
        const decrementButtons = document.querySelectorAll('.quantity .decrement');
        const incrementButtons = document.querySelectorAll('.quantity .increment');
        const decrementColorButtons = document.querySelectorAll('.color .decrement-color');
        const incrementColorButtons = document.querySelectorAll('.color .increment-color');

        // Удаляем предыдущие обработчики событий
        removeEventListeners('.quantity .decrement', 'click', handleDecrementClick);
        removeEventListeners('.quantity .increment', 'click', handleIncrementClick);
        removeEventListeners('.color .decrement-color', 'click', handleDecrementColorClick);
        removeEventListeners('.color .increment-color', 'click', handleIncrementColorClick);

        // Добавляем новые обработчики событий
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
        if (items[index].quantity > 0) {
            items[index].quantity--;
        }
        renderProductGrid();
    }

    function handleIncrementClick(event) {
        const index = parseInt(event.target.getAttribute('data-index'), 10);
        items[index].quantity++;
        renderProductGrid();
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

    renderProductGrid();
});
