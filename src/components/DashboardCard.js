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
      {}
      </div>
      <p><Link to="/detailedforecast">View Extended Forecast</Link></p>
      </article>
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardCard);
