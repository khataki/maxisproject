import { productInfo } from './productInfo.js';

export function createShoppingCard(item, index) {
    return `
        <div class="shopping_card-item">
            <a class="ajax-link" href="/public/productcard.html">
                <div class="shopping_card-image">
                    <img
                        class="card_image main-image"
                        src="${productInfo.mainImages[0]}"
                        alt="Карточка товара"
                    />
                    <img
                        class="card_image hover-image"
                        src="${productInfo.mainImages[1]}"
                        alt="Карточка товара"
                    />
                </div>
            </a>
            <div class="shopping_card-info">
                <div class="fast_view">
                    <button class="fast_view-button fastView" data-index="${index}">Быстрый просмотр</button>
                </div>
                <a href="/public/productcard.html" class="shopping_card-description ajax-link">${productInfo.title}</a>
                <div class="card-price">${item.price} ₽</div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    // Обработчики событий для кнопок быстрого просмотра
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
});
