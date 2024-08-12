import { createBurgerMenu, goToCatalogMenu, attachBurgerMenuEventListeners } from './burgerMenu.js';

document.addEventListener('DOMContentLoaded', () => {
    createBurgerMenu();
    goToCatalogMenu();
    attachBurgerMenuEventListeners();
});

