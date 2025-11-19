import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import users from './users.json'
import { Router } from '@angular/router';

interface User {
  username: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getUsername() {
    return JSON.parse(localStorage.getItem('user') || "{}").username || '';
  }
  private users: User[] = users;


  constructor(private http: HttpClient, private router: Router) {}

  async login(username: string, password: string): Promise<boolean>  {
    const user = this.users.find(u => u.username === username.toLowerCase() && u.password === password);


    if (user) {
      localStorage.setItem('user', JSON.stringify({ username: user.username, role: user.role }));
      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['auth/login']);
  }

  getRole(): string {
    return JSON.parse(localStorage.getItem('user') || '{}').role || '';
  }

  isLoggedIn(): boolean {
  const token = localStorage.getItem('user');
  return token != null && token.trim() !== '';
}

}
