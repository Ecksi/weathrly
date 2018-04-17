import React from 'react';
import Card from './Card';
import './styles/css/SevenHour.css';

const SevenHour = ({ props }) => {
  const forecastArray = props.map(data => {
    return <Card
      hour={data.hour}
      image={data.icon}
      temp={data.temp}
      call='7-hour'
    />;
  })

  return (
    <div className="seven-hour">
      {forecastArray}
    </div>
  );
}

export default SevenHour;
