import { initNewPage } from '../../utility/initNewPage.js';
import { searchBar } from '../../utility/searchbar.js';
import { createFoodElements } from '../../views/foodView/foodView.js';
import {
  initFoodSearchResult,
  initFoodSearchSection,
} from './searchFoodPage.js';
//initial new page and render header for food page
export const initFoodPage = () => {
  const foodPageElement = createFoodElements();
  initNewPage(foodPageElement);
  const searchSection = initFoodSearchSection();
  const searchEl = document.getElementById('search-txt');
  const searchResulte = searchBar(searchEl, initFoodSearchResult);
  initRandomMeal();
};
// add event listner to random btn
const initRandomMeal = () => {
  const randomBtn = document.getElementById('random-food-btn');
  randomBtn.addEventListener('click', () => {
    //url get random meal to pass it in reusable function to create meal card
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    initFoodSearchResult(null, url);
  });
};
