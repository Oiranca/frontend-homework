import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { equalEmail, equalpassword } from '../validation/app.validator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalemailComponent } from './modals/modalemail/modalemail.component';
import { ModalpasswordComponent } from './modals/modalpassword/modalpassword.component';


@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  isDisable: boolean = true;


  constructor(private fb: FormBuilder, public matDialog: MatDialog) {

  }


  ngOnInit() {
  }


  openModalEmail() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '375px';
    dialogConfig.width = '600px';

    this.matDialog.open(ModalemailComponent, dialogConfig);

  }
    openModalPass() {
      const dialogConfigPass = new MatDialogConfig();

      dialogConfigPass.disableClose = true;
      dialogConfigPass.id = 'modal-component';
      dialogConfigPass.height = '375px';
      dialogConfigPass.width = '600px';

      this.matDialog.open(ModalpasswordComponent, dialogConfigPass);
    }
  }





