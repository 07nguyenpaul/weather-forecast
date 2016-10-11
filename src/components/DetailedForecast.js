import React from 'react';
import DetailedCity from './DetailedCity';

const DetailedForecast = (state) => {
  console.log(state)

    return (
      <div className="detailForecastWrapper">
        {state.localWeatherForecast.list ?
          state.localWeatherForecast.list.map(hourForecast =>
          <DetailedCity
            key={hourForecast.id}
            date={hourForecast.dt_txt}
            temp={hourForecast.main.temp}
            condition={hourForecast.weather[0].description}
          />) : <h3> Loading Detailed Forecast...</h3>
      }
      </div>
    );
  };

export default DetailedForecast;
