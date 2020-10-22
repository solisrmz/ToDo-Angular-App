import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './Components/Tareas/list/list.component';
import {AddComponent} from './Components/Tareas/add/add.component';
import {EditComponent} from './Components/Tareas/edit/edit.component';
import {WelcomeComponent} from './Components/welcome/welcome.component';
import {ContactoComponent} from './Components/contacto/contacto.component';
import {LoginComponent} from './Components/Tareas/Login/login/login.component';
import {MyProjectsComponent} from './Components/Proyectos/my-projects/my-projects.component';
import {UserGuardService} from './Guard/user-guard.service';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'list', component: ListComponent, canActivate: [UserGuardService]},
  {path: 'create', component: AddComponent, canActivate: [UserGuardService]},
  {path: 'projects', component: MyProjectsComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'tarea/:id', component: EditComponent, canActivate: [UserGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
