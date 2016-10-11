import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import createLogger from 'redux-logger';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import exampleReducer from './reducers/index';
import App from './components/App';
import Dashboard from './components/Dashboard';
import PinnedCitiesList from './components/PinnedCitiesList';
import DetailedForecast from './components/DetailedForecast';

require('!style!css!sass!./styles/main.scss');

// const middleware = [ thunk, createLogger ];

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(
  exampleReducer,
  {},
  enhancers,
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Dashboard} />
        <Route path='/detailedforecast' component={DetailedForecast} />
        <Route path='/pinnedcities' component={PinnedCitiesList} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

export default store;
