import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, AddUser } from '../../../Interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:4100/api/users/role/3';

  constructor(private http: HttpClient) {}

  getAdmins(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  createAdmin(dto: AddUser): Observable<User> {
    return this.http.post<User>(this.apiUrl, dto)
  }
}