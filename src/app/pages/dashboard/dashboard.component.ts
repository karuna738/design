import { Component } from '@angular/core';
import { sheredModule } from '../../common/sheredModule';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [...sheredModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  private apiUrl = 'http://localhost:3000/users';
  constructor(private translate: TranslateService){
  }
  
}
