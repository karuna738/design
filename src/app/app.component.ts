import { Component } from '@angular/core';
import { sheredModule } from './common/sheredModule';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...sheredModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'design';
}
