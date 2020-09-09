import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { Router} from '@angular/router';
import {LoginService} from '../../../Service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.loginService.login(this.user).subscribe(result=>{
        console.log(result);
        this.user = new User();
        if(result.token == null){
          this.router.navigate(["login"]);
        }else{
          localStorage.setItem('token', result.token);
          this.router.navigate(["list"]);
        }
    },error => console.log(error));
  }

  onSubmit(){
    this.login();
  }
}
