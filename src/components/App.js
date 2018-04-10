import React, { Component } from 'react';
import Welcome from './Welcome';  
// import Search from './Search';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import './styles/css/App.css'
import {data} from '../mockData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      citySearched: null,
      sevenHourData: null,
      tenDayData: null, 
      currentWeatherData: null,
      showWelcome: true
    };
    
    this.toggleWelcome = this.toggleWelcome.bind(this);
  }

  toggleWelcome() {
    this.setState({
      showWelcome: false
    })
  }

  render() {
    return (
      <div className="Weathrly">
         { this.state.showWelcome && <Welcome 
                                        citySearched={this.state.citySearched}
                                        toggleWelcome={this.toggleWelcome}
                                      />}
        <CurrentWeather 
          data={this.state.weatherData} />
        <SevenHour 
          hourlyForecast={this.state.weatherData.hourly_forecast} />
        <TenDay 
          forecastDay={this.state.weatherData.forecast.simpleforecast.forecastday}/> 
        {/* <Search /> */}
      </div>
    );
  }

 let sevenDayData = service.getSevenDayData()
 
 let allData = service.getAllData()
 let sevenDayData = allData.sevenDay

}

export default App;
