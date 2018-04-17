import React, { Component } from 'react'
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import './styles/css/WeatherComponent.css'

class WeatherComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      showSevenHourWeather: true
    };

    this.toggleWeather = this.toggleWeather.bind(this)
  }

  toggleWeather() {
    this.setState({
      showSevenHourWeather: !this.state.showSevenHourWeather
    })
  }

  render() {
    const sevenHour = 
    <SevenHour 
      props={this.props.sevenHourData} 
    />

    const tenDay = 
    <TenDay 
      props={this.props.tenDayData}
    /> 

    return (
      <div className="all-weather">
        <CurrentWeather props={this.props.currentWeatherData} />
        {this.state.showSevenHourWeather ? 
          <input type="submit" onClick={this.toggleWeather} className="weather-toggle" value="Ten Day" /> :
          <input type="submit" onClick={this.toggleWeather} className="weather-toggle" value="Seven Hour" /> }
        {this.state.showSevenHourWeather ? sevenHour : tenDay }
      </div>
    )
  } 
}

export default WeatherComponent;