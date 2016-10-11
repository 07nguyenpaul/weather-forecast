import React from 'react';
import { Link } from 'react-router';
import DashboardCard from './DashboardCard';


const Dashboard = (state) => {
  return (
    <div className="dashboardWrapper">
      <section className="cards">
      {state.pinnedCities.length > 0 ?
        state.pinnedCities.map(pinnedCity =>
          <DashboardCard
            key={pinnedCity.id}
            cityName={pinnedCity.name}
            cityTemp={Math.round(pinnedCity.main.temp)}
            cityCondition={pinnedCity.weather[0].description}
          /> )
          : <article className="addPinnedCityCard">
            <h2><Link to="/pinnedcities">➕ Pin another city</Link></h2>
          </article>
      }
      </section>
      <h3 className="editPinnedCities"><Link to="/pinnedcities">Add Pinned Cities >></Link></h3>
    </div>
  );
}

export default Dashboard;
