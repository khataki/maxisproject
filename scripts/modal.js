document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed'); // Отладочное сообщение

    var modal = document.getElementById('modalFastView');
    var fastViewModal = document.getElementById('fast-view-modal');
    var buttons = document.querySelectorAll('.fastView');
    var span = document.getElementsByClassName('.close')[0];
    var span = document.getElementsByClassName('.close-modal')[0];

    console.log('modal:', modal); // Отладочное сообщение
    console.log('fastViewModal:', fastViewModal); // Отладочное сообщение
    console.log('buttons:', buttons); // Отладочное сообщение
    console.log('span:', span); // Отладочное сообщение

    buttons.forEach(function(btn) {
        console.log('Adding event listener to Fast View button'); // Отладочное сообщение
        btn.addEventListener('click', function(event) {
            console.log('Fast View button clicked'); // Отладочное сообщение
            event.stopPropagation(); // Останавливаем всплытие события
            modal.classList.add('show');
            fastViewModal.classList.add('open');
        });
    });

    if (span) {
        console.log('Adding event listener to Close button'); // Отладочное сообщение
        span.addEventListener('click', function(event) {
            console.log('Close button clicked'); // Отладочное сообщение
            event.stopPropagation(); // Останавливаем всплытие события
            modal.classList.remove('show');
            fastViewModal.classList.remove('open');
        });
    } else {
        console.error('Close button not found'); // Отладочное сообщение
    }

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            console.log('Clicked outside modal'); // Отладочное сообщение
            modal.classList.remove('show');
            fastViewModal.classList.remove('open');
        }
    });

    // Обработчики для модального окна с изображением
    var imageModal = document.getElementById('imageModal');
    var modalImage = document.getElementById('modalImage');
    var images = document.querySelectorAll('.main-img');
    var modalCloseBtn = imageModal.querySelector('.close-modal');
    var prevBtn = imageModal.querySelector('.prev');
    var nextBtn = imageModal.querySelector('.next');

    var currentImageIndex;

    // Открыть модальное окно для изображений
    function openImageModal(index) {
        currentImageIndex = index;
        if (modalImage) {
            modalImage.src = images[index].src;
            imageModal.classList.add('show');
        } else {
            console.error("Modal image element not found");
        }
    }

    // Закрыть модальное окно для изображений
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', function() {
            imageModal.classList.remove('show');
            imageModal.style.opacity = 0;
        });
    }

    // Переключение изображений в модальном окне
    function showPrevImage() {
        currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
        if (modalImage) {
            modalImage.src = images[currentImageIndex].src;
        }
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
        if (modalImage) {
            modalImage.src = images[currentImageIndex].src;
        }
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', showPrevImage);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', showNextImage);
    }

    // Добавляем события для изображений
    images.forEach((image, index) => {
        image.addEventListener('click', () => openImageModal(index));
    });
});
