import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PagesRoutingModule } from './pages/pages.routing';
import { DashboardRoutingModule } from './dashboard/dashboard.routing'
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  
  // path "/" PagesRoutingModule
  // path "/dashboard" DashboardRoutingModule

  { path: "login", component: LoginComponent },

  { path: "**", pathMatch: "full", redirectTo:"/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            PagesRoutingModule,
            DashboardRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
