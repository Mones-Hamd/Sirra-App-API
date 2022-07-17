import {
  ARTICAL_SEARCH_ID,
  USER_INTERFACE_ID,
  ARTICAL_CARD_CONTAINER_ID,
} from '../constant.js';
import { fetchApiData } from '../services/fetchAPI.js';
import { renderError } from '../services/handelErrors.js';
import {
  createArticalElement,
  createArticalCard,
  createSearchArticalElement,
} from '../views/newsView.js';

export const initArticalCards = () => {
  const newsContainer = document.querySelector('.container');
  const searchElement = createSearchArticalElement();
  newsContainer.appendChild(searchElement);
  const aritcalElement = createArticalElement();
  newsContainer.appendChild(aritcalElement);
  const searchEL = document.getElementById(ARTICAL_SEARCH_ID);
  let searchTimeoutToken = 0;
  searchEL.onkeyup = (e) => {
    clearTimeout(searchTimeoutToken);

    if (searchEL.value.trim().length === 0) {
      return;
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
  try {
    const getData = await fetchApiData(newsUrl);
    const data = await getData.results;
    const copyRight = document.getElementById('copyright');
    copyRight.innerText = getData.copyright;

    data.forEach(({ media, title, abstract, url }) => {
      const imageSrc = media[0]?.['media-metadata'][2].url;

      createArticalCard(imageSrc, title, abstract, url);
    });
  } catch (err) {
    renderError(err);
  }
};

export const initSearchArtical = async (word) => {
  const title = document.getElementById('title');
  title.innerText = 'Search Results...';
  const articalSection = document.getElementById(ARTICAL_CARD_CONTAINER_ID);
  articalSection.innerHTML = '';
  const QueryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${word}&api-key=lKN7Juy8tbmDgVbVW9ukPWWs50yirKyR`;
  try {
    const searchInAPI = await fetchApiData(QueryURL);
    const data = await searchInAPI.response['docs'];

    const resulte = data.map(({ multimedia, headline, abstract, web_url }) => {
      const img = `https://www.nytimes.com/${multimedia[0].url}`;
      createArticalCard(img, headline.main, abstract, web_url);
    });
  } catch (err) {
    renderError(err);
  }
};
