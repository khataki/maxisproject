export function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = `
      <div class="footer_container">
        <div class="footer-feedback__container">
          <button id="openFeedbackModalButton" class="button__purple fix-color">Обратная связь</button>
          <div class="footer__phone-container">
            <a class="header__phone" href="tel:+79061117455">+7(906)111-74-55</a>
            <a class="header__phone" href="tel:+79030620500">+7(903)062-05-00</a>
          </div>
        </div>
        <div class="logo-feedback">
          <a class="header__logo ajax-link" href="/public/index.html">
            <div class="header__logo-container footer-logo"></div>
          </a>
          <label class="subscribe" for="input">Подпишитесь на новости стиля</label>
          <form class="subscribe__form" action="" method="post" id="subscribeForm">
            <input class="subscribe__input" type="text" id="input" name="email" placeholder="Ваша электронная почта" required />
            <button class="button button__black" type="submit">Подписаться</button>
          </form>
        </div>
        <div class="footer__list">
          <div class="footer__list-first">
            <ul class="footer__list-first__ul">
              <li class="footer__list-item"><a class="footer__link" href="#" id="link-contacts">Контакты</a></li>
              <li class="footer__list-item"><a class="footer__link" href="#" id="link-about">О нас</a></li>
              <li class="footer__list-item"><a class="footer__link" href="#" id="link-login">Вход</a></li>
              <li class="footer__list-item"><a class="footer__link" href="#" id="link-register">Регистрация</a></li>
              <li class="footer__list-item"><a class="footer__link" href="#" id="link-cooperation">Условия сотрудничества</a></li>
              <li class="footer__list-item margined"><a class="footer__link" href="#" id="link-recommend">Рекомендуем</a></li>
              <li class="footer__list-item"><a class="footer__link" href="#" id="link-delivery">Доставка</a></li>
              <li class="footer__list-item"><a class="footer__link" href="#" id="link-articles">Статьи</a></li>
              <li class="footer__list-item"><a class="footer__link" href="#" id="link-documents">Документы</a></li>
            </ul>
          </div>
          <div class="footer__list-second">
            <ul class="footer__list-second__ul">
              <li class="footer__list-item"><a class="footer__link" href="/public/catalog.html" id="link-new">Новинки</a></li>
              <li class="footer__list-item"><a class="footer__link" href="/public/catalog.html" id="link-bestsellers">Хиты продаж</a></li>
              <li class="footer__list-item"><a class="footer__link" href="/public/catalog.html" id="link-sale">Распродажа</a></li>
              <li class="footer__list-item"><a class="footer__link" href="/public/catalog.html" id="link-robes">Халаты</a></li>
              <li class="footer__list-item"><a class="footer__link" href="/public/catalog.html" id="link-sets">Комплекты</a></li>
              <li class="footer__list-item"><a class="footer__link" href="/public/catalog.html" id="link-tunics">Туники</a></li>
              <li class="footer__list-item"><a class="footer__link" href="/public/catalog.html" id="link-nightwear">Пеньюары и сорочки</a></li>
              <li class="footer__list-item"><a class="footer__link" href="/public/catalog.html" id="link-tshirts">Футболки</a></li>
              <li class="footer__list-item"><a class="footer__link" href="/public/catalog.html" id="link-dresses">Платья</a></li>
              <li class="footer__list-item"><a class="footer__link" href="/public/catalog.html" id="link-muslim">Мусульманский ассортимент</a></li>
            </ul>
          </div>
        </div>
        <div class="footer__socials-geolocation">
          <div class="footer__socials">
            <h3 class="footer__socials-title">Связаться с нами</h3>
            <div class="footer__socials-icons">
              <a class="footer__socials-icon" href="#">
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="30" height="30" viewBox="0 0 19.85 12">
  <path d="M12.02 5.77c-.37-.14-.37-.68-.39-1.06-.09-1.34.36-3.4-.18-4.27-.39-.52-2.25-.47-3.38-.4-.32.05-.7.12-.97.26-.28.14-.55.38-.55.6 0 .3.68.25.93.65.27.43.27 1.35.27 2.1 0 .87-.13 2.03-.47 2.08-.52.02-.82-.52-1.1-.92A15.9 15.9 0 0 1 4.7 2.1c-.2-.49-.32-1.03-.61-1.24C3.62.54 2.8.5 2 .54 1.3.56.25.47.04.9c-.16.5.18.97.36 1.37a32.8 32.8 0 0 0 3.16 5.68c1.13 1.63 2.2 2.93 4.28 3.61.6.2 3.18.73 3.7 0 .18-.28.14-.92.23-1.39.09-.47.2-.94.63-.97.37-.02.57.31.8.55.25.26.45.47.63.7.43.45.89 1.07 1.43 1.3.75.33 1.9.24 3 .19.88-.02 1.51-.21 1.58-.75.05-.43-.4-1.04-.68-1.4-.68-.87-1-1.13-1.77-1.93-.34-.35-.77-.73-.77-1.15-.02-.26.18-.5.36-.76.8-1.23 1.6-2.1 2.32-3.37.2-.38.68-1.25.5-1.68-.2-.47-1.34-.33-2.05-.33-.9 0-2.08-.07-2.3.12-.44.3-.62.8-.83 1.28a14.05 14.05 0 0 1-1.7 3.01c-.22.29-.65.88-.9.78z" style="opacity:1;fill:#bfb2b0;fill-opacity:1;stroke-width:.74"/>
</svg>
              </a>
              <a class="footer__socials-icon" href="#">
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="24" height="24" viewBox="0 0 18 18">
  <path d="M3 0a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Zm11 2.8c.6 0 1.2.6 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.6-1.2 1.2-1.2zM9 6a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3Zm4 6v.1z" style="opacity:1;fill:#bfb2b0;fill-opacity:1"/>
</svg>
              </a>
              <a class="footer__socials-icon" href="#">
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="30" height="30" viewBox="0 0 12 12">
  <path fill-rule="evenodd" d="M10.25 1.75A6 6 0 0 0 0 6c0 1.06.33 2.06.85 2.96L0 12l3.17-.78A5.9 5.9 0 0 0 6 12a6.02 6.02 0 0 0 4.25-10.25ZM6 11c-.89 0-1.74-.3-2.5-.74l-.18-.11-1.88.49.5-1.83-.12-.2A4.93 4.93 0 0 1 1 6a5.03 5.03 0 0 1 8.54-3.54A5 5 0 0 1 6 11Z" clip-rule="evenodd" style="fill:#bfb2b0;fill-opacity:1;stroke-width:.5"/>
  <path d="M5.86.44A5.23 5.46 0 0 0 .64 5.9a5.23 5.46 0 0 0 .97 3.15H.95V11h1.94v-.61a5.23 5.46 0 0 0 2.97.98A5.23 5.46 0 0 0 11.1 5.9 5.23 5.46 0 0 0 5.86.44ZM4.13 3.45h.25c.08 0 .19-.03.3.23.1.28.37.94.4 1 .04.08.06.15.02.24-.05.1-.07.15-.14.23l-.2.24c-.06.06-.13.14-.05.27.07.14.34.58.73.94.5.46.93.6 1.07.67.13.06.2.06.28-.04.08-.09.34-.39.42-.52.1-.14.18-.12.3-.07a14.83 14.83 0 0 1 1.16.6c.03.05.03.32-.08.64-.1.32-.64.6-.9.64-.22.04-.5.05-.83-.05a7.62 7.62 0 0 1-.75-.29 5.84 5.84 0 0 1-2.26-2.04 2.62 2.62 0 0 1-.54-1.4c0-.66.34-.99.46-1.12a.5.5 0 0 1 .36-.17Z" style="clip-rule:evenodd;fill:#bfb2b0;fill-opacity:1;fill-rule:evenodd;stroke-width:.89533"/>
</svg>
              </a>
              <a class="footer__socials-icon" href="#">
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="24" height="24" viewBox="0 0 20 20">
  <path d="m0 8 20-8-3 17-11-6 12-9-14 8Zm6 12v-8l5 3Z" style="fill:#bfb2b0;fill-opacity:1;stroke-width:.0234375"/>
</svg>
              </a>
                            <a class="footer__socials-icon" href="#">
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="30" height="30" viewBox="0 0 12 15.5">
  <path d="M6.4 0C2 0 0 3 0 5.6 0 7 .6 8.5 1.8 9c.2 0 .4 0 .5-.3l.2-.7c0-.2 0-.3-.2-.5-.3-.4-.6-1-.6-1.7 0-2.3 1.7-4.3 4.4-4.3C8.5 1.5 9.8 3 9.8 5c0 2.6-1.1 4.8-2.8 4.8C6 9.8 5.4 9 5.6 8c.3-1 .8-2.3.8-3.1 0-.7-.4-1.3-1.2-1.3-1 0-1.7 1-1.7 2.3 0 .8.3 1.4.3 1.4L2.6 12c-.3 1.5 0 3.2 0 3.4 0 .1.1.1.2 0 0 0 1.2-1.5 1.6-2.9l.6-2.4c.3.6 1.2 1.1 2.2 1.1 2.9 0 4.8-2.6 4.8-6.1C12 2.5 9.8 0 6.4 0Z" style="fill:#bfb2b0;fill-opacity:1"/>
</svg>
              </a>
            </div>
          </div>
          <div class="footer__geolocation-list">
            <div class="footer__geolocation-item">
            <i class="fa-solid fa-location-dot"></i>
              <a class="footer__geolocation-link" href="https://2gis.ru/kazan/firm/70000001076283117" target="_blank">Республика Татарстан, г. Казань <br /> ул. Мартына Межлаука <br /> 13 цокольный этаж, 13 павильон</a>
            </div>
            <div class="footer__geolocation-item">
            <i class="fa-solid fa-location-dot"></i>
              <a class="footer__geolocation-link" href="https://go.2gis.com/1flye" target="_blank">Зеленодольский район <br /> Технополис “Новая Тура” <br /> Красный павильон 8 ряд 56 место</a>
            </div>
          </div>
        </div>
      </div>
    `;
    return footer;
  }
  