import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service'
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../_model/user';
import { AlertService  } from '../_services/alert.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
  model: any = {};
  user: User ;
  pageTitle:string='User Login ';
  returnUrl: string;
  constructor(private route: ActivatedRoute,
        private router: Router,private loginService: LoginService,private alertService: AlertService) { }

  ngOnInit() {
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  login() {


    this.loginService.userLogin(this.model).subscribe(
      user => {
         this.user=user;
                   
     this.router.navigate(['/workoutlist', `${this.user.userId}`]);
    },
      error => {
        this.alertService.error(error);
      
      });


  }


}

