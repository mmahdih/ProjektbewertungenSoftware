import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, AddUser } from '../../../Interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private apiUrl = 'http://localhost:4100/api/users/role/1';

  constructor(private http: HttpClient) {}

  getTeachers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  createTeacher(dto: AddUser): Observable<User> {
    return this.http.post<User>(this.apiUrl, dto);
  }
}
