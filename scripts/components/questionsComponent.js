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
