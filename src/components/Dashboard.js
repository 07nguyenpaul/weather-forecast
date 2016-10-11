import React from 'react';
import { Link } from 'react-router';
import DashboardCard from './DashboardCard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';

const mapStateToProps = (state) => {
 return state;
};

const mapDispatchToProps = (dispatch) => {
 return bindActionCreators(actionCreators, dispatch);
};

const Dashboard = (props) => {
  return (
    <div className="dashboardWrapper">
      <section className="cards">
        <DashboardCard props={props} />
        <DashboardCard props={props} />
        <article className="addPinnedCityCard">
          <h2><Link to="/pinnedcities">➕ Pin another city</Link></h2>
        </article>
      </section>
      <h3 className="editPinnedCities"><Link to="/pinnedcities">Edit Pinned Cities >></Link></h3>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
