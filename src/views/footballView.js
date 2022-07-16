export const createFootballContainer = () => {
  const footballDiv = document.createElement('div');
  footballDiv.className = 'football-container';
  footballDiv.innerHTML = String.raw`
  <h1> Current Football Matches</h1>
  `;
  return footballDiv;
};

export const createMatchesContainer = (
  league,
  country,
  homeSrc,
  score,
  awaySrc,
  homeName,
  time,
  awayName,
) => {
  const footballDivEl = document.querySelector('.football-container');
  const matchesDiv = document.createElement('div');
  matchesDiv.className = 'match-container';
  footballDivEl.appendChild(matchesDiv);
  matchesDiv.innerHTML += `
  <h3 id="league">${league} : ${country}</h3>
  <div id='teame-title'>
    <img src=${homeSrc} id="home-team">
    <p id="sore"> ${score}</p>
    <img src=${awaySrc} id="away-team">
  </div>
  <div id="team-detail">
    <p id="home-name">${homeName}</p>
    <p id="time">min:${time}</p>
    <p id="away-name">${awayName}</p>
  </div>
  `;
};
