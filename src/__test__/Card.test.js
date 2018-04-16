import React from 'react';
import Card from '../components/Card';
import { shallow, mount } from 'enzyme';
import '../setupTests';

describe('Welcome Component', () => {

  it('Should return a card object when passed data', () => {
    const expectedValues = {
      hour: '12',
      icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
      temp: '500',
      call: '7-hour',
      day: 'smushday',
      tempHigh: '420',
      tempLow: '10',
    }
    const wrapper = shallow(<Card props={expectedValues} />)

    expect(typeof wrapper.find('.Card').props()).toBe('object');
  })

  it('Should be an instance of Card', () => {
    const expectedValues = {
      hour: '12',
      icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
      temp: '500',
      call: '7-hour',
      day: 'smushday',
      tempHigh: '420',
      tempLow: '10',
    }
    const wrapper = mount(<Card props={expectedValues} />)

    expect(wrapper.type()).toEqual(Card);
  })

  it('Should create a card for the 7 hour weather if the data has a call value of 7-hour', () => {
    const expectedValues = 
      `<div className="Card">
  <h2 className="cardHeader" />
  <img src={[undefined]} alt="weather" />
  <h3 className="hourly-temp">
    °
  </h3>
</div>`
    const wrapper = shallow(<Card call='7-hour' />)
    expect(wrapper.debug()).toBe(expectedValues);
  })

  it('Should create a card for the 7 hour weather if the data has a call value of 7-hour', () => {
    const expectedValues = 
  `<div className=\"Card\">
  <h2 className=\"cardText cardHeader\" />
  <img src={[undefined]} alt=\"weather\" />
  <div className=\"ten-day-high-low\">
    <h3 className=\"cardText cardHigh\">
      °
    </h3>
    <h3 className=\"cardText cardLow\">
      °
    </h3>
  </div>
</div>`
    const wrapper = shallow(<Card />)
    expect(wrapper.debug()).toBe(expectedValues);
  })
})