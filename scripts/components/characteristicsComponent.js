export function createCharacteristicsTable(characteristics) {
    return `
        <section class="characteristics-modal">
            <h2 class="characteristics-title">Характеристики</h2>
            <div class="characteristics-grid">
                ${characteristics.map(characteristic => `
                    <div class="characteristic-item">
                        <span class="label">${characteristic.label}:</span>
                        <span class="value">${characteristic.value}</span>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}
