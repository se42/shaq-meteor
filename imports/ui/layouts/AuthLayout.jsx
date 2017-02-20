import React, { Component } from 'react';
import { $ } from 'meteor/jquery';

export default class AuthLayout extends Component {
    componentWillMount() {
        $('body').addClass('auth-body');
    }

    componentWillUnmount() {
        $('body').removeClass('auth-body');
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="card auth-card">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
