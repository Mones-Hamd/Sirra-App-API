import { USER_INTERFACE_ID } from '../constant.js';
import { fetchApiData } from '../services/fetchAPI.js';
import { createArticalElement, createArticalCard } from '../views/newsView.js';

export const initArticalCards = async () => {
  const userInterFace = document.getElementById(USER_INTERFACE_ID);
  const aritcalElement = createArticalElement();
  userInterFace.appendChild(aritcalElement);
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
