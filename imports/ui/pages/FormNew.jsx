import React, { Component } from 'react';
import FormsContainer from '../containers/FormsContainer.jsx';

class FormNew extends Component {
    render() {
        return (
            <div>
                <h1>Create New Form</h1>
            </div>
        );
    }
}

export default FormsContainer(FormNew);
