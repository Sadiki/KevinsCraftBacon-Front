import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '../models/User';
import { Order } from '../models/Order';

import { CreditCard } from '../models/CreditCard';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

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

  login(user: User): Observable<User> {
    return this.http.post<User>(environment.url + 'customer/login', user, httpOptions)
    .pipe(catchError(this.handleError));
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(environment.url + 'customer/register', user, httpOptions)
    .pipe(catchError(this.handleError));
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.url +'customer').pipe(catchError(this.handleError));
  }

  updateUser(user: User): Observable<User>{
    return this.http.put<User>(environment.url + 'customer/update', user, httpOptions).pipe(catchError(this.handleError));
  }

  AddNewCard(card: CreditCard ): Observable<User>{
    return this.http.post<User>(environment.url + 'creditcard/add', card, httpOptions).pipe(catchError(this.handleError));
  }

  updateCard(card: CreditCard ): Observable<User>{
    return this.http.post<User>(environment.url + 'creditcard/update', card, httpOptions).pipe(catchError(this.handleError));
  }

  getAllPastOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(environment.url + '').pipe(catchError(this.handleError));
  }
}
