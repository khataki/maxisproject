import { items } from './productItemComponent.js';
import { createProductGrid } from './productGridComponent.js';
import { productInfo } from './productInfo.js';

document.addEventListener('DOMContentLoaded', function() {
    const productGridContainer = document.getElementById('productGridContainer');
    const summaryQuantity = document.querySelector('.summary-quantity');
    const summaryPrice = document.querySelector('.summary-price');
    const addToCartButton = document.querySelector('.add-to-cart-button');

    if (!productGridContainer) {
        console.error('Element with ID "productGridContainer" not found');
        return;
    }

    function renderProductGrid() {
        productGridContainer.innerHTML = createProductGrid(items);

        const decrementButtons = document.querySelectorAll('.decrement');
        const incrementButtons = document.querySelectorAll('.increment');

        decrementButtons.forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                if (index !== null) {
                    const item = items[index];
                    if (item.availability) {
                        item.quantity = Math.max(0, item.quantity - 1);
                        updateSummary();
                        renderProductGrid();
                    }
                }
            });
        });

        incrementButtons.forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                if (index !== null) {
                    const item = items[index];
                    if (item.availability) {
                        item.quantity += 1;
                        updateSummary();
                        renderProductGrid();
                    }
                }
            });
        });
    }

    function updateSummary() {
        const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
        summaryQuantity.textContent = `${totalQuantity} шт.`;
        summaryPrice.textContent = `${totalPrice}Р.`;
    }

    function addToCart() {
        items.forEach(item => {
            if (item.quantity > 0) {
                const event = new CustomEvent('addToCart', { detail: { item: { ...item, ...productInfo } } });
                window.dispatchEvent(event);
                item.quantity = 0;
            }
        });
        updateSummary();
        renderProductGrid();
    }

    if (addToCartButton) {
        addToCartButton.addEventListener('click', addToCart);
    } else {
        console.error('Add to cart button not found');
    }

    renderProductGrid();
});
