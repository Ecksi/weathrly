const changeWeatherImage = (image) => {
  if (image === 'http://icons.wxug.com/i/c/k/cloudy.gif' ||
    image === 'http://icons.wxug.com/i/c/k/mostlycloudy.gif') {
    image = '/images/cloudy.svg';
  } else if (image === 'http://icons.wxug.com/i/c/k/partlycloudy.gif') {
    image = '/images/cloudy-day-1.svg';
  } else if (image === 'http://icons.wxug.com/i/c/k/clear.gif') {
    image = '/images/day.svg';
  } else if (image === 'http://icons.wxug.com/i/c/k/nt_clear.gif') {
    image = '/images/night.svg';
  } else if (image === 'http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif' ||
    image === 'http://icons.wxug.com/i/c/k/nt_partlycloudy.gif' ||
    image === 'http://icons.wxug.com/i/c/k/nt_cloudy.gif') {
    image = '/images/cloudy-night-2.svg';
  } else if (image === 'http://icons.wxug.com/i/c/k/nt_rain.gif' ||
    image === 'http://icons.wxug.com/i/c/k/rain.gif') {
    image = '/images/rainy-6.svg';
  } else if (image === 'http://icons.wxug.com/i/c/k/chancerain.gif' ||
    image === 'http://icons.wxug.com/i/c/k/nt_chancerain.gif') {
    image = './images/rainy-4.svg';
  } else if (image === 'http://icons.wxug.com/i/c/k/snow.gif') {
    image = '/images/snowy-6.svg';
  } else if (image === 'http://icons.wxug.com/i/c/k/nt_chancesnow.gif' ||
    image === 'http://icons.wxug.com/i/c/k/chancesnow.gif') {
    image = '/images/snowy-4.svg';
  }
  return image;
}

export default changeWeatherImage;