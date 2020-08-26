import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tareas';

  constructor (private router:Router){}

  List(){
    this.router.navigate(["list"]);
  }

  Add(){
    this.router.navigate(["create"]);
  }
}
