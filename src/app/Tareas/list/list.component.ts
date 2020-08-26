import { Component, OnInit } from '@angular/core';
import {TareaServiceService} from '../../Service/tarea-service.service';
import { Router} from '@angular/router';
import {Tarea} from '../../Models/Tarea';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tareas:Tarea[];
  constructor(private service:TareaServiceService, private router:Router) { }

  
  ngOnInit(): void {
    this.service.getTareas()
    .subscribe(data=>{
        this.tareas=data;
        console.log(data);
      }
    )
  }
}
