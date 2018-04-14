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
  
  componentDidMount() {
    let localWeather = localStorage.getItem('weather');
    let parsedWeather = JSON.parse(localWeather);
    
    if(parsedWeather) {
      this.setState({
        sevenHourData: parsedWeather.sevenHourData,
        tenDayData: parsedWeather.tenDayData, 
        currentWeatherData: parsedWeather.currentWeatherData,
        showWelcome: parsedWeather.showWeather
      })
    }
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
        localStorage.setItem('weather', JSON.stringify(this.state))       
      })
  }
  
  render() {
    const showWeather = 
      <WeatherComponent 
        currentWeatherData={this.state.currentWeatherData} 
        sevenHourData={this.state.sevenHourData}
        tenDayData={this.state.tenDayData}
      />

    return (
      <div className="Weathrly"> 
        {this.state.showWelcome ? <Welcome /> : [showWeather]}
        <Search apiCall={this.apiCall} welcome={this.state} />
      </div>
    );
  }
}

export default App;