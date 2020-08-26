import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './Tareas/list/list.component';
import { AddComponent } from './Tareas/add/add.component';
import { EditComponent } from './Tareas/edit/edit.component';
import {FormsModule} from '@angular/forms';
import {TareaServiceService} from './Service/tarea-service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TareaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
