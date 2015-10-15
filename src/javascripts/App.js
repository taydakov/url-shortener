/* Static dependencies */
import '../index.html';
// import '../stylesheets/style';

/* JS dependencies */
import React from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { createHistory, useBasename } from 'history';
/** Components **/
import UrlShortenerApp from './components/UrlShortenerApp';
import SetupLevel from './components/SetupLevel';
import NoMatch from './components/NoMatch';

// Use history object in <Router history={ history }> to use clean URLs
// const history = useBasename(createHistory)({
//   basename: ''
// })

React.render(
  <Router>
    <Route path='/' component={ UrlShortenerApp }>
    	<IndexRoute component={ SetupLevel } />
      <Route path='setup' component={ SetupLevel }/>
      <Route path='*' component={ NoMatch }/>
    </Route>
  </Router>
, document.getElementById('main'));
