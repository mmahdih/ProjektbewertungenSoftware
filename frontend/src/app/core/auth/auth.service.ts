import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  role: string = 'admin';

  login(username: string, password: string): boolean{
    if (username && password){
      localStorage.setItem('user', JSON.stringify({username, role: username === 'admin' ? 'admin' : 'teacher'}));
      return true;
    }
    return false;
  }


  logout(){
    localStorage.removeItem('user');
  }


  getRole(): string{
    return JSON.parse(localStorage.getItem('user') || '{}').role || '';
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
}
