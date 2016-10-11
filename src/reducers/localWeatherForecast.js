const localWeatherForecast = (state={}, action) => {
  switch (action.type) {
    case 'RECEIVE_LOCAL_FORECAST':
      return Object.assign({}, state, action.forecastWeather)
    default:
      return state;
  }
}

export default localWeatherForecast;
