import React, { Component } from 'react';
import Welcome from './Welcome';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import '../mockData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null
    };
  }

  render() {
    return (
      <div className="Weathrly">
        <Welcome />
        <Search />
        <CurrentWeather />
        <SevenHour />
        <TenHour />
      </div>
    );
  }
}

export default App;
