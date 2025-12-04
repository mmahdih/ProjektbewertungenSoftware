import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, AddUser, UpdateUser } from '../../../Interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private apiUrl = 'http://localhost:4100/api/users';

  constructor(private http: HttpClient) {}

  getTeachers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/role/1`);
  }

  createTeacher(dto: AddUser): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/role/1`, dto);
  }

  updateTeacher(dto: UpdateUser): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${dto.id}`, dto);
  }
}
