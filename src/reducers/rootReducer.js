import {combineReducers} from 'redux';
import currentWeather from './currentWeather';
import pinnedCities from './pinnedCities';

const rootReducer = combineReducers({ currentWeather, pinnedCities });

export default rootReducer;
