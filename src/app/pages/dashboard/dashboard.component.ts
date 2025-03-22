import { Component } from '@angular/core';
import { sheredModule } from '../../common/sheredModule';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [...sheredModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(){

  }

}
