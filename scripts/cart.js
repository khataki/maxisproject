// document.addEventListener('DOMContentLoaded', function() {
//     var cartModal = document.getElementById('cartModal');
//     var openCartButton = document.getElementById('openCart'); // Кнопка для открытия корзины
//     var closeCartButton = document.getElementById('closeCart'); // Кнопка для закрытия корзины
//     var totalPriceElement = document.querySelector('.total-price');
//     var quantityButtons = document.querySelectorAll('.quantity-btn');
//     var cartItems = document.querySelectorAll('.cart-item');

//     if (openCartButton) {
//         openCartButton.addEventListener('click', function() {
//             cartModal.classList.add('open');
//         });
//     }

//     if (closeCartButton) {
//         closeCartButton.addEventListener('click', function() {
//             cartModal.classList.remove('open');
//         });
//     }

//     window.addEventListener('click', function(event) {
//         if (event.target == cartModal) {
//             cartModal.classList.remove('open');
//         }
//     });

//     function updateTotalPrice() {
//         let total = 0;
//         cartItems.forEach(function(cartItem) {
//             let quantity = parseInt(cartItem.querySelector('.quantity-value').textContent);
//             let unitPrice = parseInt(cartItem.querySelector('.cart-item-price').dataset.unitPrice);
//             total += quantity * unitPrice;
//         });
//         totalPriceElement.textContent = total + 'Р.';
//     }

//     quantityButtons.forEach(function(button) {
//         button.addEventListener('click', function() {
//             let cartItem = button.closest('.cart-item');
//             let quantityElement = cartItem.querySelector('.quantity-value');
//             let quantity = parseInt(quantityElement.textContent);
//             let unitPrice = parseInt(cartItem.querySelector('.cart-item-price').dataset.unitPrice);
//             let priceElement = cartItem.querySelector('.cart-item-price');

//             if (button.classList.contains('decrement') && quantity > 0) {
//                 quantity--;
//             }

//             if (button.classList.contains('increment')) {
//                 quantity++;
//             }

//             quantityElement.textContent = quantity;
//             priceElement.textContent = (quantity * unitPrice) + 'Р.';
//             updateTotalPrice();
//         });
//     });

//     updateTotalPrice(); // Инициализация итоговой суммы при загрузке страницы
// });
