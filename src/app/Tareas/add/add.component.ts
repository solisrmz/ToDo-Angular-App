import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../Models/Tarea';
import {TareaServiceService} from '../../Service/tarea-service.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  tarea: Tarea = new Tarea();
  constructor(private tareaService:TareaServiceService, private router:Router) { }

  ngOnInit(){
  }

  save() {
    this.tareaService
    .create(this.tarea).subscribe(data => {
      console.log(data)
      this.tarea = new Tarea();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    console.log(this.tarea);
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/list']);
  }
}
