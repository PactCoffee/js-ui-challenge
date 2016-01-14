
import { Provider } from 'react-redux';
import { Router, Route, Redirect } from 'react-router';
import { createHistory } from 'history';
import ReactDOM from 'react-dom';
import React from 'react';

import Intro from './containers/Funnel/Intro';
import Brew from './containers/Funnel/Brew';
import Address from './containers/Funnel/Address';
import Confirm from './containers/Funnel/Confirm';
import configure from './store';
import * as UserActions from './actions/user';

const history = createHistory();
const store = configure({ user: {} }, history);
const checkUser = UserActions.checkUser();

checkUser(store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/funnel/intro" component={ Intro } />
      <Route path="/funnel/brew" component={ Brew } />
      <Route path="/funnel/address" component={ Address } />
      <Route path="/funnel/confirm" component={ Confirm } />
      <Redirect from="*" to="/funnel/intro" />
    </Router>
  </Provider>,
  document.getElementById('root')
);
