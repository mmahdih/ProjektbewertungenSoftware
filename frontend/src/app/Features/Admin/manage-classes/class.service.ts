import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Class } from '../../../Interfaces/class.interface';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  private apiUrl = 'http://localhost:4100/api/school-class';

  constructor(private http: HttpClient) {}

  // GET /api/school-class/all
  getClass(): Observable<Class[]> {
    // <--- WICHTIG: Backticks benutzen, nicht "..."
    return this.http.get<Class[]>(`${this.apiUrl}/all`);
  }

  // POST /api/school-class  (Backend erwartet { name: string })
  createClass(dto: { name: string }): Observable<Class> {
    return this.http.post<Class>(this.apiUrl, dto);
  }

  // PUT /api/school-class/{id}  (Backend erwartet { name: string })
  updateClass(dto: { id: string; name: string }): Observable<Class> {
    return this.http.put<Class>(`${this.apiUrl}/${dto.id}`, dto);
  }

  // optional für später:
  deleteClass(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
