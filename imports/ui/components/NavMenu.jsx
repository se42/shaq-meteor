import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { $ } from 'meteor/jquery';

export default class NavMenu extends Component {
    componentDidMount() {
        $(".button-collapse").sideNav({closeOnClick: true});
    }

    logout(event) {
        event.preventDefault();
        browserHistory.push('/');
        Meteor.logout();
    }

    render() {
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
}
