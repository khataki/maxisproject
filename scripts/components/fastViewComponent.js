import { reviews, renderReviews } from './reviewComponent.js';
import { questions, renderQuestions } from './questionsComponent.js';
import { createProductGrid } from './productGridComponent.js';
import { createCharacteristicsTable } from './characteristicsComponent.js';
import { createTabs } from './tabsComponent.js'; // Импортируйте createTabs из tabsComponent.js
import { productInfo } from './productInfo.js';
import { items } from './productItemComponent.js';

document.addEventListener('DOMContentLoaded', function() {
    const modalFastViewContainer = document.getElementById('modalFastViewContainer');

    function createFastViewComponent() {
        const modalFastView = document.createElement('div');
        modalFastView.id = 'modalFastView';
        modalFastView.className = 'modal-fastview';

        const allColors = [...new Set(items.flatMap(item => item.colors))];

        modalFastView.innerHTML = `
            <div class="fastview-modal" id="fast-view-modal">
                <div class="modal-body">
                    <span class="close">&times;</span>
                    <div class="modal-image">
                        <img id="mainImage" src="${productInfo.mainImages[0]}" alt="Product Image">
                        <div class="image-navigation">
                            <!-- Navigation dots or other elements can go here if needed -->
                        </div>
                    </div>
                    <div class="modal-info">
                        <section class="product-selection">
                            <div class="product-header">
                                <h1 id="productTitle" class="product-title">${productInfo.title}</h1>
                                <span class="size-chart">Таблица размеров</span>
                            </div>
                            <div id="productCode" class="product-info">
                                Код товара: ${productInfo.code}
                            </div>
                            <div id="productGridContainer">
                                ${createProductGrid(items)}
                            </div>
                            <div class="summary">
                                <div class="summary-item">
                                    <span class="summary-label">Кол-во:</span>
                                    <span class="summary-quantity">0 шт.</span>
                                </div>
                                <div class="summary-item">
                                    <span class="summary-label">Итог:</span>
                                    <span class="summary-price">0Р.</span>
                                </div>
                            </div>
                            <div class="add-to-cart">
                                <button class="button__purple add-to-cart-button">Добавить в корзину</button>
                            </div>
                        </section>
                        <div class="thumbnails-container">
                            <div class="thumbnails">
                                ${productInfo.mainImages.map((img, index) => `<img class="thumb" src="${img}" alt="Thumbnail" data-index="${index}">`).join('')}
                            </div>
                        </div>
                        <div class="main-container-fastview">
                            ${createTabs(reviews, questions)} <!-- Добавьте табы -->
                            ${createCharacteristicsTable([
                                { label: 'Бренд', value: productInfo.brand },
                                { label: 'Количество изделий на один модельный ряд', value: items.length },
                                { label: 'Материал', value: productInfo.material },
                                { label: 'Состав', value: productInfo.composition },
                                { label: 'Размеры', value: items.map(item => item.size).join(', ') },
                                { label: 'Цвета', value: allColors.join(', ') }
                            ])}
                        </div>
                    </div>
                </div>
            </div>
        `;

        modalFastViewContainer.appendChild(modalFastView);

        attachEventListeners();
    }

    function attachEventListeners() {
        const productGridContainer = document.getElementById('productGridContainer');
        const addToCartButton = document.querySelector('.add-to-cart-button');
        const closeModalButton = document.querySelector('.close');
        const tabHeaders = document.querySelectorAll('.tab-item');
        const tabPanes = document.querySelectorAll('.tab-pane');
        const modalFastView = document.getElementById('modalFastView');

        const mainImage = document.getElementById('mainImage');
        const thumbnails = document.querySelectorAll('.thumb');

        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                mainImage.src = productInfo.additionalImages[index];
            });
        });

        productGridContainer.addEventListener('click', function(event) {
            const index = event.target.getAttribute('data-index');
            if (index !== null) {
                const item = items[index];
                if (event.target.classList.contains('decrement')) {
                    if (item.availability) {
                        item.quantity = Math.max(0, item.quantity - 1);
                    }
                } else if (event.target.classList.contains('increment')) {
                    if (item.availability) {
                        item.quantity += 1;
                    }
                } else if (event.target.classList.contains('decrement-color')) {
                    const currentColorIndex = item.colors.indexOf(event.target.closest('.color-value').textContent);
                    const newColorIndex = (currentColorIndex === 0) ? item.colors.length - 1 : currentColorIndex - 1;
                    event.target.closest('.color-value').textContent = item.colors[newColorIndex];
                } else if (event.target.classList.contains('increment-color')) {
                    const currentColorIndex = item.colors.indexOf(event.target.closest('.color-value').textContent);
                    const newColorIndex = (currentColorIndex === item.colors.length - 1) ? 0 : currentColorIndex + 1;
                    event.target.closest('.color-value').textContent = item.colors[newColorIndex];
                }
                updateSummary();
                renderProductGrid(); // Перерисовываем сетку продуктов после изменения
            }
        });

        addToCartButton.addEventListener('click', function() {
            addToCart();
        });

        closeModalButton.addEventListener('click', function() {
            modalFastView.classList.remove('open-fastview');
        });

        window.addEventListener('click', function(event) {
            if (
                modalFastView.classList.contains('open-fastview') &&
                !modalFastView.contains(event.target) &&
                !event.target.closest('.fastView') &&
                !event.target.closest('.quantity') &&
                !event.target.closest('.close')
            ) {
                modalFastView.classList.remove('open-fastview');
            }
        });

        tabHeaders.forEach(tabHeader => {
            tabHeader.addEventListener('click', function() {
                const tab = this.getAttribute('data-tab');

                tabHeaders.forEach(header => {
                    header.classList.toggle('active', header === this);
                });

                tabPanes.forEach(pane => {
                    pane.classList.toggle('active', pane.id === tab);
                });
            });
        });
    }

    function addToCart() {
        // Отправка события добавления в корзину
        items.forEach(item => {
            if (item.quantity > 0) {
                const event = new CustomEvent('addToCart', { detail: { item: { ...item, ...productInfo } } });
                window.dispatchEvent(event);
                // Обнуление количества товара после добавления в корзину
                item.quantity = 0;
            }
        });

        // Обновление отображения сетки продуктов и итогов после обнуления количества
        renderProductGrid();
        updateSummary();
    }

    function updateSummary() {
        const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
        document.querySelector('.summary-quantity').textContent = `${totalQuantity} шт.`;
        document.querySelector('.summary-price').textContent = `${totalPrice}Р.`;
    }

    function renderProductGrid() {
        const productGridContainer = document.getElementById('productGridContainer');
        productGridContainer.innerHTML = createProductGrid(items);
    }

    createFastViewComponent();

    // Пример кнопки для открытия модального окна быстрого просмотра
    const openFastViewButtons = document.querySelectorAll('.fast_view-button.fastView');
    openFastViewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalFastView = document.getElementById('modalFastView');
            modalFastView.classList.add('open-fastview');
        });
    });
});



