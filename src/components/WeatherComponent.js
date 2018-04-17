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
    const tenDay = <TenDay props={this.props.tenDayData} />
    const sevenHour =<SevenHour props={this.props.sevenHourData} />

    return (
      <div className="all-weather">
        <CurrentWeather props={this.props.currentWeatherData} />
        {this.state.showSevenHourWeather ?
          <input onClick={this.toggleWeather} 
                 type="submit"
                 className="weather-toggle"
                 value="Ten Day" /> :
          <input onClick={this.toggleWeather} 
                 type="submit"
                 className="weather-toggle"
                 value="Seven Hour" />}
        {this.state.showSevenHourWeather ? sevenHour : tenDay}
      </div>
    )
  }
}

export default WeatherComponent;