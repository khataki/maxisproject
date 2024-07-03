document.addEventListener('DOMContentLoaded', function() {
    const cartModal = document.getElementById('cartModal');
    const cartButtonContainer = document.querySelectorAll('.header__cart-container')[0]; // Убедитесь, что используется первый контейнер
    const cartItems = [];

    // Создаем кнопку корзины
    const cartButton = document.createElement('button');
    cartButton.className = 'cart__button';
    cartButton.innerHTML = `
        <svg class="icon-header" width="40" height="40" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-9 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM1 1s5 0 4 4v4a3 3 0 0 0 3 4h7a5 5 0 0 0 5-4l1-4a3 3 0 0 0-4-4H9" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p class="cart__description">Корзина</p>
    `;
    cartButtonContainer.appendChild(cartButton);

    // Функция для отображения корзины
    cartButton.addEventListener('click', function() {
        cartModal.classList.add('open');
    });

    // Функция для закрытия корзины при клике вне её
    window.addEventListener('click', function(event) {
        if (cartModal.classList.contains('open') && !cartModal.contains(event.target) && !cartButton.contains(event.target) && !event.target.closest('.quantity-btn-cart')) {
            cartModal.classList.remove('open');
        }
    });

    function renderCart() {
        if (cartItems.length === 0) {
            cartModal.innerHTML = `
                <div class="line-cart"></div>
                <div class="cart-modal-content">
                    <div class="cart-items">
                        <p class="empty-cart-message">Пока здесь пусто... :-(</p>
                    </div>
                    <div class="line-cart"></div>
                </div>
            `;
        } else {
            cartModal.innerHTML = `
                <div class="line-cart"></div>
                <div class="cart-modal-content">
                    <div class="cart-items">
                        ${cartItems.map(item => `
                            <div class="cart-item">
                                <img src="${item.image}" alt="Product Image" class="cart-item-image">
                                <div class="cart-item-details">
                                    <h2 class="cart-item-title">${item.title}</h2>
                                    <p class="cart-item-code">Код товара: ${item.code}</p>
                                    <p class="cart-item-size">Размер: ${item.size}</p>
                                    <p class="cart-item-quantity">
                                        Кол-во: 
                                        <button class="quantity-btn-cart decrement" data-index="${cartItems.indexOf(item)}">-</button>
                                        <span class="quantity-value-cart">${item.quantity}</span>
                                        <button class="quantity-btn-cart increment" data-index="${cartItems.indexOf(item)}">+</button>
                                    </p>
                                    <p class="cart-item-price" data-unit-price="${item.price}">${item.quantity * item.price}Р.</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="line-cart"></div>
                    <div class="cart-summary">
                        <p class="summary-total">Итого: <span class="total-price">${calculateTotal()}Р.</span></p>
                        <button class="button__purple">Оформить заказ</button>
                    </div>
                </div>
            `;
        }
        attachCartEventListeners();
    }

    function attachCartEventListeners() {
        document.querySelectorAll('.quantity-btn-cart.decrement').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                const item = cartItems[index];
                if (!item.unavailable) {
                    cartItems[index].quantity = Math.max(0, cartItems[index].quantity - 1);
                    renderCart();
                    updateCartButton();
                }
            });
        });

        document.querySelectorAll('.quantity-btn-cart.increment').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                const item = cartItems[index];
                if (!item.unavailable) {
                    cartItems[index].quantity += 1;
                    renderCart();
                    updateCartButton();
                }
            });
        });
    }

    function updateCartButton() {
        const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCount > 0) {
            cartButton.innerHTML = `
                <svg class="icon-header" width="40" height="40" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-9 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM1 1s5 0 4 4v4a3 3 0 0 0 3 4h7a5 5 0 0 0 5-4l1-4a3 3 0 0 0-4-4H9" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="cart__description">Корзина (${cartCount})</p>
            `;
        } else {
            cartButton.innerHTML = `
                <svg class="icon-header" width="40" height="40" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-9 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM1 1s5 0 4 4v4a3 3 0 0 0 3 4h7a5 5 0 0 0 5-4l1-4a3 3 0 0 0-4-4H9" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="cart__description">Корзина</p>
            `;
        }
    }

    function calculateTotal() {
        return cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
    }

    // Обработка события добавления в корзину
    window.addEventListener('addToCart', function(event) {
        const { item } = event.detail;
        const existingItem = cartItems.find(cartItem => cartItem.size === item.size && cartItem.color === item.color);
        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            cartItems.push({ ...item }); // Делаем копию объекта item
        }
        renderCart();
        updateCartButton();
    });

    renderCart();
    updateCartButton();
});
