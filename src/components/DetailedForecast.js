import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';

const mapStateToProps = (state) => {
 return state;
};

const mapDispatchToProps = (dispatch) => {
 return bindActionCreators(actionCreators, dispatch);
};

class DetailedForecast extends Component {

  render() {
    return (
      <div className="detailForecastWrapper">
      {this.props.currentWeather.main ?
        <ul>
          <li>{this.props.currentWeather.name}</li>
          <li>{Math.round(this.props.currentWeather.main.temp)}&#8457;</li>
          <li>{this.props.currentWeather.weather[0].description}</li>
          <li>Humidity: {this.props.currentWeather.main.humidity} %</li>
          <li>Pressure: {this.props.currentWeather.main.pressure} hPa</li>
          <li>Wind Speed: {this.props.currentWeather.wind.speed} mph</li>
        </ul>
        : <p>gettin' weather</p>
      }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailedForecast);
