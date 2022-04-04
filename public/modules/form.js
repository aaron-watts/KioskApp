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

            console.log(this);

            // validate
            this.validate();
        });
    }

    validate(){
        for (let inputKey of this.inputKeys){
            if (this.model[inputKey].validate) {
                for(let rule of this.model[inputKey].validate){
                    //console.log(rule);

                    console.log(rule(this.form[inputKey]));
                }
            }
        }

        return true;
    }
}

