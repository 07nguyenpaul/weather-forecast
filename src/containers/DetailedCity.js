import React, { Component } from 'react';
import SingleCity from './SingleCityForcast';

const DetailedCity = React.createClass({
  render() {
    return (
      <div className="detailForecastWrapper">
        <section>5 day/3 hour forecast for selected city</section>
        {/* <pre>
        {JSON.stringify(this.props.dummyData, null, ' ')}
        </pre> */}
        {this.props.dummyData.data.map((data, i) => <SingleCity {...this.props} key={i} index={i} data={data}/>)}
      </div>
    );
  }
});

export default DetailedCity;
