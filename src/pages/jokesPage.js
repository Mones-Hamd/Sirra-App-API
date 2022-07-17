import {
  USER_INTERFACE_ID,
  RANDOM_JOKE_BUTTON_ID,
  JOKE_TXT_ID,
  FACT_BUTTON_ID,
} from '../constant.js';
import { fetchApiData } from '../services/fetchAPI.js';
import { renderError } from '../services/handelErrors.js';
import { initNewPage } from '../services/initNewPage.js';
import { createJokeElements } from '../views/jokesView.js';

export const initJokeContainer = () => {
  initNewPage(createJokeElements());
  const jokeRandomBtn = document.getElementById(RANDOM_JOKE_BUTTON_ID);
  const factRandomBtn = document.getElementById(FACT_BUTTON_ID);
  jokeRandomBtn.addEventListener('click', async () => {
    try {
      await initJokeContent();
    } catch (err) {
      renderError(err);
    }
  });
  factRandomBtn.addEventListener('click', async () => {
    try {
      await initFactContent();
    } catch (err) {
      renderError(err);
    }
  });
};
const initJokeContent = async () => {
  const jokeUrl = 'https://geek-jokes.sameerkumar.website/api?format=json';
  try {
    const fetchJokeData = await fetchApiData(jokeUrl);

    const jokeText = await fetchJokeData['joke'];
    const jokeEl = document.getElementById(JOKE_TXT_ID);
    jokeEl.innerText = jokeText;
  } catch (err) {
    renderError(err);
  }
};
const initFactContent = async () => {
  const factURL = 'https://uselessfacts.jsph.pl/random.json?language=en';
  try {
    const fetchFactData = await fetchApiData(factURL);
    const factText = await fetchFactData['text'];
    const factEl = document.getElementById(JOKE_TXT_ID);
    factEl.innerText = factText;
  } catch (err) {
    renderError(err);
  }
};
