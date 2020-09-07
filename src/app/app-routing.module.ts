import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './Tareas/list/list.component';
import {AddComponent} from './Tareas/add/add.component';
import {EditComponent} from './Tareas/edit/edit.component';
import {WelcomeComponent} from './Welcome/welcome/welcome.component';
import {MyProjectsComponent} from './Proyectos/my-projects/my-projects.component';

const routes: Routes = [
  {path:'', component:WelcomeComponent},
  {path:'list', component:ListComponent},
  {path:'create', component:AddComponent},
  {path: 'projects', component:MyProjectsComponent},
  {path: 'tarea/:id', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
