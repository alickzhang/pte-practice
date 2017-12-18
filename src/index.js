import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import Home from './scenes/home/Home';
import RP from './scenes/rp/RP';
import SWT from './scenes/swt/SWT';
import SST from './scenes/sst/SST';
import WFD from './scenes/wfd/WFD';
import Vocabulary from './scenes/vocabulary/Vocabulary';

import './index.css';

ReactDOM.render(
  <Router>
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/rp" component={RP} />
      <Route path="/swt" component={SWT} />
      <Route path="/sst" component={SST} />
      <Route path="/wfd" component={WFD} />
      <Route path="/vocabulary" component={Vocabulary} />
    </Fragment>
  </Router>, document.getElementById('root'));
registerServiceWorker();
