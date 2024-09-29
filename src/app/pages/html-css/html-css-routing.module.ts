import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task1Component } from './task-1/task-1.component';

const routes: Routes = [
  {
    path: '',
    component: Task1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HtmlCssRoutingModule { }
