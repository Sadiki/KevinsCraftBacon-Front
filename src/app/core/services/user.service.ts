import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '../models/User';
import { Order } from '../models/Order';

import { CreditCard } from '../models/CreditCard';
import { environment } from '../../../environments/environment';
import { OrderItem } from '../models/OrderItem';

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
        `Error code ${error.status}:
${error.error}`
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
    let users : Observable<User>  = this.http.put<User>(environment.url + 'customer/update', user, httpOptions).pipe(catchError(this.handleError));
    console.log(users);
    return users
  }

  getAllPaymentOpts(): Observable<CreditCard[]> {
    return this.http.get<CreditCard[]>(environment.url + 'creditcard').pipe(catchError(this.handleError));
  }
  
  addNewCard(card: CreditCard ): Observable<CreditCard>{
    return this.http.post<CreditCard>(environment.url + 'creditcard/add', card, httpOptions).pipe(catchError(this.handleError));
  }

  updateCard(card: CreditCard ): Observable<CreditCard>{
    return this.http.put<CreditCard>(environment.url + 'creditcard/update', card, httpOptions).pipe(catchError(this.handleError));
  }

  deleteCard(card: CreditCard): Observable<CreditCard>{
    return this.http.put<CreditCard>(environment.url + 'creditcard/delete', card, httpOptions).pipe(catchError(this.handleError));
  }

  getAllPastOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(environment.url + '/profile/orders').pipe(catchError(this.handleError));
  }

  getWishList(user: User): Observable<OrderItem[]>{
    return this.http.post<OrderItem[]>(environment.url + '/profile/wishlist', user, httpOptions ).pipe(catchError(this.handleError));
  }
}

@Injectable({
  providedIn: 'root'
})
export class LoggedInService {
  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
