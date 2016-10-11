import React from 'react';

const DashboardCard = ({ cityName, cityTemp, cityCondition}) => {
  return (
    <article className="pinnedCityCard">
      <div>
        <h1>{cityName}</h1>
        <p>{cityTemp}&#8457;</p>
        <p>{cityCondition}</p>
      </div>
    </article>
  );
};

export default DashboardCard;
