import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Class } from '../../../Interfaces/class.interface';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private baseUrl = 'http://localhost:4100/api/school-class';

  constructor(private http: HttpClient) {}

  // GET /api/school-class/all
  getClass(): Observable<Class[]> {
    return this.http.get<Class[]>(`${this.baseUrl}/all`);
  }

  // POST /api/school-class
  createClass(dto: { name: string }): Observable<Class> {
    return this.http.post<Class>(this.baseUrl, dto);
  }

  // PUT /api/school-class/{id}
  updateClass(id: string, dto: { name: string }): Observable<Class> {
    return this.http.put<Class>(`${this.baseUrl}/${id}`, dto);
  }
}
