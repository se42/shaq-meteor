import { Meteor } from 'meteor/meteor';
import { logger } from 'meteor/se42:logger';

import { Forms } from '/imports/api/forms/forms.js';


Meteor.startup(() => {
    if (Forms.find().count() === 0) {
        const forms = [
            {
                formId: 'F-001',
                title: 'NC Report',
            },
            {
                formId: 'F-002',
                title: 'Quality Alert',
            },
            {
                formId: 'F-003',
                title: 'Incident Summary',
            }
        ];
        forms.forEach((form) => {
            const id = Forms.insert(form);
            logger.info(`Created fixture: form document ${id}`);
        });
    }
});
