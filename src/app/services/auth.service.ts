import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(email: string, password: string): boolean {
    localStorage.setItem('email', email);
    return true;
  }

  getLoggedInEmail(): string | null {
    return localStorage.getItem('email');
  }

  logout(): void {
    localStorage.removeItem('email');
  }
}
