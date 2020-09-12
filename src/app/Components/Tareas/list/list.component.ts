import { Component, OnInit } from '@angular/core';
import {TareaServiceService} from '../../../Service/tarea-service.service';
import { Router} from '@angular/router';
import {Tarea} from '../../../Models/Tarea';
import {trigger, style, animate, transition, state} from '@angular/animations';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  //Para crear la animación de entrada
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
  //Arreglo en donde se van a almacenar todas las tareas
  tareas:Tarea[];
  //Se recupera el token y el username guardados cuando se hizo el login
  token = localStorage.getItem("token");
  username = localStorage.getItem("username");
  user: string;
  constructor(private service:TareaServiceService, private router:Router) { 
  }
  ngOnInit(): void {
    //Se obtienen todas las tareas
    this.reloadData();
  }

  //Ruta para agregar una nueva tarea, redirege al componente
  Add(){
    this.router.navigate(["create"]);
  }

  //Redirige al componente en donde se edita una tarea
  edit(id: number){
    this.router.navigate(["tarea", id]);
  }

  //Se recargan los datos en la tabla
  reloadData() {
    this.service.getTareas()
    .subscribe(data=>{
        this.tareas=data;
        console.log(data);
      }
    )
  }

  //Se borra un elemento, la funcion recibe el id del elemento seleccionado
  deleteTodo(id: number) {
    //Se usa Swal para preguntar si se quiere borrar el elemento
    Swal.fire({
      title: '¿Deseas borrar esta tarea?',
      text: "Será borrada definitivamente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#5689A3',
      cancelButtonColor: '#8F2B45',
      confirmButtonText: 'Sí'
      }).then((result) => {
      //Si da click en aceptar entonces llama al service en donde se borra  
      if (result.value) {
        this.service.delete(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
          //Si se borra, entonce muestra un alert de confirmación
          Swal.fire(
          'Borrado',
          'La tarea ha sido eliminada',
          'success'
        )
      }
    })
  }

  //Función para salir de la sesión
  logout(){
    localStorage.removeItem("token");
    this.router.navigate([""]);
  }
}
