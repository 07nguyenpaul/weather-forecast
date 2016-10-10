require('!style!css!sass!./styles/main.scss');

import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import createLogger from 'redux-logger';
import reducer from './reducers';
import Dashboard from './containers/Dashboard';
import App from './containers/App';
import DetailedCity from './containers/DetailedCity';
import PinnedCities from './containers/PinnedCities';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import dummyData from './data/dummyData';
// import {syncHistoryWithStore} from 'react-router-redux';

// const middleware = [ thunk, createLogger ];

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const defaultState = {
  data: dummyData
};

const store = createStore(
  reducer,
  defaultState,
  enhancers
  // applyMiddleware(...middleware)
);

// export const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Dashboard} />
        <Route path='/detailedcity' component={DetailedCity} />
        <Route path='/pinnedcities' component={PinnedCities} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)

export default store;
