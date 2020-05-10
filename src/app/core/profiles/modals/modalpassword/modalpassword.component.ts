import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { equalEmail, equalpassword } from '../../../validation/app.validator';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modalpassword',
  templateUrl: './modalpassword.component.html',
  styleUrls: ['./modalpassword.component.css']
})
export class ModalpasswordComponent implements OnInit {
  validationRegister: FormGroup;
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<ModalpasswordComponent>
  ) {
  }


  ngOnInit() {
    this.createValidator();
  }

  createValidator() {

    this.validationRegister = this.fb.group({

      password: ['', Validators.compose([
        Validators.required, Validators.minLength(8),
        Validators.maxLength(20), Validators.pattern(/z-a/)
      ])],
      rePass: ['', Validators.required]


    }, {
      validators: equalpassword

    });

  }


  checkPassword(): boolean {
    return this.validationRegister.hasError('notequalpass') && this.validationRegister.get('password').dirty;
  }


  onRegistrationFormSubmit() {
    this.isSubmitted = true;
    if (this.validationRegister.valid) {
      console.log('User Registration Form Submit', this.validationRegister.value);
    }

  }

  closeModal() {
    this.dialogRef.close();
  }

}
