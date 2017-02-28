import { Meteor } from 'meteor/meteor';
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Forms } from '/imports/api/forms/forms.js';


export default function FormsContainer(presentationComponent) {
    return createContainer(() => {
        Meteor.subscribe('forms');
        return {
            forms: Forms.find().fetch(),
        };
    }, presentationComponent);
}
