export const RECEIVE_FORECAST = 'RECEIVE_FORECAST'

export const receiveForecast = (forecastData) => ({
  type: RECEIVE_FORECAST,
  forecastData,
  data: do something to the weater data
});

export const fetchZipForecast = forecastType, zip, key => dispatch => {
  let key = '391d9430997a4787c74ca34ca02f4dc1';
  return fetch(`http://api.openweathermap.org/data/2.5/${forecastType}?zip=${zip},us&APPID=${key}`)
        .then(response =>response.json())
        .then(json => dispatch(receiveForecast(zip, json)));
};
