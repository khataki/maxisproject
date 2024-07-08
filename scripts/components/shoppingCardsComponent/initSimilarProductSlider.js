import { createShoppingCardSection } from '../shoppingCardsComponent/shoppingCardsSection.js';
import { createShoppingCard } from '../сardComponent.js'; // Убедитесь, что путь правильный
import { items } from '../productItemComponent.js'; // Убедитесь, что путь правильный

document.addEventListener('DOMContentLoaded', () => {
  const similarProductsContainer = document.getElementById('similar-products-container');

  if (!similarProductsContainer) {
    console.error('Element with ID "similar-products-container" not found');
    return;
  }

  const section = createShoppingCardSection('Похожие товары', 'similar-products');
  similarProductsContainer.appendChild(section);

  const shoppingCardContainer = document.getElementById('shoppingCardContainer-similar-products');
  if (shoppingCardContainer) {
    shoppingCardContainer.innerHTML = items.map((item, index) => createShoppingCard(item, index)).join('');
    attachScrollEventListeners('similar-products');
  } else {
    console.error('Container for similar products not found');
  }
});

function attachScrollEventListeners(sectionId) {
    try {
      const slider = document.getElementById(`shopping_cards-slider-${sectionId}`);
      if (!slider) {
        console.error(`Slider for section ${sectionId} not found`);
        return;
      }
      
      const prevButton = slider.querySelector('.cardslide-prev');
      const nextButton = slider.querySelector('.cardslide-next');
      const container = document.getElementById(`shoppingCardContainer-${sectionId}`);
  
      if (prevButton && nextButton && container) {
        prevButton.addEventListener('click', () => {
          container.scrollBy({ left: -300, behavior: 'smooth' });
        });
  
        nextButton.addEventListener('click', () => {
          container.scrollBy({ left: 300, behavior: 'smooth' });
        });
  
        console.log(`Scroll event listeners added for section ${sectionId}`);
      } else {
        console.error(`Error adding scroll event listeners for section ${sectionId}`);
      }
    } catch (error) {
      console.error(`Error adding scroll event listeners for section ${sectionId}:`, error);
    }
  }
  
