import React, { Component } from 'react';
import { Link } from 'react-router';
import { $ } from 'meteor/jquery';

export default class NavMenu extends Component {
    componentDidMount() {
        $(".button-collapse").sideNav({closeOnClick: true});
    }

    render() {
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
                        <li><hr/></li>
                        <li><Link to='/app'>App Home</Link></li>
                        <li><Link to='/app/forms'>Forms</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
