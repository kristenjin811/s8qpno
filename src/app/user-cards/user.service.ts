import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { User } from 'src/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "https://randomuser.me/api/"

  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<{results: User[]}> {
    return this.http.get<{results: User[]}>(this.url)
  }
}
