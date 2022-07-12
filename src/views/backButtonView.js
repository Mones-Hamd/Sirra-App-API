import { USER_INTERFACE_ID } from '../constant.js';

export const createBackButton = () => {
  // const userInterFace=document.getElementById(USER_INTERFACE_ID);
  const buttonDiv = document.createElement('div');
  buttonDiv.className = 'button-section';
  buttonDiv.innerHTML = String.raw`
<button type='button' id="back-btn">
Bring me back to Feeling Page</button>
`;
  return buttonDiv;
};
