import React, { Component } from 'react';

export default class QcForms extends Component {
    render() {
        return (
            <div>
                <p>Hello {this.props.params.name ? this.props.params.name : 'stranger'}</p>
            </div>
        )
    }
}
