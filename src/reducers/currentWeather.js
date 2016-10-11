const currentWeather = (state, action) => {

  switch (action.type) {
    case 'RECEIVE_FORECAST':
      return Object.assign({}, state, action.receiveForecast);
    default:
      return state;
  }
};

export default currentWeather;
