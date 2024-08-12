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