import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class NavMenu extends React.Component {
    render() {
        return(
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">SHAQ</a>
                    <a href="#" data-activates="mobile-nav" className="button-collapse">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="http://sass-lang.com">Sass</a></li>
                        <li><a href="http://materializecss.com">Materialize</a></li>
                        <li><a href="https://facebook.github.io/react/">React</a></li>
                    </ul>
                    <ul className="side-nav" id="mobile-nav">
                        <li><a href="http://sass-lang.com">Sass</a></li>
                        <li><a href="http://materializecss.com">Materialize</a></li>
                        <li><a href="https://facebook.github.io/react/">React</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
