import React from 'react';
import App from '../components/App';
import { shallow, mount } from 'enzyme';
import '../setupTests';
import { exists } from 'fs';
import { stateSanitizer } from '../locationSanitizer';
import ErrorPage from '../components/404-error';
import Search from '../components/Search';
import Welcome from '../components/Welcome';

describe('App Component', () => {

  it('Should exist', () => {
    
    let wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
  })

  it('Should have a default states', () => {
    let wrapper = shallow(<App />);
    let expectedValues = {
      sevenHourData: null,
      tenDayData: null,
      currentWeatherData: null,
      showWelcome: undefined,
      error: false
    };

    // it exists

    // it should have default stateSanitizer
    // it should be able to change state

    expect(wrapper.state()).toEqual(expectedValues)
  })

  it('Should be able to display different components based off of state', () => {
    let wrapper = shallow(<App />);
    let expected = <ErrorPage />;
    let search = <Search />;
    let welcome = <Welcome />;

    wrapper.state().error = true;
    expect(wrapper.instance().displayState()).toEqual(expected, search);
    wrapper.state().error = false;
    wrapper.state().showWelcome = true;
    expect(wrapper.instance().displayState()).toEqual(welcome, search);
  });
});