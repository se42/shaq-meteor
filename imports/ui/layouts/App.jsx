import React from 'react';
import { Meteor } from 'meteor/meteor';

import NavMenu from '../components/NavMenu.jsx';

export default class App extends React.Component {
    render() {
        return(
            <div>
                <NavMenu />
                <div className="container">
                    <p>{this.props.children ? this.props.children : 'Hello, world!'}</p>
                </div>
            </div>
        );
    }
}
