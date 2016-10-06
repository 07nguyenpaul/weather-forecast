import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <header>
        <h1>Weather Tracker</h1>
        <section className="header">
        <p className="currentForecast">Current forecast for...</p>
        <p><a className="extendedForecastHeaderLink" href="#">View Extended Forecast</a></p>
        </section>
      </header>
    );
  }
}

export default Main;
