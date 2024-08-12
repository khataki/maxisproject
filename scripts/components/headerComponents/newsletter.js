export function createNewsletter() {
    const newsletter = document.createElement('div');
    newsletter.classList.add('newsletter');
    newsletter.innerHTML = `
      <p id="message">
       c 7:00 до 16:00 по Москве | info@maxis-kzn.ru 
      </p>
    `;
    return newsletter;
  }
  