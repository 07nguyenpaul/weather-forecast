import React, { Component } from 'react';
import store from '../index';
import { dispatch } from 'redux';

const DetailedCity = ({data}) => {

    console.log(data)
    return (
      <div className="detailForecastWrapper">
        <section>5 day/3 hour forecast for selected city</section>
      </div>
    );
}

export default DetailedCity;
