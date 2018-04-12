import React from 'react'
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import Search from './Search';
import TenDay from './TenDay';

const WeatherComponent = (props) => {
  return (
    <div>
      <CurrentWeather 
          currentWeatherData={props.currentWeatherData} />
      <SevenHour 
        sevenHourData={props.sevenHourData} />
      <TenDay 
        tenDayData={props.tenDayData}/> 
    </div>
  )
}

export default WeatherComponent;