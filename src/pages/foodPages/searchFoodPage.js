import { fetchApiData } from '../../utility/fetchAPI.js';
import { renderError } from '../../utility/handelErrors.js';
import { createFoodSearchCard } from '../../views/foodView/reuseableFoodView.js';
import { clearDetail, initMealDetail } from './foodDetailPage.js';
//initital card section for search result and random meal
export const initFoodSearchSection = () => {
  const searchContainerEl = document.createElement('div');
  searchContainerEl.id = 'search-container';
  const foodPage = document.getElementById('food-container');
  foodPage.appendChild(searchContainerEl);
};
//reusabl function to fetch data from passed url
export const initFoodSearchResult = async (word, url) => {
  const serachEl = document.getElementById('search-container');
  serachEl.innerHTML = '';
  //make it reuseable
  let urlFinal = url;
  if (word) {
    urlFinal = `https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`;
  }
  try {
    const fetchData = await fetchApiData(urlFinal);

    const data = fetchData.meals;
    //initial meal card
    const searchResults = data.map(
      ({ strMealThumb, strMeal, strArea, idMeal }) => {
        createFoodSearchCard(strMealThumb, strMeal, strArea, idMeal);
      },
    );
    //inititail get recipies btn's  to creat page of details // clear previous detail pgae
    const selectElements = document.querySelectorAll('.recipes-link');
    selectElements.forEach((select) =>
      select.addEventListener('click', () => {
        initMealDetail(select.id);
        clearDetail();
      }),
    );
  } catch (err) {
    renderError(err);
  }
};
