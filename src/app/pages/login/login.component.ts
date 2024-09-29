import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  router = inject(Router);
  constructor(private authService: AuthService) {}
  username: string = '';
  password: string = '';
  ngOnInit() {
  }
  onLogin() {
    if (this.authService.login(this.username, this.password)) {
      // Redirect to protected route
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid username or password');
    }
  
  }

}
