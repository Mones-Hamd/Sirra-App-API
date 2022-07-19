export const createFoodSearchCard = (imgSrc, title, place, idMeal) => {
  const searchContainer = document.getElementById('search-container');
  const searchCards = document.createElement('div');
  searchCards.className = 'food-card';
  searchCards.innerHTML += String.raw`
  <div class='card-food-body'>
    <div class='card-food-img'>
      <img src=${imgSrc}>
    </div>
    <div class='card-food-txt'>
      <h3>${title}</h3>
      <p>${place}</p>
    </div>
    <div class='recipes-link' id='${idMeal}'>
      <h4>GET RECIPIES</h4>
    </div>
  </div>
  `;
  searchContainer.appendChild(searchCards);
};
export const foodDetailCard = (title, instruction) => {
  const searchContainer = document.getElementById('search-container');
  const detailCard = document.createElement('div');
  detailCard.id = 'detail-card';
  detailCard.innerHTML = String.raw`
  <div class='meal-deatil'>
  <p id='back-food-btn'>Back</p>
    <div class='meal-title'>
      <h2>${title}</h2>
    </div>
    <div class="instruction">
    <h3> instractions:</h3>
    <p>${instruction}</p>
    </div>
    
  <div>
  `;
  searchContainer.appendChild(detailCard);
};
