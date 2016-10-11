const pinnedCities = (state=[], action) => {

  switch (action.type) {
    case 'RECEIVE_ZIP_FORECAST':
      return state.concat(action.currentWeatherByZip);
    default:
      return state;
  }
};

export default pinnedCities;
