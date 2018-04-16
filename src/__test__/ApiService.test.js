import '../ApiService';
import {data} from '../mockData';
import {getForecasts, getCurrentWeatherForecast, getSevenHourForecast, getTenDayForecast } from '../ApiService';

describe('Api Service', () => {

  describe('getForecasts', () => {

    it('Should return key of current weather with appropriate value', () => {
      let expectedValue = {
        city: 'Louisville', 
        day: 'Monday', 
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
        hour: '12:00 PM',
        icon: '/images/cloudy-day-1.svg',
        temp: '47'
        }, 
        {
        hour: '1:00 PM',
        icon: '/images/cloudy-day-1.svg',
        temp: '49'
        },
        {
        hour: '2:00 PM',
        icon: '/images/cloudy-day-1.svg',
        temp: '49'
        }, 
        {
        hour: '3:00 PM',
        icon: '/images/day.svg',
        temp: '51'
        }, 
        {
        hour: '4:00 PM',
        icon: '/images/day.svg',
        temp: '50'
        }, 
        {
        hour: '5:00 PM',
        icon: '/images/day.svg',
        temp: '48'
        }, 
        {
        hour: '6:00 PM',
        icon: '/images/night.svg',
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
        icon: '/images/cloudy-day-1.svg'
        },
        {
        day: 'Thursday', 
        tempHigh: '55',
        tempLow: '51', 
        icon: '/images/day.svg'
        },
        {
        day: 'Friday', 
        tempHigh: '57',
        tempLow: '44', 
          icon: './images/rainy-4.svg'
        },
        {
        day: 'Saturday', 
        tempHigh: '47',
        tempLow: '30', 
        icon: '/images/rainy-6.svg'
        },
        {
        day: 'Sunday', 
        tempHigh: '37',
        tempLow: '22', 
        icon: '/images/cloudy.svg'
        },
        {
        day: 'Monday', 
        tempHigh: '35',
        tempLow: '19', 
        icon: '/images/day.svg'
        },
        {
        day: 'Tuesday', 
        tempHigh: '32',
        tempLow: '20', 
        icon: '/images/cloudy-day-1.svg'
        },
        {
        day: 'Wednesday', 
        tempHigh: '33',
        tempLow: '26', 
        icon: '/images/cloudy-day-1.svg'
        },
        {
        day: 'Thursday', 
        tempHigh: '35',
        tempLow: '23', 
        icon: '/images/snowy-6.svg'
        }, 
        {
        day: 'Friday', 
        tempHigh: '31',
        tempLow: '18', 
        icon: '/images/cloudy-day-1.svg'
        }
      ]

      expect(getTenDayForecast(data.forecast.simpleforecast.forecastday)).toEqual(expectedValue)
    })
  })

})