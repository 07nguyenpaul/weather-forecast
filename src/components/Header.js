import React from 'react';
import { Link } from 'react-router';

const Header = ( state ) => {

  return (
    <header>
      <h1><Link to="/">Weather Tracker</Link></h1>
      <section className="header">
        <span className="currentForecast">
          {state.currentWeather.main
            ? <ul>
                <li>Current forecast for {state.currentWeather.name}</li>
                <li>Temp: {Math.round(state.currentWeather.main.temp)}&#8457;</li>
                <li>Condition: {state.currentWeather.weather[0].description}</li>
              </ul>
            : <p className="loadingMessage">Getting Local Weather ...</p>}
        </span>
        <p>
          <Link to="/detailedforecast" className="currentWeatherDetail">View Extended Forecast >></Link>
        </p>
      </section>
    </header>
  );
};

export default Header;
