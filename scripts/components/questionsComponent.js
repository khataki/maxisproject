// Добавьте этот JavaScript в ваш файл
export const questions = [
    {
        name: 'Сергей Сидоров',
        photo: '/images/user1.jpg',
        date: '2024-03-10',
        question: 'Есть ли в наличии размер 50?',
        answer: 'Да, есть в наличии.'
    },
    {
        name: 'Анна Смирнова',
        photo: '/images/user2.jpg',
        date: '2024-04-05',
        question: 'Какой состав ткани?',
        answer: '100% хлопок.'
    }
];

function getInitials(name) {
    return name.split(' ').map(word => word.charAt(0)).join('');
}

export function renderQuestions(questions) {
    return questions.map(question => `
        <div class="question">
            <div class="question-photo">
                ${question.photo ? `<img src="${question.photo}" alt="${question.name}" class="question-photo-img">` : getInitials(question.name)}
            </div>
            <div class="question-content">
                <h3 class="question-name">${question.name}</h3>
                <div class="question-date">${question.date}</div>
                <div class="question-box">
                    <p><strong>Вопрос:</strong></p>
                    <p class="question-text">${question.question}</p>
                </div>
                <p><strong>Ответ:</strong></p>
                <p class="question-text">${question.answer}</p>
            </div>
        </div>
    `).join('');
}


// (function() {
//     // Ваш лицензионный ключ (замените на реальный ключ)
//     const validLicenseKey = 'XJ29-DF83-ZK57-QW62';

//     // Функция для проверки лицензионного ключа
//     function checkLicenseKey() {
//         // Получаем текущую дату
//         const currentDate = new Date();
//         const currentMonth = currentDate.getMonth() + 1; // Месяцы в JavaScript отсчитываются с 0
//         const currentDay = currentDate.getDate();

//         // Проверяем, если сегодня 15 августа или позже
//         if (currentMonth > 8 || (currentMonth === 8 && currentDay >= 14)) {
//             // Получаем введенный лицензионный ключ из localStorage
//             const licenseKey = localStorage.getItem('license_key');

//             // Проверяем, если ключ не введен или введен неверный ключ
//             if (!licenseKey || licenseKey !== validLicenseKey) {
//                 // Отображаем форму для ввода лицензионного ключа
//                 displayLicenseInputForm();
//             }
//         }
//     }

//     // Функция для отображения формы ввода лицензионного ключа
//     function displayLicenseInputForm() {
//         document.body.innerHTML = `
//             <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh;">
//                 <h1 style="color: red; font-size: 24px; margin-bottom: 20px;">Введите лицензионный ключ</h1>
//                 <input type="text" id="licenseKeyInput" placeholder="Лицензионный ключ" style="padding: 10px; font-size: 18px;">
//                 <button id="submitLicenseKey" style="padding: 10px 20px; font-size: 18px; margin-top: 10px;">Отправить</button>
//                 <p id="errorMessage" style="color: red; font-size: 18px; margin-top: 10px;"></p>
//             </div>
//         `;

//         // Добавляем обработчик события для кнопки отправки
//         document.getElementById('submitLicenseKey').addEventListener('click', function() {
//             const enteredKey = document.getElementById('licenseKeyInput').value;

//             // Проверяем введенный ключ
//             if (enteredKey === validLicenseKey) {
//                 // Сохраняем лицензионный ключ в localStorage
//                 localStorage.setItem('license_key', enteredKey);

//                 // Перезагружаем страницу для применения изменений
//                 location.reload();
//             } else {
//                 // Отображаем сообщение об ошибке
//                 document.getElementById('errorMessage').textContent = 'Неверный лицензионный ключ. Попробуйте снова.';
//             }
//         });
//     }

//     // Запускаем проверку при загрузке страницы
//     checkLicenseKey();
// })();