export const cities = [
    { name: 'Казань', deliveryTime: '16 рабочих дней', freePickup: true, minOrderForFreeDelivery: 10000 },
    { name: 'Москва', deliveryTime: '10 рабочих дней', freePickup: true, minOrderForFreeDelivery: 15000 },
    { name: 'Санкт-Петербург', deliveryTime: '12 рабочих дней', freePickup: true, minOrderForFreeDelivery: 12000 },
    { name: 'Новосибирск', deliveryTime: '18 рабочих дней', freePickup: true, minOrderForFreeDelivery: 11000 },
    { name: 'Екатеринбург', deliveryTime: '14 рабочих дней', freePickup: true, minOrderForFreeDelivery: 10000 },
    { name: 'Нижний Новгород', deliveryTime: '15 рабочих дней', freePickup: true, minOrderForFreeDelivery: 9000 },
    { name: 'Челябинск', deliveryTime: '16 рабочих дней', freePickup: true, minOrderForFreeDelivery: 9500 },
    { name: 'Самара', deliveryTime: '17 рабочих дней', freePickup: true, minOrderForFreeDelivery: 10500 },
    { name: 'Ростов-на-Дону', deliveryTime: '13 рабочих дней', freePickup: true, minOrderForFreeDelivery: 11000 },
    { name: 'Уфа', deliveryTime: '15 рабочих дней', freePickup: true, minOrderForFreeDelivery: 10000 },
    { name: 'Красноярск', deliveryTime: '20 рабочих дней', freePickup: true, minOrderForFreeDelivery: 11500 },
    { name: 'Пермь', deliveryTime: '16 рабочих дней', freePickup: true, minOrderForFreeDelivery: 9000 },
    { name: 'Волгоград', deliveryTime: '14 рабочих дней', freePickup: true, minOrderForFreeDelivery: 9500 },
    { name: 'Воронеж', deliveryTime: '13 рабочих дней', freePickup: true, minOrderForFreeDelivery: 10000 },
    { name: 'Саратов', deliveryTime: '15 рабочих дней', freePickup: true, minOrderForFreeDelivery: 10500 },
    { name: 'Краснодар', deliveryTime: '14 рабочих дней', freePickup: true, minOrderForFreeDelivery: 10000 },
    { name: 'Тюмень', deliveryTime: '16 рабочих дней', freePickup: true, minOrderForFreeDelivery: 9500 },
    { name: 'Ижевск', deliveryTime: '17 рабочих дней', freePickup: true, minOrderForFreeDelivery: 9000 },
    { name: 'Барнаул', deliveryTime: '19 рабочих дней', freePickup: true, minOrderForFreeDelivery: 10500 },
    { name: 'Ульяновск', deliveryTime: '15 рабочих дней', freePickup: true, minOrderForFreeDelivery: 10000 },
    { name: 'Иркутск', deliveryTime: '21 рабочих дней', freePickup: true, minOrderForFreeDelivery: 11000 },
    { name: 'Томск', deliveryTime: '18 рабочих дней', freePickup: true, minOrderForFreeDelivery: 10000 },
    { name: 'Кемерово', deliveryTime: '17 рабочих дней', freePickup: true, minOrderForFreeDelivery: 9500 },
    { name: 'Новокузнецк', deliveryTime: '19 рабочих дней', freePickup: true, minOrderForFreeDelivery: 10500 },
    { name: 'Рязань', deliveryTime: '14 рабочих дней', freePickup: true, minOrderForFreeDelivery: 9000 },
    { name: 'Астрахань', deliveryTime: '20 рабочих дней', freePickup: true, minOrderForFreeDelivery: 11000 },
    { name: 'Пенза', deliveryTime: '15 рабочих дней', freePickup: true, minOrderForFreeDelivery: 10000 },
    { name: 'Тула', deliveryTime: '13 рабочих дней', freePickup: true, minOrderForFreeDelivery: 9500 },
    { name: 'Липецк', deliveryTime: '15 рабочих дней', freePickup: true, minOrderForFreeDelivery: 9000 },
    { name: 'Киров', deliveryTime: '17 рабочих дней', freePickup: true, minOrderForFreeDelivery: 9500 },
    { name: 'Чебоксары', deliveryTime: '16 рабочих дней', freePickup: true, minOrderForFreeDelivery: 10000 },
    { name: 'Курск', deliveryTime: '14 рабочих дней', freePickup: true, minOrderForFreeDelivery: 9000 },
    { name: 'Ставрополь', deliveryTime: '18 рабочих дней', freePickup: true, minOrderForFreeDelivery: 10500 },
    { name: 'Магнитогорск', deliveryTime: '19 рабочих дней', freePickup: true, minOrderForFreeDelivery: 11000 },
    { name: 'Тверь', deliveryTime: '13 рабочих дней', freePickup: true, minOrderForFreeDelivery: 9500 },
    { name: 'Брянск', deliveryTime: '15 рабочих дней', freePickup: true, minOrderForFreeDelivery: 9000 },
    { name: 'Белгород', deliveryTime: '14 рабочих дней', freePickup: true, minOrderForFreeDelivery: 9500 },
    { name: 'Сочи', deliveryTime: '17 рабочих дней', freePickup: true, minOrderForFreeDelivery: 10000 },
    { name: 'Мурманск', deliveryTime: '20 рабочих дней', freePickup: true, minOrderForFreeDelivery: 11000 },
    { name: 'Владивосток', deliveryTime: '25 рабочих дней', freePickup: true, minOrderForFreeDelivery: 12000 },
    { name: 'Архангельск', deliveryTime: '22 рабочих дней', freePickup: true, minOrderForFreeDelivery: 11500 },
    { name: 'Калининград', deliveryTime: '18 рабочих дней', freePickup: true, minOrderForFreeDelivery: 10000 },
];


export let selectedCity = cities[0]; // По умолчанию выбран первый город

export function createCitySelect() {
    return `
        <div class="city-select">
            <button class="city-select-button">${selectedCity.name}<i class="fa-solid fa-chevron-down"></i></button>
            <div class="city-select-dropdown">
                ${cities.map(city => `
                    <div class="city-select-option" data-city="${city.name}">
                        ${city.name}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

export function attachCitySelectEventListeners() {
    const citySelectButton = document.querySelector('.city-select-button');
    const citySelectDropdown = document.querySelector('.city-select-dropdown');
    const citySelectOptions = document.querySelectorAll('.city-select-option');

    if (!citySelectButton || !citySelectDropdown || !citySelectOptions) {
        console.error('City select elements not found in DOM');
        return;
    }

    citySelectButton.addEventListener('click', () => {
        citySelectDropdown.classList.toggle('open');
    });

    citySelectOptions.forEach(option => {
        option.addEventListener('click', (event) => {
            const cityName = event.target.getAttribute('data-city');
            selectedCity = cities.find(city => city.name === cityName);
            updateDeliveryInfo();
            citySelectDropdown.classList.remove('open');
            citySelectButton.innerHTML = `${selectedCity.name} <i class="fa-solid fa-chevron-down"></i>`;
        });
    });
}

export function updateDeliveryInfo() {
    // Обновить информацию о доставке на основе выбранного города
    document.querySelector('.delivery-time').textContent = selectedCity.deliveryTime;
    document.querySelector('.min-order-for-free-delivery').textContent = `Бесплатно при заказе от ${selectedCity.minOrderForFreeDelivery} Р.`;
}

export function createDeliveryInfo() {
    return `
        <div class="delivery-info">
            <h2>Доставка в ${createCitySelect()}</h2>
            <div class="delivery-option">
                <p>В пунктах выдачи – бесплатно</p>
                <p class="show-pickup-points">Показать пункты выдачи</p>
            </div>
            <div class="delivery-option">
                <p class="min-order-for-free-delivery">Бесплатно при заказе от ${selectedCity.minOrderForFreeDelivery} Р.</p>
                <p class="delivery-time">${selectedCity.deliveryTime}</p>
            </div>
            <div class="delivery-option">
                <p>Бесплатный обмен и удобный возврат</p>
                <p class="return-policy">Без вопросов и проблем возьмем товар обратно</p>
            </div>
        </div>
    `;
}
