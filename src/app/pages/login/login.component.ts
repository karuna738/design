import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  router = inject(Router);
  ngOnInit() {
  }
  onLogin() {
    console.log('login');
    this.router.navigateByUrl('dashboard');
  }

}
