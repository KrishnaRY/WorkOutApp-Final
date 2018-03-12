import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkoutService } from '../workout/workout.service';
import { Workout } from '../_model/workout';
import { ServiceUrlProviderService } from '../serviceurlprovider.service';
import { AlertService  } from '../_services/alert.service';
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
   pages : number = 4;
     pageSize : number = 5;
   pageNumber : number = 0;
   currentIndex : number = 1;
   pagesIndex : Array<number>;
   pageStart : number = 1;
    workoutList:Workout[] = [];
  constructor(private router: Router, private route: ActivatedRoute, private workoutService: WorkoutService,
  private alertService: AlertService) { }
 

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('userId');
     this.userId = Number(param);
    //this.userId = param;
    this.workoutService.getWorkouts(Number(param))
      .subscribe(workouts => {
        this.workouts = workouts;
        this.workoutList=this.workouts;
        this.init();

      },
     error => {
       this.alertService.error(error);
      });


  }
  newWorkout() {

    this.router.navigate(['/workout', `${this.userId}`]);
  }


     init(){
       
         this.currentIndex = 1;
         this.pageStart = 1;
         this.pages = 4;

         this.pageNumber = parseInt(""+ (this.workoutList.length / this.pageSize));
         if(this.workoutList.length % this.pageSize != 0){
            this.pageNumber ++;
         }
    
         if(this.pageNumber  < this.pages){
               this.pages =  this.pageNumber;
         }
       
         this.refreshItems();
         console.log("this.pageNumber :  "+this.pageNumber);
   }

     refreshItems(){
               this.workouts = this.workoutList.slice((this.currentIndex - 1)*this.pageSize, (this.currentIndex) * this.pageSize);
               this.pagesIndex =  this.fillArray();
   }
   fillArray(): any{
      var obj = new Array();
      for(var index = this.pageStart; index< this.pageStart + this.pages; index ++) {
                  obj.push(index);
      }
      return obj;
   }
       prevPage(){
      if(this.currentIndex>1){
         this.currentIndex --;
      } 
      if(this.currentIndex < this.pageStart){
         this.pageStart = this.currentIndex;
      }
      this.refreshItems();
   }
   nextPage(){
      if(this.currentIndex < this.pageNumber){
            this.currentIndex ++;
      }
      if(this.currentIndex >= (this.pageStart + this.pages)){
         this.pageStart = this.currentIndex - this.pages + 1;
      }
 
      this.refreshItems();
   }
    setPage(index : number){
         this.currentIndex = index;
         this.refreshItems();
    }
 
}
