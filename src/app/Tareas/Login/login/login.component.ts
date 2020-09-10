import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { Router} from '@angular/router';
import {LoginService} from '../../../Service/login.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mostrar = false;
  encontrado = false;
  user: User = new User();
  constructor(private loginService:LoginService, private router:Router, private ngSpinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  login(){
      this.loginService.login(this.user).subscribe(result=>{
        console.log(result);
        this.user = new User();
        if(result.token == 'no registrado'){
          this.encontrado = true;
          this.mostrar = false;
          this.router.navigate(["login"]);
        }else{
          localStorage.setItem('token', result.token);
          this.router.navigate(["list"]);
        }
    },error => console.log(error));
  }
  
  onSubmit(){
    this.mostrar = true;
    this.login();
  }
}
