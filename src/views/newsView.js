import { ARTICAL_CARD_CONTAINER_ID, ARTICAL_SEARCH_ID } from '../constant.js';

export const createSearchArticalElement = () => {
  const searchDiv = document.createElement('div');
  searchDiv.className = 'search-artical';
  searchDiv.innerHTML = String.raw`
  <h3>Artical search </h3>
  <input type="text"
    id=${ARTICAL_SEARCH_ID} 
     placeholder="Search for Article"/>
  
  `;
  return searchDiv;
};
export const createArticalElement = () => {
  const articalDiv = document.createElement('div');
  articalDiv.className = 'artical-section';
  articalDiv.innerHTML = String.raw`
 <h1 id="title">The Most Popular Artical in NEWYORK TIME</h1>
<div id=${ARTICAL_CARD_CONTAINER_ID}>


</div>
<p id='copyright'> </p>


`;
  return articalDiv;
};
export const createArticalCard = (img, title, abstract, link) => {
  let imgsrc = img;
  if (imgsrc === undefined) {
    imgsrc = 'public/img/unknown.png';
  }
  const articalContainer = document.getElementById(ARTICAL_CARD_CONTAINER_ID);
  articalContainer.innerHTML += `
  <div class="card">
    <div class="card-body">
    <img src ="${imgsrc}">
    <div>
      <h2>${title} </h2>
      <p> ${abstract}</p>
      <a href=${link}>readmore</a>
    </div>
    </div>
  </div>
  
  `;
};
