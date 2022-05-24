import { Form } from '/modules/Form.js';
import { userModel } from '/schemas/user.schema.js';
import * as page from '/utils/page.js';

const userForm = new Form(document.forms.user, userModel);

const pageList = document.querySelectorAll('.page');
const nextBtn = document.querySelector('#next');
const backBtn = document.querySelector('#back');

const spinner = {
    control: document.querySelector(
    `#${document.querySelector('.spinner').dataset.overlay}`
    ),
    on() {
        this.control.classList.add('active');
    },
    off() {
        this.control.classList.remove('active');
    }
};

nextBtn.addEventListener('click', () => {
    spinner.on();

    page.validate(userForm)
    .then(() => {
        const isLastPage = page.next(pageList);
        if (isLastPage) console.log('validate and submit form')
    })
    .catch(() => {
        console.log('rejected')
    })
    .then(() => spinner.off())

});

backBtn.addEventListener('click', () => {
    spinner.on();

    new Promise((resolve, reject) => {
        setTimeout(() => {
            const isFirstPage = page.back(pageList);
            if (isFirstPage) reject();
            resolve();
        }, 1000);
    })
    .then(() => {
        console.log('done');
        spinner.off();
    })
    .catch(() => {
        console.log('return to app');
        // we will want to show a modal at this point to ask if user wants to exit form!!!
        spinner.off();
    })
    
});

