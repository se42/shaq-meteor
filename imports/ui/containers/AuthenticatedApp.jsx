import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

import AppLayout from '../layouts/AppLayout.jsx';

export let AuthenticatedApp;

class LoginRedirect extends Component {
    componentWillMount() {
        const next = browserHistory.getCurrentLocation().pathname;
        browserHistory.replace('/signin?next=' + encodeURIComponent(next));
    }
    render() {
        return (null);
    }
}

if (!Meteor.userId()) {
    AuthenticatedApp = LoginRedirect;
} else {
    AuthenticatedApp = createContainer(() => {
        return {
            meteorUser: 'Meteor.user()',
        };
    }, AppLayout);
}
