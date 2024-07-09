// hoverCircleComponent.js
export function createHoverCircle(imageSrc, productLink) {
    const hoverCircle = document.createElement('div');
    hoverCircle.classList.add('hover-circle');

    hoverCircle.innerHTML = `
        <div class="circle"></div>
        <div class="hover-modal">
            <img src="${imageSrc}" alt="Related Product">
            <a href="${productLink}" class="view-product-link">Перейти</a>
            <p class="modal-add-product">Берет женский 22.1488</p>
        </div>
    `;

    return hoverCircle;
}
