export class Form {
    constructor(_source, _model){
        this.form = _source;
        this.model = _model;

        this.inputKeys = Object.keys(this.model);

        this.inputKeys.forEach(inputKey => {
            //this.form[inputKey].dataset.data = this.model[inputKey].data;
        });

        this.form.addEventListener('submit', function(evt){
            evt.preventDefault();

            console.log('Delay submission...');
        })
    }

}

