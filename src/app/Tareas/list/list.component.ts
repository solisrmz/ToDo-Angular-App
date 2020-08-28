import { Component, OnInit } from '@angular/core';
import {TareaServiceService} from '../../Service/tarea-service.service';
import { Router} from '@angular/router';
import {Tarea} from '../../Models/Tarea';
import {trigger, style, animate, transition, state} from '@angular/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
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
