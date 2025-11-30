import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Teacher {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  avatarUrl: string;
  roleName: string;
}

export interface AddTeacher {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    role: number;
}

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private apiUrl = 'http://localhost:4100/api/user/teacher';

  constructor(private http: HttpClient) {}

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.apiUrl);
  }

  createTeacher(dto: AddTeacher): Observable<Teacher> {
    return this.http.post<Teacher>(this.apiUrl, dto)
  }
}