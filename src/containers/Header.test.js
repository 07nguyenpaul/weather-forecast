import React from 'react';
import { shallow, mount } from 'enzyme';

import Header from './Header';

describe('Weather Tracker', () => {
  it('renders the name of the app in <h1> tag', () => {
    const wrapper = shallow(<Header name="Weather Tracker" />);
    const title = <h1>Weather Tracker</h1>

    expect(wrapper.contains(title)).toEqual(true);
  });

  it('should have title of "Weather Tracker"', () => {
    const wrapper = shallow(<Header name="Weather Tracker" />);

    expect(wrapper.find('h1').text()).toEqual("Weather Tracker");
  })
});
