const API_KEY='391d9430997a4787c74ca34ca02f4dc1';

export const receiveForecast = forecastData => {
  return {
    type: 'RECEIVE_FORECAST',
    currentWeather: forecastData
  };
};

export const receiveForecastByZip = forecastData => {
  return {
    type: 'RECEIVE_ZIP_FORECAST',
    currentWeatherByZip: forecastData
  };
};

export const receiveLocalForecast = forecastData => {
  return {
    type: 'RECEIVE_LOCAL_FORECAST',
    forecastWeather: forecastData
  };
};

export const fetchZipForecast = (forecastType, zip, key=API_KEY) => dispatch => {
  return fetch(`http://api.openweathermap.org/data/2.5/${forecastType}?zip=${zip},us&APPID=${key}&units=imperial`)
        .then(response =>response.json())
        .then(json => dispatch(receiveForecastByZip(json)));
};

export const fetchByGPS = (forecastType, lat, long, key=API_KEY) => dispatch => {
  return fetch(`http://api.openweathermap.org/data/2.5/${forecastType}?lat=${lat}&lon=${long}&APPID=${key}&units=imperial`)
        .then(response =>response.json())
        .then(json => dispatch(receiveForecast(json)));
};

export const fetchByGPSForecast = (forecastType, lat, long, key= API_KEY) => (dispatch) => {
  return fetch(`http://api.openweathermap.org/data/2.5/${forecastType}?lat=${lat}&lon=${long}&APPID=${key}&units=imperial`)
  .then(response => response.json())
  .then(json => dispatch(receiveLocalForecast(json)));
};
