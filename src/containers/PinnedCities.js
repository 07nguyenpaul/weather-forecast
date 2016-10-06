import React, { Component } from 'react';

class PinnedCities extends Component {
  render() {
    return (
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
    )
  }
}

export default PinnedCities;
