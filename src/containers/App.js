import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Weather Tracker</h1>
          <section>
            <p>Current forecast for...</p>
            <p><a href="#">View Extended Forecast</a></p>
          </section>
        </header>
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
        <div className="settingsPageWrapper">
          <section className="pinnedCities">
            <h3>Pinned Cities:</h3>
              <ul>
                <li>Pompeii</li>
                <li>Atlantis</li>
              </ul>
            <section className="newCityForm">
              <input type="number" placeholder="Zip Code" />
              <button>Pin New City</button>
            </section>
          </section>
        </div>
        <div className="detailForecastWrapper">
          <section>5 day/3 hour forecast for selected city</section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // return an object of redux store data
  // that you'd like available in your component
  return {};
}

export default connect(mapStateToProps)(App)
