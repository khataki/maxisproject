document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');

    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = {
            name: feedbackForm.name.value,
            email: feedbackForm.email.value,
            message: feedbackForm.message.value
        };

        console.log('Отправка формы:', formData);

        // Здесь вы можете добавить код для отправки данных на сервер
        // Например, с использованием fetch:
        /*
        fetch('/send-feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Успех:', data);
        })
        .catch((error) => {
            console.error('Ошибка:', error);
        });
        */

        feedbackForm.reset();
    });
});


