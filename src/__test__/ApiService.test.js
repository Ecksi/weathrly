import '../ApiService';
import {data} from '../mockData';
import {getForecasts, getCurrentWeatherForecast, getSevenHourForecast} from '../ApiService';

describe('Api Service', () => {

  describe('getForecasts', () => {
    
    it('Should return an object', () => {
      expect(typeof getForecasts(data)).toBe('object');
    })

    it('Should return key of current weather with appropriate value', () => {
      let expectedValue = {
        city: 'Louisville', 
        day: 'Tuesday', 
        temp: 46, 
        weather: 'Mostly Cloudy', 
        icon: 'http://icons.wxug.com/i/c/k/mostlycloudy.gif', 
        high: 'High ' + 51 + 'F', 
        low: 'Low ' + 32 + 'F', 
        summary: 'Mostly cloudy skies this morning will become partly cloudy this afternoon. High 11C. Winds NE at 15 to 25 km/h.'
      }

      expect(getCurrentWeatherForecast(data)).toEqual(expectedValue)
    })

    it('Should return key of 7 hour weather with appropriate value', () => {
      let expectedValue = [
        {
        hour: '12',
        icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
        temp: '47'
        }, 
        {
        hour: '13',
        icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
        temp: '49'
        },
        {
        hour: '14',
        icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
        temp: '49'
        }, 
        {
        hour: '15',
        icon: 'http://icons.wxug.com/i/c/k/clear.gif',
        temp: '51'
        }, 
        {
        hour: '16',
        icon: 'http://icons.wxug.com/i/c/k/clear.gif',
        temp: '50'
        }, 
        {
        hour: '17',
        icon: 'http://icons.wxug.com/i/c/k/clear.gif',
        temp: '48'
        }, 
        {
        hour: '18',
        icon: 'http://icons.wxug.com/i/c/k/nt_clear.gif',
        temp: '45'
        }
      ]

      expect(getSevenHourForecast(data.hourly_forecast)).toEqual(expectedValue)
    })
  })

})