import apikey from './private/apikey';

const getForecasts = ( state, cityName ) => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/'
  const url = 'https://api.wunderground.com/api/'
  const city = `/conditions/geolookup/hourly/forecast10day/q/${state}/${cityName}.json`;

  return fetch(proxyurl + url + apikey + city)
    .then(res => res.json())
    .catch(err => console.log(err));
}

export default getForecasts;