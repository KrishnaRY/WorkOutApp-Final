import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {User} from '../_model/user';
import { ServiceUrlProviderService } from '../serviceurlprovider.service';
@Injectable()
export class RegisterService {

  constructor(private _http: Http,private serviceUrlProviderService:ServiceUrlProviderService) { }

 registerUser(user: User) {

    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this._http.post(this.serviceUrlProviderService.getCompleteServiceUrl("registerUser"), user, options)
       .map(success => success.status)
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
               console.log(err);
               let status = `${err.status}`;
               if(status=='403'){
                errorMessage='Invalid User Name / Password';
               }
           
        }
        console.log("errorMessage===>"+errorMessage);
       return Observable.throw(errorMessage);
    }
 

}
