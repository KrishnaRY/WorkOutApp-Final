import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkouttransactionsService } from '../workouttransactions/workouttransactions.service';
import { Workout } from '../_model/workout';
import { WorkoutTransaction } from '../_model/workouttransaction';
import { AlertService  } from '../_services/alert.service';
@Component({
  selector: 'app-workouttransactions',
  templateUrl: './workouttransactions.component.html',
  styleUrls: ['./workouttransactions.component.css']
   
})
export class WorkouttransactionsComponent implements OnInit {
 pageTitle:string= 'Start workout';
  model: any = {};
  userId: number;
  workoutId: number;
  title:string;
  isValid:boolean;
  startime:string;
  stoptime:string;

  constructor(private router: Router, private route: ActivatedRoute, 
  private workouttransactionsService: WorkouttransactionsService,
   private alertService: AlertService) { }

  ngOnInit() {
     const param = this.route.snapshot.paramMap.get('workoutId');
     this.workoutId = Number(param);
     this.getworkoutdetals();
  }
 getworkoutdetals(){
   this.workouttransactionsService.getWorkout(this.workoutId).subscribe(
      workout => {
      this.userId=workout.userId;
      this.title=workout.title;
         },
       error => {
       this.alertService.error(error);
      });

 }
 start() {
  let isoDate = new Date(new Date()).toISOString();
  this.startime=isoDate;
 
}
stop() {
  let isoDate = new Date(new Date()).toISOString();
  this.stoptime=isoDate;
this.model.startTime=this.startime;
this.model.stopTime=this.stoptime;
this.model.workoutId= this.workoutId;

   this.workouttransactionsService.createWorkouttrans(this.model).subscribe(
     response =>  {
       this.router.navigate(['/workouttranslist', `${this.workoutId}`]);
         },
       error => {
       this.alertService.error(error);
      });

 
}
onBack(){
    this.router.navigate(['/workouttranslist', `${this.workoutId}`]);
}

}
