import { fetchApiData } from '../../utility/fetchAPI.js';
import { foodDetailCard } from '../../views/foodView/reuseableFoodView.js';
//fetch detail of meale according to meal ID that we assigne it in previous function
//idMeal match id attribut for getrecipes btn
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
//clear previous detail page
export const clearDetail = () => {
  const detailDiv = document.getElementById('detail-card');
  detailDiv.remove();
};
