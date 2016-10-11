import React from 'react';
import { Link } from 'react-router';
// import { connect } from 'react-redux';
// import Header from '../components/Header';


const Header = ( state ) => {
  console.log(state.props.name);
  console.log(state.props.main);



  return (
    <header>
      <h1><Link to="/">Weather Tracker</Link></h1>
      <section className="header">
      <span className="currentForecast">
      {state.props.main
                        ? <ul>
                            <li>Current forecast for {state.props.name}</li>
                            <li>Temp: {Math.round(state.props.main.temp)}&#8457;</li>

                        </ul>

                        : <p>Getting Local Weather ...</p>}
      </span>
      <p><Link to="/detailedforecast">View Extended Forecast</Link></p>
      </section>
    </header>
  );
};

export default Header;
