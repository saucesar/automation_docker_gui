import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventService } from 'src/app/services/event.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(
    private http: HttpClient,
    private eventService: EventService
  )
  {}

  login(email: string, password: string): boolean {
      const user = {
        name: 'Admin',
        email: email,
      }
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('token', 'any_token_here')

      this.eventService.loginEvent.emit()
      return true
  }

  logout() {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    this.eventService.logoutEvent.emit()
  }

  get isLoggedIn(): boolean {
    return this.getCurrentUser() != null;
  }

  getCurrentUser(): any {
    const json_string = localStorage.getItem('user')
    return json_string != null ? JSON.parse(json_string) : null
  }

  getToken(): string {
    const token = localStorage.getItem('token');
    return token != null ? token : ''
  }
}
