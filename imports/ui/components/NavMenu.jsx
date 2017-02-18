import React, { Component } from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { $ } from 'meteor/jquery';

export default class NavMenu extends Component {
    componentDidMount() {
        $(".button-collapse").sideNav({closeOnClick: true});
    }

    render() {
        return(
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">SHAQ</Link>
                    <a href="#" data-activates="mobile-nav" className="button-collapse">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to='/qcforms'>QC Forms</Link></li>
                    </ul>
                    <ul className="side-nav" id="mobile-nav">
                        <li><h4 className="side-nav-header">SHAQ</h4></li>
                        <li><hr/></li>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/qcforms'>QC Forms</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
