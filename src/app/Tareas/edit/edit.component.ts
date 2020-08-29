import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import {Tarea} from '../../Models/Tarea';
import {trigger, style, animate, transition, state} from '@angular/animations';
import Swal from 'sweetalert2';
import {TareaServiceService} from '../../Service/tarea-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  tarea: Tarea;

  constructor(private route: ActivatedRoute,private router: Router,
    private tareaService: TareaServiceService) { }

  ngOnInit(): void {
    this.tarea = new Tarea();
    this.id = this.route.snapshot.params['id'];
    this.tareaService.getTarea(this.id)
      .subscribe(data => {
        console.log(data)
        this.tarea = data;
      }, error => console.log(error));
  }

  update() {
    this.tareaService.update(this.id, this.tarea)
      .subscribe(data => {
        console.log(data);
        this.tarea = new Tarea();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    Swal.fire({
      title: '¿Deseas editar esta tarea?',
      text: "Los cambios serán guardados",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#5689A3',
      cancelButtonColor: '#8F2B45',
      confirmButtonText: 'Sí'
      }).then((result) => {
      if (result.value) {
        this.update();
        Swal.fire(
          'Editado',
          'La tarea ha sido editada',
          'success'
        )
      }
    })
  }

  gotoList() {
    this.router.navigate(['/list']);
  }
}
