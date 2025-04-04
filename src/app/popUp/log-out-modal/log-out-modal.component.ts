import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { sheredModule } from '../../common/sheredModule';

@Component({
  selector: 'app-log-out-modal',
  standalone: true,
  imports: [...sheredModule],
  templateUrl: './log-out-modal.component.html',
  styleUrl: './log-out-modal.component.scss'
})
export class LogOutModalComponent {
  data: any;
  constructor(public activeModal: NgbActiveModal, private translate: TranslateService) {
  }

}
