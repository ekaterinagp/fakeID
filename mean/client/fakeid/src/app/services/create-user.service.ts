import { Injectable } from '@angular/core';
import { Observable, of, Subscribable, Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, first, map, take, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CreateUserService {
  public usersUrl = `${environment.apiUrl}/users`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(public http: HttpClient) {}

  addUser(user: User) {
    console.log(user);
    return this.http
      .post<User>(this.usersUrl, user, this.httpOptions)
      .pipe(first())
      .subscribe((data) => {
        console.log(data);
      });
  }

  /**
   * Handle Http operation that failed.

   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  public log(message: string) {
    console.log(message);
  }
}
