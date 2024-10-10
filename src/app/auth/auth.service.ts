import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private toastr: ToastrService){

  }
  private users = [
    { username: 'admin', password: '123' }
  ];

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem('token', 'logged-in');
      this.toastr.success('Successfully!', 'Login');

      return true;
    }
    this.toastr.warning(' is Worng', 'User Name or Possword');
    return false;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.toastr.success('Successfully!', 'Logout');
  }

  isAuthenticated(): boolean {
    // this.toastr.error('Error!', 'Authentication');
    return !!localStorage.getItem('token');
  }
}