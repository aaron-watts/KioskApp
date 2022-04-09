import { Form } from '/modules/form.js';
import { userModel } from '/models/user.js';

const userForm = new Form(document.forms.user, userModel);

const pages = document.querySelectorAll('.page');
const nextBtn = document.querySelector('#next');
const backBtn = document.querySelector('#back');

nextBtn.addEventListener('click', () => {
    const pageInputs = Array.from(
        document.querySelectorAll('.page.active input')
    ).map(input => input.id);

    const isValid = userForm.validate(pageInputs);
    if (isValid === false) return;

    const index = Array.from(pages).findIndex(page => page.classList.contains('active'));

    if (index < pages.length - 1) {
        pages[index].classList.remove('active');
        pages[index + 1].classList.add('active');
    }
});
backBtn.addEventListener('click', () => {
    const index = Array.from(pages).findIndex(page => page.classList.contains('active'));

    if (index > 0) {
        pages[index].classList.remove('active');
        pages[index - 1].classList.add('active');
    }
});

