import React from 'react';
import App from '../components/App';
import { shallow, mount } from 'enzyme';
import '../setupTests';
import '../../__test-helpers__/storageMock'

describe('App Component', () => {

  // window.localStorage = {
  //   getItem: jest.fn(),
  //   setItem: jest.fn(),
  //   removeItem: jest.fn()
  // };
  // window.fetch = jest.fn().mockImplementation(() => 
  //   Promise.resolve({
  //   json: () => 
  //   Promise.resolve({
  //     doobies: mockDoobies
  //   })
  // }));

  it('Should exist', () => {
    localStorage.setItem('weather', jest.fn())
    let wrapper = shallow(<App />);

    expect(wrapper).toBeDefined()
  })

  it.skip('Should have a default states', () => {
    // localStorage.setItem('', '')
    let wrapper = shallow(<App />);
    let expectedValues = {
      sevenHourData: null,
      tenDayData: null,
      currentWeatherData: null,
      showWelcome: true,
      error: false
    };

    expect(wrapper.state()).toEqual(expectedValues)
  })
})