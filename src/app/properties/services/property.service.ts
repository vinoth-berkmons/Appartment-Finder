import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';

import { map, catchError, shareReplay } from 'rxjs/operators';

import { PropertyModel } from './../models/property.model';
import { env_params, httpOptions } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) {

   }

   propertyList$ = this.http.get<PropertyModel>(env_params.apiEndPoint, httpOptions).pipe(map(result => {
        console.log(result);
        return result['data'];
      }),
      shareReplay(1),
        catchError(this.handleError)
      );

    /*
   * Handle Http operation that failed.
   * Let the app continue.
   *
 * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleError(error: HttpErrorResponse) {
		console.log('Service : handleError called ', error);
		let message = 'Something bad happened :( Please try again later.';
		if (error.error instanceof ErrorEvent) {
		  // A client-side or network error occurred. Handle it accordingly.
		  console.error('An error occurred:', error.error.message);
		} else if (error.error.errorMessage) {
			console.error('An HTTP error occurred:', error.error);
			message = error.error.errorMessage;
		} else {
		  // The backend returned an unsuccessful response code.
		  // The response body may contain clues as to what went wrong,
		  console.error(
			`Backend returned code ${error.status}, ` +
      `body was: ${error.error.message}`);
		}
		// return an observable with a user-facing error message
		return throwError(message);
	  }

}
