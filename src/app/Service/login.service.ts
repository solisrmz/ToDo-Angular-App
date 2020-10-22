import { Injectable } from '@angular/core';
import {User} from '../Models/User';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: User;
  baseUrl: 'http://localhost:8080/todoapp'

  constructor(private http:HttpClient ) { }

  login(user: Object): Observable<any>{
    return this.http.post("http://localhost:8080/todoapp/login",user);
  }
}
