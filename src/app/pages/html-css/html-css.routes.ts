import { Routes } from "@angular/router";
import { Task1Component } from "./task-1/task-1.component";
import { Task2Component } from "./task-2/task-2.component";

export const routes_hc: Routes =[
    {
        path: '',
        redirectTo: 'task-1',
        pathMatch: 'full',
      },
    {
        path: 'task-1',
        component:Task1Component
    },
    {
        path: 'task-2',
        component: Task2Component
    }
]