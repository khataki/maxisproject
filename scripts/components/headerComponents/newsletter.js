export function createNewsletter() {
    const newsletter = document.createElement('div');
    newsletter.classList.add('newsletter');
    newsletter.innerHTML = `
      <p id="message">
        Здесь будет сообщение которое надо добавить в бегущую строку
      </p>
    `;
    return newsletter;
  }
  