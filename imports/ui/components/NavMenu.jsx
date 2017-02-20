import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { $ } from 'meteor/jquery';

export default class NavMenu extends Component {
    constructor(props) {
        super(props);
        this.loggedInNavMenu = this.loggedInNavMenu.bind(this);
        this.loggedOutNavMenu = this.loggedOutNavMenu.bind(this);
    }
    componentDidMount() {
        $(".button-collapse").sideNav({closeOnClick: true});
    }

    logout(event) {
        event.preventDefault();
        browserHistory.push('/');
        Meteor.logout();
    }

    loggedInNavMenu() {
        const username = this.props.username;
        const logout = this.props.logout;
        return(
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo center">SHAQ</Link>
                    <a className="button-collapse show-on-large"
                        data-activates="slide-out-nav"
                        href="#">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="side-nav" id="slide-out-nav">
                        <li><h4 className="side-nav-header">SHAQ</h4></li>
                        <li>
                            <span className="side-nav-username">
                                Logged in as {username}
                            </span>
                        </li>
                        <li><hr/></li>
                        <li><Link to='/app'>App Home</Link></li>
                        <li><Link to='/app/forms'>Forms</Link></li>
                        <li><Link to='#' onClick={this.logout}>Logout</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }

    loggedOutNavMenu() {
        return (
            <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo left">SHAQ</a>
                    <ul id="nav-mobile" className="right">
                        <li>
                            <Link to="/app"
                                className="waves-effect waves-light btn">
                                Go To App
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        );
    }

    render() {
        const isLoggedIntoApp = this.props.isLoggedIntoApp;
        return (isLoggedIntoApp ? this.loggedInNavMenu() : this.loggedOutNavMenu());
    }
}
