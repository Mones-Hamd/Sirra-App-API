import {
  SELCTED_FEELING_ID,
  SELECTED_IMAGE_ID,
  USER_INTERFACE_ID,
  // WEATHER_DATA_URL,
} from '../constant.js';
import {
  createSelectSection,
  createWelcomePage,
} from '../views/welcomeView.js';

export const initWelcomePage = () => {
  const userInterFace = document.getElementById(USER_INTERFACE_ID);
  userInterFace.innerHTML = '';
  const welcomElement = createWelcomePage();
  userInterFace.appendChild(welcomElement);
  const select = document.getElementById(SELCTED_FEELING_ID);
  select.addEventListener('input', initSelectionSection);
};
function initSelectionSection() {
  const selectionDiv = document.querySelector('.selection');
  selectionDiv.innerHTML = '';
  const userInterFace = document.getElementById(USER_INTERFACE_ID);
  const select = document.getElementById(SELCTED_FEELING_ID);
  const selected = select.value;
  const selectImage = createSelectSection(selected);
  userInterFace.append(selectImage);
  fetchSelectedApi(selected);
}
const fetchSelectedApi = (selected) => {
  const selectedImage = document.getElementById(SELECTED_IMAGE_ID);
  if (selected === 'public/img/news.png') {
    selectedImage.addEventListener('click', () => {
      //fetchApiData(WEATHER_DATA_URL);
    });
  }
  if (selected === 'public/img/jokes.png') {
    selectedImage.addEventListener('click', () => {
      console.log(selected);
    });
  }
  if (selected === 'public/img/football.png') {
    selectedImage.addEventListener('click', () => {
      console.log(selected);
    });
  }
  if (selected === 'public/img/food.png') {
    selectedImage.addEventListener('click', () => {
      console.log(selected);
    });
  }
};