import changeWeatherImage from './imageChanger';

const getCurrentWeatherForecast = (data) => {
  const { current_observation, forecast } = data;
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
  };
};

const getSevenHourForecast = (hourlyForecast) => {
  const sliceForecast = hourlyForecast.slice(0, 7);

  const forecastArray = sliceForecast.map(data => {
    if (data.FCTTIME.hour === '12') {
      data.FCTTIME.hour = `${data.FCTTIME.hour}:00 PM`;
    } else if (data.FCTTIME.hour > 11) {
      data.FCTTIME.hour = `${data.FCTTIME.hour - 12}:00 PM`;
    } else if (data.FCTTIME.hour === '0') {
      data.FCTTIME.hour = `12:${data.FCTTIME.hour}0 AM`;
    } else {
      data.FCTTIME.hour = `${data.FCTTIME.hour}:00 AM`;
    }

    return {
      hour: data.FCTTIME.hour,
      icon: changeWeatherImage(data.icon_url),
      temp: data.temp.english
    };
  });

  return forecastArray;
};

const getTenDayForecast = (tenDayData) => {
  const sliceForecast = tenDayData.slice(0, 10);

  const forecastArray = sliceForecast.map(data => {
    return {
      day: data.date.weekday,
      tempHigh: data.high.fahrenheit,
      tempLow: data.low.fahrenheit,
      icon: changeWeatherImage(data.icon_url)
    };
  });

  return forecastArray;
};

export { getCurrentWeatherForecast, getSevenHourForecast, getTenDayForecast };