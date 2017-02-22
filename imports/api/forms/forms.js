import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';


const FormSchema = new SimpleSchema({
    formId: {
        type: String,
    },
    title: {
        type: String,
    }
})


export const Forms = new Mongo.Collection('forms');
Forms.attachSchema(FormSchema);
