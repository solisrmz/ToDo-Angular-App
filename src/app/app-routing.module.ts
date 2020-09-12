import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './components/Tareas/list/list.component';
import {AddComponent} from './components/Tareas/add/add.component';
import {EditComponent} from './components/Tareas/edit/edit.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {ContactoComponent} from './components/contacto/contacto.component';
import {LoginComponent} from './components/Tareas/Login/login/login.component';
import {MyProjectsComponent} from './components/Proyectos/my-projects/my-projects.component';
import {UserGuardService} from './Guard/user-guard.service';

const routes: Routes = [
  {path:'', component:WelcomeComponent},
  {path:'login', component:LoginComponent},
  {path:'list', component:ListComponent, canActivate: [UserGuardService]},
  {path:'create', component:AddComponent, canActivate: [UserGuardService]},
  {path: 'projects', component:MyProjectsComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'tarea/:id', component:EditComponent, canActivate: [UserGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
