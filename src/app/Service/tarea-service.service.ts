import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../Models/Tarea';
import { Observable } from 'rxjs';

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

  create(todo: Object): Observable<Object>{
    return this.http.post("http://localhost:8080/todo/api/v1/create-todo",todo);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/todo/api/v1/delete-todo/${id}`, { responseType: 'text' });
  }
}
