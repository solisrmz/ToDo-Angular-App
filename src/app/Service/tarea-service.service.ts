import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class TareaServiceService {

  constructor(private http:HttpClient ) { }
}
