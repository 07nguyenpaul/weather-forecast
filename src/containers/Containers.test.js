import { mockStore } from '../mocks/mockStore'
import { Provider } from 'react-redux'
import React from 'react';
import { mount } from 'enzyme';
import Main from './Main';
import Header from './Header';
import Dashboard from './Dashboard';
import DetailedCity from './DetailedCity';
import PinnedCities from './PinnedCities';

describe('Main Container', () => {
  function setup() {
    const store = mockStore({})
    const wrapper = mount(
      <Provider store={store}>
        <Main />
      </Provider>
    )

    const Component = wrapper.find(Main)
    return {
      Component
    }
  }

  it('should render Main container', () => {
    const { Component } = setup()

    expect(Component.length).toBeTruthy()
  });
});

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

describe('DetailedCity Container', () => {
  function setup() {
    const store = mockStore({})
    const wrapper = mount(
      <Provider store={store}>
        <DetailedCity />
      </Provider>
    )

    const Component = wrapper.find(DetailedCity)
    return {
      Component
    }
  }

  it('should render DetailedCity container', () => {
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
