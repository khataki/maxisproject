import { productInfo } from './productInfo.js';

export function createShoppingCard(item, index) {
  return `
    <div class="shopping_card-item">
      <div class="shopping_card-image-container">
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
        <div class="fast_view-container-button fast-view-hidden">
          <button class="fast_view-button onFavourite"><i class="fa-regular fa-heart"></i></button>
          <button class="fast_view-button onCart"><i class="fa-solid fa-cart-shopping"></i></button>
          <button class="fast_view-button fastView" data-index="${index}"><i class="fa-regular fa-eye"></i></button>
        </div>
      </div>
      <div class="shopping_card-info">
        <a href="/public/productcard.html" class="shopping_card-description ajax-link">${productInfo.title}</a>
        <div class="card-price">${item.price} ₽</div>
      </div>
    </div>
  `;
}


document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM fully loaded and parsed");

  const observeDOM = (function(){
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    return function(obj, callback){
      if (!obj || obj.nodeType !== 1) return;

      if (MutationObserver){
        // define a new observer
        const mutationObserver = new MutationObserver(callback);

        // have the observer observe foo for changes in children
        mutationObserver.observe(obj, { childList: true, subtree: true });
        return mutationObserver;
      }
      // browser support fallback
      else if (window.addEventListener){
        obj.addEventListener('DOMNodeInserted', callback, false);
        obj.addEventListener('DOMNodeRemoved', callback, false);
      }
    };
  })();

  // Добавляем наблюдателя за изменениями в контейнере с карточками товаров
  const shoppingCardsContainer = document.getElementById('shopping-cards-container');
  observeDOM(shoppingCardsContainer, function() {
    console.log("Detected changes in the shopping cards container");
    attachCardEventListeners();
  });

  function attachCardEventListeners() {
    const fastViewButtons = document.querySelectorAll('.fast_view-button');
    fastViewButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.stopPropagation(); // Останавливаем всплытие события
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

    const shoppingCardImages = document.querySelectorAll('.shopping_card-item');
    shoppingCardImages.forEach(image => {
      image.addEventListener('mouseenter', function() {
        const fastViewContainer = this.querySelector('.fast_view-container-button');
        if (fastViewContainer) {
          fastViewContainer.classList.remove('fast-view-hidden');
          fastViewContainer.classList.add('fast-view-open');
          console.log('Fast view container added');
        } else {
          console.error('No element found with class ".fast_view-container-button" inside .shopping_card-item');
        }
      });

      image.addEventListener('mouseleave', function() {
        const fastViewContainer = this.querySelector('.fast_view-container-button');
        if (fastViewContainer) {
          fastViewContainer.classList.remove('fast-view-open');
          fastViewContainer.classList.add('fast-view-hidden');
          console.log('Fast view container removed');
        } else {
          console.error('No element found with class ".fast_view-container-button" inside .shopping_card-item');
        }
      });
    });
  }

  // Инициализация наблюдателя
  observeDOM(shoppingCardsContainer, function() {
    console.log("Detected changes in the shopping cards container");
  });
});
