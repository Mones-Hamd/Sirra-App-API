import { USER_INTERFACE_ID } from '../constant.js';
import { createLogoELement } from '../views/logoView.js';
import { initLoginPage } from './loginPage.js';

export const initLogo = () => {
  const userInterFace = document.getElementById(USER_INTERFACE_ID);
  const logo = createLogoELement();
  document.body.insertBefore(logo, userInterFace);
  const logoBtn = document.getElementById('logo-png');
  logoBtn.addEventListener('click', () => {
    initLoginPage();
  });
};
