export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';
import dummyData from '../data/dummyData';
// import store from '../index';

export const receiveForecast = forecastData => {
  return {
    type: 'RECEIVE_FORECAST',
    forecastData
  };
};

export const fetchZipForecast = (forecastType, zip, key='391d9430997a4787c74ca34ca02f4dc1') => dispatch => {
  return fetch(`http://api.openweathermap.org/data/2.5/${forecastType}?zip=${zip},us&APPID=${key}`)
        .then(response =>response.json())
        .then(json => dispatch(receiveForecast(json)));
};

export const Forcast = function fetchForcast() {
  return dispatch => {
    setTimeout(() => {
      dispatch(receiveForecast());
    }, 3000);
  };
}

// function getMeAnAPI(code) {
//   return function(dispatch) {
//     return receiveForecast().then(
//
//     )
//   }
// }

export const showDummyData = (dummyData) => {
  return {
    type: 'SHOW_DATA',
    dummyData
  };
};
