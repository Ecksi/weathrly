import React from 'react';
import Card from './Card';
import './styles/css/TenDay.css';

const TenDay = ({forecastDay}) => {
  const sliceForecast = forecastDay.slice(0, 10);
  const forecastArray = sliceForecast.map( data => {
    return <Card 
      day={data.date.weekday}
      tempHigh={data.high.fahrenheit}
      tempLow={data.low.fahrenheit}
      image={data.icon_url}
            />;
    })

  return (
    <div className="ten-day">
      {forecastArray}
    </div>
  );
}

export default TenDay;
