const pinnedWeather = (state = {}, action) => {

  switch (action.type) {

    case 'RECEIVE_PINNED_WEATHER':
      return [...state, Object.assign({}, action.pinnedWeather)];

    default:
      return state;
  }
};

export default pinnedWeather;
