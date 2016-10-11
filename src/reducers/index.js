// import { receiveForecast } from '../actions/actionCreators';

const exampleReducer = (state, action) => {

  switch (action.type) {
    case 'RECEIVE_FORECAST':
      return Object.assign({}, state, action.receiveForecast);
    default:
      return state;
  }
};

export default exampleReducer;
