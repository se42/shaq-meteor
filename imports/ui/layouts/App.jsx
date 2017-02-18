import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import NavMenu from '/imports/ui/components/NavMenu.jsx';

export default class App extends Component {
    render() {
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
