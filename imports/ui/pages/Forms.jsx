import React, { Component } from 'react';
import { Link } from 'react-router';
import { $ } from 'meteor/jquery';

export default class Forms extends Component {
    render() {
        const forms = this.props.forms;
        const displayForms = forms.map((form) => {
            const {_id, formId, title} = form;
            return (
                <div key={_id} className="col s12 m4 l3">
                    <Link to="#" className="form-card">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">{formId}</span>
                                <p>{title}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        });

        return (
            <div className="forms-page">
                <h1>Forms Index</h1>
                <div className="row">
                    {displayForms}
                </div>
            </div>
        )
    }
}
