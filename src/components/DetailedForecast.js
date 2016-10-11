import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';

const DetailedForecast = (state) => {

    return (
      <div className="detailForecastWrapper">
      {state.currentWeather.main ?
        <ul>
          <li>{state.currentWeather.name}</li>
          <li>{Math.round(state.currentWeather.main.temp)}&#8457;</li>
          <li>{state.currentWeather.weather[0].description}</li>
          <li>Humidity: {state.currentWeather.main.humidity} %</li>
          <li>Pressure: {state.currentWeather.main.pressure} hPa</li>
          <li>Wind Speed: {state.currentWeather.wind.speed} mph</li>
        </ul>
        : <p>gettin weather</p>
      }
      </div>
    );
  };

export default DetailedForecast;
