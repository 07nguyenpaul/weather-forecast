import React from 'react';
import { mockStore } from '../mocks/mockStore';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import App from './App';
import Header from './Header';
import Dashboard from './Dashboard';
import PinnedCities from './PinnedCitiesList';

describe('Header Container', () => {
  function setup() {
    const store = mockStore({})
    const wrapper = mount(
      <Provider store={store}>
          <Header />
      </Provider>
    )

    const Component = wrapper.find(Header)
    return {
      Component
    }
  }

  it('should render Header container', () => {
    const { Component } = setup()

    expect(Component.length).toBeTruthy()
  });
});

describe('DetailedForecast', () => {
  function setup() {
    const store = mockStore({})
    const wrapper = mount(
      <Provider store={store}>
      <DetailedForecast />
      </Provider>
    )

    const Component = wrapper.find(DetailedForecast)
    return {
      Component
    }
  }

  it('should render App container', () => {
    const { Component } = setup()

    expect(Component.length).toBeTruthy()
  });
});

describe('Dashboard Container', () => {
  function setup() {
    const store = mockStore({})
    const wrapper = mount(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    )

    const Component = wrapper.find(Dashboard)
    return {
      Component
    }
  }

  it('should render Dashboard container', () => {
    const { Component } = setup()

    expect(Component.length).toBeTruthy()
  });
});

describe('PinnedCities Container', () => {
  function setup() {
    const store = mockStore({})
    const wrapper = mount(
      <Provider store={store}>
        <PinnedCities />
      </Provider>
    )

    const Component = wrapper.find(PinnedCities)
    return {
      Component
    }
  }

  it('should render PinnedCities container', () => {
    const { Component } = setup()

    expect(Component.length).toBeTruthy()
  });
});
