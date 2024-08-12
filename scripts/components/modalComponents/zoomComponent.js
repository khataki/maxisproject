export function initZoom() {
    if (window.innerWidth <= 768) {
        return; // Отключаем зум на мобильных устройствах
    }

    const images = document.querySelectorAll('.main-img');
    const zoomResultContainer = document.getElementById('zoom-result-container');

    images.forEach(image => {
        const zoomLens = document.createElement('div');
        zoomLens.classList.add('zoom-lens');

        image.parentElement.appendChild(zoomLens);

        image.addEventListener('mousemove', (e) => moveLens(e, image, zoomLens, zoomResultContainer));
        zoomLens.addEventListener('mousemove', (e) => moveLens(e, image, zoomLens, zoomResultContainer));
        image.addEventListener('touchmove', (e) => moveLens(e, image, zoomLens, zoomResultContainer));

        image.addEventListener('mouseenter', () => {
            zoomLens.style.display = 'block';
            zoomResultContainer.classList.remove('hidden-fixed');
            zoomResultContainer.style.backgroundImage = `url(${image.src})`;
        });

        image.addEventListener('mouseleave', () => {
            zoomLens.style.display = 'none';
            zoomResultContainer.classList.add('hidden-fixed');
            zoomResultContainer.style.backgroundImage = 'none';
        });
    });

    function moveLens(e, image, zoomLens, zoomResultContainer) {
        e.preventDefault();
        const pos = getCursorPos(e, image);
        let x = pos.x - (zoomLens.offsetWidth / 2);
        let y = pos.y - (zoomLens.offsetHeight / 2);

        if (x > image.width - zoomLens.offsetWidth) x = image.width - zoomLens.offsetWidth;
        if (x < 0) x = 0;
        if (y > image.height - zoomLens.offsetHeight) y = image.height - zoomLens.offsetHeight;
        if (y < 0) y = 0;

        zoomLens.style.left = x + 'px';
        zoomLens.style.top = y + 'px';

        const cx = zoomResultContainer.offsetWidth / zoomLens.offsetWidth;
        const cy = zoomResultContainer.offsetHeight / zoomLens.offsetHeight;

        zoomResultContainer.style.backgroundSize = `${image.width * cx}px ${image.height * cy}px`;
        zoomResultContainer.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
    }

    function getCursorPos(e, image) {
        const a = image.getBoundingClientRect();
        const x = e.pageX - a.left - window.pageXOffset;
        const y = e.pageY - a.top - window.pageYOffset;
        return { x, y };
    }
}
