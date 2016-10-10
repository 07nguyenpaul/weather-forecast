import React from 'react';
import { Link } from 'react-router';

const DashboardCard = (props) => {
  return (
    <article className="pinnedCityCard">
      <div>Weather data</div>
      <p><Link to="/detailedforecast">View Extended Forecast</Link></p>
    </article>
  );
};

export default DashboardCard;
