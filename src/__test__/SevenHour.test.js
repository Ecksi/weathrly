import React from 'react';
import SevenHour from '../components/SevenHour';
import Card from '../components/Card';
import { shallow } from 'enzyme';
import '../setupTests';

describe('Seven Hour', () => {
  it('should populate a card with the correct props', () => {
    let expectedValues = [{
      hour: '12',
      image: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
      temp: '500',
      call: '7-hour'
    }]

    let wrapper = shallow(<SevenHour props={expectedValues} />)
console.log(wrapper.find(Card).props())
    expect(wrapper.find(Card).props().hour).toEqual('12')
    expect(wrapper.find(Card).props().image).toEqual('/images/cloudy-day-1.svg')
    expect(wrapper.find(Card).props().temp).toEqual('500')
    expect(wrapper.find(Card).props().call).toEqual('7-hour')
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