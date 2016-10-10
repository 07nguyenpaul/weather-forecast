import { RECEIVE_FORECAST } from '../actions/actionCreators';

const exampleReducer = (state = [], action) => {
  console.log("this will change");
  console.log(state, action);
  return state;
  
  // switch (action.type) {
  //   case 'RECEIVE_FORECAST':
  //     return action.forecastData;
  //   case 'SHOW_DATA':
  //     return action.dummyData;
  //   default:
  //     return state;
  // }
};

export default exampleReducer;
