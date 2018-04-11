import React from 'react';
import './styles/css/CurrentWeather.css';

const CurrentWeather = ( {currentWeatherData} ) => {
const { city, day, temp, weather, icon, high, low, summary } = currentWeatherData

return (
    <div className="current-weather">
      <h1>{city}</h1>
      <h1>{day}</h1>
      <h2>{temp}</h2>
      <h2>{weather}</h2>
      <img src={icon} alt="weather" />
      <h2>{high}</h2>
      <h2>{low}</h2>
      <p>{summary}</p>
    </div>
  );
}

export default CurrentWeather;