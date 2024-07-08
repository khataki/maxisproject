export function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = `
      <div class="footer_container">
        <div class="footer-feedback__container">
          <button id="openFeedbackModalButton" class="button__purple">Обратная связь</button>
          <div class="footer__phone-container">
            <a class="header__phone" href="tel:+79061117455">+7(906)111-74-55</a>
            <a class="header__phone" href="tel:+79030620500">+7(903)062-05-00</a>
          </div>
        </div>
        <div class="logo-feedback">
          <a class="header__logo ajax-link" href="/public/index.html">
            <div class="header__logo-container"></div>
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
                <svg fill="#000000" width="30px" height="30px" viewBox="-2.5 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <title>vk</title>
                  <path d="M16.563 15.75c-0.5-0.188-0.5-0.906-0.531-1.406-0.125-1.781 0.5-4.5-0.25-5.656-0.531-0.688-3.094-0.625-4.656-0.531-0.438 0.063-0.969 0.156-1.344 0.344s-0.75 0.5-0.75 0.781c0 0.406 0.938 0.344 1.281 0.875 0.375 0.563 0.375 1.781 0.375 2.781 0 1.156-0.188 2.688-0.656 2.75-0.719 0.031-1.125-0.688-1.5-1.219-0.75-1.031-1.5-2.313-2.063-3.563-0.281-0.656-0.438-1.375-0.844-1.656-0.625-0.438-1.75-0.469-2.844-0.438-1 0.031-2.438-0.094-2.719 0.5-0.219 0.656 0.25 1.281 0.5 1.813 1.281 2.781 2.656 5.219 4.344 7.531 1.563 2.156 3.031 3.875 5.906 4.781 0.813 0.25 4.375 0.969 5.094 0 0.25-0.375 0.188-1.219 0.313-1.844s0.281-1.25 0.875-1.281c0.5-0.031 0.781 0.406 1.094 0.719 0.344 0.344 0.625 0.625 0.875 0.938 0.594 0.594 1.219 1.406 1.969 1.719 1.031 0.438 2.625 0.313 4.125 0.25 1.219-0.031 2.094-0.281 2.188-1 0.063-0.563-0.563-1.375-0.938-1.844-0.938-1.156-1.375-1.5-2.438-2.563-0.469-0.469-1.063-0.969-1.063-1.531-0.031-0.344 0.25-0.656 0.5-1 1.094-1.625 2.188-2.781 3.188-4.469 0.281-0.5 0.938-1.656 0.688-2.219-0.281-0.625-1.844-0.438-2.813-0.438-1.25 0-2.875-0.094-3.188 0.156-0.594 0.406-0.844 1.063-1.125 1.688-0.625 1.438-1.469 2.906-2.344 4-0.313 0.375-0.906 1.156-1.25 1.031z"></path>
                </svg>
              </a>
              <a class="footer__socials-icon" href="#">
                <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F"/>
                  <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F"/>
                </svg>
              </a>
              <a class="footer__socials-icon" href="#">
                <svg width="30px" height="30px" viewBox="0 -3 20 20" xmlns="http://www.w3.org/2000/svg">
                  <g id="youtube" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="youtubebutton" transform="translate(-300.000000, -7442.000000)" fill="#000000">
                      <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289" id="youtube-[#168]"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
              <a class="footer__socials-icon" href="#">
                <svg fill="#000000" width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="footer__geolocation-list">
            <div class="footer__geolocation-item">
              <a class="footer__geolocation-link" href="https://2gis.ru/kazan/firm/70000001076283117" target="_blank">Республика Татарстан, г. Казань <br /> ул. Мартына Межлаука <br /> 13 цокольный этаж, 13 павильон</a>
            </div>
            <div class="footer__geolocation-item">
              <a class="footer__geolocation-link" href="https://go.2gis.com/1flye" target="_blank">Зеленодольский район <br /> Технополис “Новая Тура” <br /> Красный павильон 8 ряд 56 место</a>
            </div>
          </div>
        </div>
      </div>
    `;
    return footer;
  }
  