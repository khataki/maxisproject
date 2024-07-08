// infoSectionComponent.js
document.addEventListener('DOMContentLoaded', function() {
    const infoHeaders = document.querySelectorAll('.info-header');

    infoHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);

            if (targetContent) {
                targetContent.classList.toggle('open');
            }

            // Изменяем стрелку
            const arrow = this.querySelector('span[class*="arrow"]');
            if (arrow) {
                arrow.classList.toggle('rotate');
            }
        });
    });
});
