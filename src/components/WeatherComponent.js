import React, { Component } from 'react'
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import './styles/css/WeatherComponent.css'

class WeatherComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      showWeather: true
    };

    this.toggleWeather = this.toggleWeather.bind(this)
  }

  toggleWeather() {
    this.setState({
      showWeather: !this.state.showWeather
    })
  }

  render() {
    const sevenHour = 
    <SevenHour 
      sevenHourData={this.props.sevenHourData} 
    />

    const tenDay = 
    <TenDay 
      tenDayData={this.props.tenDayData}
    /> 

    return (
      <div>
        <input type="submit" onClick={this.toggleWeather} className="weather-toggle" /> 
        <CurrentWeather 
            currentWeatherData={this.props.currentWeatherData} />
        {this.state.showWeather ? sevenHour : tenDay }
      </div>
    )
  } 
}

export default WeatherComponent;