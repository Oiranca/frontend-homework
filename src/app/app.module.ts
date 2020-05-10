import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ApplicationnavbarComponent } from './shared/components/applicationnav/applicationnavbar.component';
import { RegisterComponent } from './core/register/register.component';
import { TasksComponent } from './core/tasks/tasks.component';
import { AssigntasksComponent } from './core/tasks/assigntasks/assigntasks.component';
import { CreatetasksComponent } from './core/tasks/createtasks/createtasks.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { ReportsComponent } from './core/reports/reports.component';
import { ProfilesComponent } from './core/profiles/profiles.component';
import { ManagefamilyComponent } from './core/managefamily/managefamily.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterfamilyComponent } from './core/register/component/registerfamily/registerfamily.component';
import { RegisteradminComponent } from './core/register/component/registeradmin/registeradmin.component';
import { ModalComponent } from './core/login/modal/modal.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalpasswordComponent } from './core/profiles/modals/modalpassword/modalpassword.component';
import { ModalemailComponent } from './core/profiles/modals/modalemail/modalemail.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    ApplicationnavbarComponent,
    RegisterComponent,
    TasksComponent,
    AssigntasksComponent,
    CreatetasksComponent,
    ReportsComponent,
    ProfilesComponent,
    ManagefamilyComponent,
    RegisterfamilyComponent,
    RegisteradminComponent,
    ModalComponent,
    ModalpasswordComponent,
    ModalemailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
