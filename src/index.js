import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import rootReducer from './reducers/rootReducer';
import App from './components/App';
import Dashboard from './containers/Dashboard';
import PinnedCitiesList from './components/PinnedCitiesList';
import DetailedForecast from './containers/DetailedForecast';

require('!style!css!sass!./styles/main.scss');

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

const store = createStore(
  rootReducer,
  {},
  enhancers,
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
