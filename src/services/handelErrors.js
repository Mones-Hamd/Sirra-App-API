import { initButtonElement } from '../pages/backButtonPage.js';
import { initNewPage } from './initNewPage.js';

export const renderError = (err) => {
  const errorEl = document.createElement('h1');
  errorEl.className = 'error';
  errorEl.innerHTML = `Something went wrong ${err} try again later`;
  initNewPage(errorEl);
  initButtonElement();
};
