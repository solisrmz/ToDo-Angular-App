import { Component, OnInit } from '@angular/core';
import {TareaServiceService} from '../../Service/tarea-service.service';
import { Router} from '@angular/router';
import {Tarea} from '../../Models/Tarea';
import {trigger, style, animate, transition, state} from '@angular/animations';
import Swal from 'sweetalert2';

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

  Add(){
    this.router.navigate(["create"]);
  }

  edit(id: number){
    this.router.navigate(["tarea", id]);
  }

  reloadData() {
    this.service.getTareas()
    .subscribe(data=>{
        this.tareas=data;
        console.log(data);
      }
    )
  }

  deleteTodo(id: number) {
    Swal.fire({
      title: '¿Deseas borrar esta tarea?',
      text: "Será borrada definitivamente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#5689A3',
      cancelButtonColor: '#8F2B45',
      confirmButtonText: 'Sí'
      }).then((result) => {
      if (result.value) {
        this.service.delete(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
        Swal.fire(
          'Borrado',
          'La tarea ha sido eliminada',
          'success'
        )
      }
    })
  }
}
