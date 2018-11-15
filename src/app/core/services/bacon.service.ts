import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaconService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Aw, Snap!\n' + error.error.message);
    } else {
      console.error(
        `Error code ${error.status}:` +
        `${error.error}`
      );
    }

    return throwError('Something went wrong; please try again later.');
  }

  getAllBacon() {
    //
  }

  fatSecret() {
    //
  }

  chuckNorris() {
    //
  }
}
