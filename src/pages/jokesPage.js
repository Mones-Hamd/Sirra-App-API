import {
  USER_INTERFACE_ID,
  RANDOM_JOKE_BUTTON_ID,
  JOKE_TXT_ID,
  FACT_BUTTON_ID,
} from '../constant.js';
import { fetchApiData } from '../services/fetchAPI.js';
import { createJokeElements } from '../views/jokesView.js';

export const initJokeContainer = () => {
  const userInterFace = document.getElementById(USER_INTERFACE_ID);
  userInterFace.innerHTML = '';
  const createJokeEl = createJokeElements();
  userInterFace.appendChild(createJokeEl);
  const jokeRandomBtn = document.getElementById(RANDOM_JOKE_BUTTON_ID);
  const factRandomBtn = document.getElementById(FACT_BUTTON_ID);
  jokeRandomBtn.addEventListener('click', async () => {
    await initJokeContent();
  });
  factRandomBtn.addEventListener('click', async () => {
    await initFactContent();
  });
};
const initJokeContent = async () => {
  const jokeUrl = 'https://geek-jokes.sameerkumar.website/api?format=json';
  const fetchJokeData = await fetchApiData(jokeUrl);

  const jokeText = await fetchJokeData['joke'];
  const jokeEl = document.getElementById(JOKE_TXT_ID);
  jokeEl.innerText = jokeText;
};
const initFactContent = async () => {
  const factURL = 'https://uselessfacts.jsph.pl/random.json?language=en';
  const fetchFactData = await fetchApiData(factURL);
  const factText = await fetchFactData['text'];
  const factEl = document.getElementById(JOKE_TXT_ID);
  factEl.innerText = factText;
};
