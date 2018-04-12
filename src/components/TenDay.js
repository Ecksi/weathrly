import React from 'react';
import Card from './Card';
import './styles/css/TenDay.css';

const TenDay = ({tenDayData}) => {
  const forecastArray = tenDayData.map( data => {
    return <Card 
      day={data.day}
      tempHigh={data.tempHigh}
      tempLow={data.tempLow}
      image={data.icon}
      />;
  })

  return (
    <div className="ten-day">
      {forecastArray}
    </div>
  );
}

export default TenDay;
