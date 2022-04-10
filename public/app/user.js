import { Form } from '/modules/form.js';
import { userModel } from '/models/user.js';

const userForm = new Form(document.forms.user, userModel);

const pages = document.querySelectorAll('.page');
const nextBtn = document.querySelector('#next');
const backBtn = document.querySelector('#back');
const spinnerControl = document.querySelector(
    `#${document.querySelector('.spinner').dataset.overlay}`
);

const checkPage = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pageInputs = Array.from(
                document.querySelectorAll('.page.active input')
            ).map(input => input.id);

            const isValid = userForm.validate(pageInputs);

            if (isValid) resolve();
            else reject();
        }, 1000);
    });
};

nextBtn.addEventListener('click', () => {
    spinnerControl.classList.add('active');

    checkPage()
    .then(() => {
        console.log('resolved')
        const index = Array.from(pages).findIndex(page => page.classList.contains('active'));

        if (index < pages.length - 1) {
            pages[index].classList.remove('active');
            pages[index + 1].classList.add('active');
        }
    })
    .catch(() => {
        console.log('rejected')
    })
    .then(() => spinnerControl.classList.remove('active'))

});

/*nextBtn.addEventListener('click', async () => {
    spinner.parentNode.classList.add('active');

    const pageInputs = Array.from(
        document.querySelectorAll('.page.active input')
    ).map(input => input.id);

    const isValid = userForm.validate(pageInputs);

    await new Promise(resolve => setTimeout(() => {
        spinner.parentNode.classList.remove('active');
    }, 1000));
    console.log('done')
    
    const index = Array.from(pages).findIndex(page => page.classList.contains('active'));

    if (isValid === false) return;

    if (index < pages.length - 1) {
        pages[index].classList.remove('active');
        pages[index + 1].classList.add('active');
    }
    
});*/
backBtn.addEventListener('click', () => {
    const index = Array.from(pages).findIndex(page => page.classList.contains('active'));

    if (index > 0) {
        pages[index].classList.remove('active');
        pages[index - 1].classList.add('active');
    }
});

