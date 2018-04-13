import apikey from './private/apikey';

const getForecasts = ( state, cityName ) => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/'
  const url = 'https://api.wunderground.com/api/'
  const city = `/conditions/geolookup/hourly/forecast10day/q/${state}/${cityName}.json`;

  return fetch(proxyurl + url + apikey + city)
    .then(res => res.json())
    .catch(err => console.log(err));
}

const getCurrentWeatherForecast = (data) => {
  const { current_observation, forecast } = data; //make all this inline
  const { display_location, temp_f, weather, icon_url } = current_observation;
  const { txt_forecast } = forecast;
  const date = new Date();
  const day = date.getDay();
  const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];
  
  return {
    city: display_location.city, 
    day: daysArray[day], 
    temp: temp_f, 
    weather: weather, 
    icon: icon_url, 
    high: txt_forecast.forecastday[0].fcttext.split(`. `)[1], 
    low: txt_forecast.forecastday[1].fcttext.split(`. `)[1], 
    summary: txt_forecast.forecastday[0].fcttext_metric
  }
}

const getSevenHourForecast = (hourlyForecast) => {
  const sliceForecast = hourlyForecast.slice(0, 7);
  const forecastArray = sliceForecast.map( data => {
    return {
      hour: data.FCTTIME.hour,
      icon: data.icon_url,
      temp: data.temp.english
    }
  })
  return forecastArray
}

const getTenDayForecast = (tenDayData) => {
  const sliceForecast = tenDayData.slice(0, 10);
  const forecastArray = sliceForecast.map( data => {
    return {
      day: data.date.weekday,
      tempHigh: data.high.fahrenheit,
      tempLow: data.low.fahrenheit,
      icon: data.icon_url
    };
  })
  return forecastArray
}

export { getForecasts, getCurrentWeatherForecast, getSevenHourForecast, getTenDayForecast };