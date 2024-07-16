export function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');
  header.innerHTML = `
    <div class="header__logo-description">
      <a class="header__logo ajax-link" href="/public/index.html">
        <div class="header__logo-container"></div>
      </a>
      <p class="header__description">
        производство и продажа женской <br /> одежды оптом по всей РФ и СНГ
      </p>
    </div>
    <div class="feedback__container">
      <button id="openFeedbackModalButton" class="button__purple">
        Обратная связь
      </button>
      <div class="header__phone-container hidden">
        <a class="header__phone" href="tel:+79061117455">+7(906)111-74-55</a>
        <a class="header__phone" href="tel:+79030620500">+7(903)062-05-00</a>
      </div>
    </div>
    <div class="header__button-container">
      <div class="header__login-container">
        <button id="loginButton" class="login__button">
          <svg class="icon-header" width="40" height="40" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM1 19v-4l2-2h10l2 2v4m0-18a4 4 0 0 1 0 8m3 4h1l2 2v4" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p class="login__description">Вход/Регистрация</p>
        </button>
      </div>
      <div class="header__cart-container">
        <button class="cart__button">
<svg class="icon-header" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 22 20" fill="none">
  <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.336 18.707a1.92 1.92 0 1 0 0-3.84 1.92 1.92 0 0 0 0 3.84zm-9.6 0a1.92 1.92 0 1 0 0-3.84 1.92 1.92 0 0 0 0 3.84zM1.4 1.417s4.455-.057 3.84 3.84l-.662 3.898a3.14 3.14 0 0 0 3.197 3.783h7.68a4.704 4.704 0 0 0 4.473-3.783l.663-3.946a3.16 3.16 0 0 0-3.216-3.84H9.023"/>
</svg>
        <p class="cart__description">Корзина</p>
        </button>
      </div>
    </div>
  `;

  // Инициализация кнопки корзины и ее функциональности
  initCart(header);

  // Добавляем обработчики событий для показа номеров телефонов
  const feedbackButton = header.querySelector('#openFeedbackModalButton');
  const phoneContainer = header.querySelector('.header__phone-container');

  feedbackButton.addEventListener('mouseenter', () => {
    phoneContainer.classList.remove('hidden');
    phoneContainer.classList.add('visible');
  });

  feedbackButton.addEventListener('mouseleave', () => {
    phoneContainer.classList.remove('visible');
    phoneContainer.classList.add('hidden');
  });

  return header;
}

function initCart(header) {
  console.log('Initializing cart component');

  const cartModal = document.getElementById('cartModal');
  const cartButton = header.querySelector('.cart__button');

  if (!cartButton) {
    console.error('Cart button not found');
    return;
  }

  console.log('Cart button found');

  const cartItems = [];

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
  <svg class="icon-header" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 22 20" fill="none">
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.336 18.707a1.92 1.92 0 1 0 0-3.84 1.92 1.92 0 0 0 0 3.84zm-9.6 0a1.92 1.92 0 1 0 0-3.84 1.92 1.92 0 0 0 0 3.84zM1.4 1.417s4.455-.057 3.84 3.84l-.662 3.898a3.14 3.14 0 0 0 3.197 3.783h7.68a4.704 4.704 0 0 0 4.473-3.783l.663-3.946a3.16 3.16 0 0 0-3.216-3.84H9.023"/>
  </svg>
  ${cartCount > 0 ? `<div class="cart__count">${cartCount}</div>` : ''}
  <p class="cart__description">Корзина</p>
    `;
    } else {
      cartButton.innerHTML = `
<svg class="icon-header" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 22 20" fill="none">
  <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.336 18.707a1.92 1.92 0 1 0 0-3.84 1.92 1.92 0 0 0 0 3.84zm-9.6 0a1.92 1.92 0 1 0 0-3.84 1.92 1.92 0 0 0 0 3.84zM1.4 1.417s4.455-.057 3.84 3.84l-.662 3.898a3.14 3.14 0 0 0 3.197 3.783h7.68a4.704 4.704 0 0 0 4.473-3.783l.663-3.946a3.16 3.16 0 0 0-3.216-3.84H9.023"/>
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
      cartItems.push({ ...item });
    }
    renderCart();
    updateCartButton();
  });

  renderCart();
  updateCartButton();
}
