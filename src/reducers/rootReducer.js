import {combineReducers} from 'redux';
import currentWeather from './currentWeather';
import pinnedCities from './pinnedCities';
import localWeatherForecast from './localWeatherForecast';

const rootReducer = combineReducers({ currentWeather,
                                      pinnedCities,
                                      localWeatherForecast
                                    });

export default rootReducer;
