import { createShoppingCard } from '../сardComponent.js';
import { items } from '../productItemComponent.js';
import { productInfo } from '../productInfo.js';

export function createCatalogSection(containerId) {
  console.log('Initializing catalog section');
  const catalogContainer = document.getElementById(containerId);

  if (!catalogContainer) {
    console.error(`Element with ID "${containerId}" not found`);
    return;
  }

  console.log('Catalog container found', catalogContainer);

  if (!items || items.length === 0) {
    console.error('Items array is empty or not found');
    return;
  }

  console.log('Items to be added:', items);

  catalogContainer.innerHTML = items.map((item, index) => createShoppingCard(item, index)).join('');

  console.log('Cards added to container');

  attachCardEventListeners();
}

function attachCardEventListeners() {
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
      modalFastView.classList.add('open-fastview');
    });
  });

  const colorOptions = document.querySelectorAll('.color-option');
  colorOptions.forEach(option => {
    option.addEventListener('click', function() {
      const itemIndex = this.getAttribute('data-index');
      const color = this.getAttribute('data-color') || 'default'; // Use 'default' if color is null
      const mainImage = document.querySelector(`.shopping_card-item[data-index="${itemIndex}"] .main-image`);
      const hoverImage = document.querySelector(`.shopping_card-item[data-index="${itemIndex}"] .hover-image`);
      
      console.log(`Color option clicked for item index: ${itemIndex}, color: ${color}`);
      console.log('Main image element:', mainImage);
      console.log('Hover image element:', hoverImage);
      console.log('Product info images for color:', productInfo.mainImages[color]);

      if (mainImage && hoverImage && productInfo.mainImages[color]) {
        mainImage.src = productInfo.mainImages[color][0];
        hoverImage.src = productInfo.mainImages[color][1];
        console.log(`Changed images for item index: ${itemIndex} to color: ${color}`);
      } else {
        console.error('Main image or hover image not found for item index:', itemIndex);
      }
    });
  });
}
