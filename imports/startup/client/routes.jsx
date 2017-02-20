import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import PublicPage from '/imports/ui/pages/PublicPage.jsx';
import AuthenticatedApp from '/imports/ui/containers/AppContainer.jsx';
import Dashboard from '/imports/ui/pages/Dashboard.jsx';
import Forms from '/imports/ui/pages/Forms.jsx';
import AuthSignIn from '/imports/ui/pages/AuthSignIn.jsx';
import AuthJoin from '/imports/ui/pages/AuthJoin.jsx';
import NotFoundPage from '/imports/ui/pages/NotFoundPage.jsx';

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path='/' component={PublicPage} />
        <Route path='/app' component={AuthenticatedApp}>
            <IndexRoute component={Dashboard} />
            <Route path='forms' component={Forms} />
        </Route>
        <Route path='/signin' component={AuthSignIn} />
        <Route path='/join' component={AuthJoin} />
        <Route path='*' component={NotFoundPage} />
    </Router>
);
