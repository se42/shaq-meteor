import React from 'react';
import { Meteor } from 'meteor/meteor';

import NavMenu from '../components/NavMenu.jsx';

export default class App extends React.Component {
    render() {
        const { secretMessage } = this.props;
        return(
            <div id="app-container">
                <NavMenu />
                <div id="content-container" className="some-bullshit-class">
                    <p>Hello, React!</p>
                    <p>{secretMessage}</p>
                </div>
            </div>
        );
    }
}
