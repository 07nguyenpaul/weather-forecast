import React from 'react';
import { shallow, mount } from 'enzyme';
import DashboardCard from './DashboardCard';

describe('DashboardCard', () => {
  it('should render as a <article> container', () => {
    const wrapper = mount(<DashboardCard />);

    expect(wrapper.type(), 'article');
  });
});
