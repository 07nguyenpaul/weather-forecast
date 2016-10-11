import React from 'react';
import { shallow, mount } from 'enzyme';
import { Link } from 'react-router';
import Dashboard from './Dashboard';

describe ('Dashboard', () => {
  it('should be wrapped into a div named "dashboardWrapper"', () => {
    const wrapper = shallow(<Dashboard />);

    expect(wrapper.find('div').hasClass('dashboardWrapper')).toBe(true);
  });

  it('should have an <h2> tag', () => {
    const wrapper = shallow(<Dashboard />);

    expect(wrapper.find('h2').text()).toBe('➕ Pin another city');
  });

});
