export function createUserInterfaceMobile() {
    const userInterfaceMobile = document.createElement('div');
    userInterfaceMobile.classList.add('user_interface-mobile');

    userInterfaceMobile.innerHTML = `
        <div class="user_interface-mobile__container">
            <a id="home-link" class="user_interface-item" href="/public/index.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" fill="none">
                    <path fill="#000" fill-rule="evenodd" d="M11.3.8a1 1 0 0 1 1.4 0l8 7.6 2.5 2.4a1 1 0 0 1-1.4 1.4l-.8-.7V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7.5l-.8.7a1 1 0 1 1-1.4-1.4l2.5-2.4 8-7.6ZM5 9.5V19h4v-5a3 3 0 1 1 6 0v5h4V9.5L12 3 5 9.5Zm8 9.5v-5a1 1 0 1 0-2 0v5h2Z" clip-rule="evenodd"/>
                </svg>
            </a>
            <a id="catalogLinkUI" class="user_interface-item" href="/public/catalogmobile.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="none">
                    <path fill="#000" fill-rule="evenodd" d="M12.3 4.8A1.2 1.2 0 0 1 11.1 6H2.4a1.2 1.2 0 0 1 0-2.4h8.7a1.2 1.2 0 0 1 1.2 1.2ZM10.8 12a1.2 1.2 0 0 1-1.2 1.2H2.4a1.2 1.2 0 1 1 0-2.4h7.2a1.2 1.2 0 0 1 1.2 1.2Zm2.1 8.4a1.2 1.2 0 1 0 0-2.4H2.4a1.2 1.2 0 1 0 0 2.4h10.5Z" clip-rule="evenodd"/>
                    <g clip-path="url(#a)">
                        <path fill="#030303" d="M29.3 20.2c.4-.4.4-1 0-1.4l-1.5-1.5-1.2-1.2a1 1 0 0 1-.1-1.3 7.9 7.9 0 0 0-6.8-11.7A7.8 7.8 0 0 0 12 11c0 4.3 3.5 7.8 7.7 7.8 1.5 0 2.9-.4 4-1.1.5-.3 1-.3 1.4.1l2.4 2.4.1.1v.1c.5.4 1.1.4 1.5 0l.2-.2ZM19.7 17a6 6 0 0 1-5.9-6 6 6 0 0 1 6-6 6 6 0 0 1 0 12Z"/>
                    </g>
                    <defs>
                        <clipPath id="a">
                            <path fill="#fff" d="M0 0h18v18H0z" transform="translate(12 3)"/>
                        </clipPath>
                    </defs>
                </svg>
            </a>
            <a href="/public/cart.html">
            <button id="cart-link-mobile" class="cart__button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" class="icon-header" viewBox="0 0 22 20">
                    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.34 18.7a1.92 1.92 0 1 0 0-3.83 1.92 1.92 0 0 0 0 3.84Zm-9.6 0a1.92 1.92 0 1 0 0-3.83 1.92 1.92 0 0 0 0 3.84ZM1.4 1.42s4.45-.06 3.84 3.84l-.66 3.9a3.14 3.14 0 0 0 3.2 3.78h7.67a4.7 4.7 0 0 0 4.48-3.78l.66-3.95a3.16 3.16 0 0 0-3.22-3.84H9.02"/>
                </svg>
                <div class="cart__count-mobile">0</div>
            </button>
            </a>
            <a id="favourite-link" class="user_interface-item" href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6c-1.8-2.1-4.8-2.7-7-.8a5.3 5.3 0 0 0-.9 7.4 83.6 83.6 0 0 0 8 7.4l.4-.3c1.4-1.3 5.9-5.2 7.3-7.1a5.3 5.3 0 0 0-.8-7.4c-2.2-2-5.2-1.3-7 .8Z" clip-rule="evenodd"/>
                </svg>
            </a>
            <a id="login-link" class="user_interface-item" href="/public/loginmobile.html">
                <button id="loginButtonMobile" class="login__button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" class="icon-header" viewBox="0 0 22 20">
                        <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM1 19v-4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v4m0-18a4 4 0 0 1 0 7.8m3 4.2h1a2 2 0 0 1 2 2v4"/>
                    </svg>
                </button>
            </a>
        </div>
    `;

    document.body.appendChild(userInterfaceMobile);
}
