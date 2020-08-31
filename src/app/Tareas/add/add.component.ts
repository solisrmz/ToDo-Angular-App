import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../Models/Tarea';
import {TareaMotivo} from '../../Models/TareaMotivo'
import {Motivo} from '../../Models/Motivo';
import {TareaServiceService} from '../../Service/tarea-service.service';
import { Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  tarea: Tarea = new Tarea();
  motivos : Motivo[];
  seleccionado : string = '';
  verSeleccion: string = '';
  constructor(private tareaService:TareaServiceService, private router:Router) { }

  ngOnInit(){
    this.tareaService.getMotivos()
    .subscribe(data=>{
        this.motivos=data;
        console.log(data);
      }
    )
  }

  save() {
    this.verSeleccion = this.seleccionado;
    let tm: TareaMotivo = new TareaMotivo(this.tarea, this.verSeleccion)
    this.tareaService
    .create(tm).subscribe(data => {
      console.log(data)
      this.tarea = new Tarea();
      Swal.fire(
        'Agregada',
        'La tarea ha sido agregada con éxito',
        'success'
      )
      this.gotoList();
    }, 
    error => console.log(error));
    Swal.fire(
      'Error',
      'No fue prosible agregar la tarea',
      'error'
    )
  }

  onSubmit() {
    console.log(this.tarea);
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/list']);
  }
}
