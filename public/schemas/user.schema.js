import * as validate from '/utils/validate.js';

export const userModel = {
    fname: {
        validate: [
            validate.isNotBlank
        ]
    },
    lname: {
        validate: [
            validate.isNotBlank
        ]
    },
    dob: {
        validate: [
            validate.isValidDate,
            validate.isPastDate
        ]
    },
    address: {
        validate: [
            validate.isNotBlank
        ]
    },
    postcode: {
        validate: [
            validate.isNotBlank,
            validate.isValidPostCode
        ]
    },
    contact: {
        validate: [
            validate.isNotBlank
        ]
    },
    phone: {
        validate: [
            validate.isNotBlank,
            validate.isValidPhoneNumber
        ]
    },
    ethnicity: {
    },
    gender: {
    },
    language: {
    },
    religion: {
    },
    school: {
    },
    medical: {
    },
    diet: {
    },
    photo: {
    }
};

