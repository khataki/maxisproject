document.addEventListener("DOMContentLoaded", function() {
    const message = "Здесь будет сообщение которое надо добавить в бегущую строку";
    const messageElement = document.getElementById("message");
    if (messageElement) {
        messageElement.textContent = message;
    }

    const slides = document.querySelectorAll('.slide');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let index = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        index = (index + 1) % slides.length;
        showSlide(index);
    }

    function prevSlide() {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    }

    if (next) {
        next.addEventListener('click', nextSlide);
    }
    if (prev) {
        prev.addEventListener('click', prevSlide);
    }

    showSlide(index);
});

// МОДАЛЬНОЕ ОКНО ЛОГИНА

// document.addEventListener('DOMContentLoaded', initializeLoginModals);

// function initializeLoginModals() {
//     const modals = {
//         loginModal: document.getElementById('loginModal'),
//         registerModal: document.getElementById('registerModal'),
//         forgotPasswordModal: document.getElementById('forgotPasswordModal')
//     };

//     const buttons = {
//         loginButton: document.getElementById('loginButton'),
//         registerModalButton: document.getElementById('registerModalButton'),
//         forgotPasswordModalButton: document.getElementById('forgotPasswordModalButton'),
//         loginButtonBack: document.getElementById('loginButtonBack'),
//         loginButtonBackSecond: document.getElementById('loginButtonBackSecond'),
//         footerLoginLink: document.getElementById('link-login'),
//         footerRegisterLink: document.getElementById('link-register')
//     };

//     checkElementsExistence(modals, "modal");
//     checkElementsExistence(buttons, "button");

//     function checkElementsExistence(elements, type) {
//         for (const key in elements) {
//             if (!elements[key]) {
//                 console.error(`Element with ID ${key} is missing.`);
//             } else {
//                 console.log(`Element with ID ${key} found.`);
//             }
//         }
//     }

//     function openModal(modalId) {
//         for (const key in modals) {
//             if (key === modalId) {
//                 modals[key].classList.add('show');
//                 console.log(`Modal ${key} opened.`);
//             } else {
//                 modals[key].classList.remove('show');
//             }
//         }
//         document.body.classList.add('no-scroll');
//     }

//     function closeModal(modalId) {
//         const modal = modals[modalId];
//         if (modal) {
//             modal.classList.remove('show');
//             console.log(`Modal ${modalId} closed.`);
//         }
//         document.body.classList.remove('no-scroll');
//     }

//     function addClickEvent(element, handler) {
//         if (element) {
//             element.addEventListener('click', handler);
//         } else {
//             console.error(`${element.id} element not found`);
//         }
//     }

//     addClickEvent(buttons.loginButton, (e) => {
//         e.preventDefault();
//         openModal('loginModal');
//     });

//     addClickEvent(buttons.registerModalButton, (e) => {
//         e.preventDefault();
//         openModal('registerModal');
//     });

//     addClickEvent(buttons.forgotPasswordModalButton, (e) => {
//         e.preventDefault();
//         openModal('forgotPasswordModal');
//     });

//     const backButtonsHandler = (e) => {
//         e.preventDefault();
//         closeModal('registerModal');
//         closeModal('forgotPasswordModal');
//         openModal('loginModal');
//     };

//     addClickEvent(buttons.loginButtonBack, backButtonsHandler);
//     addClickEvent(buttons.loginButtonBackSecond, backButtonsHandler);

//     // Add click events for footer links
//     addClickEvent(buttons.footerLoginLink, (e) => {
//         e.preventDefault();
//         openModal('loginModal');
//     });

//     addClickEvent(buttons.footerRegisterLink, (e) => {
//         e.preventDefault();
//         openModal('registerModal');
//     });

//     window.onclick = function(event) {
//         for (const key in modals) {
//             if (event.target === modals[key]) {
//                 closeModal(key);
//             }
//         }
//     };
// }


// // Обратная связь
// function initializeFeedbackModal() {
//     const feedbackModal = document.getElementById('feedbackModal');
//     const feedbackForm = document.getElementById('feedbackForm');

    

//     // Функция для открытия модального окна
//     function openFeedbackModal() {
//         feedbackModal.style.opacity = '1';
//         feedbackModal.style.visibility = 'visible';

//     }

//     // Функция для закрытия модального окна
//     function closeFeedbackModal() {
//         feedbackModal.style.opacity = '0';
//         feedbackModal.style.visibility = 'hidden';
//     }

//     // Пример кнопки, которая открывает модальное окно
//     document.getElementById('openFeedbackModalButton').addEventListener('click', openFeedbackModal);

//     // Закрытие модального окна при отправке формы
//     feedbackForm.addEventListener('submit', function(event) {
//         event.preventDefault();
//         // Здесь можно добавить код для отправки данных формы на сервер
//         closeFeedbackModal();
//     });

//     // Закрытие модального окна при клике вне его области
//     window.addEventListener('click', function(event) {
//         if (event.target === feedbackModal) {
//             closeFeedbackModal();
//         }
//     });
    

//     console.log('feedBackModal initialized')
// };

// document.addEventListener('DOMContentLoaded', initializeFeedbackModal);



// Секция О НАС

document.addEventListener('DOMContentLoaded', () => {
    const toggleVisibility = (triggers) => {
        triggers.forEach(({ triggerId, contentId, arrowId }) => {
            const trigger = document.getElementById(triggerId);
            const content = document.getElementById(contentId);
            const arrow = document.getElementById(arrowId);

            if (trigger && content && arrow) {
                trigger.addEventListener('click', () => {
                    const isHidden = content.classList.toggle('hidden');
                    content.classList.toggle('visible', !isHidden);
                    arrow.classList.toggle('arrow-up', !isHidden);
                    console.log(`${triggerId} clicked`);
                });
            } else {
                console.error(`Element not found: ${triggerId}, ${contentId}, or ${arrowId}`);
            }
        });
    };

    const visibilityToggles = [
        { triggerId: 'toggleQuality', contentId: 'qualityDescription', arrowId: 'arrowQuality' },
        { triggerId: 'toggleProduction', contentId: 'productionDescription', arrowId: 'arrowProduction' },
        { triggerId: 'toggleAboutUs', contentId: 'aboutUsDescription', arrowId: 'arrowAboutUs' }
    ];

    toggleVisibility(visibilityToggles);
});




// Каталог

document.addEventListener('DOMContentLoaded', function() {
    const template = document.getElementById('catalog-template');
    if (!template) {
        console.error('Template element with id "catalog-template" not found');
        return;
    }

    // Инициализация стрелок в каталоге
    const catalogContainers = document.querySelectorAll('.catalog-container');
    catalogContainers.forEach(container => {
        let catalogLink = container.querySelector('.nav-list__link');
        if (!catalogLink) {
            catalogLink = container;
        }

        const catalogArrow = catalogLink.querySelector('.catalog__arrow');
        if (!catalogArrow) {
            console.error('Element with class "catalog__arrow" not found inside "catalog-container"');
            return;
        }

        const clone = template.content.cloneNode(true);
        catalogArrow.appendChild(clone);

        const categoriesList = container.querySelector('.categories-list');
        if (!categoriesList) {
            console.error('Element with class "categories-list" not found inside "catalog-container"');
            return;
        }

        container.addEventListener('mouseenter', () => {
            categoriesList.classList.remove('hidden');
        });

        container.addEventListener('mouseleave', () => {
            categoriesList.classList.add('hidden');
        });
    });

    // Инициализация стрелок в элементах заказа
    const orderNumbers = document.querySelectorAll('.order-number .catalog__arrow');
    orderNumbers.forEach(arrow => {
        const clone = template.content.cloneNode(true);
        arrow.appendChild(clone);
    });

    // Добавление обработчика для раскрытия/скрытия деталей заказа
    document.querySelectorAll('.order-number').forEach(orderNumber => {
        orderNumber.addEventListener('click', function() {
            const orderDetails = this.closest('.order-details').querySelector('.order-item-list');
            const svg = this.querySelector('.catalog__arrow');

            if (orderDetails) {
                orderDetails.classList.toggle('open');
                if (orderDetails.classList.contains('open')) {
                    orderDetails.style.maxHeight = orderDetails.scrollHeight + 'px';
                    svg.style.transform = 'rotate(180deg)';
                } else {
                    orderDetails.style.maxHeight = '0';
                    svg.style.transform = 'rotate(0deg)';
                }
            }
        });
    });
});

// Поисковая строка


// UI

document.addEventListener("DOMContentLoaded", function() {
    const currentUrl = window.location.pathname;
    const links = {
        "/": "home-link",
        "/catalog": "catalog-link",
        "/cart": "cart-link",
        "/profile": "profile-link",
        "/login": "login-link"
    };

    for (const [path, id] of Object.entries(links)) {
        if (currentUrl === path) {
            document.getElementById(id).classList.add("active");
            break;
        }
    }
});

function initializeArrows() {
    const template = document.getElementById('catalog-template');
    if (!template) {
        console.error('Template element with id "catalog-template" not found');
        return;
    }

    const catalogContainers = document.querySelectorAll('.catalog-container');
    catalogContainers.forEach(container => {
        let catalogLink = container.querySelector('.nav-list__link');
        if (!catalogLink) {
            catalogLink = container;
        }

        const catalogArrow = catalogLink.querySelector('.catalog__arrow');
        if (!catalogArrow) {
            console.error('Element with class "catalog__arrow" not found inside "catalog-container"');
            return;
        }

        const clone = template.content.cloneNode(true);
        catalogArrow.appendChild(clone);

        const categoriesList = container.querySelector('.categories-list');
        if (!categoriesList) {
            console.error('Element with class "categories-list" not found inside "catalog-container"');
            return;
        }

        container.addEventListener('mouseenter', () => {
            categoriesList.classList.remove('hidden');
        });

        container.addEventListener('mouseleave', () => {
            categoriesList.classList.add('hidden');
        });
    });
}

// Карточка товара

document.addEventListener('DOMContentLoaded', function() {
    const thumbImgs = document.querySelectorAll('.thumb-img');

    thumbImgs.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Удаляем класс 'selected' у всех миниатюр
            thumbImgs.forEach(img => img.classList.remove('selected'));
            
            // Добавляем класс 'selected' к выбранной миниатюре
            this.classList.add('selected');
        });
    });
});


// document.addEventListener('DOMContentLoaded', () => {
//     const quantityElements = document.querySelectorAll('.quantity-value');
//     const priceElements = document.querySelectorAll('.product-grid-item.price');
//     const summaryQuantityElement = document.querySelector('.summary-quantity');
//     const summaryPriceElement = document.querySelector('.summary-price');
//     const pricePerItem = 1500; // Цена за единицу товара

//     function updateSummary() {
//         let totalQuantity = 0;
//         let totalPrice = 0;

//         quantityElements.forEach((element, index) => {
//             const quantity = parseInt(element.textContent);
//             totalQuantity += quantity;
//             totalPrice += quantity * pricePerItem;
//         });

//         summaryQuantityElement.textContent = `${totalQuantity} шт.`;
//         summaryPriceElement.textContent = `${totalPrice}Р.`;
//     }

//     document.querySelectorAll('.quantity .decrement').forEach((button, index) => {
//         button.addEventListener('click', () => {
//             const parent = button.closest('.product-grid-item.quantity');
//             if (!parent.classList.contains('unavailable')) {
//                 let quantity = parseInt(quantityElements[index].textContent);
//                 if (quantity > 0) {
//                     quantity--;
//                     quantityElements[index].textContent = quantity;
//                     updateSummary();
//                 }
//             }
//         });
//     });

//     document.querySelectorAll('.quantity .increment').forEach((button, index) => {
//         button.addEventListener('click', () => {
//             const parent = button.closest('.product-grid-item.quantity');
//             if (!parent.classList.contains('unavailable')) {
//                 let quantity = parseInt(quantityElements[index].textContent);
//                 quantity++;
//                 quantityElements[index].textContent = quantity;
//                 updateSummary();
//             }
//         });
//     });

//     // Инициализация
//     updateSummary();
// });


//     document.addEventListener('DOMContentLoaded', function() {
//         const tabs = document.querySelectorAll('.tab-item');
//         const panes = document.querySelectorAll('.tab-pane');

//         tabs.forEach(tab => {
//             tab.addEventListener('click', function() {
//                 const target = this.getAttribute('data-tab');

//                 tabs.forEach(t => t.classList.remove('active'));
//                 this.classList.add('active');

//                 panes.forEach(pane => {
//                     if (pane.id === target) {
//                         pane.classList.add('active');
//                     } else {
//                         pane.classList.remove('active');
//                     }
//                 });
//             });
//         });
//     });

//     document.addEventListener('DOMContentLoaded', function() {
//         const headers = document.querySelectorAll('.info-header');
    
//         headers.forEach(header => {
//             header.addEventListener('click', function() {
//                 const targetId = this.getAttribute('data-target');
//                 const content = document.getElementById(targetId);
    
//                 if (content.style.display === 'none' || content.style.display === '') {
//                     content.style.display = 'block';
//                 } else {
//                     content.style.display = 'none';
//                 }
//             });
//         });

//     });

    
// // AJAX

// document.addEventListener("DOMContentLoaded", function() {
//     document.querySelectorAll('.ajax-link').forEach(link => {
//         link.addEventListener('click', function(event) {
//             event.preventDefault();
//             const url = this.getAttribute('href');
//             makeFetchRequest(url, 'GET');
//         });
//     });
// });

function makeFetchRequest(url, method) {
    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text()) // или response.json() для JSON данных
    .then(data => {
        document.querySelector('#content').innerHTML = data; // Предполагается, что вы заменяете содержимое элемента с id="content"
        history.pushState(null, '', url); // Обновление URL в браузере без перезагрузки
        initializeArrows(); // Вызов функции для инициализации стрелок после загрузки нового контента
        initializeLoginModals(); // Вызов функции для инициализации модальных окон после загрузки нового контента
        initializeFeedbackModal(); // Вызов функции для инициализации модального окна обратной связи после загрузки нового контента
        initializeCartModal(); // Вызов функции для инициализации модального окна корзины после загрузки нового контента
    })
    .catch(error => console.error('Error:', error));
}