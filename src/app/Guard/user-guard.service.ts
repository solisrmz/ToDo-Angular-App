import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {LoginService} from '../Service/login.service';


@Injectable()
export class UserGuardService implements CanActivate {

  constructor(private router: Router, private login: LoginService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = localStorage.getItem('token');
    if (token == null) {
      this.router.navigate(['401']);
      return false;
    } else {
      if (token !=null) {
        return true;
      } else {
        this.router.navigate(['401']);
        return false;
      }
    }
  }
}
