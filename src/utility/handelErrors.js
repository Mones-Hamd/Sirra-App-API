import { initButtonElement } from '../general/backButtonPage.js';
import { initNewPage } from './initNewPage.js';

export const renderError = (err) => {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-container';
  const errorImage = document.createElement('img');
  errorImage.src = 'public/img/error.jpeg';
  const errorEl = document.createElement('h1');
  errorEl.className = 'error';
  errorEl.innerHTML = `Something went wrong ${err} try again later`;
  errorDiv.appendChild(errorEl);
  errorDiv.appendChild(errorImage);
  initNewPage(errorDiv);
  initButtonElement();
};
