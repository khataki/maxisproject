import { createLoginModal, createRegisterModal, createForgotPasswordModal, createFeedbackModal } from './modal.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Initializing modals');

  document.body.appendChild(createLoginModal());
  console.log('Login modal added');

  document.body.appendChild(createRegisterModal());
  console.log('Register modal added');

  document.body.appendChild(createForgotPasswordModal());
  console.log('Forgot password modal added');

  document.body.appendChild(createFeedbackModal());
  console.log('Feedback modal added');

  // Функция для открытия модального окна
  function openModal(modalId) {
    console.log(`Opening modal: ${modalId}`);
    document.getElementById(modalId).classList.add('open');
  }

  // Функция для закрытия модального окна
  function closeModal(modalId) {
    console.log(`Closing modal: ${modalId}`);
    document.getElementById(modalId).classList.remove('open');
  }

  // Функция для переключения модальных окон
  function switchModal(fromModalId, toModalId) {
    closeModal(fromModalId);
    openModal(toModalId);
  }

  // Обработчики событий для открытия модальных окон
  document.getElementById('loginButton').addEventListener('click', (event) => {
    event.stopPropagation();
    openModal('loginModal');
  });
  document.getElementById('registerModalButton').addEventListener('click', (event) => {
    event.stopPropagation();
    openModal('registerModal');
  });
  document.getElementById('forgotPasswordModalButton').addEventListener('click', (event) => {
    event.stopPropagation();
    openModal('forgotPasswordModal');
  });
  // document.getElementById('openFeedbackModalButton').addEventListener('click', (event) => {
  //   event.stopPropagation();
  //   openModal('feedbackModal');
  // });

  // Обработчики событий для переключения между модальными окнами
  document.getElementById('forgotPasswordModalButton').addEventListener('click', (event) => {
    event.stopPropagation();
    switchModal('loginModal', 'forgotPasswordModal');
  });

  document.getElementById('loginButtonBack').addEventListener('click', (event) => {
    event.stopPropagation();
    switchModal('registerModal', 'loginModal');
  });

  document.getElementById('loginButtonBackSecond').addEventListener('click', (event) => {
    event.stopPropagation();
    switchModal('forgotPasswordModal', 'loginModal');
  });

  console.log('Event listeners for buttons added');

  // Обработчики событий для закрытия модальных окон при клике вне их
  window.addEventListener('click', function(event) {
    ['loginModal', 'registerModal', 'forgotPasswordModal', 'feedbackModal'].forEach(modalId => {
      const modal = document.getElementById(modalId);
      if (modal && modal.classList.contains('open') && !modal.querySelector('.modal-content').contains(event.target)) {
        closeModal(modalId);
      }
    });
  });

  console.log('Event listeners for window click added');
});
