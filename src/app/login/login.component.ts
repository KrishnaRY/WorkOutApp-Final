import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service'
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../_model/user';
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
  errorMessage: string;
      returnUrl: string;
  constructor(private route: ActivatedRoute,
        private router: Router,private loginService: LoginService) { }

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
        this.errorMessage = <any>error;
      
      });


  }


}

