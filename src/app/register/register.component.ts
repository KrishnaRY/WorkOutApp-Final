import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service'
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService  } from '../_services/alert.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[RegisterService]
})
export class RegisterComponent implements OnInit {
 model: any = {};
 pageTitle:string='User Registration'
 // errorMessage: string;
  constructor(private route: ActivatedRoute,
        private router: Router,private registerService:RegisterService,private alertService: AlertService) { }

  ngOnInit() {
  }
register(){
  if(this.model.password!=this.model.confirmpassword){
     this.alertService.error('Password mismatch');
  // this.errorMessage='Password mismatch'
    return false;
  }else{
  this.registerService.registerUser(this.model).subscribe(
      response => {
         this.alertService.success('Registration successful', true);
        this.router.navigate(['/home']);
    },
      error => {
          this.alertService.error(error);
       // this.errorMessage = <any>error;
      
      });


  }
}


}
