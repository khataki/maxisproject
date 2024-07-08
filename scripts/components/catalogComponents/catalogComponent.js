// catalogComponent.js
import { createShoppingCard } from '../сardComponent.js';
import { items } from '../productItemComponent.js';

export function createCatalogSection(containerId) {
    console.log('Initializing catalog section'); // Добавлено отладочное сообщение
    const catalogContainer = document.getElementById(containerId);

    if (!catalogContainer) {
        console.error(`Element with ID "${containerId}" not found`);
        return;
    }

    console.log('Catalog container found', catalogContainer); // Добавлено отладочное сообщение

    if (!items || items.length === 0) {
        console.error('Items array is empty or not found');
        return;
    }

    console.log('Items to be added:', items); // Добавлено отладочное сообщение

    // Генерируем HTML-код для всех карточек и добавляем их в контейнер
    catalogContainer.innerHTML = items.map((item, index) => createShoppingCard(item, index)).join('');

    console.log('Cards added to container'); // Добавлено отладочное сообщение

    // Добавляем обработчики событий для изменения изображения при наведении и быстрого просмотра
    attachCardEventListeners();
}

function attachCardEventListeners() {
    const cardImages = document.querySelectorAll('.card_image');
    cardImages.forEach(cardImage => {
        const hoverSrc = cardImage.getAttribute('data-hover-src');
        const originalSrc = cardImage.src;

        cardImage.addEventListener('mouseover', () => {
            cardImage.src = hoverSrc;
        });

        cardImage.addEventListener('mouseout', () => {
            cardImage.src = originalSrc;
        });
    });

    const fastViewButtons = document.querySelectorAll('.fast_view-button.fastView');
    fastViewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalFastView = document.getElementById('modalFastView');
            const itemIndex = this.getAttribute('data-index');
            if (!modalFastView) {
                console.error('Element with ID "modalFastView" not found');
                return;
            }
            console.log(`Fast view button clicked for item with index: ${itemIndex}`);
            // Заполните данные модального окна здесь на основе itemIndex
            modalFastView.classList.add('open-fastview');
        });
    });
}
