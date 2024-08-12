import { goToCatalogMenu, attachBurgerMenuEventListeners } from '../burgerMenuComponent/burgerMenu.js';
import { productInfo } from '../productInfo.js';

export function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');
    header.innerHTML = `
        <div class="feedback__container">
            <div class="header__phone-container">
                <a class="header__phone" href="tel:+79061117455">+7(906)111-74-55</a>
                <a class="header__phone" href="tel:+79030620500">+7(903)062-05-00</a>
            </div>
        </div>
        <div class="header__logo-description">
            <a class="header__logo ajax-link" href="/public/index.html">
                <div class="header__logo-container"></div>
            </a>
        </div>
        <div class="search-container-main">
            <div class="nav-list__item search-container">
                <svg class="icon" fill="#000000" viewBox="0 0 30 30" enable-background="new 0 0 30 30" id="Glyph" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14 s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0 C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z" id="XMLID_223_"></path>
                </svg>
                <input class="search" placeholder="Поиск..." />
            </div>
        </div>
        <div class="header__button-container">
            <div class="header__cart-container">
                        <button id="loginButton" class="login__button">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon-header" fill="none" width="32" height="32" viewBox="0 0 24 24">
                    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM3 22a10 10 0 0 1 9-7c4 0 8 3 9 7"/>
                </svg>
                <p class="login__description">Войти</p>
            </button>
                <button class="search__button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="icon-header" width="30" height="30" viewBox="0 0 24 24">
                        <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 17 4 4m-2-10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"/>
                    </svg>
                </button>
                <button class="favorite__button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="icon-header" stroke="#000" width="30" height="30" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-labelledby="favouriteIconTitle" color="#000" viewBox="0 0 24 24">
                        <path d="m12 21-1.45-1.3C5.4 15.13 2 12.1 2 8.4A5.4 5.4 0 0 1 7.5 3c1.74 0 3.41.8 4.5 2.05A6.04 6.04 0 0 1 16.5 3 5.4 5.4 0 0 1 22 8.4c0 3.7-3.4 6.72-8.55 11.31L12 21Z"/>
                    </svg>
                </button>
                <button class="cart__button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" class="icon-header" height="32" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .5.4L2.9 4h11.6a.5.5 0 0 1 .5.6l-1.5 6a.5.5 0 0 1-.5.4H4a.5.5 0 0 1-.5-.4L1.6 3H.5a.5.5 0 0 1-.5-.5zM3.1 5l1.3 5h8.2L14 5H3zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
                </button>
                <button id="burgerMenuButton" class="burger-menu-button">
                    <span class="burger-menu-icon"></span>
                </button>
            </div>
        </div>
        <!-- Начало бургер-меню -->
<div class="burger-menu-container">
    <div id="catalogMobileBurger" class="burger-menu">
        <div class="phone-and-socials-burger">
            <div class="footer__phone-container">
                <a class="header__phone" href="tel:+79061117455">+7(906)111-74-55</a>
                <a class="header__phone" href="tel:+79030620500">+7(903)062-05-00</a>
            </div>
            <div class="footer__socials-icons">
                <a class="footer__socials-icon" href="#">
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="30" height="30" viewBox="0 0 19.85 12">
  <path d="M12.02 5.77c-.37-.14-.37-.68-.39-1.06-.09-1.34.36-3.4-.18-4.27-.39-.52-2.25-.47-3.38-.4-.32.05-.7.12-.97.26-.28.14-.55.38-.55.6 0 .3.68.25.93.65.27.43.27 1.35.27 2.1 0 .87-.13 2.03-.47 2.08-.52.02-.82-.52-1.1-.92A15.9 15.9 0 0 1 4.7 2.1c-.2-.49-.32-1.03-.61-1.24C3.62.54 2.8.5 2 .54 1.3.56.25.47.04.9c-.16.5.18.97.36 1.37a32.8 32.8 0 0 0 3.16 5.68c1.13 1.63 2.2 2.93 4.28 3.61.6.2 3.18.73 3.7 0 .18-.28.14-.92.23-1.39.09-.47.2-.94.63-.97.37-.02.57.31.8.55.25.26.45.47.63.7.43.45.89 1.07 1.43 1.3.75.33 1.9.24 3 .19.88-.02 1.51-.21 1.58-.75.05-.43-.4-1.04-.68-1.4-.68-.87-1-1.13-1.77-1.93-.34-.35-.77-.73-.77-1.15-.02-.26.18-.5.36-.76.8-1.23 1.6-2.1 2.32-3.37.2-.38.68-1.25.5-1.68-.2-.47-1.34-.33-2.05-.33-.9 0-2.08-.07-2.3.12-.44.3-.62.8-.83 1.28a14.05 14.05 0 0 1-1.7 3.01c-.22.29-.65.88-.9.78z" style="opacity:1;fill:#bfb2b0;fill-opacity:1;stroke-width:.74"/>
</svg>
              </a>
              <a class="footer__socials-icon" href="#">
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="24" height="24" viewBox="0 0 18 18">
  <path d="M3 0a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Zm11 2.8c.6 0 1.2.6 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.6-1.2 1.2-1.2zM9 6a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3Zm4 6v.1z" style="opacity:1;fill:#bfb2b0;fill-opacity:1"/>
</svg>
              </a>
              <a class="footer__socials-icon" href="#">
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="30" height="30" viewBox="0 0 12 12">
  <path fill-rule="evenodd" d="M10.25 1.75A6 6 0 0 0 0 6c0 1.06.33 2.06.85 2.96L0 12l3.17-.78A5.9 5.9 0 0 0 6 12a6.02 6.02 0 0 0 4.25-10.25ZM6 11c-.89 0-1.74-.3-2.5-.74l-.18-.11-1.88.49.5-1.83-.12-.2A4.93 4.93 0 0 1 1 6a5.03 5.03 0 0 1 8.54-3.54A5 5 0 0 1 6 11Z" clip-rule="evenodd" style="fill:#bfb2b0;fill-opacity:1;stroke-width:.5"/>
  <path d="M5.86.44A5.23 5.46 0 0 0 .64 5.9a5.23 5.46 0 0 0 .97 3.15H.95V11h1.94v-.61a5.23 5.46 0 0 0 2.97.98A5.23 5.46 0 0 0 11.1 5.9 5.23 5.46 0 0 0 5.86.44ZM4.13 3.45h.25c.08 0 .19-.03.3.23.1.28.37.94.4 1 .04.08.06.15.02.24-.05.1-.07.15-.14.23l-.2.24c-.06.06-.13.14-.05.27.07.14.34.58.73.94.5.46.93.6 1.07.67.13.06.2.06.28-.04.08-.09.34-.39.42-.52.1-.14.18-.12.3-.07a14.83 14.83 0 0 1 1.16.6c.03.05.03.32-.08.64-.1.32-.64.6-.9.64-.22.04-.5.05-.83-.05a7.62 7.62 0 0 1-.75-.29 5.84 5.84 0 0 1-2.26-2.04 2.62 2.62 0 0 1-.54-1.4c0-.66.34-.99.46-1.12a.5.5 0 0 1 .36-.17Z" style="clip-rule:evenodd;fill:#bfb2b0;fill-opacity:1;fill-rule:evenodd;stroke-width:.89533"/>
</svg>
              </a>
              <a class="footer__socials-icon" href="#">
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="24" height="24" viewBox="0 0 20 20">
  <path d="m0 8 20-8-3 17-11-6 12-9-14 8Zm6 12v-8l5 3Z" style="fill:#bfb2b0;fill-opacity:1;stroke-width:.0234375"/>
</svg>
              </a>
                            <a class="footer__socials-icon" href="#">
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="30" height="30" viewBox="0 0 12 15.5">
  <path d="M6.4 0C2 0 0 3 0 5.6 0 7 .6 8.5 1.8 9c.2 0 .4 0 .5-.3l.2-.7c0-.2 0-.3-.2-.5-.3-.4-.6-1-.6-1.7 0-2.3 1.7-4.3 4.4-4.3C8.5 1.5 9.8 3 9.8 5c0 2.6-1.1 4.8-2.8 4.8C6 9.8 5.4 9 5.6 8c.3-1 .8-2.3.8-3.1 0-.7-.4-1.3-1.2-1.3-1 0-1.7 1-1.7 2.3 0 .8.3 1.4.3 1.4L2.6 12c-.3 1.5 0 3.2 0 3.4 0 .1.1.1.2 0 0 0 1.2-1.5 1.6-2.9l.6-2.4c.3.6 1.2 1.1 2.2 1.1 2.9 0 4.8-2.6 4.8-6.1C12 2.5 9.8 0 6.4 0Z" style="fill:#bfb2b0;fill-opacity:1"/>
</svg>
              </a>
            </div>
            </div>
    <ul class="burger-menu-list">
        <li><a href="/public/index.html">Главная</a></li>
        <li id="catalogMobileBurger"><a href="#">Каталог</a></li>
        <li><a href="/public/about.html">О нас</a></li>
        <li><a href="/public/contact.html">Контакты</a></li>
        <li><a href="#">Новинки</a></li>
        <li><a href="#">Акции и распродажа</a></li>
        <li><a href="#">Хиты продаж</a></li>
        <li><a href="#">Мужской ассортимент</a></li>
        <li><a href="#">Детский ассортимент</a></li>
        <li><a href="#">Мусульманский ассортимент</a></li>
        <li><a href="#">Халаты</a></li>
        <li><a href="#">Пеньюары и сорочки</a></li>
        <li><a href="#">Сарафаны</a></li>
        <li><a href="#">Комплекты и пижамы</a></li>
        <li><a href="#">Платья</a></li>
        <li><a href="#">Туники и футболки</a></li>
        <li><a href="#">Брюки, бриджи, шорты</a></li>
        <li><a href="#">Нижнее белье</a></li>
        <li><a href="#">Рекомендуем</a></li>
        <li><a href="#">Документы</a></li>
        <li><a href="#">Оплата и доставка</a></li>
        <li><a href="#">Как оформить заказ?</a></li>
        <li><a href="#">О Нас</a></li>
        <li><a href="#">Контакты</a></li>
        <li><a href="#">Отзывы</a></li>
    </ul>
</div>
        <!-- Конец бургер-меню -->
    `;

    // Initialize and attach event listeners
  
        goToCatalogMenu();
        attachBurgerMenuEventListeners();
    

    // Initialize cart functionality
    initCart(header);

    return header;
}

function initCart(header) {
  console.log('Initializing cart component');

  const cartModal = document.getElementById('cartModal');
  const cartButton = header.querySelector('.cart__button');
  const cartButtonMobile = document.querySelector('#cart-link-mobile');

  if (!cartButton || !cartButtonMobile) {
      console.error('Cart button not found');
      return;
  }

  console.log('Cart button found');

  const cartItems = [
      { title: 'Платье вечернее', code: '001', size: 48, color: 'Зеленый', quantity: 1, price: 1500, imageSrc: productInfo.mainImages[0] },
      { title: 'Костюм деловой', code: '002', size: 50, color: 'Синий', quantity: 2, price: 2000, imageSrc: productInfo.mainImages[1] },
      { title: 'Блузка офисная', code: '003', size: 46, color: 'Красный', quantity: 1, price: 1600, imageSrc: productInfo.mainImages[2] },
      { title: 'Юбка карандаш', code: '004', size: 48, color: 'Желтый', quantity: 3, price: 1400, imageSrc: productInfo.mainImages[3] },
      { title: 'Платье летнее', code: '005', size: 50, color: 'Белый', quantity: 2, price: 1300, imageSrc: productInfo.mainImages[4] },
      { title: 'Жакет теплый', code: '006', size: 52, color: 'Серый', quantity: 1, price: 2200, imageSrc: productInfo.mainImages[5] },
      { title: 'Брюки классические', code: '007', size: 54, color: 'Черный', quantity: 2, price: 1800, imageSrc: productInfo.mainImages[6] },
      { title: 'Свитер зимний', code: '008', size: 56, color: 'Синий', quantity: 1, price: 2100, imageSrc: productInfo.mainImages[7] },
      { title: 'Пальто демисезонное', code: '009', size: 58, color: 'Бежевый', quantity: 1, price: 3000, imageSrc: productInfo.mainImages[8] },
      { title: 'Рубашка повседневная', code: '010', size: 60, color: 'Зеленый', quantity: 3, price: 1200, imageSrc: productInfo.mainImages[9] },
      { title: 'Футболка спортивная', code: '011', size: 62, color: 'Красный', quantity: 2, price: 900, imageSrc: productInfo.mainImages[10] },
      { title: 'Куртка осенняя', code: '012', size: 48, color: 'Коричневый', quantity: 1, price: 2500, imageSrc: productInfo.mainImages[11] }
  ];

  // Функция для отображения корзины
  cartButton.addEventListener('click', function() {
      cartModal.classList.add('open');
  });

  cartButtonMobile.addEventListener('click', function() {
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
                              <img src="${item.imageSrc}" alt="Product Image" class="cart-item-image">
                              <div class="cart-item-details">
                                  <h2 class="cart-item-title">${item.title}</h2>
                                  <p class="cart-item-code">Код товара: ${item.code}</p>
                                  <p class="cart-item-size">Размер: ${item.size}</p>
                                  <p class="cart-item-quantity">
                                      Кол-во: 
                                      <button id="cartButtonDecrement${cartItems.indexOf(item)}" class="quantity-btn-cart decrement" data-index="${cartItems.indexOf(item)}"><i class="fa-solid fa-minus"></i></button>
                                      <span class="quantity-value-cart">${item.quantity}</span>
                                      <button id="cartButtonIncrement${cartItems.indexOf(item)}" class="quantity-btn-cart increment" data-index="${cartItems.indexOf(item)}"><i class="fa-solid fa-plus"></i></button>
                                      <button id="cartButtonDelete${cartItems.indexOf(item)}" class="quantity-btn-cart delete" data-index="${cartItems.indexOf(item)}"><i class="fa-solid fa-trash-can"></i></button>
                                  </p>
                                  <p class="cart-item-price" data-unit-price="${item.price}">${item.quantity * item.price}Р.</p>
                              </div>
                          </div>
                      `).join('')}
                  </div>
                  <div class="line-cart"></div>
                  <div class="cart-summary">
                      <p class="summary-total">Итого: <span class="total-price">${calculateTotal()}Р.</span></p>
                      <a href="/public/cart.html">
                      <button class="button__purple">Оформить заказ</button>
                      </a>
                  </div>
              </div>
          `;
      }
      attachCartEventListeners();
  }

  function attachCartEventListeners() {
      cartItems.forEach((item, index) => {
          document.getElementById(`cartButtonDecrement${index}`).addEventListener('click', function() {
              if (!item.unavailable) {
                  item.quantity = Math.max(0, item.quantity - 1);
                  if (item.quantity === 0) {
                      cartItems.splice(index, 1); // Удаление товара из корзины
                  }
                  renderCart();
                  updateCartButton();
              }
          });

          document.getElementById(`cartButtonIncrement${index}`).addEventListener('click', function() {
              if (!item.unavailable) {
                  item.quantity += 1;
                  renderCart();
                  updateCartButton();
              }
          });

          document.getElementById(`cartButtonDelete${index}`).addEventListener('click', function() {
              cartItems.splice(index, 1); // Удаление товара из корзины
              renderCart();
              updateCartButton();
          });
      });
  }

  function updateCartButton() {
      const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
      const cartCountMobile = document.querySelector('.cart__count-mobile');
      
      if (cartCount > 0) {
          cartButton.innerHTML = `
              <svg class="icon-header" style="top: 3px;" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 22 20" fill="none">
                  <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.336 18.707a1.92 1.92 0 1 0 0-3.84 1.92 1.92 0 0 0 0 3.84zm-9.6 0a1.92 1.92 0 1 0 0-3.84 1.92 1.92 0 0 0 0 3.84zM1.4 1.417s4.455-.057 3.84 3.84l-.662 3.898a3.14 3.14 0 0 0 3.197 3.783h7.68a4.704 4.704 0 0 0 4.473-3.783l.663-3.946a3.16 3.16 0 0 0-3.216-3.84H9.023"/>
              </svg>
              ${cartCount > 0 ? `<div class="cart__count">${cartCount}</div>` : ''}
              
          `;
          cartCountMobile.textContent = cartCount;
      } else {
          cartButton.innerHTML = `
              <svg class="icon-header" style="top: 3px;" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 22 20" fill="none">
                  <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.336 18.707a1.92 1.92 0 1 0 0-3.84 1.92 1.92 0 0 0 0 3.84zm-9.6 0a1.92 1.92 0 1 0 0-3.84 1.92 1.92 0 0 0 0 3.84zM1.4 1.417s4.455-.057 3.84 3.84l-.662 3.898a3.14 3.14 0 0 0 3.197 3.783h7.68a4.704 4.704 0 0 0 4.473-3.783l.663-3.946a3.16 3.16 0 0 0-3.216-3.84H9.023"/>
              </svg>
             
          `;
          cartCountMobile.textContent = '';
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
