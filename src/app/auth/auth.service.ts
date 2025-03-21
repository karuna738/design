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

  login(data:any): boolean {
    const user = this.users.find(u => u.username === data.username && u.password === data.password);
    if (user) {
      sessionStorage.setItem('token', 'logged-in');
      this.toastr.success('Successfully!', 'Login');
      return true;
    }
    this.toastr.warning(' is Worng', 'User Name or Possword');
    return false;
  }

  logout(): void {
    sessionStorage.removeItem('token');
    this.toastr.success('Successfully!', 'Logout');
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('token');
  }
}