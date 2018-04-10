import React from 'react';
import './styles/css/CurrentWeather.css';

const CurrentWeather = ({ data }) => {
  const { current_observation, forecast } = data;
  const { display_location, temp_f, weather, icon_url } = current_observation;
  const { txt_forecast } = forecast;
  const date = new Date();
  const day = date.getDay();
  const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];

  return (
    <div className="current-weather">
      <h1>{display_location.city}</h1>
      <h1>{daysArray[day]}</h1>
      <h2>{temp_f}</h2>
      <h2>{weather}</h2>
      <img src={icon_url} alt="weather" />
      <h2>{txt_forecast.forecastday[0].fcttext.split(`. `)[1]}</h2>
      <h2>{txt_forecast.forecastday[1].fcttext.split(`. `)[1]}</h2>
      <p>{txt_forecast.forecastday[0].fcttext_metric}</p>
    </div>
  );
}

export default CurrentWeather;