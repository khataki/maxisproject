export const reviews = [
    {
        name: 'Иван Иванов',
        photo: '/images/user4.jpg',
        rating: 5,
        date: '2024-01-01',
        text: 'Отличный товар! Очень доволен покупкой.'
    },
    {
        name: 'Мария Петрова',
        photo: '/images/user3.jpg',
        rating: 4,
        date: '2024-02-15',
        text: 'Хороший товар, но доставка задержалась.'
    }
];

export function renderReviews(reviews) {
    return reviews.map(review => `
        <div class="review">
            <img src="${review.photo}" alt="${review.name}" class="review-photo">
            <div class="review-content">
                <h3 class="review-name">${review.name}</h3>
                <div class="review-rating">${'★'.repeat(review.rating)}</div>
                <div class="review-date">${review.date}</div>
                <p class="review-text">${review.text}</p>
            </div>
        </div>
    `).join('');
}
