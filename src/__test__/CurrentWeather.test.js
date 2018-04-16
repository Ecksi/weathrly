import React from 'react';
import CurrentWeather from '../components/CurrentWeather';
import { shallow, mount } from 'enzyme';
import '../setupTests';

describe('Current Weather Component', () => {
  
  it('Find prop attributes', () => {
    const currProps = { city: 'the island from castaway', day: 'testday', temp: 'some body', weather: 90, icon: 'img', high: 1005, low: 5, summary: 'spaceweather' };
    
    let wrapper = shallow(<CurrentWeather />) 
    // wrapper = shallow(<CurrentWeather props={currProps} />) 
    console.log(wrapper)
    expect(wrapper.find('.current-day').text()).toEqual('testday');
    expect(wrapper.find('.current-city').text()).toEqual('the island from castaway');
  })

})