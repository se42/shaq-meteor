import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

import AppLayout from '../layouts/AppLayout.jsx';

AppContainer = createContainer(() => {
    return {
        /* App props here */
    };
}, AppLayout);

class AuthenticatedApp extends Component {
    componentDidMount() {
        const loggedInUser = this.props.loggedInUser;
        if (!loggedInUser) {
            const router = this.props.router;
            const next = encodeURIComponent(this.props.location.pathname);
            router.replace('/signin?next=' + next);
        }
    }

    render() {
        return (<AppContainer>{this.props.children}</AppContainer>)
    }
}

export default createContainer(() => {
    const loggedInUser = Meteor.userId() ? true : false;
    return {
        loggedInUser: loggedInUser,
    };
}, AuthenticatedApp);
