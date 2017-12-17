import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import Home from './scenes/home/Home';
import RP from './scenes/rp/RP';
import SWT from './scenes/swt/SWT';
import SST from './scenes/sst/SST';
import WFD from './scenes/wfd/WFD';
import Word from './scenes/word/Word';

import './index.css';

ReactDOM.render(
  <Router>
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/rp" component={RP} />
      <Route path="/swt" component={SWT} />
      <Route path="/sst" component={SST} />
      <Route path="/wfd" component={WFD} />
      <Route path="/word" component={Word} />
    </Fragment>
  </Router>, document.getElementById('root'));
registerServiceWorker();
