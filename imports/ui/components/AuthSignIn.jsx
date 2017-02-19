import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import AuthLayout from '../layouts/AuthLayout.jsx';

export default class AuthSignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(this.props.router);
    }

    handleChange(event) {
        event.preventDefault();
        const value = event.target.value;
        const field = event.target.name;
        this.setState({
            [field]: value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        const router = this.props.router;
        const next = this.props.location.query.next;
        Meteor.loginWithPassword({username: username}, password, (err) => {
            if (err) {
                console.log(err);
            } else {
                router.replace(next);
            }
        });
    }

    render() {
        const next = this.props.location.query.next;
        return (
            <AuthLayout>
                <div className="card-content">
                    <span className="card-title center-align">Sign In</span>
                    <div className="row">
                        <form className="col s12" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="username" type="text"
                                        value={this.state.username}
                                        onChange={this.handleChange} />
                                    <label htmlFor="username">Username</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="password" type="password"
                                        value={this.state.password}
                                        onChange={this.handleChange} />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <div className="row center-align">
                                <button type="submit" className="waves-effect waves-light btn">
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </AuthLayout>
        );
    }
}
