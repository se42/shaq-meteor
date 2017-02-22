import { createContainer } from 'meteor/react-meteor-data';

import Forms from '../pages/Forms.jsx';

export default createContainer(() => {
    return {
        forms: [
            {
                _id: 'v98tu98wy',
                formId: 'F-001',
                title: 'NC Report',
            },
            {
                _id: 'nbpo8gasf',
                formId: 'F-002',
                title: 'Quality Alert',
            },
            {
                _id: 'oi90ubdtr',
                formId: 'F-003',
                title: 'Incident Summary',
            }
        ],
    };
}, Forms);
