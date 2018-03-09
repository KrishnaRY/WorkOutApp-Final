import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Workout } from '../_model/workout';
import { ServiceUrlProviderService } from '../serviceurlprovider.service';
@Injectable()
export class WorkoutService {

  constructor(private _http: Http,private serviceUrlProviderService:ServiceUrlProviderService) { }
  createWorkout(workout: Workout) {

    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this._http.post(this.serviceUrlProviderService.getCompleteServiceUrl("createWorkout"), workout, options)
       .map(success => success.status)
      .catch(this.handleError);


  }


   getWorkouts(userId:number): Observable<Workout[]> {
        return this._http.get(this.serviceUrlProviderService.getCompleteServiceUrl("getWorkouts/")+userId)
            .map(this.extractData)
            .catch(this.handleError);
    }

  private handleError(err: Response | any) {
    let errorMessage = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `${err._body}`;
    }
    return Observable.throw(errorMessage);
  }

    private extractData(res: Response) {
	let body = res.json();
        return body;
    }
}
