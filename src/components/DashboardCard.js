import React, { Component } from 'react';
import { Link } from 'react-router';
import * as actionCreators from '../actions/actionCreators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const mapStateToProps = (state) => {
 return state;
};

const mapDispatchToProps = (dispatch) => {
 return bindActionCreators(actionCreators, dispatch);
};

class DashboardCard extends Component {
  zipCodeArray = ['74101', '99501', '96713']
  zipData = []

  componentDidMount() {
    this.zipCodeArray.forEach((zip) => {
      this.props.fetchZipForecast('weather', +zip)
    })
  }

  render() {
    return (
      <article className="pinnedCityCard">
      <div>
      {this.props.pinnedCities[0] ?
        <ul>
          <li className="cityName">{this.props.pinnedCities[0].name}</li>
          <li>{Math.round(this.props.pinnedCities[0].main.temp)}&#8457;</li>
          <li>{this.props.pinnedCities[0].weather[0].description}</li>
          <li>Humidity: {this.props.pinnedCities[0].main.humidity} %</li>
          <li>Pressure: {this.props.pinnedCities[0].main.pressure} mbar</li>
          <li>Wind Speed: {this.props.pinnedCities[0].wind.speed} units</li>
        </ul>
        : <p>gettin' weather</p>
      }
      </div>
      <p><Link to="/detailedforecast">View Extended Forecast >></Link></p>
      </article>
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardCard);
