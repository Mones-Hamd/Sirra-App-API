import {
  BORING_JOK_API_ID,
  CURIOUS_NEWS_API_ID,
  EXCITED_SPORT_API_ID,
  FEELING_SELECTOR_ID,
  HUNGRY_FOOD_API_ID,
  SELCTED_FEELING_ID,
  SELECTED_IMAGE_ID,
  WELCOME_MESSAGE_ID,
  WELCOME_MESSAGE_TEXT_ID,
  WELCOME_MESSAGE_TITLE_ID,
} from '../constant.js';
import { getName } from '../lib/localStorage.js';

export const createWelcomePage = () => {
  const name = getName();
  const welcomDiv = document.createElement('div');
  welcomDiv.className = 'welcome';
  welcomDiv.innerHTML = String.raw`
  <div id=${WELCOME_MESSAGE_ID}>
    <h2 id=${WELCOME_MESSAGE_TITLE_ID}> Hi ${name.toUpperCase()} </h2>
    <p id =${WELCOME_MESSAGE_TEXT_ID}> Nice to see you .!<br> <br>Its pleasure to serve you .. <br><br>
    So could you please select how do you feel now? ... </p>
  </div> 
  <div id=${FEELING_SELECTOR_ID}>
    <h2>Thanks Sira </h2><br><br>
    <span> Hmmm !!, I Feel...</span><br><br>
    <select id =${SELCTED_FEELING_ID} >
        <option value="" style="display:none;">Select feeling</option>
        <option id=${CURIOUS_NEWS_API_ID} value="public/img/newyork.jpg"> Curious! What is the latest news?</option>
        <option id=${BORING_JOK_API_ID} value="public/img/jokes.png"> Boring ! Tell me some jokes? </option>
        <option Id=${EXCITED_SPORT_API_ID} value="public/img/football.png"> Excited ! What are football matches today?</option>
        <option id=${HUNGRY_FOOD_API_ID} value="public/img/food.png">Hungry!! Tell me some food recipe </option> 
    </select>
  </div>
  <div class="selection">
  </div>
  `;
  return welcomDiv;
};
export const createSelectSection = (value) => {
  const selectionDiv = document.querySelector('.selection');
  selectionDiv.innerHTML = '';
  selectionDiv.innerHTML = String.raw`
  <div id="select-value">
    <img src="${value}" id=${SELECTED_IMAGE_ID}>
  </div>
  `;
  return selectionDiv;
};
