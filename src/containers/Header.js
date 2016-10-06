import React, { Component } from 'react';
import { Link } from 'react-router'

class Header extends Component {
  render() {
    return (
      <header>
        <h1><Link to="/">Weather Tracker</Link></h1>
        <section className="header">
        <p className="currentForecast">Current forecast for...</p>
        <p><Link to="/detailedcity">View Extended Forecast</Link></p>
        </section>
      </header>
    );
  }
}

export default Header;
