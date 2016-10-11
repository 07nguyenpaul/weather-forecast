import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
// import App from '../components/App';
import * as actionCreators from '../actions/actionCreators';
import { bindActionCreators } from 'redux';
import { fetchByGPS } from '../actions/actionCreators';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

class App extends Component {

  getLatAndLong() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        let currentPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        fetchByGPS('weather', currentPosition.latitude, currentPosition.longitude);

    });
    } else {
      console.error('navigator.geolocation object not found. No geolocation services available.')
    }
  }

  // currentpos = this.getLatAndLong();

  componentDidMount() {
    this.getLatAndLong();
  }

  render(){
    return (
      <div>
        <Header />
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
