import { USER_INTERFACE_ID } from '../constant.js';
import { fetchApiData } from '../services/fetchAPI.js';
import { createWeatherElemnt } from '../views/weatherView.js';

export const initWeatherSection = () => {
  const userInterFace = document.getElementById(USER_INTERFACE_ID);
  userInterFace.innerHTML = '';
  const weatherElement = createWeatherElemnt();
  userInterFace.append(weatherElement);

  fetchWeatherData();
};
const fetchWeatherData = () => {
  const timeZoneEl = document.getElementById('time-zone');
  let long;
  let lat;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      const url = `http://api.weatherapi.com/v1/current.json?key=caa182d363df452c858191906220907&q=${lat},${long}
       `;

      const data = await fetchApiData(url);

      showWeatherStatus(data);
    });
  } else {
    timeZoneEl.innerHTML = 'location is unavailable';
  }
};
const showWeatherStatus = (data) => {
  const timeZoneEl = document.getElementById('time-zone');
  timeZoneEl.innerText = `${data.location['name']},${data.location['region']}`;
  const iconEl = document.getElementById('icon');
  const { condition, temp_c } = data.current;

  iconEl.src = condition.icon;
  const degree = document.getElementById('degree');

  degree.innerHTML = `${temp_c}`;
  const statusEl = document.getElementById('status-txt');
  statusEl.innerText = `${condition.text}`;
};
