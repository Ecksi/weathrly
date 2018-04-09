import React from 'react';
import './styles/scss/CurrentWeather.scss';

const CurrentWeather = ({ data }) => {
  const { current_observation, forecast } = data;
  const { display_location, temp_f, weather, icon_url } = current_observation;
  const { txt_forecast } = forecast;
  
  return (
    <div className="current-weather">
      <h1>{display_location.city}</h1>
      <h2>{temp_f}</h2>
      <h2>{weather}</h2>
      <img src={icon_url} alt="weather" />
      <h2>{txt_forecast.forecastday[0].fcttext.split(`. `)[1]}</h2>
      <h2>{txt_forecast.forecastday[1].fcttext.split(`. `)[1]}</h2>
    </div>
  );
}

export default CurrentWeather;