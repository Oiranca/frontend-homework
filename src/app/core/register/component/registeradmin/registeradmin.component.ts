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


  constructor(private fb: FormBuilder) {

  }


  ngOnInit() {
    this.createValidator();
  }

  createValidator() {

    this.validationRegister = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.compose([
        Validators.required, Validators.minLength(8),
        Validators.maxLength(20), Validators.pattern(/z-a/)
      ])],
      rePass: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      reEmail: ['', Validators.required],
      nameHome: ['', Validators.required],


    }, {
      validators: [equalpassword, equalEmail]

    });

  }


  checkPassword(): boolean {
    return this.validationRegister.hasError('notequalpass') &&
      this.validationRegister.get('password').dirty &&
      this.validationRegister.get('rePass').dirty;
  }

  checkEmail(): boolean {
    return this.validationRegister.hasError('notequalEmail') &&
      this.validationRegister.get('email').dirty &&
      this.validationRegister.get('reEmail').dirty;
  }




}



