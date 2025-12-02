import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, firstValueFrom, map, Observable, of } from 'rxjs';
import users from './users.json'
import { Router } from '@angular/router';

interface User {
  username: string;
  password: string;
  role: string;
}

interface LoginResponseDto{
  token: string;
  tokenType: string
}


interface StoreUserData {
  username: string,
  role?: string,
  token: string
}

@Injectable({
  providedIn: 'root'
})




export class AuthService {
  private apiUrl = 'http://localhost:4100/api/auth/login'
  private readonly storageKey = 'user';
  getUsername() {
    return JSON.parse(localStorage.getItem('user') || "{}").username || '';
  }
  private users: User[] = users;


  constructor(private http: HttpClient, private router: Router) {}

// Add this helper method to AuthService
private decodeToken(token: string): any {
  try {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  } catch (error) {
    console.error('Error decoding token', error);
    return null;
  }
}

  async login(username: string, password: string): Promise<boolean>{
    try{
      const res = await firstValueFrom(
        this.http.post<LoginResponseDto>(`${this.apiUrl}`, {username, password})
      )

      const fullToken = `${res.tokenType} ${res.token}`

      const stored: StoreUserData = {
        username: username.toLocaleLowerCase(),
        token: fullToken,
        role: 'teacher'
      }

      localStorage.setItem(this.storageKey, JSON.stringify(stored))
    
      return true;
      
    } catch (error) {
      console.error("login fehlgeschlagen", error)
      return false
    }
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
