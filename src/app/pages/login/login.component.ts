import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { sheredModule } from '../../common/sheredModule';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [...sheredModule],
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
      this.router.navigate(['/dashboard']); 
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
      this.authService.login(params);
      this.router.navigate(['/dashboard']);
    }
  }
}
