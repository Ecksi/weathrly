import React from 'react';
import './styles/css/CurrentWeather.css';
import changeWeatherImage from '../imageChanger.js';

const CurrentWeather = ({ props }) => {
  const { city, day, temp, weather, icon, high, low, summary } = props

  return (
    <div className="currentWeather">
      <h1 className="current-day" >{day}</h1>
      <h1 className="current-city" >{city}</h1>
      <div className="current-outside">
        <h2 className="current-temp" >{temp} &#176;</h2>
        <h2 className="current-weather" >{weather}</h2>
      </div>
      <img className="current-icon" src={changeWeatherImage(icon)} alt="weather" />
      <div className="current-spread">
        <h2 className="current-high">{high}</h2>
        <h2 className="current-low">{low}</h2>
      </div>
      <p className="current-summary" >{summary}</p>
    </div>
  );
}

export default CurrentWeather;