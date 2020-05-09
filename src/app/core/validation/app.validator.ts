import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

const equalpassword: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const rePass = control.get('rePass');

  return password.value === rePass.value ? null : { notequalpass: true };
};

const equalEmail: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const email = control.get('email');
  const reEmail = control.get('reEmail');

  return email.value === reEmail.value ? null : { notequalEmail: true };
};


export { equalpassword, equalEmail };
