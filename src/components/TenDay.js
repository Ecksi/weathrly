import React from 'react';
import Card from './Card';
import './styles/scss/TenDay.scss';

const TenDay = ({ data }) => {
  const { forecastday } = data.forecast.simpleforecast;
  const sliceForecast = forecastday.slice(0, 9);
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
