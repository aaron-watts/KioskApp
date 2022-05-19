export const validate = formInstance => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pageInputs = Array.from(
                document.querySelectorAll('.page.active input, .page.active textarea')
            ).map(input => input.id);

            console.log(pageInputs)

            const isValid = formInstance.validate(pageInputs);
            console.log(isValid);

            if (isValid) resolve();
            else reject();
        }, 1000);
    });
};

export const next = pageList => {
    const index = Array.from(pageList).findIndex(page => page.classList.contains('active'));

    if (index < pageList.length - 1) {
        pageList[index].classList.remove('active');
        pageList[index + 1].classList.add('active');

        return false;
    }

    return true;
};

export const back = pageList => {
    const index = Array.from(pageList).findIndex(page => page.classList.contains('active'));

    
};

