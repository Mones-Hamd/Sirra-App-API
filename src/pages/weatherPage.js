import { fetchApiData } from '../services/fetchAPI.js';
import { renderError } from '../services/handelErrors.js';
import { initNewPage } from '../services/initNewPage.js';
import { createWeatherElemnt } from '../views/weatherView.js';

export const initWeatherSection = () => {
  initNewPage(createWeatherElemnt());

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
      const url = `https://api.weatherapi.com/v1/current.json?key=caa182d363df452c858191906220907&q=${lat},${long}
       `;
      try {
        const data = await fetchApiData(url);

        showWeatherStatus(data);
      } catch (err) {
        renderError(err);
      }
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

  degree.innerText = `${temp_c} c`;
  const statusEl = document.getElementById('status-txt');
  statusEl.innerText = `${condition.text}`;
};
