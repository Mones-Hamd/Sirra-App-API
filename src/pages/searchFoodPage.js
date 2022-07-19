import { fetchApiData } from '../services/fetchAPI.js';
import { renderError } from '../services/handelErrors.js';
import { createFoodSearchCard } from '../views/reuseableFoodView.js';
import { clearDetail, initMealDetail } from './foodDetailPage.js';

export const initFoodSearchSection = () => {
  const searchContainerEl = document.createElement('div');
  searchContainerEl.id = 'search-container';
  const foodPage = document.getElementById('food-container');
  foodPage.appendChild(searchContainerEl);
};

export const initFoodSearchResult = async (word, url) => {
  const serachEl = document.getElementById('search-container');
  serachEl.innerHTML = '';
  //make it reuseable
  let urlFinal = url;
  if (word !== null) {
    urlFinal = `https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`;
  }
  try {
    const fetchData = await fetchApiData(urlFinal);

    const data = await fetchData.meals;

    const searchResults = await data.map(
      ({ strMealThumb, strMeal, strArea, idMeal }) => {
        createFoodSearchCard(strMealThumb, strMeal, strArea, idMeal);
      },
    );

    const selectElement = document.querySelectorAll('.recipes-link');
    selectElement.forEach((select) =>
      select.addEventListener('click', () => {
        initMealDetail(select.id);
        clearDetail();
      }),
    );
  } catch (err) {
    renderError(err);
  }
};
