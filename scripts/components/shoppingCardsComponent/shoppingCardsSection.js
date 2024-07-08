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
  `;
  return section;
}
