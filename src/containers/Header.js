import React, { Component } from 'react';
import { Link } from 'react-router'

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Weather Tracker</h1>
        <section className="header">
        <p className="currentForecast">Current forecast for...</p>
        <p><Link to="/detailedcity">View Extended Forecast</Link></p>
        </section>
      </header>
    );
  }
}

export default Header;
