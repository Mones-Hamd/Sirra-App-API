import { fetchApiData } from '../../utility/fetchAPI.js';
import { renderError } from '../../utility/handelErrors.js';
import { initNewPage } from '../../utility/initNewPage.js';
import { createWeatherElemnt } from '../../views/newsViews/weatherView.js';
export const initWeatherSection = () => {
  //first elemet must load ,,, initial new page
  initNewPage(createWeatherElemnt());

  fetchWeatherData();
};

const fetchWeatherData = () => {
  const timeZoneEl = document.getElementById('time-zone');
  //get user location // from you tube vedio i get this code
  let long;
  let lat;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      //add langtiude and longitude to url
      const url = `https://api.weatherapi.com/v1/current.json?key=caa182d363df452c858191906220907&q=${lat},${long}
       `;
      try {
        const data = await fetchApiData(url);
        //get weather data and show it to user
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
  //orgnaise geted data in their elements
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
