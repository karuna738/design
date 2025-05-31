import { Component, effect, inject, signal } from '@angular/core';
import { sheredModule } from '../../common/sheredModule';
import { TranslateService } from '@ngx-translate/core';
import { CoreService } from '../../core/core.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [...sheredModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private translate: TranslateService, private coreService: CoreService){
   coreService.getUsers().subscribe(res => console.log(res));
  }

}
