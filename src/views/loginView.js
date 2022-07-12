import {
  CONFIRM_BUTTON_ID,
  LOGIN_CONTAINER_CLASS,
  USER_NAME_ID,
} from '../constant.js';

export const creatLoginElement = () => {
  const divElement = document.createElement('div');
  divElement.classList.add(`${LOGIN_CONTAINER_CLASS}`);
  divElement.innerHTML = String.raw`
  <div id="header">
  <img src="public/img/walking.gif" id="header-image">
  </div>
  <div class='login-card'> 
   <h1>HELLO</h1>
   <p>I am your web assitant you can call me Sira !!,
   What name would you like me to call you ?.. </p>
   <input type="text" id="${USER_NAME_ID}" placeholder="call me">

   <button type="submit" value="Submit"  id="${CONFIRM_BUTTON_ID}"> Confirm</button>
  </div>
  `;
  return divElement;
};
