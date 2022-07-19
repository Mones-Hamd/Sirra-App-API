import { getName } from '../../lib/localStorage.js';

export const createFoodElements = () => {
  const name = getName();
  const foodDiv = document.createElement('div');
  foodDiv.id = 'food-container';
  const foodHeader = document.createElement('header');
  foodHeader.className = 'food-header';
  foodHeader.innerHTML = String.raw`
  <div id="Sirra-res-txt">
    <h1> SIRRA RESTURANT</h1>
    <h3> Welcome Mr/Mrs ${name.toUpperCase()} , you look so hungry let me help you .</h3>
  </div>
  <div id="list-container">
    <ul id='list'>
      <li id='search'> our Chef is ready to show all recipes you want <input type='text' id="search-txt" placeholder="search for recipes"></li>
      <li id='random'> if you are confused he can suggest you a random meal <p id="random-food-btn"> random meale pls</p>
  </div>
  `;
  foodDiv.appendChild(foodHeader);
  return foodDiv;
};
