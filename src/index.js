import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import Home from './scenes/home/Home';
import Reading from './scenes/reading/Reading';
import SST from './scenes/sst/SST';

import './index.css';

ReactDOM.render(
  <Router>
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/sst" component={SST} />
      <Route path="/reading" component={Reading} />
    </Fragment>
  </Router>, document.getElementById('root'));
registerServiceWorker();
