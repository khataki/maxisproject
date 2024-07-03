export const questions = [
    {
        name: 'Сергей Сидоров',
        photo: '/images/user3.jpg',
        date: '2024-03-10',
        text: 'Есть ли в наличии размер 50?'
    },
    {
        name: 'Анна Смирнова',
        photo: '/images/user4.jpg',
        date: '2024-04-05',
        text: 'Какой состав ткани?'
    }
];

export function renderQuestions(questions) {
    return questions.map(question => `
        <div class="question">
            <img src="${question.photo}" alt="${question.name}" class="question-photo">
            <div class="question-content">
                <h3 class="question-name">${question.name}</h3>
                <div class="question-date">${question.date}</div>
                <p class="question-text">${question.text}</p>
            </div>
        </div>
    `).join('');
}
