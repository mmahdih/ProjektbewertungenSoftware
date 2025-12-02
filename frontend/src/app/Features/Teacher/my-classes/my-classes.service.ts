import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Class } from '../../../Interfaces/class.interface';
import { Observable } from 'rxjs';
import { AuthService } from '../../../core/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class MyClassService {
  private apiUrl = 'http://localhost:4100/api/school-class';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getClass(): Observable<Class[]> {
    const token = this.authService.getToken(); // holt den gespeicherten JWT aus localStorage

    console.log("token", token);
    return this.http.get<Class[]>(this.apiUrl, {
        headers: {
        Authorization: `Bearer ${token}` // Token wird an Backend geschickt
        }
    });
  }

  getAllClasses(): Observable<Class[]> {
    const token = this.authService.getToken(); // JWT aus localStorage
    return this.http.get<Class[]>(`${this.apiUrl}/all`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  assignTeacher(classId: number, teacherId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${classId}/assign-teacher/${teacherId}`, {});
  }
}
