import { Form } from '/modules/form.js';
import { userModel } from '/models/user.js';

const userForm = new Form(document.forms.user, userModel);

console.log(userForm.model[user[0].id].data);

