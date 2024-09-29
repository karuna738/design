import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  router = inject(Router);
  constructor(private authService: AuthService) {}
  
  onLogOff(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
