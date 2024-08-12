document.addEventListener('DOMContentLoaded', function() {
    // Создаем кнопку и добавляем её в тело документа
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.id = 'scrollToTopButton';
    scrollToTopButton.className = 'scroll-to-top';
    scrollToTopButton.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
    document.body.appendChild(scrollToTopButton);

    // Обработчик прокрутки для показа/скрытия кнопки
    window.addEventListener('scroll', function() {
        if (window.scrollY > 600) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    // Обработчик клика для прокрутки вверх
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
