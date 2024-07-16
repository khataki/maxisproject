export function initZoom() {
    const images = document.querySelectorAll('.main-img');

    images.forEach(image => {
        const zoomLens = document.createElement('div');
        zoomLens.classList.add('zoom-lens');

        const zoomResult = document.createElement('div');
        zoomResult.classList.add('zoom-result');

        image.parentElement.appendChild(zoomLens);
        image.parentElement.appendChild(zoomResult);

        zoomLens.style.backgroundImage = `url(${image.src})`;

        image.addEventListener('mousemove', moveLens);
        zoomLens.addEventListener('mousemove', moveLens);
        image.addEventListener('touchmove', moveLens);

        function moveLens(e) {
            e.preventDefault(); // Предотвращает скроллинг страницы при касании
            const pos = getCursorPos(e);
            let x = pos.x - (zoomLens.offsetWidth / 2);
            let y = pos.y - (zoomLens.offsetHeight / 2);

            if (x > image.width - zoomLens.offsetWidth) x = image.width - zoomLens.offsetWidth;
            if (x < 0) x = 0;
            if (y > image.height - zoomLens.offsetHeight) y = image.height - zoomLens.offsetHeight;
            if (y < 0) y = 0;

            zoomLens.style.left = x + 'px';
            zoomLens.style.top = y + 'px';
            zoomLens.style.backgroundPosition = `-${x}px -${y}px`;

            zoomResult.style.backgroundImage = `url(${image.src})`;
            zoomResult.style.backgroundSize = `${image.width * 3}px ${image.height * 3}px`;
            zoomResult.style.backgroundPosition = `-${x * 3}px -${y * 3}px`;
        }

        function getCursorPos(e) {
            const a = image.getBoundingClientRect();
            const x = e.pageX - a.left - window.pageXOffset;
            const y = e.pageY - a.top - window.pageYOffset;
            return { x, y };
        }
    });
}
