import { Meteor } from 'meteor/meteor';
import { logger } from 'meteor/se42:logger';


Meteor.startup(() => {
    if (true) {
        logger.info("Created fixtures");
    }
});
