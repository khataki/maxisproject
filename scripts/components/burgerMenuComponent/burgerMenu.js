export function goToCatalogMenu() {
    const catalogMenu = document.createElement('div');
    catalogMenu.classList.add('catalog-mobile-data-burger');
    catalogMenu.innerHTML = `
        <h2 class="categories-mobile-title">Категории</h2>
        <ul class="categories-mobile-ul">
            <li class="categories-mobile-li">
                Мужской ассортимент
                <i class="fa-solid fa-chevron-down toggle-icon"></i>
                <ul class="subcategories-mobile-ul">
                    <li><a href="/public/catalog.html">Футболки</a></li>
                    <li><a href="/public/catalog.html">Рубашки</a></ли>
                    <ли><а href="/public/catalog.html">Брюки</а></ли>
                </ul>
            </ли>
            <ли class="categories-mobile-li">
                Женский ассортимент
                <и class="fa-solid fa-chevron-down toggle-icon"></и>
                <ул class="subcategories-mobile-ul">
                    <ли><а href="/public/catalog.html">Футболки</а></ли>
                    <ли><а href="/public/catalog.html">Рубашки</а></ли>
                    <ли><а href="/public/catalog.html">Брюки</а></ли>
                </ул>
            </ли>
            <ли class="categories-mobile-ли">
                Платья
                <и class="fa-solid fa-chevron-down toggle-icon"></и>
                <ул class="subcategories-mobile-ul">
                    <ли><а href="/public/catalog.html">Летние платья</а></ли>
                    <ли><а href="/public/catalog.html">Вечерние платья</а></ли>
                    <ли><а href="/public/catalog.html">Коктейльные платья</а></ли>
                </ул>
            </ли>
            <ли class="categories-mobile-ли">
                Футболки и блузки
                <и class="fa-solid fa-chevron-down toggle-icon"></и>
                <ул class="subcategories-mobile-ul">
                    <ли><а href="/public/catalog.html">Футболки</а></ли>
                    <ли><а href="/public/catalog.html">Блузки</а></ли>
                    <ли><а href="/public/catalog.html">Поло</а></ли>
                </ул>
            </ли>
            <ли class="categories-mobile-ли">
                Комплекты и пижамы
                <и class="fa-solid fa-chevron-down toggle-icon"></и>
                <ул class="subcategories-mobile-ul">
                    <ли><а href="/public/catalog.html">Спортивные комплекты</а></ли>
                    <ли><а href="/public/catalog.html">Домашние комплекты</а></ли>
                    <ли><а href="/public/catalog.html">Пижамные комплекты</а></ли>
                </ул>
            </ли>
            <ли class="categories-mobile-ли">
                Детский ассортимент
                <и class="fa-solid fa-chevron-down toggle-icon"></и>
                <ул class="subcategories-mobile-ul">
                    <ли><а href="/public/catalog.html">Пижамы</а></ли>
                    <ли><а href="/public/catalog.html">Одежда для девочек</а></ли>
                    <ли><а href="/public/catalog.html">Одежда для мальчиков</а></ли>
                </ул>
            </ли>
            <ли class="categories-mobile-ли">
                Мусульманский ассортимент
                <и class="fa-solid fa-chevron-down toggle-icon"></и>
                <ул class="subcategories-mobile-ul">
                    <ли><а href="/public/catalog.html">Платья</а></ли>
                    <ли><а href="/public/catalog.html">Костюмы</а></ли>
                    <ли><а href="/public/catalog.html">Туники</а></ли>
                </ул>
            </ли>
        </ул>
    `;
    document.body.appendChild(catalogMenu);
}

export function attachBurgerMenuEventListeners() {
    const burgerButton = document.getElementById('burgerMenuButton');
    const burgerMenu = document.getElementById('catalogMobileBurger');
    const catalogBurgerButton = document.getElementById('catalogMobileBurger');
    const burgerCatalogMenu = document.querySelector('.catalog-mobile-data-burger');

    console.log('burgerButton:', burgerButton);
    console.log('burgerMenu:', burgerMenu);
    console.log('catalogBurgerButton:', catalogBurgerButton);
    console.log('burgerCatalogMenu:', burgerCatalogMenu);

    if (burgerButton && burgerMenu) {
        burgerButton.addEventListener('click', () => {
            burgerMenu.classList.toggle('open');
            burgerButton.classList.toggle('open');
            document.body.classList.toggle('no-scroll', burgerMenu.classList.contains('open'));
            console.log('Burger button clicked');
        });

        document.addEventListener('click', (event) => {
            if (!burgerMenu.contains(event.target) && !burgerButton.contains(event.target)) {
                burgerMenu.classList.remove('open');
                burgerButton.classList.remove('open');
                document.body.classList.remove('no-scroll');
                console.log('Document clicked, closing menu');
            }
        });
    } else {
        console.error('Burger button or menu not found');
    }

    if (catalogBurgerButton && burgerCatalogMenu) {
        catalogBurgerButton.addEventListener('click', () => {
            burgerCatalogMenu.classList.toggle('open');
            document.body.classList.toggle('no-scroll', burgerCatalogMenu.classList.contains('open'));
            burgerMenu.classList.remove('open');
            burgerButton.classList.remove('open');
            console.log('Catalog burger button clicked');
        });

        document.addEventListener('click', (event) => {
            if (!burgerCatalogMenu.contains(event.target) && !catalogBurgerButton.contains(event.target)) {
                burgerCatalogMenu.classList.remove('open');
                document.body.classList.remove('no-scroll');
                console.log('Document clicked, closing catalog menu');
            }
        });
    } else {
        console.error('Catalog burger button or menu not found');
    }

    document.querySelectorAll('.categories-mobile-li').forEach(category => {
        category.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent event from bubbling up to document
            const subcategories = category.querySelector('.subcategories-mobile-ul');
            if (subcategories) {
                subcategories.classList.toggle('open');
                subcategories.style.maxHeight = subcategories.classList.contains('open') ? subcategories.scrollHeight + 'px' : '0';
                category.querySelector('.toggle-icon').classList.toggle('rotate');
                console.log('Category clicked');
            }
        });
    });
}