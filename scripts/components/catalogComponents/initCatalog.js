// initCatalog.js
import { createCatalogSection } from './catalogComponent.js';
import { createAdditionalLinks } from './additionalLinks.js';
import { categoriesData } from '../categories/categoriesData.js'; // Импортируем данные категорий

const categoriesConfig = {
  title: 'КАТЕГОРИИ',
  categories: categoriesData.map(category => ({
    name: category.title,
    link: category.href,
    imageSrc: category.img // Используем svg как источник изображения
  }))
};

document.addEventListener('DOMContentLoaded', () => {
  const mainContainer = document.querySelector('main');
  if (!mainContainer) {
    console.error('Main container not found');
    return;
  }

  // Добавляем секцию категорий в начало main контейнера
  mainContainer.insertAdjacentHTML('afterbegin', createAdditionalLinks(categoriesConfig));

  // Инициализируем секцию каталога
  createCatalogSection('cards__container');
});
