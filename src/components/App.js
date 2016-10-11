import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
// import App from '../components/App';
import * as actionCreators from '../actions/actionCreators';
import { bindActionCreators } from 'redux';
// import { fetchByGPS } from '../actions/actionCreators';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

class App extends Component {



  getLatAndLong() {
    // let currentPosition = {
    //   latitude: null,
    //   longitude: null
    // };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        let currentPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
        return currentPosition;

    });
    } else {
      console.error('navigator.geolocation object not found. No geolocation services available.')
    }
  }

  // currentpos = this.getLatAndLong();

  componentDidMount() {
    this.getLatAndLong();
    this.props.fetchZipForecast('forecast', '80013')
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
