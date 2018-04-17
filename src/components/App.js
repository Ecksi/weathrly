import React, { Component } from 'react';
import { getCurrentWeatherForecast, getSevenHourForecast, getTenDayForecast } from '../ApiService';
import getForecasts from '../apiCall';
import WeatherComponent from './WeatherComponent';
import ErrorPage from './404-error'
import Welcome from './Welcome';
import Search from './Search';
import './styles/css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sevenHourData: null,
      tenDayData: null,
      currentWeatherData: null,
      showWelcome: true,
      error: false
    };

    this.apiCall = this.apiCall.bind(this);
  }

  componentDidMount() {
    const localStorageWeather = localStorage.getItem('weather');
    const userWeatherHistory = JSON.parse(localStorageWeather);

    if (userWeatherHistory) {
      this.setState({
        sevenHourData: userWeatherHistory.sevenHourData,
        tenDayData: userWeatherHistory.tenDayData,
        currentWeatherData: userWeatherHistory.currentWeatherData,
        showWelcome: userWeatherHistory.showWeather
      });
    };
  }

  apiCall({ state, city }) {
    getForecasts(state, city)
      .then(data => {
        if (Object.keys(data).length === 1) {
          this.setState({ error: true })
        } else {
          this.setState({
            sevenHourData: getSevenHourForecast(data.hourly_forecast),
            tenDayData: getTenDayForecast(data.forecast.simpleforecast.forecastday),
            currentWeatherData: getCurrentWeatherForecast(data),
            showWelcome: false,
            error: false
          });
          localStorage.setItem('weather', JSON.stringify(this.state));
        };
      });
  }

  displayState() {
    const showWeather =
      <WeatherComponent
        currentWeatherData={this.state.currentWeatherData}
        sevenHourData={this.state.sevenHourData}
        tenDayData={this.state.tenDayData}
      />

    if (this.state.error) {
      return <ErrorPage />
    } else if (this.state.showWelcome) {
      return <Welcome />
    } else {
      return showWeather
    }
  }

  render() {
    return (
      <div className="Weathrly">
        {this.displayState()}
        <Search apiCall={this.apiCall} welcome={this.state} />
      </div>
    );
  }
}

export default App;