import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../../Interfaces/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private readonly baseUrl = 'http://localhost:4100/api/users';

  constructor(private http: HttpClient) {}

  getStudentsByRole(roleId: number): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/role/${roleId}`);
  }
}
