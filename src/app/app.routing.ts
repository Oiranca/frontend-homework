import { RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { AssigntasksComponent } from './core/tasks/assigntasks/assigntasks.component';
import { CreatetasksComponent } from './core/tasks/createtasks/createtasks.component';
import { TasksComponent } from './core/tasks/tasks.component';
import { ReportsComponent } from './core/reports/reports.component';



const appRoutes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'tasks', component: TasksComponent, children: [
      { path: '', component: AssigntasksComponent, pathMatch: 'full' },
      { path: 'newtasks', component: CreatetasksComponent, pathMatch: 'full' }
    ] },
  { path: 'reports', component: ReportsComponent, pathMatch: 'full' },
];
export const routing = RouterModule.forRoot(appRoutes);
