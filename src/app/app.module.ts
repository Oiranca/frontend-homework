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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    ApplicationnavbarComponent,
    RegisterComponent,
    TasksComponent,
    AssigntasksComponent,
    CreatetasksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
