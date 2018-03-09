import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkoutService } from '../workout/workout.service';
import { Workout } from '../_model/workout';
import { ServiceUrlProviderService } from '../serviceurlprovider.service';
@Component({
  selector: 'app-workoutlist',
  templateUrl: './workoutlist.component.html',
  styleUrls: ['./workoutlist.component.css']
 
})
export class WorkoutlistComponent implements OnInit {
  userId: number;
 pageTitle:string= 'Workout Details ';
   workouts: Workout[] = [];
  errorMessage: string;
  constructor(private router: Router, private route: ActivatedRoute, private workoutService: WorkoutService) { }
 

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('userId');
     this.userId = Number(param);
    //this.userId = param;
    this.workoutService.getWorkouts(Number(param))
      .subscribe(workouts => {
        this.workouts = workouts;


      },
      error => this.errorMessage = <any>error);

  }
  newWorkout() {

    this.router.navigate(['/workout', `${this.userId}`]);
  }
 
}
