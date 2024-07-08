// main.js

import { createCategoriesComponent } from './categoriesComponent.js';

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('yourContainerId');
    if (container) {
        container.innerHTML = createCategoriesComponent();
    } else {
        console.error('Container with specified ID not found.');
    }
});

