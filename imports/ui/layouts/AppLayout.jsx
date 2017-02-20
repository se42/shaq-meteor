import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import NavMenu from '/imports/ui/components/NavMenu.jsx';

export default class AppLayout extends Component {
    render() {
        const user = this.props.meteorUser;
        const username = user ? user.username : 'nobody';
        return (
            <div>
                <NavMenu username={username} />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
