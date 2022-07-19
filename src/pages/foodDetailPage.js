import { fetchApiData } from '../services/fetchAPI.js';
import { foodDetailCard } from '../views/reuseableFoodView.js';

export const initMealDetail = async (idMeal) => {
  const recipesUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  const fetchData = await fetchApiData(recipesUrl);
  const data = await fetchData.meals;
  data.map(({ strMeal, strInstructions }) =>
    foodDetailCard(strMeal, strInstructions),
  );
  const back = document.getElementById('back-food-btn');
  back.addEventListener('click', clearDetail);
};
export const clearDetail = () => {
  const detailDiv = document.getElementById('detail-card');
  const containerDiv = document.getElementById('search-container');
  containerDiv.removeChild(detailDiv);
};
