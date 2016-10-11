import React, { Component } from 'react';
import { Link } from 'react-router';
import DashboardCard from './DashboardCard';

const Dashboard = () => {
  return (
    <div className="dashboardWrapper">
      <section className="cards">
        <DashboardCard />
        <article className="pinnedCityCard">
          <h2>➕ Pin another city</h2>
        </article>
      </section>
      <h3><Link to="/pinnedcities">Edit Pinned Cities</Link></h3>
    </div>
  );
}

export default Dashboard;
