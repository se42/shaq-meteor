import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Forms } from '/imports/api/forms/forms.js';
import FormsPage from '../pages/Forms.jsx';

export default createContainer(() => {
    const formsHandle = Meteor.subscribe('forms');

    return {
        forms: Forms.find().fetch(),
    };
}, FormsPage);
