import { initNewPage } from '../../utility/initNewPage.js';
import { createJokeElements } from '../../views/football&joke/jokesView.js';
import {
  RANDOM_JOKE_BUTTON_ID,
  JOKE_TXT_ID,
  FACT_BUTTON_ID,
} from '../../constant.js';
import { fetchApiData } from '../../utility/fetchAPI.js';
import { renderError } from '../../utility/handelErrors.js';

//initial new page for jokes
export const initJokeContainer = () => {
  initNewPage(createJokeElements());
  const jokeRandomBtn = document.getElementById(RANDOM_JOKE_BUTTON_ID);
  console.log(jokeRandomBtn);
  const factRandomBtn = document.getElementById(FACT_BUTTON_ID);
  // event listner for jokes btn
  jokeRandomBtn.addEventListener('click', async () => {
    try {
      await initJokeContent();
    } catch (err) {
      renderError(err);
    }
  });
  //event listner for fact btn
  factRandomBtn.addEventListener('click', async () => {
    try {
      await initFactContent();
    } catch (err) {
      renderError(err);
    }
  });
};
//fetch random joke & initial joke content
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
//fetch random fact & initial fact content
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
