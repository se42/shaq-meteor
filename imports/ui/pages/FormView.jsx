import React, { Component } from 'react';
import FormsContainer from '../containers/FormsContainer.jsx';

class FormView extends Component {
    componentWillMount() {
        const id = this.props.params.id;
        const form = this.props.forms.find((form) => form._id === id);
        if (!form) {
            const router = this.props.router;
            router.replace('404');
        }
    }

    render() {
        const id = this.props.params.id;
        const form = this.props.forms.find((form) => form._id === id);
        return (
            <div>
                <h1>{form.formId} -- {form.title}</h1>
            </div>
        );
    }
}

export default FormsContainer(FormView);
