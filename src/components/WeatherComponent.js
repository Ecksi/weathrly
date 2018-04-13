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
      <div className="all-weather">
      <CurrentWeather 
      currentWeatherData={this.props.currentWeatherData} />
      {this.state.showWeather ? 
      <input type="submit" onClick={this.toggleWeather} className="weather-toggle" value="Ten Day" /> :
      <input type="submit" onClick={this.toggleWeather} className="weather-toggle" value="Seven Hour" /> }
      {this.state.showWeather ? sevenHour : tenDay }
      </div>
    )
  } 
}

export default WeatherComponent;