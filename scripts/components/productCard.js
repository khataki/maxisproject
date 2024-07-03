import { createTabs, attachTabsEventListeners } from './tabsComponent.js';
import { createCharacteristicsTable } from './characteristicsComponent.js';
import { productInfo } from './productInfo.js';
import { items } from './productItemComponent.js';

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

    if (!productTitle || !productCode || !tabsContainer || !characteristicsContainer || !productImagesContainer || !thumbnailImagesContainer || !modalImage || !imageModal || !closeModalButton || !prevButton || !nextButton) {
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
});
