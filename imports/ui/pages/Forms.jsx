import React, { Component } from 'react';
import { Link } from 'react-router';
import FormsContainer from '../containers/FormsContainer.jsx';

class Forms extends Component {
    render() {
        const forms = this.props.forms;
        const displayForms = forms.map((form) => {
            const {_id, formId, title} = form;
            return (
                <div key={_id} className="col s12 m4 l3">
                    <Link to={'/app/forms/' + _id} className="form-card">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">{formId}</span>
                                <p>{title}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            );
        });

        return (
            <div className="forms-page">
                <h1>Forms Index</h1>
                <div className="row">
                    {displayForms}
                </div>
                <div className="fixed-action-btn">
                    <Link to="/app/forms/new" className="btn-floating btn-large waves-effect waves-light">
                        <i className="material-icons">add</i>
                    </Link>
                </div>
            </div>
        );
    }
}

export default FormsContainer(Forms);
