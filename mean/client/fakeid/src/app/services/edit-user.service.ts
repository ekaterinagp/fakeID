import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class EditUserService {
  public singlUserUrl = `${environment.apiUrl}/users`;
  public baseUrl = `${environment.apiUrl}/users`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(public http: HttpClient) {}

  /** GET user by id. Will 404 if id not found */
  getUser(id: string): Observable<User> {
    console.log('inside getUser service');
    const url = `${this.singlUserUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  getSpouses(id: string) {
    const url = `${this.baseUrl}/${id}/spouses`;
    console.log(id);
    return this.http.get<User[]>(url).pipe(
      tap((res) => console.log(res)),
      catchError(this.handleError<User[]>('getSpouses', []))
    );
  }

  getChildren(id: string) {
    const url = `${this.baseUrl}/${id}/children`;
    console.log(id);
    return this.http.get<User[]>(url).pipe(
      tap((res) => console.log(res)),
      catchError(this.handleError<User[]>('getChildren', []))
    );
  }

  updateUser(user: User) {
    console.log(user, 'from service');
    const url = `${this.baseUrl}/${user._id}`;
    return this.http.put(url, user, this.httpOptions).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  /**
   * Handle Http operation that failed.

   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
