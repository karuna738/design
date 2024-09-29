import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;
  public submited = false;

  router = inject(Router);
  constructor(private authService: AuthService, public fb: FormBuilder) {}
  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']); // redirect to dashboard if already authenticated
    }
    this.formInit();
  }
  formInit() {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onLogin() {
    this.submited =  true;

    if (this.myForm.invalid) {
      return;
    } else {
      const params: any = {
        username: this.myForm.value.username,
        password: this.myForm.value.password,
      };
      this.authService.login(params.username, params.password);
      this.router.navigate(['/dashboard']);
    }
  }
}
