export function createShoppingCardSection(title, sectionId) {
  const section = document.createElement('section');
  section.id = `section-${sectionId}`;
  section.className = 'shopping_cards-container';
  section.innerHTML = `
    <div class="categories-title_container">
      <div class="line"></div>
      <h3 class="categories__title" id="${sectionId}">${title}</h3>
      <div class="line"></div>
    </div>
    <div class="shopping_cards-slider" id="shopping_cards-slider-${sectionId}">
      <button class="arrow cardslide-prev" id="cardslide-prev-${sectionId}"></button>
      <div class="shopping_card-list" id="shoppingCardContainer-${sectionId}"></div>
      <button class="arrow cardslide-next" id="cardslide-next-${sectionId}"></button>
    </div>
    <div id="sliderRounds-${sectionId}" class="slider-rounds"></div>
  `;
  return section;
}

// document.addEventListener('DOMContentLoaded', function() {
//   const shoppingCardsContainer = document.getElementById('shopping-cards-container');
  
//   // Функция для доскролливания карточки
//   function smoothScrollTo(element, targetPosition) {
//     element.scrollTo({
//       left: targetPosition,
//       behavior: 'smooth'
//     });
//   }


  
//   // Функция для получения ближайшей позиции карточки
//   function getNearestCardPosition(container, cardWidth) {
//     const scrollLeft = container.scrollLeft;
//     return Math.round(scrollLeft / cardWidth) * cardWidth;
//   }

//   // Привязка обработчиков событий к слайдеру
// // Привязка обработчиков событий к слайдеру
// function attachSliderEventListeners(sectionId) {
//   const slider = document.getElementById(`shopping_cards-slider-${sectionId}`);
//   if (!slider) {
//       console.error(`Слайдер с ID 'shopping_cards-slider-${sectionId}' не найден.`);
//       return;
//   }

//   const container = slider.querySelector('.shopping_card-list');
//   if (!container) {
//       console.error(`Контейнер с классом 'shopping_card-list' не найден в слайдере с ID 'shopping_cards-slider-${sectionId}'.`);
//       return;
//   }

//   const prevButton = slider.querySelector(`#cardslide-prev-${sectionId}`);
//   const nextButton = slider.querySelector(`#cardslide-next-${sectionId}`);
//   if (!prevButton || !nextButton) {
//       console.error(`Кнопки навигации с ID 'cardslide-prev-${sectionId}' или 'cardslide-next-${sectionId}' не найдены.`);
//       return;
//   }

//   const cardItem = container.querySelector('.shopping_card-item');
//   if (!cardItem) {
//       console.error(`Элемент с классом 'shopping_card-item' не найден в контейнере.`);
//       return;
//   }

//   const cardWidth = cardItem.offsetWidth;

//   prevButton.addEventListener('click', () => {
//       const newScrollPosition = container.scrollLeft - cardWidth;
//       smoothScrollTo(container, newScrollPosition);
//   });

//   nextButton.addEventListener('click', () => {
//       const newScrollPosition = container.scrollLeft + cardWidth;
//       smoothScrollTo(container, newScrollPosition);
//   });

//   container.addEventListener('scroll', () => {
//       clearTimeout(container.scrollTimeout);
//       container.scrollTimeout = setTimeout(() => {
//           const nearestCardPosition = getNearestCardPosition(container, cardWidth);
//           smoothScrollTo(container, nearestCardPosition);
//       }, 100);
//   });
// }

//   // Инициализация слайдера для каждого раздела
//   const sectionIds = ['new-stuff', 'sales', 'discount']; // Замените на свои ID разделов
//   sectionIds.forEach(sectionId => {
//     attachSliderEventListeners(sectionId);
//   });
// });