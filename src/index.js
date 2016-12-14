import React from 'react';
import { IndexRoute, Route, browserHistory, Router } from 'react-router';
import { render } from 'react-dom';

import App from './app';
import PetsContainer from './components/PetsContainer';
import NewPost from './components/New';

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={PetsContainer} />
      <Route path='/new' component={NewPost} />
    </Route>
  </Router>,
  document.getElementById('react-root')
);
