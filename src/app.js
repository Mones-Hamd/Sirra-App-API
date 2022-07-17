import { initLoginPage } from './pages/loginPage.js';
import { initLogo } from './pages/logoPage.js';

export const loadApp = () => {
  initLogo();
  initLoginPage();
};
window.addEventListener('load', loadApp);
