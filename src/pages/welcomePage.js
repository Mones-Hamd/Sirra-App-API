import { SELCTED_FEELING_ID, TARGET_BTN_ID } from '../constant.js';
import { initNewPage } from '../services/initNewPage.js';
import {
  createSelectSection,
  createWelcomePage,
} from '../views/welcomeView.js';
import { initButtonElement } from './backButtonPage.js';
import { initFoodPage } from './foodPage.js';
import { initiFootballPage } from './footballPage.js';
import { initJokeContainer } from './jokesPage.js';
import { initArticalCards } from './newsPage.js';
import { initWeatherSection } from './weatherPage.js';

export const initWelcomePage = () => {
  initNewPage(createWelcomePage());
  const select = document.getElementById(SELCTED_FEELING_ID);
  select.addEventListener('input', initSelectionSection);
};
function initSelectionSection() {
  const selectionDiv = document.querySelector('.selection');
  selectionDiv.innerHTML = '';

  const welcome = document.querySelector('.welcome');
  const select = document.getElementById(SELCTED_FEELING_ID);
  const selected = select.value;
  const selectImage = createSelectSection(selected);

  getSelectedApi(selected);
  welcome.append(selectImage);
}
const getSelectedApi = (selected) => {
  const selectedImageBtn = document.getElementById(TARGET_BTN_ID);
  if (selected === 'public/img/newyork.png') {
    selectedImageBtn.addEventListener('click', () => {
      initWeatherSection();
      initButtonElement();
      initArticalCards();
    });
  }
  if (selected === 'public/img/jokes.png') {
    selectedImageBtn.addEventListener('click', () => {
      initJokeContainer();
      initButtonElement();
    });
  }
  if (selected === 'public/img/football.png') {
    selectedImageBtn.addEventListener('click', () => {
      initiFootballPage();
      initButtonElement();
    });
  }
  if (selected === 'public/img/food.png') {
    selectedImageBtn.addEventListener('click', () => {
      initFoodPage();
      initButtonElement();
    });
  }
};
