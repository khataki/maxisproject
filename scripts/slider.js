document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    var prevButtons = document.querySelectorAll('.cardslide-prev');
    var nextButtons = document.querySelectorAll('.cardslide-next');
    var cardLists = document.querySelectorAll('.shopping_card-list');

    console.log('prevButtons:', prevButtons); // Отладочное сообщение
    console.log('nextButtons:', nextButtons); // Отладочное сообщение
    console.log('cardLists:', cardLists); // Отладочное сообщение

    if (prevButtons.length > 0 && nextButtons.length > 0 && cardLists.length > 0) {
        prevButtons.forEach((prevButton, index) => {
            const cardList = cardLists[index]; // Предполагается, что индекс кнопки соответствует индексу списка карточек
            prevButton.addEventListener('click', function() {
                cardList.scrollBy({ left: -400, behavior: 'smooth' }); // Прокрутка влево
            });
        });

        nextButtons.forEach((nextButton, index) => {
            const cardList = cardLists[index]; // Предполагается, что индекс кнопки соответствует индексу списка карточек
            nextButton.addEventListener('click', function() {
                cardList.scrollBy({ left: 400, behavior: 'smooth' }); // Прокрутка вправо
            });
        });
    } else {
        console.error('Slider elements not found'); // Отладочное сообщение
    }
});
