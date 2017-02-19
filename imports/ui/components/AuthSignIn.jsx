import React, { Component } from 'react';
import { Link } from 'react-router';
import AuthLayout from '../layouts/AuthLayout.jsx';

export default class AuthSignIn extends Component {
    render() {
        const next = this.props.location.query.next;
        return (
            <AuthLayout>
                <div className="card-content">
                    <span className="card-title">Sign In</span>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="username" type="text" className="validate" />
                                    <label htmlFor="username">Username</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="password" type="password" className="validate" />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card-action">
                    <button className="waves-effect waves-light btn">
                        Submit
                    </button>
                </div>
            </AuthLayout>
        );
    }
}
