import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../Models/Tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaServiceService {

  tarea:Tarea;

  constructor(private http:HttpClient ) { }

  url = 'http://localhost:8090/api/v1.0/tareas/list';

  getTareas(){
    return this.http.get<Tarea[]>("http://localhost:8090/api/v1.0/tareas/list");
  }
}
