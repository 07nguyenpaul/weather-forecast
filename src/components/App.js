import React, { Component } from 'react';
import Header from '../containers/Header';
import { connect } from 'react-redux';
// import App from '../components/App';
import * as actionCreators from '../actions/actionCreators';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

class App extends Component {

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let currentPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        this.props.fetchByGPS('weather', currentPosition.latitude, currentPosition.longitude);
        this.props.fetchByGPSForecast('forecast', currentPosition.latitude, currentPosition.longitude);
      });
    } else {
      console.error('navigator.geolocation object not found. No geolocation services available.');
    }
  }

  render(){
    return (
      <div>
        <Header />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
