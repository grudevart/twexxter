import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http:HttpClient){}

  getUser() : Observable<User>  {
  return this.http.get<User>('http://localhost:3000/users/1');
}
}
