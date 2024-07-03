document.addEventListener('DOMContentLoaded', function() {
    const loginMobile = document.getElementById('loginMobile');
    const registerMobile = document.getElementById('registerMobile');
    const forgotPasswordMobile = document.getElementById('forgotPasswordMobile');

    document.getElementById('registerModalButton').addEventListener('click', function(event) {
        event.preventDefault();
        loginMobile.classList.add('hidden');
        registerMobile.classList.remove('hidden');
        forgotPasswordMobile.classList.add('hidden');
    });

    document.getElementById('forgotPasswordModalButton').addEventListener('click', function(event) {
        event.preventDefault();
        loginMobile.classList.add('hidden');
        registerMobile.classList.add('hidden');
        forgotPasswordMobile.classList.remove('hidden');
    });

    document.getElementById('loginButtonBack').addEventListener('click', function(event) {
        event.preventDefault();
        loginMobile.classList.remove('hidden');
        registerMobile.classList.add('hidden');
        forgotPasswordMobile.classList.add('hidden');
    });

    document.getElementById('loginButtonBackSecond').addEventListener('click', function(event) {
        event.preventDefault();
        loginMobile.classList.remove('hidden');
        registerMobile.classList.add('hidden');
        forgotPasswordMobile.classList.add('hidden');
    });
});