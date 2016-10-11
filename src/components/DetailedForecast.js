import React from 'react';
import DetailedCity from './DetailedCity';

const DetailedForecast = (state) => {
    return (
      <div className="detailForecastWrapper">
        <h1>Denver</h1>
        {state.localWeatherForecast.list ?
          state.localWeatherForecast.list.map(hourForecast =>
          <DetailedCity
            key={hourForecast.dt}
            date={hourForecast.dt_txt}
            temp={hourForecast.main.temp}
            condition={hourForecast.weather[0].description}
          />) : <h3> Loading Detailed Forecast...</h3>
      }
      </div>
    );
  };

export default DetailedForecast;
