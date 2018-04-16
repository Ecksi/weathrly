import React from 'react';
import SevenHour from '../components/SevenHour';
import Card from '../components/Card';
import { shallow } from 'enzyme';
import '../setupTests';

describe('Seven Hour', () => {
  it('should populate a card with the correct props', () => {
    const expectedValues = [{
      hour: '12',
      icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
      temp: '500',
      call: '7-hour'
    }]

    const wrapper = shallow(<SevenHour props={expectedValues} />)
    const propValue = wrapper.find(Card).props()

    expect(propValue.hour).toEqual('12')
    expect(propValue.image).toEqual('http://icons.wxug.com/i/c/k/partlycloudy.gif')
    expect(propValue.temp).toEqual('500')
    expect(propValue.call).toEqual('7-hour')
  });

  it('should create an array of cards equal to the length of cards given', () => {
    const expectedValues = [
      {},
      {}
    ]

    const wrapper = shallow(<SevenHour props={expectedValues} />)
    const expectedLength = expectedValues.length;
    const actualValue = wrapper.find(Card).length;
    
    expect(actualValue).toEqual(expectedLength)
  })
})