import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboardWrapper">
        <section>
          <article className="pinnedCityCard">
            <div>Weather data</div>
            <p><a href="#">View Extended Forecast</a></p>
          </article>
          <article className="pinnedCityCard">
            <div>Weather data</div>
            <p><a href="#">View Extended Forecast</a></p>
          </article>
          <article className="pinnedCityCard">
            <h2>➕ Pin another city</h2>
          </article>
        </section>
        <h3><a href="#">Edit Pinned Cities</a></h3>
      </div>
    );
  }
}

export default Dashboard;
