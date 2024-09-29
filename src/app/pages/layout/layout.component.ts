import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogOutModalComponent } from '../../popUp/log-out-modal/log-out-modal.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  router = inject(Router);
  constructor(
    private authService: AuthService,
    private modalService: NgbModal
  ) {}

  onLogOff() {
    const modalRef = this.modalService.open(LogOutModalComponent);
    modalRef.componentInstance.data = {
      confirmation: '𝓓𝓸 𝔂𝓸𝓾 𝔀𝓪𝓷𝓽 𝓽𝓸 𝓵𝓸𝓰 𝓸𝓾𝓽?',
    };
    modalRef.result.then((result) => {
      if (result === 'Yes') {
        this.authService.logout();
        this.router.navigate(['/login']);
      } else {
        // No button was clicked
      }
    });
  }
}
