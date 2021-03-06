import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './Components/Tareas/list/list.component';
import { AddComponent } from './Components/Tareas/add/add.component';
import { EditComponent } from './Components/Tareas/edit/edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TareaServiceService} from './Service/tarea-service.service';
import {AuthInterceptorService} from './Service/auth-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {UserGuardService} from './Guard/user-guard.service';
import {LoginService} from './Service/login.service';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyProjectsComponent } from './Components/Proyectos/my-projects/my-projects.component';
import { LoginComponent } from './Components/Tareas/Login/login/login.component';
import { NgxSpinnerModule } from "ngx-spinner";  
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ContactoComponent } from './Components/contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    WelcomeComponent,
    MyProjectsComponent,
    LoginComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    ReactiveFormsModule
  ],
  providers: [TareaServiceService, LoginService, UserGuardService, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
