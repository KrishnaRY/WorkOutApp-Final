import { Component, OnInit } from '@angular/core';
import { WorkoutTransaction } from '../_model/workouttransaction';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkouttransactionsService } from '../workouttransactions/workouttransactions.service';
import { Workout } from '../_model/workout';
@Component({
  selector: 'app-workouttransactionslist',
  templateUrl: './workouttransactionslist.component.html',
  styleUrls: ['./workouttransactionslist.component.css']
  
})
export class WorkouttransactionsListComponent implements OnInit {
  workoutId: number;
  userId:number;
  title:string;
  pageTitle:string='Workout Transaction Details';
  workoutTransactions: WorkoutTransaction[] = [];
  errorMessage: string;
  constructor(private router: Router, private route: ActivatedRoute, private workouttransactionsService: WorkouttransactionsService) { }

  ngOnInit() {
    
     const param = this.route.snapshot.paramMap.get('workoutId');
     this.workoutId = Number(param);
    //this.userId = param;
    this.getworkoutdetals();
    this.workouttransactionsService.getWorkouttrans(Number(param))
      .subscribe(workoutTransaction => {
        this.workoutTransactions = workoutTransaction;
      },
      error => this.errorMessage = <any>error);
  }
newWorkouttrans(){
 this.router.navigate(['/workouttrans', `${this.workoutId}`]);
}
 getworkoutdetals(){
   this.workouttransactionsService.getWorkout(this.workoutId).subscribe(
      workout => {
      this.userId=workout.userId;
      this.title=workout.title;
         },
      error => {
        this.errorMessage = <any>error;
      
      });

 }
 onBack(){
   this.router.navigate(['/workoutlist', `${this.userId}`]);
 }
}
