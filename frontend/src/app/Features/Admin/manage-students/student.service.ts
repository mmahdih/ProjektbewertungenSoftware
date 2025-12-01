import { HttpClient } from '@angular/common/http';
import { AddUser, User } from '../../../Interfaces/user.interface';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:4100/api/users/role/2';

  constructor(private http: HttpClient) {}

  getStudent(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  createStudent(dto: AddUser): Observable<User> {
    return this.http.post<User>(this.apiUrl, dto)
  }
}