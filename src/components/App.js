import React, { Component } from 'react';
// import Welcome from './Welcome';
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
      weatherData: data
    };
  }

  render() {
    return (
      <div className="Weathrly">
        <CurrentWeather 
        data={this.state.weatherData} />
        <SevenHour 
        data={this.state.weatherData} />
        <TenDay 
        data={this.state.weatherData}/> 
         {/* <Welcome />
        <Search /> */}
      </div>
    );
  }

}

export default App;
