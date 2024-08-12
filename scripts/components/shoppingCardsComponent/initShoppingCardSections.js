import { createShoppingCardSection } from './shoppingCardsSection.js';
import { createShoppingCard } from '../сardComponent.js'; // Убедитесь, что имя файла правильное
import { items } from '../productItemComponent.js'; // Убедитесь, что у вас есть items

document.addEventListener('DOMContentLoaded', () => {
  console.log('Initializing shopping card sections');

  const sections = [
    { title: 'Новинки', id: 'new-stuff', popupText: 'Новинка' },
    { title: 'Акции', id: 'sales', popupText: 'Акция' },
    { title: 'Распродажа', id: 'discounts', popupText: 'Распродажа' }
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
      shoppingCardContainer.innerHTML = items.map((item, index) => createShoppingCard(item, index, section.id, section.popupText)).join('');
      console.log(`Added items to section: ${section.title}`);
      
      if (window.innerWidth <= 768) { // Проверка ширины экрана для мобильной версии
        generateSliderRounds(section.id, items.length);
      }
      
      // Добавляем обработчики событий после добавления карточек
      attachCardEventListeners();
      addScrollEventListeners(section.id);
      addFixCardClass(section.id);
    } else {
      console.error(`Container for section ${section.id} not found`);
    }
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

function generateSliderRounds(sectionId, itemCount) {
  const sliderRounds = document.getElementById(`sliderRounds-${sectionId}`);
  if (!sliderRounds) {
    console.error(`Slider rounds container for section ${sectionId} not found`);
    return;
  }

  for (let i = 0; i < itemCount; i++) {
    const round = document.createElement('div');
    round.className = 'slider-round';
    round.dataset.index = i;
    if (i === 0) round.classList.add('active'); // Первоначально активный круг
    sliderRounds.appendChild(round);
  }
}

function addScrollEventListeners(sectionId) {
  const slider = document.getElementById(`shopping_cards-slider-${sectionId}`);
  if (!slider) {
    console.error(`Slider for section ${sectionId} not found`);
    return;
  }

  const prevButton = slider.querySelector('.cardslide-prev');
  const nextButton = slider.querySelector('.cardslide-next');
  const container = document.getElementById(`shoppingCardContainer-${sectionId}`);
  const rounds = document.querySelectorAll(`#sliderRounds-${sectionId} .slider-round`);
  let currentIndex = 0;

  if (prevButton && nextButton && container) {
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + rounds.length) % rounds.length;
      updateSliderPosition(container, currentIndex);
      updateSliderRounds(rounds, currentIndex);
    });

    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % rounds.length;
      updateSliderPosition(container, currentIndex);
      updateSliderRounds(rounds, currentIndex);
    });

    container.addEventListener('scroll', () => {
      const nearestIndex = Math.round(container.scrollLeft / container.clientWidth);
      currentIndex = nearestIndex;
      updateSliderRounds(rounds, currentIndex);
    });
  } else {
    console.error(`Error adding scroll event listeners for section ${sectionId}`);
  }
}

function updateSliderPosition(container, index) {
  const cardWidth = container.clientWidth;
  const newPosition = index * cardWidth;
  container.scrollTo({ left: newPosition, behavior: 'smooth' });
}

function addFixCardClass(sectionId) {
  const container = document.getElementById(`shoppingCardContainer-${sectionId}`);
  if (!container) {
    console.error(`Container for section ${sectionId} not found`);
    return;
  }
  const cards = container.querySelectorAll('.shopping_card-item .shopping_card-image');
  cards.forEach(card => {
    card.classList.add('fix-card');
  });
}

function updateSliderRounds(rounds, index) {
  rounds.forEach((round, i) => {
    round.classList.toggle('active', i === index);
  });
}