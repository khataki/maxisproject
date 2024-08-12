// additionalLinks.js
export function createAdditionalLinks(config) {
    const { title, categories } = config;
    return `
      <div class="unique-categories-container">
        <h1 class="unique-categories-title">${title}</h1>
        <div class="unique-categories-grid">
          ${categories.map(category => `
            <a href="${category.link}" class="unique-category-card">
              <img src="${category.imageSrc}" alt="${category.name}" class="unique-category-image" />
              <div class="unique-category-name">${category.name}</div>
            </a>
          `).join('')}
        </div>
      </div>
    `;
  }
  