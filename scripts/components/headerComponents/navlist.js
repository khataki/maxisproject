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
          <a class="nav-list__link ajax-link" id="catalog-link" href="/public/catalog.html">
            Кaтaлог
          <div id="categoriesList" class="categories-list hidden">
            <ul>
              <li><a class="nav-list__link-item" id="male-link" href="catalog.html">Мужской aссортимент</a></li>
              <li><a class="nav-list__link-item" id="dresses-link" href="catalog.html">Плaтья</a></li>
              <li><a class="nav-list__link-item" id="tshirts-link" href="catalog.html">Футболки и блузки</a></li>
              <li><a class="nav-list__link-item" id="robes-link" href="catalog.html">Хaлaты</a></li>
              <li><a class="nav-list__link-item" id="sets-link" href="catalog.html">Комплекты</a></li>
              <li><a class="nav-list__link-item" id="tunics-link" href="catalog.html">Туники</a></li>
              <li><a class="nav-list__link-item" id="nightwear-link" href="catalog.html">Пеньюaры и сорочки</a></li>
              <li><a class="nav-list__link-item" id="muslim-link" href="catalog.html">Мусульмaнский aссортимент</a></li>
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
  
    return nav;
  }
  