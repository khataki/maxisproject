export function createNav() {
  const nav = document.createElement('nav');
  nav.classList.add('main-nav');
  nav.innerHTML = `
    <ul class="nav-list">
    <div class= "other_nav-stuff-container">
      <li class="nav-list__item catalog-container">
        <p class="nav-list__link" id="catalog-link">Каталог <i class="fa-solid fa-bars"></i></p>
      </li>
      <li class="nav-list__item"><a class="nav-list__link" id="sale-link" href="#">Распродажа</a></li>
      <li class="nav-list__item"><a class="nav-list__link ajax-link" id="about-link" href="#new-stuff">Новинки</a></li>
      <li class="nav-list__item"><a class="nav-list__link" id="payment-link" href="/public/payanddelivery.html">Оплата и доставка</a></li>
      <li class="nav-list__item"><a class="nav-list__link ajax-link" id="aboutus-link" href="/public/index.html#aboutus">О нас</a></li>
      <li class="nav-list__item"><a class="nav-list__link" id="contacts-link" href="/public/contact.html">Контакты</a></li>
    </div>
    </ul>
    <div id="categoriesList" class="categories-list">
  <ul class="categories-list__ul">
    <li class="categories-list__li">
      <a class="category-link" href="catalog.html">Нижнее бельё</a>
      <div class="subcategories-list">
        <ul>
          <li><a class="subcategory-link" href="catalog.html">Трусы</a></li>
          <li><a class="subcategory-link" href="catalog.html">Носки</a></li>
          <li><a class="subcategory-link" href="catalog.html">Майки</a></li>
        </ul>
      </div>
    </li>
    <li class="categories-list__li">
      <a class="category-link" href="catalog.html">Платья</a>
      <div class="subcategories-list">
        <ul>
          <li><a class="subcategory-link" href="catalog.html">Летние платья</a></li>
          <li><a class="subcategory-link" href="catalog.html">Вечерние платья</a></li>
          <li><a class="subcategory-link" href="catalog.html">Коктейльные платья</a></li>
        </ul>
      </div>
    </li>
    <li class="categories-list__li">
      <a class="category-link" href="catalog.html">Туники и футболки</a>
      <div class="subcategories-list">
        <ul>
          <li><a class="subcategory-link" href="catalog.html">Футболки</a></li>
          <li><a class="subcategory-link" href="catalog.html">Блузки</a></li>
          <li><a class="subcategory-link" href="catalog.html">Поло</a></li>
        </ul>
      </div>
    </li>
    <li class="categories-list__li">
      <a class="category-link" href="catalog.html">Халаты</a>
      <div class="subcategories-list">
        <ul>
          <li><a class="subcategory-link" href="catalog.html">Домашние халаты</a></li>
          <li><a class="subcategory-link" href="catalog.html">Банные халаты</a></li>
          <li><a class="subcategory-link" href="catalog.html">Медицинские халаты</a></li>
        </ul>
      </div>
    </li>
    <li class="categories-list__li">
      <a class="category-link" href="catalog.html">Пеньюары и сорочки</a>
      <div class="subcategories-list">
        <ul>
          <li><a class="subcategory-link" href="catalog.html">Пеньюары</a></li>
          <li><a class="subcategory-link" href="catalog.html">Сорочки</a></li>
          <li><a class="subcategory-link" href="catalog.html">Комплекты для сна</a></li>
        </ul>
      </div>
    </li>
    <li class="categories-list__li">
      <a class="category-link" href="catalog.html">Сарафаны</a>
      <div class="subcategories-list">
        <ul>
          <li><a class="subcategory-link" href="catalog.html">Летние туники</a></li>
          <li><a class="subcategory-link" href="catalog.html">Теплые туники</a></li>
          <li><a class="subcategory-link" href="catalog.html">Медицинские туники</a></li>
        </ul>
      </div>
    </li>
    <li class="categories-list__li">
      <a class="category-link" href="catalog.html">Пижамы и комплекты</a>
      <div class="subcategories-list">
        <ul>
          <li><a class="subcategory-link" href="catalog.html">Спортивные комплекты</a></li>
          <li><a class="subcategory-link" href="catalog.html">Домашние комплекты</a></li>
          <li><a class="subcategory-link" href="catalog.html">Пижамные комплекты</a></li>
        </ul>
      </div>
    </li>
    <li class="categories-list__li">
      <a class="category-link" href="catalog.html">Бриджи, лосины, шорты</a>
      <div class="subcategories-list">
        <ul>
          <li><a class="subcategory-link" href="catalog.html">Бриджи</a></li>
          <li><a class="subcategory-link" href="catalog.html">Лосины</a></li>
          <li><a class="subcategory-link" href="catalog.html">Шорты</a></li>
        </ul>
      </div>
    </li>
    <li class="categories-list__li">
      <a class="category-link" href="catalog.html">Мусульманский ассортимент</a>
      <div class="subcategories-list">
        <ul>
          <li><a class="subcategory-link" href="catalog.html">Платья</a></li>
          <li><a class="subcategory-link" href="catalog.html">Костюмы</a></li>
          <li><a class="subcategory-link" href="catalog.html">Туники</a></li>
        </ul>
      </div>
    </li>
    <li class="categories-list__li">
      <a class="category-link" href="catalog.html">Мужской ассортимент</a>
      <div class="subcategories-list">
        <ul>
          <li><a class="subcategory-link" href="catalog.html">Футболки</a></li>
          <li><a class="subcategory-link" href="catalog.html">Рубашки</a></li>
          <li><a class="subcategory-link" href="catalog.html">Брюки</a></li>
        </ul>
      </div>
    </li>
  </ul>
</div>
  `;

  document.body.appendChild(nav);

  const catalogLink = nav.querySelector('#catalog-link');
  const categoriesList = nav.querySelector('#categoriesList');

  catalogLink.addEventListener('click', (event) => {
    event.stopPropagation();
    categoriesList.classList.toggle('show');
    if (categoriesList.classList.contains('show')) {
      catalogLink.innerHTML = 'Каталог <i class="fa-solid fa-times"></i>';
    } else {
      catalogLink.innerHTML = 'Каталог <i class="fa-solid fa-bars"></i>';
    }
  });

  document.addEventListener('click', (event) => {
    if (!categoriesList.contains(event.target) && !catalogLink.contains(event.target)) {
      if (categoriesList.classList.contains('show')) {
        categoriesList.classList.remove('show');
        catalogLink.innerHTML = 'Каталог <i class="fa-solid fa-bars"></i>';
      }
    }
  });

  return nav;
}