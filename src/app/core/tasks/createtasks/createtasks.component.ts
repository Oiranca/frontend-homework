import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-createtasks',
  templateUrl: './createtasks.component.html',
  styleUrls: ['./createtasks.component.css']
})
export class CreatetasksComponent implements OnInit {
  validationTasks: FormGroup;
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {

  }


  ngOnInit() {
    this.createValidator();
  }

  createValidator() {

    this.validationTasks = this.fb.group({
      nameTasks: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z ]*$')
      ])],
      textTasks: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100),
        Validators.pattern('^[a-zA-Z ]*$')
      ])]

    });

  }
  checkTasks(): boolean {
    return this.validationTasks.get('nameTasks').touched &&
      this.validationTasks.get('nameTasks').dirty;
  }

  onRegistrationFormSubmit() {
    this.isSubmitted = true;
  }
}
