export function createLoginModal() {
    const loginModal = document.createElement('div');
    loginModal.id = 'loginModal';
    loginModal.className = 'modal';
    loginModal.setAttribute('data-modal', 'loginModal');
    loginModal.innerHTML = `
      <div class="modal-content">
        <div class="form-container">
          <h2 class="modal__title">Авторизация</h2>
          <form id="loginForm">
            <input class="login__input" type="text" id="username" name="username" placeholder="E-mail" required />
            <input class="login__input" type="password" id="password" placeholder="Пароль" name="password" required />
            <button class="button button__purple" type="submit">Войти</button>
            <a class="forgot__password" id="forgotPasswordModalButton" href="#">Забыли пароль?</a>
            <p class="register__description">У вас еще нет аккаунта? Пройдите простую <a id="registerModalButton" class="register__link" href="#">регистрацию</a></p>
          </form>
        </div>
      </div>
    `;
    console.log('Login modal created');
    return loginModal;
  }
  
  export function createRegisterModal() {
    const registerModal = document.createElement('div');
    registerModal.id = 'registerModal';
    registerModal.className = 'modal';
    registerModal.setAttribute('data-modal', 'registerModal');
    registerModal.innerHTML = `
      <div class="modal-content">
        <div class="form-container">
          <h2 class="modal__title">Регистрация</h2>
          <form id="registerForm">
            <input class="login__input" type="text" id="registerEmail" name="registerEmail" placeholder="E-mail" required />
            <input class="login__input" type="password" id="registerPassword" name="registerPassword" placeholder="Пароль" required />
            <input class="login__input" type="password" id="confirmPassword" name="confirmPassword" placeholder="Подтвердите пароль" required />
            <button class="button button__purple" type="submit">Зарегистрироваться</button>
            <p class="register__description fix-marg">Уже есть аккаунт? <a class="forgot__password" href="#!" id="loginButtonBack">Войти</a></p>
          </form>
        </div>
      </div>
    `;
    console.log('Register modal created');
    return registerModal;
  }
  
  export function createForgotPasswordModal() {
    const forgotPasswordModal = document.createElement('div');
    forgotPasswordModal.id = 'forgotPasswordModal';
    forgotPasswordModal.className = 'modal';
    forgotPasswordModal.setAttribute('data-modal', 'forgotPasswordModal');
    forgotPasswordModal.innerHTML = `
      <div class="modal-content">
        <div class="form-container">
          <h2 class="modal__title">Восстановление пароля</h2>
          <form id="forgotPasswordForm">
            <input class="login__input" type="text" id="forgotPasswordEmail" name="forgotPasswordEmail" placeholder="E-mail" required />
            <button class="button button__purple" type="submit">Восстановить пароль</button>
            <p class="register__description fix-marg"><a class="forgot__password" href="#!" id="loginButtonBackSecond">Вернуться ко входу</a></p>
          </form>
        </div>
      </div>
    `;
    console.log('Forgot password modal created');
    return forgotPasswordModal;
  }
  
  export function createFeedbackModal() {
    const feedbackModal = document.createElement('div');
    feedbackModal.id = 'feedbackModal';
    feedbackModal.className = 'modal';
    feedbackModal.setAttribute('data-modal', 'feedbackModal');
    feedbackModal.innerHTML = `
      <div class="modal-content">
        <div class="form-container">
          <h2 class="modal__title">Обратная связь</h2>
          <form id="feedbackForm">
            <input class="login__input" type="text" id="name" name="name" placeholder="Ваше имя" required />
            <input class="login__input" type="email" id="email" name="email" placeholder="Ваш email" required />
            <textarea class="login__input" id="feedBackMessage" name="message" placeholder="Ваше сообщение" required></textarea>
            <button class="button button__purple" type="submit">Отправить</button>
          </form>
        </div>
      </div>
    `;
    console.log('Feedback modal created');
    return feedbackModal;
  }
  