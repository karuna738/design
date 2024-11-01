import { Routes } from '@angular/router';
import { Form1Component } from './form-1/form-1.component';
import { Form2Component } from './form-2/form-2.component';

export const routes_f: Routes = [
  {
    path: '',
    redirectTo: 'task-1',
    pathMatch: 'full',
  },
  {
    path: 'form-1',
    component: Form1Component,
  },
  {
    path: 'form-2',
    component: Form2Component,
  },
];
