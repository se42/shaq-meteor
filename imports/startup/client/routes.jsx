import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import AppContainer from '/imports/ui/containers/AppContainer.jsx';
import Dashboard from '/imports/ui/pages/Dashboard.jsx';
import Forms from '/imports/ui/pages/Forms.jsx';
import NotFoundPage from '/imports/ui/pages/NotFoundPage.jsx';

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={AppContainer}>
            <IndexRoute component={Dashboard} />
            <Route path="forms" component={Forms} />
            <Route path="*" component={NotFoundPage} />
        </Route>
    </Router>
);
