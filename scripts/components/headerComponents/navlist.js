export function createNav() {
  const nav = document.createElement('nav');
  nav.classList.add('main-nav');
  nav.innerHTML = `
  <ul class="nav-list">
    <li class="nav-list__item search-container">
      <svg class="icon" fill="#000000" viewBox="0 0 30 30" enable-background="new 0 0 30 30" id="Glyph" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14 s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0 C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z" id="XMLID_223_"></path>
      </svg>
      <input class="search" placeholder="Поиск..." />
    </li>
    <li class="nav-list__item catalog-container">
      <a class="nav-list__link ajax-link" id="catalog-link" href="/public/catalog.html">Кaтaлог</a>
      <div id="categoriesList" class="categories-list hidden">
        <ul class="categories-list__ul">
          <li class="categories-list__li">
            <a class="category-link" id="male-link" href="catalog.html">Мужской aссортимент</a>
            <div class="subcategories-list hidden" id="male-subcategories">
              <ul>
                <li><a class="subcategory-link" href="catalog.html">Футболки</a></li>
                <li><a class="subcategory-link" href="catalog.html">Рубашки</a></li>
                <li><a class="subcategory-link" href="catalog.html">Брюки</a></li>
              </ul>
            </div>
          </li>
          <li class="categories-list__li">
            <a class="category-link" id="dresses-link" href="catalog.html">Плaтья</a>
            <div class="subcategories-list hidden" id="dresses-subcategories">
              <ul>
                <li><a class="subcategory-link" href="catalog.html">Летние платья</a></li>
                <li><a class="subcategory-link" href="catalog.html">Вечерние платья</a></li>
                <li><a class="subcategory-link" href="catalog.html">Коктейльные платья</a></li>
              </ul>
            </div>
          </li>
          <li class="categories-list__li">
            <a class="category-link" id="tshirts-link" href="catalog.html">Футболки и блузки</a>
            <div class="subcategories-list hidden" id="tshirts-subcategories">
              <ul>
                <li><a class="subcategory-link" href="catalog.html">Футболки</a></li>
                <li><a class="subcategory-link" href="catalog.html">Блузки</a></li>
                <li><a class="subcategory-link" href="catalog.html">Поло</a></li>
              </ul>
            </div>
          </li>
          <li class="categories-list__li">
            <a class="category-link" id="robes-link" href="catalog.html">Хaлaты</a>
            <div class="subcategories-list hidden" id="robes-subcategories">
              <ul>
                <li><a class="subcategory-link" href="catalog.html">Домашние халаты</a></li>
                <li><a class="subcategory-link" href="catalog.html">Банные халаты</a></li>
                <li><a class="subcategory-link" href="catalog.html">Медицинские халаты</a></li>
              </ul>
            </div>
          </li>
          <li class="categories-list__li">
            <a class="category-link" id="sets-link" href="catalog.html">Комплекты</a>
            <div class="subcategories-list hidden" id="sets-subcategories">
              <ul>
                <li><a class="subcategory-link" href="catalog.html">Спортивные комплекты</a></li>
                <li><a class="subcategory-link" href="catalog.html">Домашние комплекты</a></li>
                <li><a class="subcategory-link" href="catalog.html">Пижамные комплекты</a></li>
              </ul>
            </div>
          </li>
          <li class="categories-list__li">
            <a class="category-link" id="tunics-link" href="catalog.html">Туники</a>
            <div class="subcategories-list hidden" id="tunics-subcategories">
              <ul>
                <li><a class="subcategory-link" href="catalog.html">Летние туники</a></li>
                <li><a class="subcategory-link" href="catalog.html">Теплые туники</a></li>
                <li><a class="subcategory-link" href="catalog.html">Медицинские туники</a></li>
              </ul>
            </div>
          </li>
          <li class="categories-list__li">
            <a class="category-link" id="nightwear-link" href="catalog.html">Пеньюaры и сорочки</a>
            <div class="subcategories-list hidden" id="nightwear-subcategories">
              <ul>
                <li><a class="subcategory-link" href="catalog.html">Пеньюары</a></li>
                <li><a class="subcategory-link" href="catalog.html">Сорочки</a></li>
                <li><a class="subcategory-link" href="catalog.html">Комплекты для сна</a></li>
              </ul>
            </div>
          </li>
          <li class="categories-list__li">
            <a class="category-link" id="muslim-link" href="catalog.html">Мусульмaнский aссортимент</a>
            <div class="subcategories-list hidden" id="muslim-subcategories">
              <ul>
                <li><a class="subcategory-link" href="catalog.html">Платья</a></li>
                <li><a class="subcategory-link" href="catalog.html">Костюмы</a></li>
                <li><a class="subcategory-link" href="catalog.html">Туники</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </li>
    <li class="nav-list__item"><a class="nav-list__link" id="sale-link" href="#">Рaспродaжa</a></li>
    <li class="nav-list__item"><a class="nav-list__link ajax-link" id="about-link" href="#new-stuff">Новинки</a></li>
    <li class="nav-list__item"><a class="nav-list__link" id="payment-link" href="#">Оплaтa и достaвкa</a></li>
    <li class="nav-list__item"><a class="nav-list__link" id="feedback-link" href="#">Отзывы</a></li>
    <li class="nav-list__item"><a class="nav-list__link ajax-link" id="aboutus-link" href="/public/index.html#aboutus">О нaс</a></li>
    <li class="nav-list__item"><a class="nav-list__link" id="contacts-link" href="#">Контaкты</a></li>
  </ul>
`;


  const catalogLink = nav.querySelector('#catalog-link');
  const catalogTemplate = document.getElementById('catalog-template');
  if (catalogLink && catalogTemplate) {
    const arrow = catalogTemplate.content.cloneNode(true);
    catalogLink.appendChild(arrow);
  } else {
    console.error('Catalog link or template not found');
  }

  const mainCategories = nav.querySelectorAll('.categories-list__li');

  mainCategories.forEach(category => {
    const subcategories = category.querySelector('.subcategories-list');
    

    if (subcategories) {
      category.addEventListener('mouseenter', function() {
        subcategories.classList.remove('hidden');
      });

      category.addEventListener('mouseleave', function() {
        subcategories.classList.add('hidden');
      });

      subcategories.addEventListener('mouseenter', function() {
        subcategories.classList.remove('hidden');
      });

      subcategories.addEventListener('mouseleave', function() {
        subcategories.classList.add('hidden');
      });
    }
  });

  return nav;
}
