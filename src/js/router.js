import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';
import store from './store.js'
import App from './components/App.jsx'
import Fable from './components/Fable.jsx';

function Root() {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={App} />
        <Route path='/fable/(:fableId)' component={Fable} />
      </Router>
    </Provider>
 )
}

export default Root;
