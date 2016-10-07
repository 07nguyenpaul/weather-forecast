import React from 'react';
import { shallow, mount } from 'enzyme';
import { Link } from 'react-router';
import Header from './Header';

describe('Weather Tracker', () => {
  it('renders the name of the app in <h1> tag', () => {
    const wrapper = shallow(<Header name="Weather Tracker" />);
    const title = <Link to="/">Weather Tracker</Link>

    expect(wrapper.contains(title)).toEqual(true);
  });

  xit('should have title of "Weather Tracker"', () => {
    const wrapper = shallow(<Header name="Weather Tracker" />);

    expect(wrapper.find('h1').text()).toEqual("Weather Tracker");
  });
});
