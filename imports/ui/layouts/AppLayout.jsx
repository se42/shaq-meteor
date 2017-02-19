import React, { Component } from 'react';
import NavMenu from '/imports/ui/components/NavMenu.jsx';

export default class AppLayout extends Component {
    render() {
        console.log('user is: ' + this.props.meteorUser);
        return(
            <div>
                <NavMenu />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
