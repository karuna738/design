import { Component, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogOutModalComponent } from '../../popUp/log-out-modal/log-out-modal.component';
import { MyProfileComponent } from '../../popUp/my-profile/my-profile.component';
import { ChangePasswordComponent } from '../../popUp/change-password/change-password.component';
import { sheredModule } from '../../common/sheredModule';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [...sheredModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  router = inject(Router);
  public showHide: boolean = false;
  public showFlags: boolean = false;
  public language : any = 'en';
  @ViewChild('dropdownRef') dropdownRef!: ElementRef;
  constructor(
    private authService: AuthService,
    private modalService: NgbModal,
    private translate: TranslateService
  ) {
    this.language = sessionStorage.getItem('lang') ?? 'en';
    this.translate.use(this.language);
  }

  onChangeLag(val:any){
    this.language = val;
    this.translate.use(val);
    sessionStorage.setItem('lang', this.language);
  }

  onLogOff() {
    const modalRef = this.modalService.open(LogOutModalComponent);
    modalRef.componentInstance.data = {
      confirmation: 'DoWLog',
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
  onMyProfile(){
    const modalRef = this.modalService.open(MyProfileComponent);
    modalRef.componentInstance.data = {
      confirmation: '𝓓𝓸 𝔂𝓸𝓾 �'
    };
    modalRef.result.then((result) => {
      if (result === 'Yes') {
        // result action
      } else {
        // No button was clicked
      }
    });
  }
  onChangePassword(){
    const modalRef = this.modalService.open(ChangePasswordComponent);
    modalRef.componentInstance.data = {
      confirmation: ''
    };
    modalRef.result.then((result) => {
      if (result === 'Yes') {
        // result action
      } else {
        // No button was clicked
      }
    });
  }
  toggleDropdown(val:any){
    if(val == 'showFlags'){
      this.showHide = false;
      this.showFlags = true;
    }else{
      this.showHide = true;
      this.showFlags = false;
    }
  }
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if ((this.showHide || this.showFlags) && this.dropdownRef && !this.dropdownRef.nativeElement.contains(event.target)) {
      this.showHide = false;
      this.showFlags = false;
    }
  }

}

