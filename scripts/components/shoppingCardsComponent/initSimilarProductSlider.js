import { createShoppingCardSection } from '../shoppingCardsComponent/shoppingCardsSection.js';
import { createShoppingCard } from '../сardComponent.js';
import { items } from '../productItemComponent.js';

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
    generateSliderRounds('similar-products', items.length);
  } else {
    console.error('Container for similar products not found');
  }
});

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

function attachScrollEventListeners(sectionId) {
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

  addFixCardClass();
}

function updateSliderPosition(container, index) {
  const cardWidth = container.clientWidth;
  const newPosition = index * cardWidth;
  container.scrollTo({ left: newPosition, behavior: 'smooth' });
}

function updateSliderRounds(rounds, index) {
  rounds.forEach((round, i) => {
    round.classList.toggle('active', i === index);
  });
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

