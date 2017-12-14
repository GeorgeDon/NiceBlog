import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { User } from '../model/user.model';
import {UserLoginService} from './user-login.service'


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
    public user:User = new User();
    public error : Error;

    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public userLoginService: UserLoginService
      ) {

    }

    ngOnInit() {
        console.log("--- user-login-component ---");
        console.log(this.router);
        console.log(this.activatedRoute);

        let activatedRouteSnapshot:ActivatedRouteSnapshot=this.activatedRoute.snapshot;
        let routerState: RouterState = this.router.routerState;
        let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

        console.log(activatedRouteSnapshot);
        console.log(routerState);
        console.log(routerStateSnapshot);
    }

    public doLogin():void{  
       this.userLoginService.login(this.user);      
    }

    public doLogout():void{
      // this.userLoginService.logout();
      // this.router.navigateByUrl("home");
    }

    public forgetPwd():void{
      // this.router.navigateByUrl("forgetpwd");
    }
}
