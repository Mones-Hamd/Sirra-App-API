import {
  MONITOR_JOKE_CONTAINER_ID,
  SIRRA_JOKE_ID,
  SIRRA_JOKE_TXT_ID,
  JOKE_TXT_ID,
  RANDOM_JOKE_BUTTON_ID,
  FACT_BUTTON_ID,
} from '../constant.js';

export const createJokeElements = () => {
  const containerJokDiv = document.createElement('div');
  containerJokDiv.className = 'container-jokes';
  containerJokDiv.innerHTML = String.raw`
<div id=${SIRRA_JOKE_ID}> 
  <p id=${SIRRA_JOKE_TXT_ID}> Guess who SIRRA is !?.. <br> i am Siri's cousin, but i am much more lazy than her <br></p>
</div>
<div id=${MONITOR_JOKE_CONTAINER_ID}>

  <p id=${JOKE_TXT_ID}> </p>

</div>
<div id ='random-btn-container'> 
  <p id=${RANDOM_JOKE_BUTTON_ID}> random joke</p>
  <p id=${FACT_BUTTON_ID}> random true usless fact</p>
</div>

`;
  return containerJokDiv;
};
