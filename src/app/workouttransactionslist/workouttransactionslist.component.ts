import { Component, OnInit } from '@angular/core';
import { WorkoutTransaction } from '../_model/workouttransaction';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkouttransactionsService } from '../workouttransactions/workouttransactions.service';
import { Workout } from '../_model/workout';
import { AlertService } from '../_services/alert.service';
@Component({
  selector: 'app-workouttransactionslist',
  templateUrl: './workouttransactionslist.component.html',
  styleUrls: ['./workouttransactionslist.component.css']

})
export class WorkouttransactionsListComponent implements OnInit {
  workoutId: number;
  userId: number;
  title: string;
  pageTitle: string = 'Workout Transaction Details';
  workoutTransactions: WorkoutTransaction[] = [];
  pages: number = 4;
  pageSize: number = 5;
  pageNumber: number = 0;
  currentIndex: number = 1;
  pagesIndex: Array<number>;
  pageStart: number = 1;
  workoutTransactionsList: WorkoutTransaction[] = [];
  constructor(private router: Router, private route: ActivatedRoute,
    private workouttransactionsService: WorkouttransactionsService,
    private alertService: AlertService) { }

  ngOnInit() {

    const param = this.route.snapshot.paramMap.get('workoutId');
    this.workoutId = Number(param);
    this.getworkoutdetals();
    this.workouttransactionsService.getWorkouttrans(Number(param))
      .subscribe(workoutTransaction => {
        this.workoutTransactions = workoutTransaction;
        this.workoutTransactionsList = workoutTransaction;
        this.init();
      },
      error => {
        this.alertService.error(error);
      });
  }
  newWorkouttrans() {
    this.router.navigate(['/workouttrans', `${this.workoutId}`]);
  }
  getworkoutdetals() {
    this.workouttransactionsService.getWorkout(this.workoutId).subscribe(
      workout => {
        this.userId = workout.userId;
        this.title = workout.title;
      },
      error => {
        this.alertService.error(error);
      });
  }
  onBack() {
    this.router.navigate(['/workoutlist', `${this.userId}`]);
  }

  init() {

    this.currentIndex = 1;
    this.pageStart = 1;
    this.pages = 4;

    this.pageNumber = parseInt("" + (this.workoutTransactionsList.length / this.pageSize));
    if (this.workoutTransactionsList.length % this.pageSize != 0) {
      this.pageNumber++;
    }

    if (this.pageNumber < this.pages) {
      this.pages = this.pageNumber;
    }

    this.refreshItems();
    console.log("this.pageNumber :  " + this.pageNumber);
  }

  refreshItems() {
    this.workoutTransactions = this.workoutTransactionsList.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
    this.pagesIndex = this.fillArray();
  }
  fillArray(): any {
    var obj = new Array();
    for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
      obj.push(index);
    }
    return obj;
  }
  prevPage() {
    if (this.currentIndex > 1) {
      this.currentIndex--;
    }
    if (this.currentIndex < this.pageStart) {
      this.pageStart = this.currentIndex;
    }
    this.refreshItems();
  }
  nextPage() {
    if (this.currentIndex < this.pageNumber) {
      this.currentIndex++;
    }
    if (this.currentIndex >= (this.pageStart + this.pages)) {
      this.pageStart = this.currentIndex - this.pages + 1;
    }

    this.refreshItems();
  }
  setPage(index: number) {
    this.currentIndex = index;
    this.refreshItems();
  }


}
