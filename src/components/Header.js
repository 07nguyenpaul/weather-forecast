import React from 'react';
import { Link } from 'react-router';

const Header = ({ cityName, temp, condition }) => {
  return (
    <header>
      <h1><Link to="/">Weather Tracker</Link></h1>
      <section className="header">
      <p className="currentForecast">Current forecast for {cityName}: {temp}&deg;F Conditions: {condition}</p>
      <p><Link to="/detailedforecast">View Extended Forecast</Link></p>
      </section>
    </header>
  );
};

export default Header;
