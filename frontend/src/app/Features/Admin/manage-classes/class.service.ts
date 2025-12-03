import { HttpClient } from '@angular/common/http';
import { AddClass, Class } from '../../../Interfaces/class.interface';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  private apiUrl = 'http://localhost:4100/api/school-class/all';

  constructor(private http: HttpClient) {}

  getClass(): Observable<Class[]> {
    return this.http.get<Class[]>(this.apiUrl);
  }

  createClass(dto: AddClass): Observable<Class> {
    return this.http.post<Class>(this.apiUrl, dto);
  }

  updateQuestion(id: string, dto: AddClass): Observable<Class> {
    return this.http.put<Class>(`${this.apiUrl}/${id}`, dto);
  }
}