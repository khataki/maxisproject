// hoverCircleComponent.js
export function createHoverCircle(imageSrc, productLink) {
    const hoverCircle = document.createElement('div');
    hoverCircle.classList.add('hover-circle');

    hoverCircle.innerHTML = `
        <div class="circle"></div>
        <div class="hover-modal">
            <img src="${imageSrc}" alt="Related Product">
            <a href="${productLink}" class="view-product-link">View Product</a>
            <p class="modal-add-product">Additional info about the product.</p>
        </div>
    `;

    return hoverCircle;
}
