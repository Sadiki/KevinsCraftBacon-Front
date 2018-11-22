import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Bacon } from '../models/Bacon';
import { ChuckNorris } from '../models/ChuckNorris';
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
        `Error code ${error.status}:
${error.error}`
      );
    }

    return throwError('Something went wrong; please try again later.');
  }

  getAllBacon(): Observable<Bacon[]> {
    return this.http.get<Bacon[]>(environment.url + 'inventory').pipe(catchError(this.handleError));
  }

  getOneBacon(id: number): Observable<Bacon> {
    return this.http.get<Bacon>(environment.url + `inventory/${id}`).pipe(catchError(this.handleError));
  }

  fatSecret() {
    //
  }

  chuckNorris() {
    return this.http.get<ChuckNorris>('https://api.chucknorris.io/jokes/random');
  }
}
