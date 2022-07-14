import { USER_INTERFACE_ID } from '../constant.js';

export const createWeatherElemnt = () => {
  const weatherDiv = document.createElement('div');
  const contanerDiv = document.createElement('div');
  contanerDiv.className = 'container';
  contanerDiv.appendChild(weatherDiv);
  weatherDiv.className = 'weather-container';
  weatherDiv.innerHTML = String.raw`
  <div class='weather-location'>
    <h1 id ='time-zone'></h1>
    <img id='icon'>
    </div> 
  <div class="tempreture">
    <h2 id='degree'> </h2>
  </div>
  <div class="status">
    <h1 id="status-txt"></h1>
  </div>
  `;

  return contanerDiv;
};
