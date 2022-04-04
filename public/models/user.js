import * as validate from '/utils/validate.js';

export const userModel = {
    fname: {
        validate: [
            validate.isAaron
        ]
    },
    lname: {
    },
    dob: {
        validate: [
            validate.isValidDate,
            validate.isPast
        ]
    },
    address: {
    },
    postcode: {
    },
    contact: {
    },
    phone: {
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

