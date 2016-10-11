import React from 'react';
import { shallow, mount } from 'enzyme';
import { Link } from 'react-router';
import Header from './Header';

describe('Header', () => {
  it('should render as a <header> container', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.type(), 'header');
  });

  it('should render the name of the app in an <h1> tag', () => {
    const wrapper = shallow(<Header name="Weather Tracker" />);
    const title = <Link to="/">Weather Tracker</Link>

    expect(wrapper.contains(title)).toEqual(true);
  });

  xit('should have a <p> tag with the className of "currentForecast"', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find('p').text()).toBe('currentForecast');
  });
});
