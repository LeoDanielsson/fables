import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';
import store from './store';
import track from './track';
import Overview from './components/Overview.jsx';
import Fable from './components/Fable.jsx';

function Root() {
  if(process.env.NODE_ENV === 'production') {
    track();
  }
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={Overview} />
        <Route path='/fable/(:fableId)' component={Fable} />
      </Router>
    </Provider>
 )
}

export default Root;
