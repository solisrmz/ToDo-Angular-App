import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './Tareas/list/list.component';
import {AddComponent} from './Tareas/add/add.component';
import {EditComponent} from './Tareas/edit/edit.component';
import {WelcomeComponent} from './Welcome/welcome/welcome.component';
import {LoginComponent} from './Tareas/Login/login/login.component';
import {MyProjectsComponent} from './Proyectos/my-projects/my-projects.component';
import {UserGuardService} from './Guard/user-guard.service';

const routes: Routes = [
  {path:'', component:WelcomeComponent},
  {path:'login', component:LoginComponent},
  {path:'list', component:ListComponent, canActivate: [UserGuardService]},
  {path:'create', component:AddComponent, canActivate: [UserGuardService]},
  {path: 'projects', component:MyProjectsComponent},
  {path: 'tarea/:id', component:EditComponent, canActivate: [UserGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
