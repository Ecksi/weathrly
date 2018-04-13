import React, { Component } from 'react';
import Welcome from './Welcome';
import Search from './Search';
import WeatherComponent from './WeatherComponent';
import {getForecasts, getCurrentWeatherForecast, getSevenHourForecast, getTenDayForecast } from '../ApiService';
import './styles/css/App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      sevenHourData: null,
      tenDayData: null, 
      currentWeatherData: null,
      showWelcome: true
    };

    this.apiCall = this.apiCall.bind(this);
  }


  apiCall({ state, city }) {
    getForecasts(state, city)
      .then(data => {
        this.setState({ 
          sevenHourData: getSevenHourForecast(data.hourly_forecast),
          tenDayData: getTenDayForecast(data.forecast.simpleforecast.forecastday), 
          currentWeatherData: getCurrentWeatherForecast(data),
          showWelcome: false
        })
      })
  }
  
  render() {
    const showWeather = <WeatherComponent 
                          currentWeatherData={this.state.currentWeatherData} 
                          sevenHourData={this.state.sevenHourData}
                          tenDayData={this.state.tenDayData}
                        />

    return (
      <div className="Weathrly"> 
      {this.state.showWelcome ? <Welcome /> : [showWeather]}
      <Search
          apiCall={this.apiCall} />
      </div>
    );
  }

}

export default App;
