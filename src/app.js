import { initLoginPage } from './pages/loginPage.js';

const loadApp = () => {
  initLoginPage();
};
window.addEventListener('load', loadApp);
