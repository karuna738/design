import { Component } from '@angular/core';
import { sheredModule } from '../../../common/sheredModule';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [...sheredModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
constructor(private translate: TranslateService){
  
}
}
