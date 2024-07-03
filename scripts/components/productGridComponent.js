export function createProductGrid(items) {
    return `
        <div class="product-grid">
            <div class="product-grid-header size">Размер</div>
            <div class="product-grid-header availability-title">В наличии</div>
            <div class="product-grid-header quantity">Количество</div>
            <div class="product-grid-header color">Цвет</div>
            <div class="product-grid-header price">Цена</div>
            ${items.map((item, index) => `
                <div class="product-grid-item size">${item.size}</div>
                <div class="product-grid-item availability ${item.availability ? '' : 'unavailable'}">${item.availability ? 'В наличии' : 'Отсутствует'}</div>
                <div class="product-grid-item quantity ${item.availability ? '' : 'unavailable'}">
                    <span class="decrement" data-index="${index}">＜</span>
                    <span class="quantity-value">${item.quantity}</span>
                    <span class="increment" data-index="${index}">＞</span>
                </div>
                <div class="product-grid-item color ${item.availability ? '' : 'unavailable'}">
                    <span class="decrement-color" data-index="${index}">＜</span>
                    <span class="color-value">${item.colors[0]}</span>
                    <span class="increment-color" data-index="${index}">＞</span>
                </div>
                <div class="product-grid-item price ${item.availability ? '' : 'unavailable'}">${item.price}Р.</div>
            `).join('')}
        </div>
    `;
}
