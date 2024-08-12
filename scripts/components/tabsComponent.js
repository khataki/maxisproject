import { reviews, renderReviews } from './reviewComponent.js';
import { questions, renderQuestions } from './questionsComponent.js';
import { productInfo } from './productInfo.js';

export function createTabs() {
    return `
        <div class="tab-header">
            <div class="tab-item active" data-tab="description">Описание</div>
            <div class="tab-item" data-tab="reviews">Отзывы: ${reviews.length}</div>
            <div class="tab-item" data-tab="questions">Вопросы: ${questions.length}</div>
        </div>
        <div class="tab-content">
            <div class="tab-pane active" id="description">
                <p id="descriptionTab" class="description">${productInfo.description}</p>
            </div>
            <div class="tab-pane" id="reviews">
                <div id="reviewsContainer">
                    ${renderReviews(reviews)}
                </div>
            </div>
            <div class="tab-pane" id="questions">
                ${renderQuestions(questions)}
            </div>
        </div>
    `;
}

export function attachTabsEventListeners() {
    const tabHeaders = document.querySelectorAll('.tab-item');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabHeaders.forEach(tabHeader => {
        tabHeader.addEventListener('click', function() {
            const tab = this.getAttribute('data-tab');

            tabHeaders.forEach(header => {
                header.classList.toggle('active', header === this);
            });

            tabPanes.forEach(pane => {
                pane.classList.toggle('active', pane.id === tab);
            });
        });
    });

    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', handleReviewFormSubmission);
    }
}
