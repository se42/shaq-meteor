import React, { Component } from 'react';
import FormsContainer from '../containers/FormsContainer.jsx';

import { createNewForm } from '/imports/api/forms/methods.js';

class FormNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formId: '',
            title: '',
            fields: [],
            error: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const formId = this.state.formId;
        const title = this.state.title;
        const fields = this.state.fields;
        const router = this.props.router;

        createNewForm.call({formId, title, fields}, (err, res) => {
            if (err) {
                this.setState({error: err.reason});
            } else {
                router.push(`/app/forms/${res}`);
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Create New Form</h1>
                <div className="row">
                    <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="formId" type="text" name="formId"
                                value={this.state.formId} onChange={this.handleChange} />
                            <label htmlFor="formId">Form ID</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="title" type="text" name="title"
                                value={this.state.title} onChange={this.handleChange} />
                            <label htmlFor="title">Title</label>
                        </div>
                    </div>
                    <button type="submit" className="waves-effect waves-light btn">
                        Submit
                    </button>
                    </form>
                </div>
                <div className="row">
                    <p>{this.state.error}</p>
                </div>
            </div>
        );
    }
}

export default FormsContainer(FormNew);
