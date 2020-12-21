import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})


export class OverviewService {
  private allUsersUrl =`${environment.apiUrl}/users`
  
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };
  
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.allUsersUrl)
  }
}
