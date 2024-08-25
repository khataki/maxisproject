import { createNewsletter } from './newsletter.js';
import { createHeader } from './header.js';
import { createNav } from './navlist.js';
import { goToCatalogMenu, attachBurgerMenuEventListeners } from '../burgerMenuComponent/burgerMenu.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing components');

    const newsletterContainer = document.getElementById('newsletter');
    const headerContainer = document.getElementById('header');
    const navContainer = document.getElementById('mainNav');

    if (newsletterContainer) {
        newsletterContainer.appendChild(createNewsletter());
        console.log('Newsletter component added');
    } else {
        console.error('Newsletter container not found');
    }

    if (headerContainer) {
        const header = createHeader();
        if (header) {
            headerContainer.appendChild(header);
            console.log('Header component added');
        }
    } else {
        console.error('Header container not found');
    }

    if (navContainer) {
        navContainer.appendChild(createNav());
        console.log('Nav component added');
    } else {
        console.error('Nav container not found');
    }

    // Добавляем бургер-меню в DOM
    goToCatalogMenu();
    attachBurgerMenuEventListeners();
});

document.addEventListener('DOMContentLoaded', () => {
    checkIfMobileAndAddLink();
  });
  
  function checkIfMobileAndAddLink() {
    // Проверка на мобильное устройство
    if (isMobileDevice()) {
      const loginButton = document.getElementById('loginButton');
      
      if (loginButton) {
        // Создаем новый элемент <a>
        const loginLink = document.createElement('a');
        loginLink.href = './loginmobile.html';
        loginLink.style.position = 'absolute'; // Абсолютное позиционирование, чтобы покрыть кнопку
        loginLink.style.top = '0';
        loginLink.style.left = '0';
        loginLink.style.width = '100%';
        loginLink.style.height = '100%';
        loginLink.style.zIndex = '10'; // Убедитесь, что ссылка находится выше кнопки
  
        // Вставляем ссылку внутрь элемента с кнопкой
        loginButton.style.position = 'relative'; // Устанавливаем относительное позиционирование для родителя
        loginButton.appendChild(loginLink);
  
        console.log('Added mobile login link over login button');
      } else {
        console.error('Login button with ID "loginButton" not found');
      }
    }
  }
  
  // Функция для определения мобильного устройства
  function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
  }