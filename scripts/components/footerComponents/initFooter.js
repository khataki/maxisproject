import { createFooter } from './footer.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Initializing footer component');
  document.body.appendChild(createFooter());
  console.log('Footer component added');
});
