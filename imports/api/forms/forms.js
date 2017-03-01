import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';


const fieldTypes = [
    {
        name: 'TEXT',
        displayName: 'Text',
        valueType: String,
    },
    {
        name: 'DATE',
        displayName: 'Date',
        valueType: Date,
    },
    {
        name: 'SELECT',
        displayName: 'Select',
        valueType: String,
    },
    {
        name: 'CHECKBOX',
        displayName: 'Checkbox',
        valueType: Boolean,
    },
];

const FormFieldSchema = new SimpleSchema({
    name: String,
    fieldType: {
        type: String,
        allowedValues: [fieldTypes.map((fieldType) => fieldType.name)],
    },
});


export const FormSchema = new SimpleSchema({
    formId: String,
    title:  String,
    fields: {
        type: Array,
        defaultValue: [],
    },
    'fields.$': {
        type: FormFieldSchema,
    },
});


export const Forms = new Mongo.Collection('forms');
Forms.attachSchema(FormSchema);
