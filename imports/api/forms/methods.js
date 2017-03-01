import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { logger } from 'meteor/se42:logger';

import { Forms, FormSchema } from './forms.js';


export const createNewForm = new ValidatedMethod({
    name: 'forms.create',
    validate: FormSchema.validator(),
    run({formId, title, fields}) {
        if (!Meteor.userId()) {
            logger.error('Detected unauthorized attempt to create new form');
            throw new Meteor.Error(401, 'Unauthorized');
        }
        const id =  Forms.insert({formId, title, fields});
        return id;
    }
});
