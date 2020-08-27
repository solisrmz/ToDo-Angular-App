import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../Models/Tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaServiceService {
  //Para guardar las tareas
  tarea:Tarea;

  constructor(private http:HttpClient ) { }

  //Obtengo todas las tareas haciendo la consulta a la API
  getTareas(){
    return this.http.get<Tarea[]>("http://localhost:8080/todo/api/v1/todos");
  }
}
