import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AplicationnavbarComponent } from './shared/components/aplicationnav/aplicationnavbar.component';
import { RegisterComponent } from './core/register/register.component';
import { TasksComponent } from './core/tasks/tasks.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    AplicationnavbarComponent,
    RegisterComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
