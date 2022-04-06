export class Form {
    constructor(_source, _model){
        this.form = _source;
        this.model = _model;

        this.inputKeys = Object.keys(this.model);

        this.inputKeys.forEach(inputKey => {
            // add helper functions for input events
        });

        this.form.addEventListener('submit', evt => {
            evt.preventDefault();

            console.log('Delay submission...');

            // validate
            if (this.validate()) console.log('SENDING FORM...');
        });
    }

    validate() {
        for (let inputKey of this.inputKeys) {
            if (this.model[inputKey].validate) {
                const input = this.form[inputKey];

                for(let rule of this.model[inputKey].validate) {
                    if (!rule(input)) return false;
                }
            }
        }

        return true;
    }
}

