import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Demo from './pages/demo';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Demo} />
    </Router>
);