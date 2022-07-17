import { fetchApiData } from '../services/fetchAPI.js';
import { renderError } from '../services/handelErrors.js';
import { initNewPage } from '../services/initNewPage.js';
import {
  createFootballContainer,
  createMatchesContainer,
} from '../views/footballView.js';

export const initiFootballPage = () => {
  initNewPage(createFootballContainer());
  initCurrentMatches();
};

const initCurrentMatches = async () => {
  const footballUrl =
    'https://apiv2.allsportsapi.com/football/?met=Livescore&timezone=Europe/Berlin&APIkey=75e48fb3c88551b807c1bec340ad3961bceb698567681ab89f400e20239a8d4a';
  try {
    const fetchCurrentMaches = await fetchApiData(footballUrl);
    const currentMatchesData = await fetchCurrentMaches.result;
    currentMatchesData.map(
      ({
        league_name,
        country_name,
        home_team_logo,
        event_final_result,
        away_team_logo,
        event_home_team,
        event_status,
        event_away_team,
      }) => {
        let homeSrc = home_team_logo;
        let awaySrc = away_team_logo;
        if (league_name === 'Youth Championship - Regular Season') {
          homeSrc = 'public/img/unknown.png';
          awaySrc = 'public/img/unknown.png';
        }

        createMatchesContainer(
          league_name,
          country_name,
          homeSrc,
          event_final_result,
          awaySrc,
          event_home_team,
          event_status,
          event_away_team,
        );
      },
    );
  } catch (err) {
    renderError(err);
  }
};
