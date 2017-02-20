import React, { Component } from 'react';
import { Link } from 'react-router';

export default class PublicPage extends Component {
    render() {
        return (
            <div className="container">
                <h1>Welcome to SHAQ!</h1>
                <Link to="/app">Go to App</Link>
            </div>
        );
    }
}
