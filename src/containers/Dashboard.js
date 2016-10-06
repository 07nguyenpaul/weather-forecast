import React, { Component } from 'react';
import { Link } from 'react-router';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboardWrapper">
        <section>
          <article className="pinnedCityCard">
            <div>Weather data</div>
            <p><Link to="/detailedcity">View Extended Forecast</Link></p>
          </article>
          <article className="pinnedCityCard">
            <div>Weather data</div>
            <p><Link to="/detailedcity">View Extended Forecast</Link></p>
          </article>
          <article className="pinnedCityCard">
            <h2>➕ Pin another city</h2>
          </article>
        </section>
        <h3><Link to="/pinnedcities">Edit Pinned Cities</Link></h3>
      </div>
    );
  }
}

export default Dashboard;
