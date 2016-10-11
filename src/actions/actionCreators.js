import fetch from 'isomorphic-fetch';

export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';
// import dummyData from '../data/dummyData';
// import store from '../index';

const API_KEY='391d9430997a4787c74ca34ca02f4dc1';

export const receiveForecast = forecastData => {
  console.log('receiveForecast');
  return {
    type: 'RECEIVE_FORECAST',
    currentWeather: forecastData
  };
};

export const fetchZipForecast = (forecastType, zip, key=API_KEY) => dispatch => {
  return fetch(`http://api.openweathermap.org/data/2.5/${forecastType}?zip=${zip},us&APPID=${key}`)
        .then(response =>response.json())
        .then(json => dispatch(receiveForecast(json)));
};

export const fetchByGPS = (forecastType, lat, long, key=API_KEY) => dispatch => {
  console.log('fetchbyGPS');
  return fetch(`api.openweathermap.org/data/2.5/${forecastType}?lat=${lat}&lon=${long}&APPID=${key}`)
        .then(response =>response.json())
        .then(json => dispatch(receiveForecast(json)));
};


// export const getLatAndLong() => dispatch => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       let currentPosition = {
//         latitude: position.coords.latitude,
//         longitude: position.coords.longitude
//       }
//       return currentPosition;
//
//   });
//   } else {
//     console.error('navigator.geolocation object not found. No geolocation services available.')
//   }
// }
// export const showDummyData = (dummyData) => {
//   return {
//     type: 'SHOW_DATA',
//     dummyData
//   };
// };
