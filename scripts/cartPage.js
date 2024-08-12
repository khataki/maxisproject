import { productInfo } from './components/productInfo.js';

document.addEventListener('DOMContentLoaded', function() {


    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const totalPriceElement = document.getElementById('totalPrice');
    const checkoutButton = document.getElementById('checkoutButton');

    const cartItems = [
        { title: 'Платье вечернее', code: '001', size: 48, color: 'Зеленый', quantity: 1, price: 1500, imageSrc: productInfo.mainImages[0] },
        { title: 'Костюм деловой', code: '002', size: 50, color: 'Синий', quantity: 2, price: 2000, imageSrc: productInfo.mainImages[1] },
        { title: 'Блузка офисная', code: '003', size: 46, color: 'Красный', quantity: 1, price: 1600, imageSrc: productInfo.mainImages[2] },
        { title: 'Юбка карандаш', code: '004', size: 48, color: 'Желтый', quantity: 3, price: 1400, imageSrc: productInfo.mainImages[3] },
        { title: 'Платье летнее', code: '005', size: 50, color: 'Белый', quantity: 2, price: 1300, imageSrc: productInfo.mainImages[4] },
        { title: 'Жакет теплый', code: '006', size: 52, color: 'Серый', quantity: 1, price: 2200, imageSrc: productInfo.mainImages[5] },
        { title: 'Брюки классические', code: '007', size: 54, color: 'Черный', quantity: 2, price: 1800, imageSrc: productInfo.mainImages[6] },
        { title: 'Свитер зимний', code: '008', size: 56, color: 'Синий', quantity: 1, price: 2100, imageSrc: productInfo.mainImages[7] },
        { title: 'Пальто демисезонное', code: '009', size: 58, color: 'Бежевый', quantity: 1, price: 3000, imageSrc: productInfo.mainImages[8] },
        { title: 'Рубашка повседневная', code: '010', size: 60, color: 'Зеленый', quantity: 3, price: 1200, imageSrc: productInfo.mainImages[9] },
        { title: 'Футболка спортивная', code: '011', size: 62, color: 'Красный', quantity: 2, price: 900, imageSrc: productInfo.mainImages[10] },
        { title: 'Куртка осенняя', code: '012', size: 48, color: 'Коричневый', quantity: 1, price: 2500, imageSrc: productInfo.mainImages[11] }
    ];

    function renderCartItems() {
        cartItemsContainer.innerHTML = '';
        cartItems.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${item.imageSrc}" alt="${item.title}" class="cart-item-image"></td>
                <td><a class="table-link" href="/public/productcard.html">${item.title}</a></td>
                <td>${item.code}</td>
                <td>${item.size}</td>
                <td>${item.color}</td>
                <td>
                    <button class="quantity-btn decrement" data-index="${index}">-</button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn increment" data-index="${index}">+</button>
                </td>
                <td>${item.price}Р.</td>
                <td><button class="delete-btn" data-index="${index}">Удалить</button></td>
            `;
            cartItemsContainer.appendChild(row);
        });

        attachEventListeners();
        updateTotalPrice();
    }

    function attachEventListeners() {
        document.querySelectorAll('.quantity-btn.decrement').forEach(button => {
            button.addEventListener('click', handleDecrementClick);
        });

        document.querySelectorAll('.quantity-btn.increment').forEach(button => {
            button.addEventListener('click', handleIncrementClick);
        });

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', handleDeleteClick);
        });

        checkoutButton.addEventListener('click', handleCheckout);
    }

    function handleDecrementClick(event) {
        const index = parseInt(event.target.getAttribute('data-index'), 10);
        if (cartItems[index].quantity > 1) {
            cartItems[index].quantity--;
        } else {
            cartItems.splice(index, 1);
        }
        renderCartItems();
    }

    function handleIncrementClick(event) {
        const index = parseInt(event.target.getAttribute('data-index'), 10);
        cartItems[index].quantity++;
        renderCartItems();
    }

    function handleDeleteClick(event) {
        const index = parseInt(event.target.getAttribute('data-index'), 10);
        cartItems.splice(index, 1);
        renderCartItems();
    }

    function updateTotalPrice() {
        const total = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
        totalPriceElement.textContent = `${total}Р.`;
    }

    function handleCheckout() {
        alert('Заказ оформлен!');
    }

    renderCartItems();
});
