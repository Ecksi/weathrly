
const getForecasts = ( cityData ) => {
  

  let currentWeatherData = getCurrentWeatherForecast(cityData)
  let sevenHourData = getSevenHourForecast(cityData.hourly_forecast)

  return {currentWeatherData: currentWeatherData, sevenHourData: sevenHourData}
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

export { getForecasts, getCurrentWeatherForecast, getSevenHourForecast };