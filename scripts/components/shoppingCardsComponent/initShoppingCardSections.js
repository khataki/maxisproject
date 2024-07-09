import { createShoppingCardSection } from './shoppingCardsSection.js';
import { createShoppingCard } from '../сardComponent.js'; // Убедитесь, что имя файла правильное
import { items } from '../productItemComponent.js'; // Убедитесь, что у вас есть items

document.addEventListener('DOMContentLoaded', () => {
  console.log('Initializing shopping card sections');

  const sections = [
    { title: 'Новинки', id: 'new-stuff' },
    { title: 'Акции', id: 'sales' },
    { title: 'Распродажа', id: 'discounts' }
  ];

  const mainContent = document.getElementById('main-content'); // Контейнер, куда будем добавлять секции

  if (!mainContent) {
    console.error('Element with ID "main-content" not found');
    return;
  }

  sections.forEach(section => {
    const shoppingCardSection = createShoppingCardSection(section.title, section.id);
    mainContent.appendChild(shoppingCardSection);
    console.log(`Added section: ${section.title}`);
    
    // Добавляем карточки товаров в соответствующую секцию
    const shoppingCardContainer = document.getElementById(`shoppingCardContainer-${section.id}`);
    if (shoppingCardContainer) {
      shoppingCardContainer.innerHTML = items.map((item, index) => createShoppingCard(item, index)).join('');
    } else {
      console.error(`Container for section ${section.id} not found`);
    }

    // Добавляем обработчики событий для изменения изображения при наведении и быстрого просмотра
    attachCardEventListeners();

    // Добавляем обработчики событий для кнопок прокрутки
    addScrollEventListeners(section.id);
  });
});

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
      // Заполните данные модального окна здесь на основе itemIndex
      modalFastView.classList.add('open-fastview');
    });
  });
}

function addScrollEventListeners(sectionId) {
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
