import React from 'react';
import Card from './Card';
import './styles/css/SevenHour.css';

const SevenHour = ({ data }) => {
  const { hourly_forecast } = data;
  const sliceForecast = hourly_forecast.slice(0, 7);
  const forecastArray = sliceForecast.map( data => {
    return <Card 
      hour={data.FCTTIME.hour}
      image={data.icon_url}
      temp={data.temp.english}
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
