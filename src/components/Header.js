import React from 'react';
import { Link } from 'react-router';

const Header = ( state ) => {

  return (
    <header>
      <h1><Link to="/">Weather Tracker</Link></h1>
      <section className="header">
      <span className="currentForecast">
      {state.props.currentWeather.main
                        ? <ul>
                            <li>Current forecast for {state.props.currentWeather.name}</li>
                            <li>Temp: {Math.round(state.props.currentWeather.main.temp)}&#8457;</li>

                        </ul>

                        : <p>Getting Local Weather ...</p>}
      </span>
      <p><Link to="/detailedforecast" className="currentWeatherDetail">View Extended Forecast >></Link></p>
      </section>
    </header>
  );
};

export default Header;
