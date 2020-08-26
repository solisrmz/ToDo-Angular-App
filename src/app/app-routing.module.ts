import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './Tareas/list/list.component';
import {AddComponent} from './Tareas/add/add.component';

const routes: Routes = [
  {path:'list', component:ListComponent},
  {path:'create', component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
