import {
  ARTICAL_SEARCH_ID,
  USER_INTERFACE_ID,
  ARTICAL_CARD_CONTAINER_ID,
} from '../constant.js';
import { fetchApiData } from '../services/fetchAPI.js';
import {
  createArticalElement,
  createArticalCard,
  createSearchArticalElement,
} from '../views/newsView.js';

export const initArticalCards = async () => {
  const userInterFace = document.getElementById(USER_INTERFACE_ID);
  const searchElement = createSearchArticalElement();
  userInterFace.appendChild(searchElement);
  const aritcalElement = createArticalElement();
  userInterFace.appendChild(aritcalElement);
  const searchEL = document.getElementById(ARTICAL_SEARCH_ID);
  let searchTimeoutToken = 0;
  searchEL.onkeyup = (e) => {
    clearTimeout(searchTimeoutToken);

    if (searchEL.value.trim().length === 0) {
      return initAritcalContent();
    }
    searchTimeoutToken = setTimeout(() => {
      initSearchArtical(searchEL.value);
    }, 850);
  };
  initAritcalContent();
};

const initAritcalContent = async () => {
  const newsUrl =
    'https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=lKN7Juy8tbmDgVbVW9ukPWWs50yirKyR';
  const getData = await fetchApiData(newsUrl);
  const data = await getData.results;
  const copyRight = document.getElementById('copyright');
  copyRight.innerText = getData.copyright;

  await data.forEach((element) => {
    const imageElement = element['media'][0]['media-metadata'][2].url;
    const titleElement = element.title;
    const abstractElement = element.abstract;
    const linkElement = element.url;
    createArticalCard(imageElement, titleElement, abstractElement, linkElement);
  });
};

export const initSearchArtical = async (word) => {
  console.log(word.length);
  if (word.length !== 0) {
    const title = document.getElementById('title');
    title.innerText = 'Search Results';
  }
  const articalSection = document.getElementById(ARTICAL_CARD_CONTAINER_ID);

  articalSection.innerHTML = `<h1> You are looking for: ${word} ..</h1>`;
  const QueryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${word}&api-key=lKN7Juy8tbmDgVbVW9ukPWWs50yirKyR`;
  const searchInAPI = await fetchApiData(QueryURL);
  const data = await searchInAPI.response['docs'];

  const resulte = await data.forEach((element) => {
    const img = `https://www.nytimes.com/${element['multimedia'][0]['url']}`;
    const title = element['headline'].main;
    const abstract = element.abstract;
    const link = element.web_url;
    createArticalCard(img, title, abstract, link);
  });
};
