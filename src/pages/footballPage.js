import { USER_INTERFACE_ID } from '../constant.js';
import { fetchApiData } from '../services/fetchAPI.js';
import {
  createFootballContainer,
  createMatchesContainer,
} from '../views/footballView.js';

export const initiFootballPage = () => {
  const userInterFace = document.getElementById(USER_INTERFACE_ID);
  userInterFace.innerHTML = '';
  const footballContainerEL = createFootballContainer();
  userInterFace.appendChild(footballContainerEL);
  initCurrentMatches();
};
const initCurrentMatches = async () => {
  const footballUrl =
    'https://apiv2.allsportsapi.com/football/?met=Livescore&timezone=Europe/Berlin&APIkey=75e48fb3c88551b807c1bec340ad3961bceb698567681ab89f400e20239a8d4a';
  const fetchCurrentMaches = await fetchApiData(footballUrl);
  const currentMatchesData = fetchCurrentMaches.result;
  currentMatchesData.forEach((currentMatcheData) => {
    const league = currentMatcheData['league_name'];
    const country = currentMatcheData['country_name'];
    let homeSrc = currentMatcheData['home_team_logo'];
    const score = currentMatcheData['event_final_result'];
    let awaySrc = currentMatcheData['away_team_logo'];
    const homeName = currentMatcheData['event_home_team'];
    const time = currentMatcheData['event_status'];
    const awayName = currentMatcheData['event_away_team'];
    if (league === 'Youth Championship - Regular Season') {
      homeSrc = 'public/img/unknown.png';
      awaySrc = 'public/img/unknown.png';
    }

    createMatchesContainer(
      league,
      country,
      homeSrc,
      score,
      awaySrc,
      homeName,
      time,
      awayName,
    );
  });
};
