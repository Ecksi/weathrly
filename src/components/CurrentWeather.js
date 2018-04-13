import React from 'react';
import './styles/css/CurrentWeather.css';

const CurrentWeather = ( {currentWeatherData} ) => {
const { city, day, temp, weather, icon, high, low, summary } = currentWeatherData

return (
    <div className="currentWeather">
      <h1 className="current-city" >{city}</h1>
      <h1 className="current-day" >{day}</h1>
      <h2 className="current-temp" >{temp}</h2>
      <h2 className="current-weather" >{weather}</h2>
      <img src={icon} alt="weather" />
      <div className="high-low" className="current-spread" >
        <h2>{high}</h2>
        <h2>{low}</h2>
      </div>
      <p className="current-summary" >{summary}</p>
    </div>
  );
}

export default CurrentWeather;