import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";

import { User } from './../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class OverviewService {
  private allUsersUrl =`${environment.apiUrl}/users`

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User> {
    return this.http.get<User>(this.allUsersUrl).pipe(
      tap((res) => console.log(res)),
      catchError(this.handleError<User>("getAssembly"))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
