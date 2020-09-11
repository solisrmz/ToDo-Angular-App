import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import {trigger, style, animate, transition, state} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('enterState', [
      state('void', style({
        transform: 'translateX(-100%)',
        opacity:0
      })),
      transition(':enter', [
        animate(500, style({
          transform: 'translateX(0)',
          opacity:1
        }))
      ])
    ])
]
})
export class AppComponent {
  title = 'Tareas';
  constructor (private router:Router){}

  List(){
    const token = localStorage.getItem('token');
    if(token == null){
      this.router.navigate(["login"]);
    }
    if(token !=null){
      this.router.navigate(["list"]);
    }
  }
  Add(){
    this.router.navigate(["create"]);
  }
}
