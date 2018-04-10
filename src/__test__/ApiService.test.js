import '../ApiService';
import {data} from '../mockData';
import {getForecasts, getCurrentWeatherForecast, getSevenHourForecast, getTenDayForecast } from '../ApiService';

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

    it('Should return key of current weather with appropriate value', () => {
      let expectedValue = [
        {
        day: 'Wednesday', 
        tempHigh: '51',
        tempLow: '32', 
        icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif'
        },
        {
        day: 'Thursday', 
        tempHigh: '55',
        tempLow: '51', 
        icon: 'http://icons.wxug.com/i/c/k/clear.gif'
        },
        {
        day: 'Friday', 
        tempHigh: '57',
        tempLow: '44', 
        icon: 'http://icons.wxug.com/i/c/k/chancerain.gif'
        },
        {
        day: 'Saturday', 
        tempHigh: '47',
        tempLow: '30', 
        icon: 'http://icons.wxug.com/i/c/k/rain.gif'
        },
        {
        day: 'Sunday', 
        tempHigh: '37',
        tempLow: '22', 
        icon: 'http://icons.wxug.com/i/c/k/cloudy.gif'
        },
        {
        day: 'Monday', 
        tempHigh: '35',
        tempLow: '19', 
        icon: 'http://icons.wxug.com/i/c/k/clear.gif'
        },
        {
        day: 'Tuesday', 
        tempHigh: '32',
        tempLow: '20', 
        icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif'
        },
        {
        day: 'Wednesday', 
        tempHigh: '33',
        tempLow: '26', 
        icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif'
        },
        {
        day: 'Thursday', 
        tempHigh: '35',
        tempLow: '23', 
        icon: 'http://icons.wxug.com/i/c/k/snow.gif'
        }, 
        {
        day: 'Friday', 
        tempHigh: '31',
        tempLow: '18', 
        icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif'
        }             
      ]

      expect(getTenDayForecast(data.forecast.simpleforecast.forecastday)).toEqual(expectedValue)
    })
  })

})