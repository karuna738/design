import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuard } from "../auth/auth.guard";
import { ContactUsComponent } from "./contact-us/contact-us/contact-us.component";

export const routes_pages: Routes =[
    {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: 'dashboard',
            component: DashboardComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'contact-us',
            component: ContactUsComponent,
            canActivate: [AuthGuard]
          },
        
          {
            path: 'html-css',
            loadChildren:() => import('./cards/cards.routes').then(m  => m.routes_hc),
            canActivate: [AuthGuard]
          },
          {
            path: 'forms',
            loadChildren:() => import('./forms/forms.routes').then(m  => m.routes_f),
            canActivate: [AuthGuard]
          }
        ],
      },
]