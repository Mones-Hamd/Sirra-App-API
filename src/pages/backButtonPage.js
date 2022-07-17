import {
  USER_INTERFACE_ID,
  WELCOME_MESSAGE_TEXT_ID,
  WELCOME_MESSAGE_TITLE_ID,
} from '../constant.js';
import { getName } from '../lib/localStorage.js';
import { createBackButton } from '../views/backButtonView.js';
import { initWelcomePage } from './welcomePage.js';

export const initButtonElement = () => {
  const userInterFace = document.getElementById(USER_INTERFACE_ID);
  const buttonEl = createBackButton();
  userInterFace.appendChild(buttonEl);
  const btnEvent = document.getElementById('back-btn');
  btnEvent.addEventListener('click', () => {
    backToFeelingPage();
  });
};
const backToFeelingPage = () => {
  const back = initWelcomePage();
  const name = getName();
  const welcomBackTitleEl = document.getElementById(WELCOME_MESSAGE_TITLE_ID);
  welcomBackTitleEl.innerText = `Welcome Back ${name.toUpperCase()}`;
  const welcomeBackTextEL = document.getElementById(WELCOME_MESSAGE_TEXT_ID);

  welcomeBackTextEL.innerHTML = `Nice to see you again ,<br> I wish the previous Page was useful to you<br>
   I am ready to listen to your FEElING AGAIN !! `;
};
