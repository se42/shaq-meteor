import { Accounts } from 'meteor/accounts-base';
import React, { Component } from 'react';
import AuthLayout from '../layouts/AuthLayout.jsx';
import { $ } from 'meteor/jquery';

export default class AuthJoin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordConfirm: '',
            error: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        const value = event.target.value;
        const field = event.target.name;
        const username = field === 'username' ? value : this.state.username;
        const password = field === 'password' ? value : this.state.password;
        const passwordConfirm = field === 'passwordConfirm' ? value : this.state.passwordConfirm;

        const isUsernameValid = username.length > 7;
        const isPasswordValid = password.length > 7;
        const isPasswordConfirmed = password === passwordConfirm;

        if (isUsernameValid) {
            $("[name='username']").addClass("valid");
            $("[name='username']").removeClass("invalid");
        } else {
            $("[name='username']").addClass("invalid");
            $("[name='username']").removeClass("valid");
        }
        if (isPasswordValid) {
            $("[name='password']").addClass("valid");
            $("[name='password']").removeClass("invalid");
        } else {
            $("[name='password']").addClass("invalid");
            $("[name='password']").removeClass("valid");
        }
        if (isPasswordConfirmed) {
            $("[name='passwordConfirm']").addClass("valid");
            $("[name='passwordConfirm']").removeClass("invalid");
        } else {
            $("[name='passwordConfirm']").addClass("invalid");
            $("[name='passwordConfirm']").removeClass("valid");
        }
        if (isUsernameValid && isPasswordValid && isPasswordConfirmed) {
            $("#create-account-btn").prop("disabled", false);
        } else {
            $("#create-account-btn").prop("disabled", true);
        }

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
        Accounts.createUser({username: username, password: password}, (err) => {
            if (err) {
                this.setState({
                    error: err.reason,
                });
            } else {
                router.replace(next);
            }
        });
    }

    render() {
        return (
            <AuthLayout>
                <div className="card-content">
                    <span className="card-title center-align">Create Account</span>
                    <div className="row">
                        <form className="col s12" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="username" type="text"
                                        value={this.state.username}
                                        onChange={this.handleChange} />
                                    <label htmlFor="username"
                                        data-error="Too short">
                                        Username
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="password" type="password"
                                        value={this.state.password}
                                        onChange={this.handleChange} />
                                    <label htmlFor="password"
                                        data-error="Too short">
                                        Password
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="passwordConfirm" type="password"
                                        value={this.state.passwordConfirm}
                                        onChange={this.handleChange} />
                                    <label htmlFor="passwordConfirm"
                                        data-error="Doesn't match">
                                        Confirm Password
                                    </label>
                                </div>
                            </div>
                            <div className="row center-align">
                                <button id="create-account-btn" type="submit"
                                    className="waves-effect waves-light btn"
                                    disabled>
                                    Create Account
                                </button>
                            </div>
                            <div className="row">
                                {this.state.error}
                            </div>
                        </form>
                    </div>
                </div>
            </AuthLayout>
        );
    }
}
