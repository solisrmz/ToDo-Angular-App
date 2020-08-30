import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../Models/Tarea';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TareaServiceService {
  //Para guardar las tareas
  tarea:Tarea;
  baseUrl: string;

  constructor(private http:HttpClient ) {this.baseUrl = environment.backEndURL }

  //Obtengo todas las tareas haciendo la consulta a la API
  getTareas(){
    return this.http.get<Tarea[]>(this.baseUrl + "/todos");
  }

  create(todo: Object): Observable<Object>{
    return this.http.post(this.baseUrl + "/create-todo",todo);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + `/delete-todo/${id}`, { responseType: 'text' });
  }

  getTarea(id: number): Observable<any>{
    return this.http.get(this.baseUrl + `/todos/${id}`);
  }

  update(id: number, value: any): Observable<Object> {
    return this.http.put(this.baseUrl + `/update-todo/${id}`, value);
  }
}
