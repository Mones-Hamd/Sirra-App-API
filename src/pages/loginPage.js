import { CONFIRM_BUTTON_ID, USER_NAME_ID } from '../constant.js';
import { setName } from '../lib/localStorage.js';
import { initNewPage } from '../utility/initNewPage.js';
import { creatLoginElement } from '../views/loginView.js';
import { initWelcomePage } from './welcomePage.js';

export const initLoginPage = () => {
  //create new page
  const newPage = initNewPage(creatLoginElement());
  const buttonElemnt = document.getElementById(CONFIRM_BUTTON_ID);
  buttonElemnt.addEventListener('click', () => {
    confirmAndStart();
  });
};
//get user name and store it in local storage  and start
const confirmAndStart = () => {
  const getUserName = document.getElementById(USER_NAME_ID);
  const getNameValue = getUserName.value;
  setName(getNameValue);
  initWelcomePage();
};
