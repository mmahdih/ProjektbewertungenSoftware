import { HttpClient } from '@angular/common/http';
import { AddUser, User } from '../../../Interfaces/user.interface';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

interface ResetPasswordResponseDto {
  temporaryPassword: string;
}

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiUrl = 'http://localhost:4100/api/users/role/2';

  private usersBaseUrl = 'http://localhost:4100/api/users';

  constructor(private http: HttpClient) {}

  getStudent(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  createStudent(dto: AddUser): Observable<User> {
    return this.http.post<User>(this.apiUrl, dto);
  }

  resetPassword(userId: string): Observable<ResetPasswordResponseDto> {
    return this.http.post<ResetPasswordResponseDto>(
      `${this.usersBaseUrl}/${userId}/reset-password`,
      {}
    );
  }
}
