import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { equalEmail, equalpassword } from '../../../validation/app.validator';

@Component({
  selector: 'app-registeradmin',
  templateUrl: './registeradmin.component.html',
  styleUrls: ['./registeradmin.component.css']
})
export class RegisteradminComponent implements OnInit {
  validationRegister: FormGroup;
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {

  }


  ngOnInit() {
    this.createValidator();
  }

  createValidator() {

    this.validationRegister = this.fb.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z ]*$')
      ])],
      lastName: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z ]*$')
      ])],
      password: ['', Validators.compose([
        Validators.required, Validators.minLength(8),
        Validators.maxLength(20), Validators.pattern(/z-a/)
      ])],
      rePass: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      reEmail: ['', Validators.required],

      /* TODO: Buscar que el nombre de la casa no sea el mismo*/
      nameHome: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z ]*$')
      ])]

    }, {
      validators: [equalpassword, equalEmail]

    });

  }


  checkPassword(): boolean {
    return this.validationRegister.hasError('notequalpass') && this.validationRegister.get('password').dirty;
  }

  checkEmail(): boolean {
    return this.validationRegister.hasError('notequalEmail') &&
      this.validationRegister.get('email').dirty;
  }


  onRegistrationFormSubmit() {
    this.isSubmitted = true;
    if (this.validationRegister.valid) {
      console.log('User Registration Form Submit', this.validationRegister.value);
    }

  }

}



