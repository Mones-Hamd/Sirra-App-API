import {
  ARTICAL_SEARCH_ID,
  ARTICAL_CARD_CONTAINER_ID,
} from '../../constant.js';
import { fetchApiData } from '../../utility/fetchAPI.js';
import { renderError } from '../../utility/handelErrors.js';
import { searchBar } from '../../utility/searchbar.js';
import {
  createArticalElement,
  createArticalCard,
  createSearchArticalElement,
} from '../../views/newsViews/newsView.js';

export const initArticalCards = () => {
  //second section must load // create news section
  const newsContainer = document.querySelector('.container');
  //first :load search bar
  const searchElement = createSearchArticalElement();
  newsContainer.appendChild(searchElement);
  //second : load most puploar article
  const aritcalElement = createArticalElement();
  newsContainer.appendChild(aritcalElement);
  const searchEL = document.getElementById(ARTICAL_SEARCH_ID);
  const searchResult = searchBar(searchEL, initSearchArtical);

  initAritcalContent();
};
//get popluar article
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
      //create article card
      createArticalCard(imageSrc, title, abstract, url);
    });
  } catch (err) {
    renderError(err);
  }
};
//update the page to search result and get search result
export const initSearchArtical = async (word) => {
  const title = document.getElementById('title');
  title.innerText = 'Search Results...';
  const articalSection = document.getElementById(ARTICAL_CARD_CONTAINER_ID);
  articalSection.innerHTML = '';
  const QueryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${word}&api-key=lKN7Juy8tbmDgVbVW9ukPWWs50yirKyR`;
  try {
    const searchInAPI = await fetchApiData(QueryURL);
    const data = await searchInAPI.response['docs'];
    //initial article result cards //must take same style
    const resulte = data.map(({ multimedia, headline, abstract, web_url }) => {
      const img = `https://www.nytimes.com/${multimedia[0].url}`;
      createArticalCard(img, headline.main, abstract, web_url);
    });
  } catch (err) {
    renderError(err);
  }
};
