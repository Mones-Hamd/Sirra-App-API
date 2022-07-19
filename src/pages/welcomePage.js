import { SELCTED_FEELING_ID, TARGET_BTN_ID } from '../constant.js';
import { initNewPage } from '../utility/initNewPage.js';
import {
  createSelectSection,
  createWelcomePage,
} from '../views/welcomeView.js';
import { initButtonElement } from '../general/backButtonPage.js';
import { initFoodPage } from './foodPages/foodPage.js';
import { initiFootballPage } from './football&joke/footballPage.js';
import { initJokeContainer } from './football&joke/jokesPage.js';
import { initArticalCards } from './newsPages/newsPage.js';
import { initWeatherSection } from './newsPages/weatherPage.js';

export const initWelcomePage = () => {
  //create welcom page
  initNewPage(createWelcomePage());
  const select = document.getElementById(SELCTED_FEELING_ID);
  // get select value
  select.addEventListener('input', initSelectionSection);
};
function initSelectionSection() {
  //get value & create section for the selected value
  const selectionDiv = document.querySelector('.selection');
  selectionDiv.innerHTML = '';

  const welcome = document.querySelector('.welcome');
  const select = document.getElementById(SELCTED_FEELING_ID);
  const selected = select.value;
  const selectImage = createSelectSection(selected);

  getSelectedApi(selected);
  welcome.append(selectImage);
}
//welcome node // initital page according to user selection
const getSelectedApi = (selected) => {
  const selectedImageBtn = document.getElementById(TARGET_BTN_ID);
  //if user select news page
  if (selected === 'public/img/newyork.png') {
    selectedImageBtn.addEventListener('click', () => {
      initWeatherSection();
      initButtonElement();
      initArticalCards();
    });
  }
  //if user select jokes page
  if (selected === 'public/img/jokes.png') {
    selectedImageBtn.addEventListener('click', () => {
      initJokeContainer();
      initButtonElement();
    });
  }
  //if user select football page
  if (selected === 'public/img/football.png') {
    selectedImageBtn.addEventListener('click', () => {
      initiFootballPage();
      initButtonElement();
    });
  }
  //if user select food page
  if (selected === 'public/img/food.png') {
    selectedImageBtn.addEventListener('click', () => {
      initFoodPage();
      initButtonElement();
    });
  }
};
