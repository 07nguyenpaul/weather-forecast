import React, { Component } from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <header>
      <h1><Link to="/">Weather Tracker</Link></h1>
      <section className="header">
      <p className="currentForecast">Current forecast for...</p>
      <p><Link to="/detailedforecast">View Extended Forecast</Link></p>
      </section>
    </header>
  );
};

export default Header;
