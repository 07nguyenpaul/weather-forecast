import React from 'react';

const DetailedCity = ({ date, temp, condition }) => {
  return (
    <article className="pinnedCityCard">
    <div>
      <h1>{date}</h1>
      <h2></h2>
      <p>{temp}&#8457;</p>
      <p>{condition}</p>
    </div>
    </article>
  );
};

export default DetailedCity;
