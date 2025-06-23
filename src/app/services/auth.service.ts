import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSignal = signal<{ username: string; role: string } | null>(null);

  user = this.userSignal.asReadonly();

  login(username: string, role: string) {
    this.userSignal.set({ username, role });
  }

  logout() {
    this.userSignal.set(null);
  }

  isLoggedIn() {
    return this.userSignal() !== null;
  }

  isAdmin() {
    return this.userSignal()?.role === 'admin';
  }
}
