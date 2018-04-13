import React from 'react';
import Card from './Card';
import './styles/css/SevenHour.css';

const SevenHour = ({ sevenHourData }) => {
  const forecastArray = sevenHourData.map( data => {
    if (data.hour > 11) {
      return <Card
        hour={`${data.hour - 12}:00 PM`}
        image={data.icon}
        temp={data.temp + 'F'}
        call='7-hour'
      />;
    } else if (data.hour === '0') {
      return <Card
        hour={`12:${data.hour}0 AM`}
        image={data.icon}
        temp={data.temp + 'F'}
        call='7-hour'
      />;
    }
    return <Card 
      hour={data.hour + ':00 AM'}
      image={data.icon}
      temp={data.temp + 'F'}
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
