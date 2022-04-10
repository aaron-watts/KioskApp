import { Form } from '/modules/form.js';
import { userModel } from '/models/user.js';
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
    const index = Array.from(pageList).findIndex(page => page.classList.contains('active'));

    if (index > 0) {
        pageList[index].classList.remove('active');
        pageList[index - 1].classList.add('active');
    }
});

