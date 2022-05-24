import * as validate from '/utils/validate.js';

export const userModel = {
    fname: {
        datatype: 'char',
        validate: [
            validate.isNotBlank
        ]
    },
    lname: {
        datatype: 'char',
        validate: [
            validate.isNotBlank
        ]
    },
    dob: {
        datatype: 'num',
        validate: [
            validate.isValidDate,
            validate.isPastDate
        ]
    },
    address: {
        datatype: 'string',
        validate: [
            validate.isNotBlank
        ]
    },
    postcode: {
        datatype: 'string',
        validate: [
            validate.isNotBlank,
            validate.isValidPostCode
        ]
    },
    contact: {
        datatype: 'char',
        validate: [
            validate.isNotBlank
        ]
    },
    phone: {
        datatype: 'num',
        validate: [
            validate.isNotBlank,
            validate.isValidPhoneNumber
        ]
    },
    ethnicity: {
        datatype: 'enum',
    },
    gender: {
        datatype: 'enum',
    },
    language: {
        datatype: 'enum',
    },
    religion: {
        datatype: 'enum',
    },
    school: {
        datatype: 'enum',
    },
    medical: {
        datatype: 'string',
    },
    diet: {
        datatype: 'string',
    },
    photo: {
        datatype: 'bool',
    }
};

