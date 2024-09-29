import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-log-out-modal',
  standalone: true,
  imports: [],
  templateUrl: './log-out-modal.component.html',
  styleUrl: './log-out-modal.component.scss'
})
export class LogOutModalComponent {
  data: any;
  constructor(public activeModal: NgbActiveModal) {
  }

}
