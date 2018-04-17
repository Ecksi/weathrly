import React from 'react';
import WeatherComponent from '../components/WeatherComponent';
import SevenHour from '../components/SevenHour';
import TenHour from '../components/TenDay';
import CurrentWeather from '../components/CurrentWeather';
import { shallow, mount } from 'enzyme';
import '../setupTests';

describe('Welcome Component', () => {
  
  it('Should have a state of showSevenHourWeather of true by default', () => {
    let wrapper = shallow(<WeatherComponent />); 

    expect(wrapper.state('showSevenHourWeather')).toEqual(true);
  })

  it('Should be able to toggle off of showSevenHourWeather', () => {
    let wrapper = shallow(<WeatherComponent />);

    wrapper.instance().toggleWeather();
    expect(wrapper.state('showSevenHourWeather')).toEqual(false);  
  })

})