import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import AppContainer from '../../ui/containers/AppContainer.jsx';
import QcForms from '../../ui/pages/QcForms.jsx';
import NotFoundPage from '../../ui/pages/NotFoundPage.jsx';

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={AppContainer}>
            <Route path="qcforms" component={QcForms} />
            <Route path="*" component={NotFoundPage} />
        </Route>
    </Router>
);
