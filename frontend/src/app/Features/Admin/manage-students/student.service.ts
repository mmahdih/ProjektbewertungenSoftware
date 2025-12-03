import { HttpClient } from '@angular/common/http';
import { AddUser, UpdateUser, User } from '../../../Interfaces/user.interface';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

interface ResetPasswordResponseDto {
  temporaryPassword: string;
}

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiUrl = 'http://localhost:4100/api/users';

  constructor(private http: HttpClient) {}

  getStudent(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/role/2`);
  }

  createStudent(dto: AddUser): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/role/2`, dto);
  }
  deleteStudent(dto: User): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${dto.id}`);
  }

  updateStudent(dto: UpdateUser): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${dto.id}`, dto);
  }

  resetPassword(userId: string): Observable<ResetPasswordResponseDto> {
    return this.http.post<ResetPasswordResponseDto>(`${this.apiUrl}/${userId}/reset-password`, {});
  }
}
