import React from 'react';
import TenDay from '../components/TenDay';
import Card from '../components/Card';
import { shallow } from 'enzyme';
import '../setupTests';

describe('Ten Day', () => {
  it('should populate a card with the correct props', () => {
    let expectedValues = [{
      day: 'smushday',
      tempHigh: '420',
      tempLow: '10',
      icon: 'http://icons.wxug.com/i/c/k/mostlycloudy.gif'
    }]

    let wrapper = shallow(<TenDay props={expectedValues} />)

    expect(wrapper.find(Card).props().day).toEqual('smushday')
    expect(wrapper.find(Card).props().tempHigh).toEqual('420')
    expect(wrapper.find(Card).props().tempLow).toEqual('10')
    expect(wrapper.find(Card).props().image).toEqual('http://icons.wxug.com/i/c/k/mostlycloudy.gif')
  });

  it('should create an array of cards equal to the length of cards given', () => {
    const expectedValues = [
      {},
      {}
    ]

    const wrapper = shallow(<TenDay props={expectedValues} />)
    const expectedLength = expectedValues.length;
    const actualValue = wrapper.find(Card).length;

    expect(actualValue).toEqual(expectedLength)
  })
})