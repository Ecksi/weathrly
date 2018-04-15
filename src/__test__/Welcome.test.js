import React from 'react';
import Welcome from '../components/Welcome';
import { shallow } from 'enzyme';
import '../setupTests'

describe('Welcome Component', () => {

  it('displays h1 text', () => {
    const wrapper = shallow(<Welcome />)

    expect(wrapper.text()).toEqual('Weathrly');
  })

})

