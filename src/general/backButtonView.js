import { USER_INTERFACE_ID } from '../constant.js';

export const createBackButton = () => {
  const buttonDiv = document.createElement('div');
  buttonDiv.className = 'button-section';
  buttonDiv.innerHTML = String.raw`
<img src=public/img/home.png id="back-btn">

`;
  return buttonDiv;
};
