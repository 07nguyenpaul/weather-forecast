import React from 'react';
import { shallow, mount } from 'enzyme';
import DetailedForecast from './DetailedForecast';

describe('DetailedForecast', () => {
  it('should render as a <article> container', () => {
    const wrapper = mount(<DetailedForecast />);

    expect(wrapper.type(), 'article');
  });
});
