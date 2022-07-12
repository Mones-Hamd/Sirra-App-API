import {
  CONFIRM_BUTTON_ID,
  USER_INTERFACE_ID,
  USER_NAME_ID,
} from '../constant.js';
import { setName } from '../lib/localStorage.js';
import { creatLoginElement } from '../views/loginView.js';
import { initWelcomePage } from './welcomePage.js';

export const initLoginPage = () => {
  const interfaceElement = document.getElementById(USER_INTERFACE_ID);
  interfaceElement.innerHTML = ' ';
  const loginElement = creatLoginElement();
  interfaceElement.append(loginElement);
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
