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

    validate(inputKeys=this.inputKeys) {
        for (let inputKey of inputKeys) {
            if (this.model[inputKey].validate) {
                const input = this.form[inputKey];

                for(let rule of this.model[inputKey].validate) {
                    console.log(`Testing if [${input.id || input[0].id}] [${rule.name}]`);
                    if (!rule(input)) {
                        console.log('Test Failed');
                        return false;
                    }
                    console.log('Test successful');
                }
            }
        }

        return true;
    }
}

