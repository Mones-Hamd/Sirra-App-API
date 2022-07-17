import { CONFIRM_BUTTON_ID, USER_NAME_ID } from '../constant.js';
import { setName } from '../lib/localStorage.js';
import { initNewPage } from '../services/initNewPage.js';
import { creatLoginElement } from '../views/loginView.js';
import { initWelcomePage } from './welcomePage.js';

export const initLoginPage = () => {
  const newPage = initNewPage(creatLoginElement());
  const buttonElemnt = document.getElementById(CONFIRM_BUTTON_ID);
  buttonElemnt.addEventListener('click', () => {
    confirmAndStart();
  });
};
const confirmAndStart = () => {
  const getUserName = document.getElementById(USER_NAME_ID);
  const getNameValue = getUserName.value;
  setName(getNameValue);
  initWelcomePage();
};
