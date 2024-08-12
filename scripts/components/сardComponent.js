import { productInfo } from './productInfo.js';
import { colorMap } from './productItemComponent.js';

export function createShoppingCard(item, index, sectionId, popupText) {
  const colorOptions = item.colors.map((color, colorIndex) => `
    <div class="color-option" data-index="${index}" data-color="${color}" style="background-color: ${colorMap[color]};"></div>
  `).join('');

  const colorLabel = `Цвет: ${item.colors.join(', ')}`;

  return `
    <div class="shopping_card-item" data-index="${index}">
      <div class="shopping_card-image-container">
        <div class="popup-visual popup-${sectionId}">${popupText}</div>
        <div class="favorite-card-button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="icon-header" stroke="#000" width="24" height="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-labelledby="favouriteIconTitle" color="#000" viewBox="0 0 24 24">
            <path d="m12 21-1.45-1.3C5.4 15.13 2 12.1 2 8.4A5.4 5.4 0 0 1 7.5 3c1.74 0 3.41.8 4.5 2.05A6.04 6.04 0 0 1 16.5 3 5.4 5.4 0 0 1 22 8.4c0 3.7-3.4 6.72-8.55 11.31L12 21Z"></path>
          </svg>
        </div>
        <a class="ajax-link" href="/public/productcard.html">
          <div class="shopping_card-image fix-card">
            <img
              class="card_image main-image"
              src="${productInfo.mainImages['default'][0]}"
              alt="Карточка товара"
            />
            <img
              class="card_image hover-image"
              src="${productInfo.mainImages['default'][1]}"
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
        <div class="card-price">${item.price} ₽</div>
        <a href="/public/productcard.html" class="shopping_card-description ajax-link">${productInfo.title}</a>
        <div class="color-label">${colorLabel}</div>
        <div class="color-options">
          ${colorOptions}
        </div>
      </div>
    </div>
  `;
}