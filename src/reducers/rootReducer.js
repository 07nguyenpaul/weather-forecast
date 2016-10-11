import { combineReducers } from 'redux';
import currentWeather from './currentWeather';
import localWeatherForecast from './localWeatherForecast';
import pinnedWeather from './pinnedWeather';

const rootReducer = combineReducers({
  currentWeather,
  localWeatherForecast,
  pinnedWeather,
});

export default rootReducer;
