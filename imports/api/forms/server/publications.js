import { Meteor } from 'meteor/meteor';
import { Forms } from '../forms.js';


Meteor.publish('forms', () => Forms.find());
