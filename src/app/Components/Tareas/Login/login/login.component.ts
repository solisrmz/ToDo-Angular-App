import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { Router} from '@angular/router';
import {LoginService} from '../../../../Service/login.service';
import { NgxSpinnerService } from "ngx-spinner";
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Para validar si existe el usuario
  mostrar = false;
  encontrado = false;
  //Para validar los input
  errorUsername = false;
  errorPassword = false;
  //Form control para los campos de los input
  nombre = new FormControl('',[Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(private loginService:LoginService, private router:Router, 
              private ngSpinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  login(){
    //Se cambia a true para mostrar la barra de carga
    this.mostrar = true;
    //Valida que los campos del formulario se hayan llenado
    if(this.nombre.value !== undefined && this.nombre.value !== ''){
      if(this.password.value !== undefined && this.password.value !== ''){
        //Se recuperan los valores ingresados
        const username = this.nombre.value;
        const password = this.password.value;
        //La API recibe un objeto, por lo tanto se instancia en esta sección
        let user = new User(username, password);
        //Se llama al servicio en el cual se pasan los datos a la API
        this.loginService.login(user).subscribe(result=>{
          //Si el usuario no está registrado
          if(result.token == 'no registrado'){
            this.encontrado = true;
            this.mostrar = false;
            this.router.navigate(["login"]);
          //Si el usuario está registrado  
          }else{
            //Se guarda el token de auntenticación y se redirige
            console.log(result);
            localStorage.setItem('token', result.token);
            localStorage.setItem('username', result.username);
            this.router.navigate(["list"]);
          }
      },error => console.log(error));
      //Estos bloques else son para mostrar los errores en caso de que los input estén vacíos
      }else{
        this.mostrar = false;
        this.errorUsername = true;
        this.errorPassword = true;
      }
    }else{
      this.mostrar = false;
      this.errorUsername = true;
      this.errorPassword = true;
    }
  }
}
