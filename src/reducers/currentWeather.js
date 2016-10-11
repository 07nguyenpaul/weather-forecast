const currentWeather = (state={}, action) => {

  switch (action.type) {
    case 'RECEIVE_FORECAST':
      return Object.assign({}, state, action.currentWeather);
    default:
      return state;
  }
};

export default currentWeather;
