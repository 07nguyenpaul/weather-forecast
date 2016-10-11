import React from 'react';
import { shallow, mount } from 'enzyme';
import PinnedCitiesList from './PinnedCitiesList';

describe('PinnedCitiesList', () => {
  it('should render as a <div> container', () => {
    const wrapper = mount(<PinnedCitiesList />);

    expect(wrapper.type(), 'div');
  });

  it('should have a form', () => {
    const wrapper = mount(<PinnedCitiesList />);
    const form = wrapper.find('form');

    expect(wrapper.length).toBeTruthy();
    expect(form.length).toEqual(1);
  });

  it('submit button should be disabled if the input field is empty', () => {
    const wrapper = mount(<PinnedCitiesList />);
    const submitButton = wrapper.find('[type="submit"]');

    expect(submitButton.props().disabled).toBe(true);
  });

  it('should have a number input field', () => {
    const wrapper = mount(<PinnedCitiesList />);
    const inputField = wrapper.find('[type="number"]');

    expect(wrapper.find('.zipInput').length).toEqual(1);
  });
});
