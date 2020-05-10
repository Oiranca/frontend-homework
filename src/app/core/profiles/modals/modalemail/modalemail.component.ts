import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { equalEmail, equalpassword } from '../../../validation/app.validator';


@Component({
  selector: 'app-modalemial',
  templateUrl: './modalemail.component.html',
  styleUrls: ['./modalemail.component.css']
})
export class ModalemailComponent implements OnInit {
  validationRegister: FormGroup;
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<ModalemailComponent>
  ) {
  }

  ngOnInit() {
    this.createValidator();
  }


  createValidator() {

    this.validationRegister = this.fb.group({

      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      reEmail: ['', Validators.required]


    }, {
      validators: equalEmail

    });
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


  closeModal() {
    this.dialogRef.close();
  }


}
