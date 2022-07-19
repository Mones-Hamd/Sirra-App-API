import { fetchApiData } from '../services/fetchAPI.js';
import { initNewPage } from '../services/initNewPage.js';
import { searchBar } from '../services/searchbar.js';
import { createFoodElements } from '../views/foodView.js';
import {
  initFoodSearchResult,
  initFoodSearchSection,
} from './searchFoodPage.js';

export const initFoodPage = () => {
  const foodPageElement = createFoodElements();
  initNewPage(foodPageElement);
  const searchSection = initFoodSearchSection();
  const searchEl = document.getElementById('search-txt');
  const searchResulte = searchBar(searchEl, initFoodSearchResult);
  initRandomMeal();
};
const initRandomMeal = () => {
  const randomBtn = document.getElementById('random-food-btn');
  randomBtn.addEventListener('click', () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    initFoodSearchResult(null, url);
  });
};
