import { RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { AssigntasksComponent } from './core/tasks/assigntasks/assigntasks.component';
import { CreatetasksComponent } from './core/tasks/createtasks/createtasks.component';
import { TasksComponent } from './core/tasks/tasks.component';
import { ReportsComponent } from './core/reports/reports.component';
import { ProfilesComponent } from './core/profiles/profiles.component';
import { ManagefamilyComponent } from './core/managefamily/managefamily.component';
import { RegisteradminComponent } from './core/register/component/registeradmin/registeradmin.component';
import { RegisterfamilyComponent } from './core/register/component/registerfamily/registerfamily.component';


const appRoutes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'register', component: RegisterComponent, children: [
      { path: 'admin', component: RegisteradminComponent, pathMatch: 'full' },
      { path: 'family', component: RegisterfamilyComponent, pathMatch: 'full' }

    ]
  },
  {
    path: 'tasks', component: TasksComponent, children: [
      { path: '', component: AssigntasksComponent, pathMatch: 'full' },
      { path: 'newtasks', component: CreatetasksComponent, pathMatch: 'full' }
    ]
  },
  { path: 'reports', component: ReportsComponent, pathMatch: 'full' },
  { path: 'profiles', component: ProfilesComponent, pathMatch: 'full' },
  { path: 'managefamily', component: ManagefamilyComponent, pathMatch: 'full' }
];
export const routing = RouterModule.forRoot(appRoutes);
