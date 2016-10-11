import React, { Component } from 'react';

class PinnedCitiesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
       zipCode: '',
    };
  }

  handleInput(e) {
    const zipCodeInput = e.target.value;
    this.setState({ zipCode: zipCodeInput });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      zipCode: '',
    });
  }

  render() {
    return (
      <div className="settingsPageWrapper">
        <section className="pinnedCities">
          <h3>Pinned Cities:</h3>
            <ul>
              <li>Hana</li>
              <li>Anchorage</li>
              <li>Broken Arrow</li>
            </ul>
          <form className="newCityForm" onSubmit={this.handleSubmit.bind(this)}>
            <input
              className="zipInput"
              type="number"
              placeholder="Zip Code"
              value={this.state.zipCode}
              onChange={this.handleInput.bind(this)}
            />
            <input
              type="submit"
              value="Add New City"
              disabled={!this.state.zipCode}
            />
          </form>
        </section>
      </div>
    );
  }
}

export default PinnedCitiesList;
